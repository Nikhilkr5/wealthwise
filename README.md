# 💰 WealthWise - Full-Stack Personal Finance Dashboard

WealthWise is a modern, high-performance financial tracking application designed to help users manage their transactions, budgets, and accounts with ease. Built with a focus on security, scalability, and real-time data visualization.

## 🚀 Live Demo
**Check out the live app:** [https://wealthwise-seven-psi.vercel.app](https://wealthwise-seven-psi.vercel.app)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** Clerk
- **Styling:** Tailwind CSS & Shadcn/UI
- **Security:** Arcjet (Rate Limiting & Bot Protection)
- **Background Tasks:** Inngest
- **AI Integration:** Groq AI (for financial insights)

---

## 🧨 Technical Challenges & Solutions (The "No-Reject" Section)

During the development of WealthWise, I encountered and solved several production-level challenges that go beyond standard tutorials:

### 1. Database Connection Pooling (Vercel + Supabase)
**Problem:** Encountered `prepared statement "s2" does not exist` errors when deploying serverless functions, caused by Prisma trying to use prepared statements with Supabase's transaction pooler.
**Solution:** Migrated the connection to the **Supabase Transaction Pooler (Port 6543)** and updated the `DATABASE_URL` with `?pgbouncer=true` and `&connection_limit=1`. This allowed the app to handle high concurrency in a serverless environment without exhausting database connections.

### 2. Secure Middleware Architecture
**Problem:** Implementing multi-layered security (Auth + Rate Limiting) without compromising performance.
**Solution:** Integrated **Arcjet** alongside **Clerk Middleware**. This setup ensures that only authenticated users can access the dashboard while simultaneously protecting API routes from malicious bots and brute-force attacks.

---

## ✨ Features

- **Interactive Dashboard:** Real-time charts for income vs. expense tracking using Recharts.
- **Transaction Management:** Easily add, edit, and categorize expenses with instant UI updates.
- **Budgeting System:** Set monthly limits and get visual progress alerts.
- **AI Insights:** Automated financial advice based on spending patterns using Groq AI.
- **Multi-Account Support:** Manage different wallets and bank accounts in one place.

---

## 🛠️ Local Setup

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Nikhilkr5/wealthwise.git](https://github.com/Nikhilkr5/wealthwise.git)
   
2. Install dependencies:
      npm install
   
4. Set up environment variables: Create a .env file in the root directory and add your keys:
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
      CLERK_SECRET_KEY
      DATABASE_URL (with ?pgbouncer=true)
      ARCJET_KEY
      GROQ_API_KEY
   
5. Push the database schema:
      npx prisma db push
   
7. Run the development server:
      npm run dev

