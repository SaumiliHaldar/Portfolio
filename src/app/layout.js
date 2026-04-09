import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import MagneticCursor from "@/components/ui/MagneticCursor";
import BackgroundAnimations from "@/components/ui/BackgroundAnimations";
import Providers from "@/components/layout/Providers";

export const metadata = {
  metadataBase: new URL("https://saumilihaldar.in"),
  title: "Saumili Haldar | Software Developer",
  description: "Software Developer specializing in scalable backend architectures, real-time data pipelines, and AI-driven applications. Class of 2025 Computer Science Graduate.",
  openGraph: {
    title: "Saumili Haldar | Software Developer",
    description: "Building the next generation of real-time AI applications and robust backend systems.",
    url: "https://saumilihaldar.in",
    siteName: "Saumili Haldar | Software Developer",
    images: [
      {
        url: "/Saumili.jpg",
        width: 1200,
        height: 630,
        alt: "Saumili Haldar - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark selection:bg-primary/30 selection:text-primary">
      <body className="antialiased bg-background text-foreground flex min-h-screen relative font-sans overflow-x-hidden">
        <Providers>
          <BackgroundAnimations />
          <MagneticCursor />
          <Navbar />
          <MobileNav />
          <main className="flex-1 w-full flex flex-col min-h-screen relative z-10">
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
