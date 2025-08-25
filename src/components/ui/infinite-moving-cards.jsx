"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  renderItem = (item) => <div>{item.name}</div>,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client (for SSR safety)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    addAnimation();
  }, [isClient, items, direction, speed]);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      // Clear any previously cloned elements (avoid duplication on HMR or re-renders)
      Array.from(scrollerRef.current.children)
        .slice(0, items.length) // Keep only original items
        .forEach((_, index) => {
          const node = scrollerRef.current?.children[index + items.length];
          if (node) node.remove(); // Remove the clone if exists
        });

      // Clone each item at least 3 times for smoother infinite repetition
      const clonesNeeded = 3;
      for (let i = 0; i < clonesNeeded; i++) {
        items.forEach((item, idx) => {
          const originalItem = scrollerRef.current?.children[idx];
          if (originalItem) {
            const clonedItem = originalItem.cloneNode(true);
            scrollerRef.current?.appendChild(clonedItem);
          }
        });
      }

      // Set animation direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // Set animation duration based on speed
      // const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      // containerRef.current.style.setProperty("--animation-duration", duration);

      const duration =
        speed === "fast"
          ? "20s"
          : speed === "normal"
          ? "40s"
          : speed === "slow"
          ? "80s"
          : "120s"; // Default to 120 seconds for anything else (e.g., "slower")

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  // Re-run animation setup when items change
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(addAnimation, 100); // Small delay to ensure DOM is ready
      return () => clearTimeout(timer);
    }
  }, [items, isClient, direction, speed]);

  if (!isClient) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max shrink-0 flex-nowrap gap-12 ", // Increased gap and padding
          "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center" // Bigger size: 144px
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};
