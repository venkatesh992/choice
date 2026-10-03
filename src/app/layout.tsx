import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choice Web Solutions | Enterprise Web & Mobile Engineering",
  description: "Modern Web Applications, Cloud Platforms & Mobile Systems. Bridging the gap between business objectives and clean, maintainable engineering.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] relative isolate">
        {/* Background Pattern: Point 1 - Subtle Engineering Micro-Grid & Dot Matrix globally */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none fixed inset-0 -z-10 select-none opacity-85"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(117, 124, 84, 0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(117, 124, 84, 0.10) 1px, transparent 1px),
              radial-gradient(circle at 1px 1px, rgba(37, 45, 0, 0.18) 1.2px, transparent 0)
            `,
            backgroundSize: "40px 40px, 40px 40px, 20px 20px",
          }}
        />
        {/* Ambient subtle top glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] -z-10 rounded-full bg-gradient-to-b from-[#757C54]/15 via-[#757C54]/5 to-transparent blur-3xl"
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
