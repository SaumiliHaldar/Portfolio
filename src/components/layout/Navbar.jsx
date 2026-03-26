"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
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
    const element = id ? document.getElementById(id) : null;
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 hidden lg:grid grid-cols-[1fr_auto_1fr] items-center px-12 py-3 bg-background/85 backdrop-blur-lg border-b border-foreground/5 transition-all duration-300">
      {/* Left: Signature / Status */}
      <div className="flex items-center gap-6">
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, "")}
          className="group flex items-center gap-3"
        >
          <div className="h-9 w-9 p-0.5 rounded-full border border-foreground/20 group cursor-pointer overflow-hidden transition-all hover:border-primary shrink-0">
            <div className="h-full w-full rounded-full overflow-hidden transition-all duration-500">
              <img src="/Saumili.jpg" alt="Saumili" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter uppercase leading-none text-foreground transition-colors">
              Saumili
            </span>
          </div>
        </a>
      </div>

      {/* Center: Indexed Navigation Links */}
      <div className="flex items-center gap-10">
        {navItems.map((item, index) => {
             const isActive = activeSection === item.id;
             return (
               <a
                 key={item.name}
                 href={item.href}
                 onClick={(e) => handleNavClick(e, item.id)}
                 className="group flex items-center text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 text-muted-foreground/70 hover:text-foreground"
               >
                 <span className="relative">
                   {item.name}
                   <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                 </span>
               </a>
             );
        })}
      </div>

      {/* Right: Technical Info + Actions */}
      <div className="flex items-center justify-end gap-6">
        <div className="flex flex-col items-end border-r border-foreground/10 pr-6">
          <span className="text-[9px] font-black tracking-[0.1em] uppercase text-foreground leading-none mb-1">
            {currentDate}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="/Saumili-Haldar-Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:brightness-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <span className="text-[11px] font-black tracking-[0.2em] uppercase">
              DOWNLOAD RESUME
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}


