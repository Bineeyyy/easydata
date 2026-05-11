import type { WaitlistResult } from "@/lib/analytics";

export const WAITLIST_SUCCESS_COPY =
  "✓ Είσαι μέσα. Θα ακούσεις από εμάς πρώτος.";

export const WAITLIST_ERROR_COPY: Record<
  Exclude<WaitlistResult, "success">,
  string
> = {
  duplicate: "Είσαι ήδη στη λίστα.",
  invalid: "Δώσε ένα έγκυρο email.",
  server: "Κάτι πήγε στραβά. Δοκίμασε ξανά.",
};

export const SESSION_SUBSCRIBED_KEY = "easydata_subscribed";
export const SESSION_EXIT_SHOWN_KEY = "easydata_exit_shown";
