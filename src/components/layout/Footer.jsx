"use client";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:haldar.saumili843@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/saumili-haldar-0804s2003", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SaumiliHaldar", label: "GitHub" },
];

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Works", href: "#projects", id: "projects" },
  { name: "Connect", href: "#contact", id: "contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="w-full border-t border-foreground/5 bg-background py-16 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12">
          {/* Logo/Name & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm font-black tracking-tighter uppercase text-foreground">
              Saumili Haldar
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground/40 uppercase mt-1">
              © {currentYear} · All rights reserved.
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group relative text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Social Links & Top Button */}
          <div className="flex flex-col items-center justify-end gap-10 sm:flex-row">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/5 bg-foreground/[0.03] text-muted-foreground/60 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 stroke-[1.5px]" />
                  </a>
                );
              })}
            </div>

            {/* Top Button */}
            <button
              onClick={(e) => handleNavClick(e, "")}
              className="group flex items-center gap-4 rounded-full border border-foreground/5 bg-foreground/[0.03] p-1.5 pl-8 transition-all duration-300 hover:border-primary hover:bg-primary/5 active:scale-95"
            >
              <span className="text-[10px] font-black tracking-[0.4em] text-foreground uppercase transition-all duration-300 group-hover:[text-shadow:1.5px_0_#ff4d4d,-1.5px_0_#4d4dff]">
                Top
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 md:group-hover:-rotate-45">
                <ArrowUpRight className="h-4 w-4 stroke-[2.5px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

