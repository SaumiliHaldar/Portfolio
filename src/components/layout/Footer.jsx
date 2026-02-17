"use client";

import { Linkedin, Github, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:haldar.saumili843@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/saumili-haldar-0804s2003/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/SaumiliHaldar", label: "GitHub" },
];

const navItems = [
  { name: "Home", href: "/", id: "" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Footer() {
  const currentYear = 2026;

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
    <footer className="w-full border-t border-border bg-background py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo/Name & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-xl font-bold tracking-tight">Saumili Haldar</h2>
            <div className="flex flex-col items-center text-sm text-muted-foreground md:items-start">
              <p>© {currentYear} Saumili Haldar. All rights reserved.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links for Mobile Visibility */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
