"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, trackPageview } from "@/lib/analytics";

export function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!pathname) return;
    trackPageview(pathname);
  }, [pathname]);

  return <>{children}</>;
}
