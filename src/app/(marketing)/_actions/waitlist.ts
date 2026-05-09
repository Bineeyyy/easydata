"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email("Δώσε ένα έγκυρο email."),
  source: z.enum(["hero", "cta_bottom"]),
});

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const parsed = schema.safeParse({
    email: formData.get("email"),
    source: formData.get("source"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Κάτι πήγε στραβά.",
    };
  }

  // TODO: insert into Supabase waitlist table once schema is provisioned.
  return { status: "success" };
}
