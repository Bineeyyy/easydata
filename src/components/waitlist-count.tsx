"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";

type Tier = { prefix: string; italic: string; rest: string };

const TAIL = " ελεύθεροι επαγγελματίες είναι ήδη στη λίστα";

function tierFor(count: number): Tier | null {
  if (count < 25) return null;
  if (count < 100) return { prefix: "", italic: "Δεκάδες", rest: TAIL };
  if (count < 500) return { prefix: "Πάνω από ", italic: "100", rest: TAIL };
  if (count < 1000) return { prefix: "Πάνω από ", italic: "500", rest: TAIL };
  return { prefix: "Πάνω από ", italic: "1.000", rest: TAIL };
}

const POLL_MS = 60_000;

type Props = { align: "left" | "center" };

export function WaitlistCount({ align }: Props) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      const { data, error } = await supabase.rpc("waitlist_count");
      if (cancelled) return;
      if (error || typeof data !== "number") {
        setCount(null);
        return;
      }
      setCount(data);
    }

    fetchCount();
    const id = window.setInterval(() => {
      if (document.hidden) return;
      fetchCount();
    }, POLL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  if (count === null) return null;
  const tier = tierFor(count);
  if (!tier) return null;

  const alignment =
    align === "center" ? "justify-center text-center" : "justify-start text-left";

  return (
    <div
      className={`mt-5 flex items-center gap-2.5 text-[13.5px] leading-[1.5] text-taupe opacity-0 animate-[fadeIn_400ms_ease-out_forwards] motion-reduce:animate-none motion-reduce:opacity-100 ${alignment}`}
      aria-live="polite"
    >
      <span aria-hidden className="pulse-dot pulse-dot--live shrink-0" />
      <span>
        {tier.prefix}
        <em className="not-italic font-display italic text-[15px] text-espresso">
          {tier.italic}
        </em>
        {tier.rest}
      </span>
    </div>
  );
}
