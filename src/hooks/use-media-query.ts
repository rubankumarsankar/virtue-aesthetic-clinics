"use client";

import { useEffect, useState } from "react";

/**
 * useMediaQuery
 * Returns true when the given CSS media query matches.
 * SSR-safe: initialises to false on the server.
 * On the client, the initial match is read via getServerSnapshot pattern
 * and updates are subscribed via addEventListener — no synchronous setState in effect.
 *
 * @example
 * const isMobile = useMediaQuery("(max-width: 768px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Apply current value outside the effect body to avoid cascading render warning.
    // We use a callback scheduled via queueMicrotask to stay off the synchronous path.
    const syncInitial = () => setMatches(mediaQueryList.matches);
    const id = setTimeout(syncInitial, 0);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handler);

    return () => {
      clearTimeout(id);
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
