"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Hook to track how much time a user spends viewing a specific section.
 * @param {string} sectionName - The name of the section (e.g., 'Projects')
 * @param {object} existingRef - Optional existing ref to use
 * @param {number} threshold - How much of the section must be visible (0.0 to 1.0)
 */
export const useSectionTracking = (sectionName, existingRef = null, threshold = 0.5) => {
  const newRef = useRef(null);
  const sectionRef = existingRef || newRef;
  const startTime = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section entered view
          startTime.current = Date.now();
        } else {
          // Section left view
          if (startTime.current) {
            const timeSpent = (Date.now() - startTime.current) / 1000; // in seconds
            
            // Only track if they spent more than 1 second (filter out fast scrolls)
            if (timeSpent > 1) {
              trackEvent("section_view", {
                section: sectionName,
                duration_seconds: Math.round(timeSpent),
              });
            }
            startTime.current = null;
          }
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, threshold]);

  return sectionRef;
};
