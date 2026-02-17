"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileCode, Hash, Database, Globe, Cpu, Server, Layers, Command } from "lucide-react";

export default function BackgroundAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Icons relevant to a full-stack developer / software engineer
  const icons = [
    FileCode, Hash, Database, Globe, Cpu, Server, Layers, Command
  ];

  // Generate random positions and animation parameters
  const items = icons.map((Icon, index) => {
    const randomX = Math.random() * 100; // Random start X position (0-100%)
    const randomY = Math.random() * 100; // Random start Y position (0-100%)
    const duration = 15 + Math.random() * 20; // Random duration between 15s and 35s
    const delay = Math.random() * 5; // Random delay
    const size = 20 + Math.random() * 30; // Random size between 20px and 50px
    
    // Random direction for movement
    const moveX = (Math.random() - 0.5) * 40; // Move -20vw to +20vw
    const moveY = (Math.random() - 0.5) * 40; // Move -20vh to +20vh

    return {
      id: index,
      Icon,
      initial: {
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        opacity: 0,
        scale: 0.5,
        rotate: 0,
      },
      animate: {
        x: [`${randomX}vw`, `${randomX + moveX}vw`, `${randomX}vw`],
        y: [`${randomY}vh`, `${randomY + moveY}vh`, `${randomY}vh`],
        opacity: [0.1, 0.3, 0.1], // Subtle opacity
        scale: [0.8, 1.2, 0.8],
      },
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      },
      size,
    };
  });

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-background/90" /> {/* Slight overlay to ensure text readability if needed */}
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-primary/20" // Using primary color with very low opacity
          initial={item.initial}
          animate={item.animate}
          transition={item.transition}
          style={{ width: item.size, height: item.size }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
}