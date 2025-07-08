# 📊 BSE Sensex Application

A full-stack **MEAN** (MongoDB, Express.js, Angular, Node.js) web application to manage and visualize **BSE Sensex 50 stock data**.

This application includes:

- 🔐 **JWT-based authentication**
- 📈 **Monthly bar chart visualization**
- ➕ **Add stock entries via modal form**
- 🔁 **Real-time updates of entry addition using Socket.IO**
- 🧪 **Login module unit and E2E testing coverage**

---

## 📚 Table of Contents

- [📌 Prerequisites](#-prerequisites)
- [🌐 Port Overview](#-port-overview)
- [📁 Project Structure](#-project-structure)
- [⚙️ Backend Setup (Express + MongoDB)](#️-backend-setup-express--mongodb)
- [💻 Frontend Setup (Angular)](#-frontend-setup-angular)
- [🔐 Authentication](#-authentication)
- [✨ Features](#-features)
- [📊 Data Visualization](#-data-visualization)
- [🧪 Testing](#-testing)
  - [🧪 Backend (Jest + Supertest)](#-backend-jest--supertest)
  - [🧪 Frontend (Jasmine + Karma)](#-frontend-jasmine--karma)
  - [🎭 E2E Tests (Playwright)](#-e2e-tests-playwright)
- [🧰 Tech Stack](#-tech-stack)
- [🧾 .gitignore](#-gitignore)
- [🔐 Sample Login](#-sample-login)
---

## 📌 Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Playwright](https://playwright.dev/) (optional, for E2E tests)

---

## 🌐 Port Overview

| Service              | Port  |
|----------------------|--------|
| Angular Frontend     | `4200` |
| Express Backend API  | `3000` |
| MongoDB              | `27017`|


---

## 📁 Project Structure

```

sensex-app/
├── backend/                     # Node.js + Express API
│   ├── assets/                  # Sample CSV data file
│   ├── components/              # Feature modules and middleware
│   ├── db/                      # MongoDB connection config
│   ├── models/                  # Mongoose schemas
│   ├── scripts/                 # CSV and user seed scripts
│   ├── tests/                   # Jest-based unit tests for login
│   ├── .env                     # Environment variables
│   ├── app.js                   # Server entry point
│   ├── routes.js                # API route setup
│   └── package.json             # Backend dependencies
│
├── frontend/                    # Angular frontend app
│   ├── e2e/                     # Playwright end-to-end login test
│   ├── src/                     # Angular source code
│   │   ├── app/                 # Angular components, services, interceptors
│   │   │   ├── components/      # Feature components like home,login
│   │   │   └── ...              # Other app modules (services,interceptors)
│   ├── angular.json             # Angular CLI configuration
│   ├── package.json             # Frontend dependencies config
│   └── playwright.config.ts     # Playwright E2E test configuration file
│
├── .gitignore                   # Files ignored by Git
├── README.md                    # Project documentation


````

---

## ⚙️ Backend Setup (Express + MongoDB)

### 1. Navigate to the backend directory

```
cd backend
````

### 2. Install dependencies

```
npm install
```

### 3. Configure `.env`

Create a `.env` file:

```
PORT=3000
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/sensex
```

### 4. Start the backend server

```
node app.js
```

* Runs at: [http://localhost:3000](http://localhost:3000)

---

## 💻 Frontend Setup (Angular)

### 1. Navigate to the frontend directory

```
cd ../frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run Angular dev server

```
ng serve
```

Open in browser: [http://localhost:4200](http://localhost:4200)

---

## 🔐 Authentication

* JWT-based login (handled via Angular + Express)
* Token stored in `localStorage` and attached via interceptor
* Backend validates JWT on protected routes
- 🔒 **Auto Logout on Token Expiration**:
  - When the JWT token expires, the frontend detects this on any API call.
  - The user is automatically logged out and redirected to the login page.

---

## ✨ Features

* ✅ Login & JWT-based authentication
* 📄 Display of BSE Sensex 50 stock data 
* 📈 Monthly average closing bar chart 
* ➕ Add new stock entries via modal
* 🔁 Real-time updates of entry addition using Socket.IO
* 📚 Server-side pagination
* 🧪 Login module unit + e2e test coverage

---

## 📊 Data Visualization

* Powered by **Chart.js** via `ng2-charts`
* Monthly average **closing prices** grouped by month


---

## 🧪 Testing

### 🧪 Backend (Jest + Supertest)

```
cd backend
npm test
```

Covers:

* Auth route/controller/service
* Token logic
* Login failures

---

### 🧪 Frontend (Jasmine + Karma)

```
cd frontend
ng test
```

Tests:

* Login Component

---

### 🎭 E2E Tests (Playwright)

Install Playwright once:

```
npx playwright install
```

Run all e2e tests:

```
npx playwright test
```

E2E Scenarios:

* Successful login and redirect to `/home`
* Invalid credentials show error
* Frontend interaction with backend

---

## 🧰 Tech Stack
* **Frontend:** Angular 16, Chart.js, RxJS
* **Backend:** Node.js, Express, Mongoose, JWT
* **Database:** MongoDB
* **Testing:** Jest, Supertest, Jasmine, Karma, Playwright
* **Real-time:** Socket.IO
  
---

## 🧾 .gitignore

```

# Ignore all node_modules
**/node_modules/

# Ignore environment files
**/.env

```

---

## 🔐 Sample Login

```
Email: arnav@example.com
Password: pass123
```

Users are seeded automatically on first run via `/scripts/populateUsers.js`
