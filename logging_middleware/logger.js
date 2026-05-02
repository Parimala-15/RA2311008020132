const axios = require("axios");

// 🔥 FIX: explicitly load .env from root
require("dotenv").config({ path: "../.env" });

const VALID_STACKS = ["backend", "frontend"];
const VALID_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const VALID_PACKAGES = [
  "cache", "controller", "cron_job", "db", "domain",
  "handler", "repository", "route", "service",
  "api", "component", "hook", "page", "state", "style",
  "auth", "config", "middleware", "utils"
];

async function Log(stack, level, pkg, message) {
  try {
    // ✅ validation
    if (!VALID_STACKS.includes(stack)) return;
    if (!VALID_LEVELS.includes(level)) return;
    if (!VALID_PACKAGES.includes(pkg)) return;

    // 🔥 EXTRA SAFETY (prevents silent failure)
    if (!process.env.ACCESS_TOKEN) return;

    await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {
    // ❌ no console.log (as per rules)
  }
}

module.exports = Log;