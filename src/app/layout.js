"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import MagneticCursor from "@/components/ui/MagneticCursor";
import BackgroundAnimations from "@/components/ui/BackgroundAnimations";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="dark selection:bg-primary/30 selection:text-primary">
      <head>
        <title>Saumili Haldar | Software Developer</title>
        <meta name="description" content="Saumili Haldar - Software Developer. Expert in building scalable web applications. Explore my projects, skills, and professional journey. Get in touch today." />
      </head>
      <body className="antialiased bg-background text-foreground flex min-h-screen relative font-sans overflow-x-hidden">
        <BackgroundAnimations />
        <MagneticCursor />
        <Navbar />
        <MobileNav />
        <main className="flex-1 w-full flex flex-col min-h-screen relative z-10">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
