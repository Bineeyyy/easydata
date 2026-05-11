"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth, type ScrollPercent } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 100] as const satisfies readonly ScrollPercent[];

export function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef<Set<ScrollPercent>>(new Set());

  // Re-arm on path change so navigating to /privacy and back to / fires
  // each threshold again on the new page.
  useEffect(() => {
    fired.current = new Set();
  }, [pathname]);

  useEffect(() => {
    let raf = 0;

    function check() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.current.has(t)) {
          fired.current.add(t);
          trackScrollDepth(t);
        }
      }
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
