import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import CursorSpotlight from "@/components/ui/CursorSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saumili Haldar",
  description:
    "Saumili Haldar - Software Developer. Expert in building scalable web applications. Explore my projects, skills, and professional journey. Get in touch today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex min-h-screen`}
      >
        <CursorSpotlight />
        <Navbar />
        <MobileNav />
        <main className="flex-1 w-full flex flex-col min-h-screen pt-24">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
