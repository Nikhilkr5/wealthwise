import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

// Updated Metadata for Professional Branding
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

          {/* Professional Footer Branding */}
          <footer className="bg-blue-50 py-12 border-t">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© 2026 WealthWise. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Developed by <span className="font-semibold text-blue-600">Nikhil Kumar Thakur</span>
              </p>
              <p className="text-xs mt-1">B.Tech Computer Science & Engineering | 2026 Batch</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}