"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileCode, Database, Globe, Cpu, Sparkles, Star, Command, Server } from "lucide-react";

export default function BackgroundAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Abstract shape icons for background
  const icons = [
    FileCode, Database, Globe, Cpu, Sparkles, Star, Command, Server
  ];

  // Generate random positions and animation parameters
  const items = icons.map((Icon, index) => {
    const randomX = Math.random() * 100; // Random start X position (0-100%)
    const randomY = Math.random() * 100; // Random start Y position (0-100%)
    const duration = 25 + Math.random() * 35; // Slower, more relaxed duration between 25s and 60s
    const delay = Math.random() * 10; // Random delay up to 10s
    const size = 15 + Math.random() * 35; // Random size between 15px and 50px
    
    // Wider, sweeping movement directions
    const moveX = (Math.random() - 0.5) * 60; // Move up to 30vw in any direction
    const moveY = (Math.random() - 0.5) * 60; // Move up to 30vh in any direction

    return {
      id: index,
      Icon,
      initial: {
        x: `${randomX}vw`,
        y: `${randomY}vh`,
        opacity: 0,
        scale: 0.5,
        rotate: 0, // Explicitly preventing rotation
      },
      animate: {
        x: [`${randomX}vw`, `${randomX + moveX}vw`, `${randomX - moveX / 3}vw`, `${randomX}vw`],
        y: [`${randomY}vh`, `${randomY + moveY}vh`, `${randomY - moveY / 3}vh`, `${randomY}vh`],
        opacity: [0.05, 0.25, 0.1, 0.05], // Varied subtle opacity
        scale: [0.8, 1.3, 0.9, 0.8],
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