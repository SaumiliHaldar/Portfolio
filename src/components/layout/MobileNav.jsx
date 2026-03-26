"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Works", href: "#projects", id: "projects" },
  { name: "Connect", href: "#contact", id: "contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const options = { day: '2-digit', month: 'short', year: '2-digit' };
      return now.toLocaleDateString('en-GB', options).toUpperCase();
    };
    setCurrentDate(formatDate());
    const timer = setInterval(() => setCurrentDate(formatDate()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = id ? document.getElementById(id) : null;
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md border-b border-border/40">
        {/* Logo Section */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "")}
          className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="h-8 w-8 rounded-full border border-foreground/20 overflow-hidden shrink-0">
            <img src="/Saumili.jpg" alt="/Saumili.jpg" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm font-black tracking-tighter uppercase leading-none text-foreground group-hover:text-primary transition-colors">
            Saumili
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[70] h-full w-4/5 max-w-sm bg-background border-l border-border/40 p-8 shadow-2xl flex flex-col"
            >
              <div className="flex flex-col items-start gap-11 pointer-events-auto">
                {/* Row 1: About + Close Button */}
                <div className="w-full flex items-center justify-between">
                  <a
                    href={navItems[0].href}
                    onClick={(e) => handleNavClick(e, navItems[0].id)}
                    className="group flex flex-col items-start transition-all duration-300 text-muted-foreground/60 hover:text-foreground"
                  >
                    <span className="text-sm font-bold tracking-[0.3em] uppercase relative">
                      {navItems[0].name}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 -mr-2 text-foreground hover:bg-muted rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Remaining items */}
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="group flex flex-col items-start transition-all duration-300 text-muted-foreground/60 hover:text-foreground"
                  >
                    <span className="text-sm font-bold tracking-[0.3em] uppercase relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto pb-8 flex flex-col items-center gap-8">
                <div className="w-full border-t border-foreground/5" />

                <a
                  href="/Saumili-Haldar-Resume.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-primary-foreground transition-all duration-300 hover:brightness-105 active:scale-95 shadow-lg shadow-primary/10"
                >
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase">
                    DOWNLOAD RESUME
                  </span>
                </a>

                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase">
                    {currentDate}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
