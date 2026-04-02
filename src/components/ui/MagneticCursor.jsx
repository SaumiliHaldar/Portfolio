"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverData, setHoverData] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!isHovering) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest("button, a, .magnetic-item");
      if (target) {
        setIsHovering(true);
        const rect = target.getBoundingClientRect();
        setHoverData({
          width: rect.width,
          height: rect.height,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
        
        // Snapping effect
        cursorX.set(rect.left + rect.width / 2);
        cursorY.set(rect.top + rect.height / 2);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isHovering]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Dot/Circle */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-primary border-2 border-primary mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: isHovering ? hoverData.width + 10 : 12,
          height: isHovering ? hoverData.height + 10 : 12,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isClicking ? 0.5 : 1,
          scale: isClicking ? 0.8 : 1,
          borderRadius: isHovering ? "8px" : "50%",
          backgroundColor: isHovering ? "transparent" : "var(--primary)",
        }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
      />
      
      {/* Spotify Gradient Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-20 blur-[60px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
