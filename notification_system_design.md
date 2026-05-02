# 🚗 Notification System Design

## 1. Overview
This system schedules vehicle maintenance tasks for multiple depots by maximizing total impact within available mechanic hours.

It uses:
- Backend API
- Dynamic Programming (0/1 Knapsack)
- Logging Middleware

---

## 2. Architecture

### Frontend (React)
- Fetches data from backend API (`/schedule`)
- Displays depot-wise optimized results

### Backend (Node.js + Express)
- Handles API requests
- Fetches depot and vehicle data
- Applies optimization logic
- Returns structured response

### External APIs
- `/depots` → Provides depot capacity (mechanic hours)
- `/vehicles` → Provides vehicle tasks (duration & impact)

### Logging Middleware
- Logs backend events using external logging API

---

## 3. API Design

### GET `/schedule`

**Description:**  
Returns optimized vehicle selection for each depot.

**Response Format:**

```json
[
  {
    "depotId": 1,
    "totalImpact": 120,
    "selectedVehicles": ["id1", "id2"]
  }
]

4. Core Algorithm
0/1 Knapsack Problem
Each vehicle = Item
Duration = Weight
Impact = Value
Capacity = Available mechanic hours
Goal

Maximize total impact without exceeding capacity.

Approach
Dynamic Programming
Time Complexity: O(n × capacity)
5. Data Flow
Client sends request to /schedule
Backend fetches:
Depot data
Vehicle data
For each depot:
Apply Knapsack algorithm
Return optimized result to frontend
6. Error Handling
Handles API failures using fallback mechanism
Returns proper error responses
Prevents system crashes
7. Logging

Centralized logging using middleware.

Logs include:
API calls
Processing steps
Errors
8. Scalability
Independent processing per depot
Stateless backend
Supports horizontal scaling
9. Performance Optimization
Efficient DP algorithm
Single fetch per request
Extendable with caching (e.g., Redis)
10. Assumptions
Each vehicle task is executed once
Depot capacity is fixed per request
External APIs return valid structured data
11. Notes
External evaluation APIs require a valid session token
The system was fully tested during the active evaluation session
Fallback logic ensures functionality after session expiration
🚀 Deployment Steps
git add .
git commit -m "final system design"
git push
