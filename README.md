# 💰 WealthWise - Personal Finance Dashboard

WealthWise is a personal finance application that helps users manage accounts, track transactions, set budgets, and view financial insights through an interactive dashboard.

## 🚀 Live Demo

**Check out the live app:**  
https://wealthwise-seven-psi.vercel.app

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** Clerk
- **Styling:** Tailwind CSS & Shadcn/UI
- **Security:** Arcjet
- **Background Tasks:** Inngest
- **AI Integration:** Groq AI
- **Charts:** Recharts

---

## ✨ Features

- **Interactive Dashboard:** Visualizes income and expenses using charts.
- **Transaction Management:** Add and manage financial transactions.
- **Account Management:** Manage multiple financial accounts.
- **Budgeting:** Set budgets and monitor spending progress.
- **AI Insights:** Generate financial insights using Groq AI.
- **Authentication:** Secure user authentication with Clerk.
- **Request Protection:** Uses Arcjet for request protection and rate limiting.

---

## 🧨 Technical Challenges & Solutions

### 1. Database Connection Configuration

**Problem:**  
While deploying the application, I encountered a PostgreSQL prepared-statement error:

`prepared statement "s2" does not exist`

**Cause:**  
The issue was related to Prisma's database connection configuration when using Supabase's transaction pooler in a serverless deployment.

**Solution:**  
I configured the Supabase Transaction Pooler on port `6543` and updated the database connection configuration using `pgbouncer=true` and `connection_limit=1`.

This resolved the database connection issue and helped make the configuration more suitable for the serverless deployment.

### 2. Authentication and Request Protection

**Problem:**  
The application needed both user authentication and protection against excessive or unwanted requests.

**Solution:**  
I integrated **Clerk** for authentication and **Arcjet** for request protection and rate limiting. These components work together as part of the application's security layer.

---

## 📁 Project Structure

```text
wealthwise/
├── actions/
├── app/
├── components/
├── hooks/
├── lib/
├── prisma/
├── public/
├── middleware.js
└── package.json
