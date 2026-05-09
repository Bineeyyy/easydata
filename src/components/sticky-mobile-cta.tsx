"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atForm, setAtForm] = useState(false);
  const visible = pastHero && !atForm;

  useEffect(() => {
    const hero = document.getElementById("hero");
    const form = document.getElementById("waitlist");

    const heroObs = hero
      ? new IntersectionObserver(
          ([entry]) => setPastHero(!entry.isIntersecting),
        )
      : null;
    heroObs?.observe(hero!);

    const formObs = form
      ? new IntersectionObserver(
          ([entry]) => setAtForm(entry.isIntersecting),
        )
      : null;
    formObs?.observe(form!);

    return () => {
      heroObs?.disconnect();
      formObs?.disconnect();
    };
  }, []);

  return (
    <a
      href="#waitlist"
      aria-label="Μπες δωρεάν στη λίστα"
      // TODO: track('sticky_cta_clicked') once analytics SDK is in
      className={[
        "md:hidden",
        "fixed inset-x-0 bottom-0 z-50",
        "bg-espresso/85 backdrop-blur-md border-t border-cream/15",
        "px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
        "flex items-center justify-center text-cream text-[15px] font-medium",
        "transition-[opacity,transform] duration-300 ease-out",
        "active:scale-[0.98]",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <span>Μπες δωρεάν στη λίστα</span>
      <span
        aria-hidden
        className="ml-2 font-display italic font-normal text-gold"
      >
        →
      </span>
    </a>
  );
}
