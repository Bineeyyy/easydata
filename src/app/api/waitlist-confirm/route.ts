import { Resend } from "resend";
import { z } from "zod";
import {
  CONFIRMATION_EMAIL_HTML,
  CONFIRMATION_EMAIL_SUBJECT,
  CONFIRMATION_EMAIL_TEXT,
} from "@/lib/email/confirmation-template";
import { trackServerEvent } from "@/lib/server-analytics";
import { supabase } from "@/lib/supabase/client";

// Always returns 200 to avoid leaking signal about which addresses are on the
// list — the route is publicly reachable and reachable-but-uninformative is
// the goal. Recipient address is never logged; only success/failure status.

const FROM = "EasyData <onboarding@resend.dev>";
const REPLY_TO = "hello@easydata.gr";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

async function track(result: "success" | "failure"): Promise<void> {
  await trackServerEvent("confirmation_email_sent", { result });
}

export async function POST(req: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ ok: true });
  }

  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json({ ok: true });
  }
  const { email } = parsed.data;

  // Defense in depth: the email must already exist in the waitlist. Stops
  // someone from using this endpoint to send confirmations to arbitrary
  // recipients. waitlist_has() is a SECURITY DEFINER fn so it bypasses RLS
  // for the boolean check only.
  const { data: inList, error: lookupError } = await supabase.rpc(
    "waitlist_has",
    { p_email: email },
  );
  if (lookupError || inList !== true) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[waitlist-confirm] RESEND_API_KEY missing");
    await track("failure");
    return Response.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  let result: "success" | "failure" = "failure";
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: CONFIRMATION_EMAIL_SUBJECT,
      text: CONFIRMATION_EMAIL_TEXT,
      html: CONFIRMATION_EMAIL_HTML,
    });
    if (error) {
      console.error("[waitlist-confirm] send failed", error.name);
    } else {
      result = "success";
    }
  } catch (err) {
    console.error(
      "[waitlist-confirm] send threw",
      err instanceof Error ? err.name : "unknown",
    );
  }

  await track(result);
  return Response.json({ ok: true });
}
