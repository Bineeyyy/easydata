// Server-side PostHog capture. Fires a single event via the public capture
// endpoint without pulling in posthog-node. distinct_id is a per-call UUID
// so we never attach an event to a user identifier.

export async function trackServerEvent(
  event: string,
  properties: Record<string, unknown>,
): Promise<void> {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!key || !host) return;

  try {
    await fetch(`${host}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: key,
        event,
        properties,
        distinct_id: crypto.randomUUID(),
      }),
    });
  } catch {
    // Best effort — never throw from analytics.
  }
}
