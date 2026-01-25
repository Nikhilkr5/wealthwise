# WealthWise — AI-Powered Personal Finance Platform 💰

A comprehensive financial management dashboard built with **Next.js 15**, **Prisma**, and **Groq AI**.
WealthWise helps users track income & expenses, visualize spending trends, and receive AI-generated monthly financial insights.

## 🧠 Engineering & Architecture

This project was architected to solve latency and rate-limiting issues common in financial AI apps.
* **AI Inference Engine:** Migrated from Gemini to **Groq (Llama 3-70b)** to achieve <1s inference speeds and bypass standard API rate limits.
* **Database Reliability:** Uses **Prisma ORM** with connection pooling (via NeonDB) to handle high-concurrency transaction requests.
* **Security First:** Implemented **ArcJet** middleware for rate-limiting and bot protection.

## 🛠️ Tech Stack

* **Frontend:** Next.js 15 (App Router), Tailwind CSS, Shadcn UI
* **Backend:** Server Actions, Prisma ORM
* **Database:** PostgreSQL (Neon)
* **AI Engine:** Llama 3 via Groq SDK
* **Auth:** Clerk (Middleware protected)
* **Background Jobs:** Inngest (Cron jobs for monthly reporting)

## 🔧 Engineering Challenges Solved

1.  **Next.js 15 Async Params:** Refactored dynamic routes (`/account/[id]`) to utilize `await params`, resolving breaking changes in the latest Next.js 15 release.
2.  **AI Latency Optimization:** Built a fallback mechanism for the AI service to ensure the app generates insights even under high load.
3.  **Budget Logic:** Implemented custom "Danger Zone" logic that dynamically calculates budget usage and alerts users when spending exceeds 80%.

## 🚀 Getting Started

1.  Clone the repository
2.  Install dependencies: `npm install`
3.  Set up environment variables (`GROQ_API_KEY`, `DATABASE_URL`)
4.  Run the development server: `npm run dev`

---
*Built by Nikhil*