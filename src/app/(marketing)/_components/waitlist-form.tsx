"use client";

import { useState } from "react";
import { joinWaitlist } from "@/lib/waitlist";
import { trackWaitlistSubmit } from "@/lib/analytics";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; reason: "duplicate" | "invalid" | "server" };

type Props = {
  source: "hero" | "cta_bottom";
  variant?: "espresso" | "terracotta";
  size?: "default" | "lg";
};

const errorCopy: Record<"duplicate" | "invalid" | "server", string> = {
  duplicate: "Είσαι ήδη στη λίστα.",
  invalid: "Δώσε ένα έγκυρο email.",
  server: "Κάτι πήγε στραβά. Δοκίμασε ξανά.",
};

export function WaitlistForm({
  source,
  variant = "espresso",
  size = "default",
}: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    setStatus({ kind: "loading" });
    const result = await joinWaitlist({ email, source });
    if (result.ok) {
      setStatus({ kind: "success" });
      trackWaitlistSubmit(source, "success");
    } else {
      setStatus({ kind: "error", reason: result.reason });
      trackWaitlistSubmit(source, result.reason);
    }
  }

  if (status.kind === "success") {
    return (
      <div className="rounded-full border border-terracotta bg-cream-deep px-6 py-[18px] text-center text-[14.5px] font-medium text-espresso max-w-[520px] mx-auto">
        ✓ Είσαι μέσα. Θα ακούσεις από εμάς πρώτος.
      </div>
    );
  }

  const pending = status.kind === "loading";

  const buttonBase =
    variant === "terracotta"
      ? "bg-terracotta hover:bg-terracotta-deep"
      : "bg-espresso hover:bg-terracotta";

  const inputPad = size === "lg" ? "px-[22px] py-4" : "px-5 py-3.5";
  const buttonPad = size === "lg" ? "px-[30px] py-4" : "px-[26px] py-3.5";

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <form
        onSubmit={onSubmit}
        className="flex flex-col lg:flex-row gap-2 bg-white rounded-2xl lg:rounded-full border border-border p-2 shadow-[0_1px_0_rgba(26,22,18,0.04),0_8px_32px_rgba(26,22,18,0.06)]"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="το email σου"
          aria-label="Email"
          disabled={pending}
          className={`flex-1 bg-transparent text-[15px] text-espresso placeholder:text-taupe-light outline-none disabled:opacity-60 ${inputPad}`}
        />
        <button
          type="submit"
          disabled={pending}
          className={`whitespace-nowrap rounded-full text-[14px] font-medium text-cream transition-all hover:-translate-y-px disabled:opacity-60 disabled:hover:translate-y-0 ${buttonBase} ${buttonPad}`}
        >
          {pending
            ? "Στέλνω…"
            : source === "hero"
              ? "Με ενδιαφέρει →"
              : "Κράτα τη θέση μου →"}
        </button>
      </form>
      {status.kind === "error" && (
        <p
          className="mt-3 text-[13px] text-terracotta-deep text-center lg:text-left"
          role="alert"
        >
          {errorCopy[status.reason]}
        </p>
      )}
    </div>
  );
}
