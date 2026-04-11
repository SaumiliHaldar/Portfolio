import { track } from "@vercel/analytics";

/**
 * Tracks an event to both Google Analytics and Vercel Analytics.
 * @param {string} action - The name of the event (e.g., 'download_resume')
 * @param {object} params - Additional parameters (e.g., { location: 'hero' })
 */
export const trackEvent = (action, params = {}) => {
  // 1. Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }

  // 2. Vercel Analytics
  try {
    track(action, params);
  } catch (error) {
    console.warn("Vercel Analytics track error:", error);
  }
};
