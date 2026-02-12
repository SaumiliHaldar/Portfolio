"use client";

import { motion } from "framer-motion";
import {
  Home,
  User,
  Mail,
  BookOpen,
  Linkedin,
  Github,
  Download,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";

import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", icon: Home, href: "/", id: "" },
  { name: "About", icon: User, href: "#about", id: "about" },
  { name: "Skills", icon: BookOpen, href: "#skills", id: "skills" },
  { name: "Projects", icon: LayoutGrid, href: "#projects", id: "projects" },
  { name: "Contact", icon: Mail, href: "#contact", id: "contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:haldar.saumili843@gmail.com", color: "#1DA1F2" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/saumili-haldar-0804s2003/", color: "#0077B5" },
  { icon: Github, href: "https://github.com/SaumiliHaldar", color: "#333" },
];

export default function Sidebar() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (e, id) => {
    e.preventDefault();
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
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between border-r border-border bg-sidebar px-6 py-8 text-sidebar-foreground lg:flex">
      {/* Profile Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
             {/* Verify if image exists or use a placeholder */}
            <img
               src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
               alt="Saumili Haldar"
               className="h-full w-full object-cover rotate-98"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Saumili Haldar</h1>
            <p className="text-xs text-muted-foreground">Software Developer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-2">
          {navItems.map((item) => {
             const Icon = item.icon;
             const isActive = activeSection === item.id;
             return (
               <a
                 key={item.name}
                 href={item.href}
                 onClick={(e) => handleNavClick(e, item.id)}
                 className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                   isActive ? "text-white" : "text-muted-foreground"
                 }`}
               >
                 <Icon className={`h-4 w-4 transition-colors ${isActive ? "text-white" : "group-hover:text-primary"}`} />
                 {item.name}
               </a>
             );
          })}
        </nav>
      </div>

      {/* Footer Section (Socials + Resume) */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
            <p className="w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Socials</p>
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-sidebar-accent/50 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <a
          href="/Saumili Haldar-Resume.pdf"
          download
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>

        {/* Copyright notice for desktop */}
        <div className="mt-4 border-t border-border/40 pt-6 text-center text-[11px] leading-relaxed text-muted-foreground/50">
          <p>© 2026 Saumili Haldar</p>
          <p className="font-medium">All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
}
