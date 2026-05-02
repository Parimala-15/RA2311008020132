# 🚗 Vehicle Maintenance Optimization System

## 📌 Overview

This project is a **full-stack system** that schedules vehicle maintenance tasks across multiple depots by maximizing total impact within limited mechanic hours.

It uses the **0/1 Knapsack Algorithm (Dynamic Programming)** to compute the most optimal set of vehicles for maintenance.

---

## 🚀 Features

* ✅ Depot-wise vehicle optimization
* ✅ Dynamic Programming (Knapsack) implementation
* ✅ REST API with Express.js
* ✅ Logging middleware integration
* ✅ React frontend for visualization
* ✅ Error handling & fallback support

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js
* Axios
* Dotenv

### Frontend

* React.js

### Algorithm

* 0/1 Knapsack (Dynamic Programming)

---

## 📂 Project Structure

```
RA2311008020132/
│
├── notification_app_be/        # Backend (Node.js)
│   ├── app.js
│
├── logging_middleware/         # Logging system
│   ├── logger.js
│
├── vehicle_maintenance_scheduler/
│   ├── knapsack.js             # Core algorithm
│
├── notification_app_fe/        # Frontend (React)
│
├── system_design.md            # System design document
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/Parimala-15/RA2311008020132.git
cd RA2311008020132
```

---

### 2️⃣ Backend Setup

```
cd notification_app_be
npm install
```

Create `.env` file in root:

```
ACCESS_TOKEN=your_token_here
```

Run backend:

```
node app.js
```

---

### 3️⃣ Frontend Setup

```
cd notification_app_fe
npm install
npm start
```

---

## 🔌 API Endpoint

### GET `/schedule`

Returns optimized vehicle selection for each depot.

### Sample Response:

```json
[
  {
    "depotId": 1,
    "totalImpact": 137,
    "selectedVehicles": ["vehicle-id-1", "vehicle-id-2"]
  }
]
```

---

## 🧠 Algorithm Explanation

This system uses the **0/1 Knapsack Problem**:

* Vehicle → Item
* Duration → Weight
* Impact → Value
* Depot Capacity → Knapsack Capacity

### Goal:

Maximize total impact without exceeding mechanic hours.

### Complexity:

```
O(n × capacity)
```

---

## 🔄 Data Flow

1. Client sends request to `/schedule`
2. Backend fetches depot & vehicle data
3. Knapsack algorithm is applied per depot
4. Optimized result returned to frontend

---

## 📊 Logging

* Centralized logging middleware
* Logs:

  * API calls
  * Processing events
  * Errors

---

## ⚠️ Notes

* External APIs require valid authentication token
* Token expires after session ends
* Fallback handling ensures system stability

---

## 📸 Screenshots

*Add your screenshots here (frontend + Thunder Client responses)*

---

## 👩‍💻 Author

**Parimala Dharshini M**
B.Tech Information Technology
SRM Institute of Science and Technology

---

## ✅ Status

✔ Backend Completed
✔ Frontend Completed
✔ System Design Document Added
✔ GitHub Deployment Done

---

## ⭐ Future Improvements

* Add caching (Redis)
* Improve UI/UX
* Add authentication layer
* Optimize large-scale performance

---
