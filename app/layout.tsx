import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Guidance Hub",
  description: "CareerBot is your AI-powered career coach, here to guide you through every step of your journey. Get personalized advice, explore career options, and develop the skills you need to land your dream job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#fffg] w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
