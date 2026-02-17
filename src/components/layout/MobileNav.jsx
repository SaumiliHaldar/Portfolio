"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Mail, LayoutGrid, Download, BookOpen, CircleUserRound } from "lucide-react";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", icon: Home, href: "/", id: "" },
  { name: "About", icon: User, href: "#about", id: "about" },
  { name: "Skills", icon: BookOpen, href: "#skills", id: "skills" },
  { name: "Projects", icon: LayoutGrid, href: "#projects", id: "projects" },
  { name: "Contact", icon: Mail, href: "#contact", id: "contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = id ? document.getElementById(id) : null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <div className="lg:hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
            <CircleUserRound className="h-full w-full object-cover text-primary" />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-xl font-bold leading-none">Saumili</h1>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
        >
          <Menu className="h-6 w-6" />
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
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm bg-sidebar border-l border-sidebar-border p-4 shadow-xl text-sidebar-foreground"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-50 rounded-full p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`group flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
                      }`}
                    >
                      <Icon className={`h-5 w-5 transition-colors ${isActive ? "text-primary" : "group-hover:text-primary"}`} />
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8">
                <a
                  href="/Saumili Haldar-Resume.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
