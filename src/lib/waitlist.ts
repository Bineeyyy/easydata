import { z } from "zod";
import { supabase } from "./supabase/client";

const schema = z.object({
  email: z.string().trim().toLowerCase().email(),
  source: z.enum(["hero", "cta_bottom"]),
});

export type JoinResult =
  | { ok: true }
  | { ok: false; reason: "duplicate" | "invalid" | "server" };

export async function joinWaitlist(input: {
  email: string;
  source: string;
}): Promise<JoinResult> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) return { ok: false, reason: "invalid" };

  const { error } = await supabase.from("waitlist").insert(parsed.data);

  if (!error) return { ok: true };

  if (error.code === "23505") return { ok: false, reason: "duplicate" };

  console.error("[waitlist] insert failed", error);
  return { ok: false, reason: "server" };
}
