import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthWise | AI-Powered Finance Platform",
  description: "Enterprise-grade personal finance management with AI insights.",
  authors: [{ name: "Nikhil Kumar Thakur" }],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-12 border-t">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} WealthWise. All rights reserved.</p>
              <p className="mt-2">
                Built with <span className="font-medium text-gray-700">Next.js</span>, 
                <span className="font-medium text-gray-700"> Prisma</span> & 
                <span className="font-medium text-gray-700"> AI-powered insights</span>
              </p>
              <p className="mt-1 text-gray-400">
                Designed & Developed by <span className="font-semibold text-blue-600">Nikhil Kumar Thakur</span>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}