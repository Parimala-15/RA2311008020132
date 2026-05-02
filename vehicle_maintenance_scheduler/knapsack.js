function solveKnapsack(vehicles, capacity) {
  if (!Array.isArray(vehicles) || capacity <= 0) {
    return { totalImpact: 0, selectedVehicles: [] };
  }

  const n = vehicles.length;

  // DP table
  const dp = Array.from({ length: n + 1 }, () =>
    Array(capacity + 1).fill(0)
  );

  // Build table
  for (let i = 1; i <= n; i++) {
    const { duration, impact } = vehicles[i - 1];

    for (let w = 0; w <= capacity; w++) {
      // Not taking current vehicle
      dp[i][w] = dp[i - 1][w];

      // Taking current vehicle (if fits)
      if (duration <= w) {
        const includeImpact = dp[i - 1][w - duration] + impact;
        dp[i][w] = Math.max(dp[i][w], includeImpact);
      }
    }
  }

  // Backtrack to find selected vehicles
  let w = capacity;
  const selectedVehicles = [];

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      const { id, duration } = vehicles[i - 1];
      selectedVehicles.push(id);
      w -= duration;
    }
  }

  return {
    totalImpact: dp[n][capacity],
    selectedVehicles: selectedVehicles.reverse()
  };
}

module.exports = solveKnapsack;