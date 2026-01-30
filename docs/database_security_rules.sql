-- WealthWise Database Security Policies
-- Implemented: Jan 30, 2026
-- Author: Nikhil
-- Status: Production Ready (Zero-Trust Architecture)

-- 1. POLICY FOR ACCOUNTS TABLE
-- Solved Prisma/Postgres Type Mismatch using ::uuid casting
CREATE POLICY "Enable users to view their own data only"
ON "public"."accounts"
FOR SELECT
TO authenticated
USING ( (select auth.uid()) = "userId"::uuid );

-- 2. POLICY FOR BUDGETS TABLE
CREATE POLICY "Enable users to view their own data only"
ON "public"."budgets"
FOR SELECT
TO authenticated
USING ( (select auth.uid()) = "userId"::uuid );

-- 3. POLICY FOR TRANSACTIONS TABLE
CREATE POLICY "Enable users to view their own data only"
ON "public"."transactions"
FOR SELECT
TO authenticated
USING ( (select auth.uid()) = "userId"::uuid );

-- 4. POLICY FOR USERS TABLE (Identity Protection)
CREATE POLICY "Enable users to view their own data only"
ON "public"."users"
FOR SELECT
TO authenticated
USING ( (select auth.uid()) = id::uuid );

-- NOTE: RLS intentionally disabled on _prisma_migrations to allow CI/CD workflows.