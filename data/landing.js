import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "Type Safe",
    label: "TypeScript Architecture",
  },
  {
    value: "AI-Driven",
    label: "Groq AI Integration",
  },
  {
    value: "Secure",
    label: "Arcjet Protection",
  },
  {
    value: "Optimized",
    label: "Next.js 15 Performance",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Arjun Mehta",
    role: "Financial Analyst",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "WealthWise has completely changed how I track capital flows. The AI-driven insights helped me identify portfolio optimizations that saved me significant overhead last quarter.",
  },
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "I was impressed by the system's reliability. The real-time categorization is seamless, and knowing the architecture is type-safe gives me great confidence in the data integrity.",
  },
  {
    name: "Vikram Malhotra",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "The smart receipt scanning is a game-changer for expense reports. It's rare to see an AI implementation this fast and accurate in a personal finance tool.",
  },
];