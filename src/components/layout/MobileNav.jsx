"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Mail, LayoutGrid, ArrowBigDownDash, BookOpen } from "lucide-react";

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
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-background/80 p-2 text-foreground backdrop-blur-md border border-border shadow-md"
      >
        <Menu className="h-6 w-6" />
      </button>

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
              className="fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm bg-sidebar border-l border-sidebar-border p-6 shadow-xl text-sidebar-foreground"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold">
                  Saumili Haldar
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`group flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                        isActive ? "text-white" : "text-muted-foreground"
                      }`}
                    >
                      <Icon className={`h-5 w-5 transition-colors ${isActive ? "text-white" : "group-hover:text-primary"}`} />
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
                  <ArrowBigDownDash className="h-5 w-5" />
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
