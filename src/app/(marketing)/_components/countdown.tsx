"use client";

import { useEffect, useState } from "react";

// 2026-09-30T21:00:00Z = 2026-10-01T00:00:00 Europe/Athens
// (Greece is on EEST/UTC+3 in early October — DST ends the last Sunday of October)
const TARGET_MS = Date.UTC(2026, 8, 30, 21, 0, 0);

type Tick = {
  days: number;
  hours: number;
  minutes: number;
  passed: boolean;
};

export function Countdown() {
  const [tick, setTick] = useState<Tick | null>(null);

  useEffect(() => {
    function update() {
      const ms = TARGET_MS - Date.now();
      if (ms <= 0) {
        setTick({ days: 0, hours: 0, minutes: 0, passed: true });
        return;
      }
      const totalMinutes = Math.floor(ms / 60_000);
      setTick({
        days: Math.floor(totalMinutes / 1440),
        hours: Math.floor((totalMinutes % 1440) / 60),
        minutes: totalMinutes % 60,
        passed: false,
      });
    }
    update();
    const id = setInterval(update, 60_000);
    const onVis = () => {
      if (!document.hidden) update();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  if (tick?.passed) {
    return (
      <div className="mt-6 lg:mt-8 max-w-[420px] lg:ml-auto">
        <p className="font-display font-medium text-espresso text-[clamp(28px,3.5vw,44px)] leading-[1.1]">
          Η ώρα έφτασε.
        </p>
        <p className="mt-3 text-[15px] leading-[1.55] text-taupe">
          Το myDATA είναι πλέον υποχρεωτικό. Είσαι έτοιμος;
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 lg:mt-8 inline-flex items-baseline gap-4 lg:gap-6">
      <Unit value={tick?.days} label="ημέρες" />
      <Separator />
      <Unit value={tick?.hours} label="ώρες" />
      <Separator />
      <Unit value={tick?.minutes} label="λεπτά" />
    </div>
  );
}

function Unit({ value, label }: { value?: number; label: string }) {
  return (
    <span className="inline-flex flex-col items-start lg:items-end">
      <span className="font-display italic font-normal text-espresso text-[clamp(28px,3.5vw,44px)] leading-none tabular-nums">
        {value === undefined ? "—" : value}
      </span>
      <span className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
        {label}
      </span>
    </span>
  );
}

function Separator() {
  return (
    <span
      aria-hidden
      className="font-display italic font-normal text-terracotta text-[clamp(28px,3.5vw,44px)] leading-none"
    >
      ·
    </span>
  );
}

export function CountdownEyebrow() {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    function check() {
      setPassed(Date.now() >= TARGET_MS);
    }
    check();
    if (Date.now() >= TARGET_MS) return;
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
      {passed ? "1 Οκτωβρίου 2026" : "Η αντίστροφη μέτρηση ξεκίνησε"}
    </div>
  );
}
