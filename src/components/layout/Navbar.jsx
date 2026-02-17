"use client";


import {
  Home,
  User,
  Mail,
  BookOpen,
  Download,
  LayoutGrid,
  CircleUserRound,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", icon: Home, href: "/", id: "" },
  { name: "About", icon: User, href: "#about", id: "about" },
  { name: "Skills", icon: BookOpen, href: "#skills", id: "skills" },
  { name: "Projects", icon: LayoutGrid, href: "#projects", id: "projects" },
  { name: "Contact", icon: Mail, href: "#contact", id: "contact" },
];


export default function Navbar() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (e, id) => {
    e.preventDefault();
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
    <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Logo/Name */}
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
            <CircleUserRound className="h-full w-full object-cover text-primary" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Saumili</h1>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
             const Icon = item.icon;
             const isActive = activeSection === item.id;
             return (
               <a
                 key={item.name}
                 href={item.href}
                 onClick={(e) => handleNavClick(e, item.id)}
                 className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                   isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
                 }`}
               >
                 <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "group-hover:text-primary"}`} />
                 {item.name}
               </a>
             );
        })}
      </div>

      {/* Right Side: Resume */}
      <div className="flex items-center gap-4">
        <a
          href="/Saumili Haldar-Resume.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </nav>
  );
}
