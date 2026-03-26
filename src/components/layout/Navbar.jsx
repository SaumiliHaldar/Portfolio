"use client";
import {
  Download,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Works", href: "#projects", id: "projects" },
  { name: "Connect", href: "#contact", id: "contact" },
];


export default function Navbar() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = id ? document.getElementById(id) : null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Logo/Name */}
      <a 
        href="/" 
        onClick={(e) => handleNavClick(e, "")}
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-primary/20">
            <img src="/Saumili.jpg" alt="Saumili" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Saumili</h1>
        </div>
      </a>

      {/* Navigation Items */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
             const isActive = activeSection === item.id;
             return (
               <a
                 key={item.name}
                 href={item.href}
                 onClick={(e) => handleNavClick(e, item.id)}
                 className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all text-muted-foreground hover:text-primary"
               >
                 <span className="relative">
                   {item.name}
                   <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                 </span>
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
