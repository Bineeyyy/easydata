"use client";

import { useActionState } from "react";
import {
  joinWaitlist,
  type WaitlistState,
} from "../_actions/waitlist";

const initialState: WaitlistState = { status: "idle" };

type Props = {
  source: "hero" | "cta_bottom";
  variant?: "espresso" | "terracotta";
  size?: "default" | "lg";
};

export function WaitlistForm({
  source,
  variant = "espresso",
  size = "default",
}: Props) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-full border border-terracotta bg-cream-deep px-6 py-[18px] text-center text-[14.5px] font-medium text-espresso max-w-[520px] mx-auto">
        ✓ Είσαι μέσα. Θα ακούσεις από εμάς πρώτος.
      </div>
    );
  }

  const buttonBase =
    variant === "terracotta"
      ? "bg-terracotta hover:bg-terracotta-deep"
      : "bg-espresso hover:bg-terracotta";

  const inputPad = size === "lg" ? "px-[22px] py-4" : "px-5 py-3.5";
  const buttonPad = size === "lg" ? "px-[30px] py-4" : "px-[26px] py-3.5";

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <form
        action={formAction}
        className="flex flex-col lg:flex-row gap-2 bg-white rounded-2xl lg:rounded-full border border-border p-2 shadow-[0_1px_0_rgba(26,22,18,0.04),0_8px_32px_rgba(26,22,18,0.06)]"
      >
        <input type="hidden" name="source" value={source} />
        <input
          type="email"
          name="email"
          required
          placeholder="το email σου"
          aria-label="Email"
          className={`flex-1 bg-transparent text-[15px] text-espresso placeholder:text-taupe-light outline-none ${inputPad}`}
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
      {state.status === "error" && (
        <p className="mt-3 text-[13px] text-terracotta-deep" role="alert">
          {state.message}
        </p>
      )}
    </div>
  );
}
