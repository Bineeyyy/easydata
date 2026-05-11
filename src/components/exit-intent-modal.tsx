"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { joinWaitlist } from "@/lib/waitlist";
import {
  trackExitModalShow,
  trackExitModalDismiss,
  trackExitModalSubmit,
  trackWaitlistSubmit,
  type ExitModalDismissMethod,
} from "@/lib/analytics";
import {
  WAITLIST_ERROR_COPY,
  WAITLIST_SUCCESS_COPY,
  SESSION_EXIT_SHOWN_KEY,
  SESSION_SUBSCRIBED_KEY,
} from "@/lib/waitlist-copy";

const SUPPRESS_PATHS = new Set(["/privacy", "/terms"]);
const MIN_DWELL_MS = 8000;
const DESKTOP_MIN_WIDTH = 768;

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; reason: "duplicate" | "invalid" | "server" };

function readSessionFlag(key: string): boolean {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeSessionFlag(key: string): void {
  try {
    sessionStorage.setItem(key, "1");
  } catch {
    // sessionStorage unavailable — fail silently.
  }
}

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback((method: ExitModalDismissMethod) => {
    setOpen(false);
    trackExitModalDismiss(method);
    // Restore focus to whatever was focused before the modal opened.
    previouslyFocused.current?.focus?.();
  }, []);

  // Mouseout-top trigger. Wires up once per pathname so suppression rules
  // refresh on navigation.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (SUPPRESS_PATHS.has(pathname)) return;
    if (window.innerWidth < DESKTOP_MIN_WIDTH) return;
    if (readSessionFlag(SESSION_EXIT_SHOWN_KEY)) return;
    if (readSessionFlag(SESSION_SUBSCRIBED_KEY)) return;

    const mountedAt = Date.now();
    let armed = true;

    function onMouseOut(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return;
      // Ignore mouseout caused by entering a child element (e.relatedTarget
      // is the new target; null means the cursor left the document).
      if (e.relatedTarget !== null) return;
      if (Date.now() - mountedAt < MIN_DWELL_MS) return;

      armed = false;
      writeSessionFlag(SESSION_EXIT_SHOWN_KEY);
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      setOpen(true);
      trackExitModalShow();
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [pathname]);

  // Body scroll lock while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus the email input when the form is visible.
  useEffect(() => {
    if (!open) return;
    if (status.kind === "success") return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open, status.kind]);

  // Keyboard: Escape closes; Tab traps focus inside the dialog.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close("escape");
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    setStatus({ kind: "loading" });
    const result = await joinWaitlist({ email, source: "exit_modal" });
    if (result.ok) {
      setStatus({ kind: "success" });
      writeSessionFlag(SESSION_SUBSCRIBED_KEY);
      trackWaitlistSubmit("exit_modal", "success");
      trackExitModalSubmit();
    } else {
      setStatus({ kind: "error", reason: result.reason });
      trackWaitlistSubmit("exit_modal", result.reason);
    }
  }

  if (!open) return null;

  const pending = status.kind === "loading";
  const isSuccess = status.kind === "success";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close("backdrop");
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-espresso/55 backdrop-blur-md animate-[fadeIn_180ms_ease-out_forwards]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-headline"
        className="relative z-[1] w-full max-w-[480px] rounded-3xl border border-border bg-cream pt-12 pr-11 pb-10 pl-11 shadow-[0_32px_80px_rgba(26,22,18,0.25)] animate-[fadeIn_220ms_ease-out_forwards]"
      >
        <button
          type="button"
          aria-label="Κλείσιμο"
          onClick={() => close("close_button")}
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-taupe transition-colors hover:bg-cream-deep hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          <span aria-hidden className="text-[22px] leading-none">
            ×
          </span>
        </button>

        {isSuccess ? (
          <div className="py-4 text-center">
            <h2
              id="exit-modal-headline"
              className="font-display text-[34px] leading-[1.05] tracking-[-0.02em] text-espresso"
            >
              {WAITLIST_SUCCESS_COPY}
            </h2>
            <button
              type="button"
              onClick={() => close("close_button")}
              className="mt-7 rounded-full bg-espresso px-6 py-3 text-[14px] font-medium text-cream transition-all hover:-translate-y-px hover:bg-terracotta"
            >
              Έκλεισα
            </button>
          </div>
        ) : (
          <>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Λίστα αναμονής
            </div>
            <h2
              id="exit-modal-headline"
              className="mt-3 font-display text-[44px] leading-[1.02] tracking-[-0.02em] text-espresso"
            >
              Πριν{" "}
              <span className="italic text-terracotta">φύγεις</span>
              <span className="text-terracotta">…</span>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.55] text-taupe">
              Κλείδωσε{" "}
              <span className="font-medium text-terracotta">
                €9/μήνα για πάντα
              </span>{" "}
              πριν ανοίξουμε. Στους πρώτους 100 — μετά γίνεται €15.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-7 flex flex-col gap-2 rounded-2xl md:rounded-full border border-border bg-white p-2 shadow-[0_1px_0_rgba(26,22,18,0.04),0_8px_32px_rgba(26,22,18,0.06)] md:flex-row"
            >
              <input
                ref={inputRef}
                type="email"
                name="email"
                required
                placeholder="το email σου"
                aria-label="Email"
                disabled={pending}
                className="flex-1 bg-transparent px-5 py-3.5 text-[15px] text-espresso placeholder:text-taupe-light outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={pending}
                className="whitespace-nowrap rounded-full bg-espresso px-[26px] py-3.5 text-[14px] font-medium text-cream transition-all hover:-translate-y-px hover:bg-terracotta disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {pending ? "Στέλνω…" : "Κράτα τη θέση μου →"}
              </button>
            </form>

            {status.kind === "error" && (
              <p
                role="alert"
                className="mt-3 text-[13px] text-terracotta-deep"
              >
                {WAITLIST_ERROR_COPY[status.reason]}
              </p>
            )}

            <p className="mt-5 text-[12px] text-taupe">
              Χωρίς κάρτα · Ακυρώνεις όποτε θες
            </p>
          </>
        )}
      </div>
    </div>
  );
}
