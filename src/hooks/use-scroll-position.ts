"use client";

import { useEffect, useState } from "react";

interface ScrollPosition {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isScrolled: boolean;
}

/**
 * useScrollPosition
 * Tracks the window's vertical scroll position and direction.
 * Useful for sticky headers, back-to-top buttons, etc.
 *
 * @param threshold - pixel offset before `isScrolled` becomes true (default: 60)
 */
export function useScrollPosition(threshold = 60): ScrollPosition {
  const [state, setState] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > lastScrollY ? "down" : "up";

      setState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}

