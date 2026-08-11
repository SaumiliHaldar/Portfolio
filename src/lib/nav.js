"use client";

import { useState, useEffect } from "react";

export const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Journey", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Works", href: "#projects", id: "projects" },
  { name: "Connect", href: "#contact", id: "contact" },
];

export function useClockDate() {
  const [currentDate, setCurrentDate] = useState({ month: "", day: "", year: "" });

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      return {
        month: now.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
        day: now.toLocaleDateString("en-GB", { day: "2-digit" }),
        year: now.toLocaleDateString("en-GB", { year: "numeric" }),
      };
    };
    setCurrentDate(formatDate());
    const timer = setInterval(() => setCurrentDate(formatDate()), 60000);
    return () => clearInterval(timer);
  }, []);

  return currentDate;
}
