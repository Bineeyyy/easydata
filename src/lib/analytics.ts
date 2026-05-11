// PostHog analytics with graceful no-op when env vars are missing.
// All capture() calls funnel through one private helper so an uninitialized
// SDK silently drops events — no console output, no network requests, no
// crashes. posthog-js is dynamically imported so its bundle chunk never
// loads when the keys are absent.

import type { PostHog } from "posthog-js";

let ph: PostHog | null = null;
let initStarted = false;

export async function initAnalytics(): Promise<void> {
  if (initStarted) return;
  initStarted = true;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!key || !host) return;

  const mod = await import("posthog-js");
  mod.default.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_decide: true,
    persistence: "localStorage",
    person_profiles: "never",
    property_denylist: [
      "$ip",
      "$geoip_city_name",
      "$geoip_country_name",
      "$geoip_country_code",
      "$geoip_continent_name",
      "$geoip_continent_code",
      "$geoip_postal_code",
      "$geoip_latitude",
      "$geoip_longitude",
      "$geoip_time_zone",
      "$geoip_subdivision_1_code",
      "$geoip_subdivision_1_name",
      "$geoip_subdivision_2_code",
      "$geoip_subdivision_2_name",
    ],
  });
  ph = mod.default;
}

function capture(event: string, props?: Record<string, unknown>): void {
  ph?.capture(event, props);
}

export type WaitlistSource = "hero" | "cta_bottom";
export type WaitlistResult = "success" | "duplicate" | "invalid" | "server";
export type ScrollPercent = 25 | 50 | 75 | 100;

export function trackPageview(pathname: string): void {
  capture("pageview", { pathname });
}

export function trackWaitlistSubmit(
  source: WaitlistSource,
  result: WaitlistResult,
): void {
  capture("waitlist_submit", { source, result });
}

export function trackScrollDepth(percent: ScrollPercent): void {
  capture("scroll_depth", { percent });
}

export function trackStickyCtaTap(): void {
  capture("sticky_cta_tap");
}

// Reserved for task 5 (exit-intent modal) — wired in advance so the modal
// just imports and calls.
export function trackExitModalShow(): void {
  capture("exit_modal_show");
}

export function trackExitModalDismiss(): void {
  capture("exit_modal_dismiss");
}

export function trackExitModalSubmit(): void {
  capture("exit_modal_submit");
}
