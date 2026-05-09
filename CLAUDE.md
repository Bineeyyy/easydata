@AGENTS.md

# EasyData

## What this is
A myDATA helper for Greek freelancers and small businesses. Mobile-first web app that helps users issue compliant invoices, track AADE deadlines, and export clean monthly reports for their accountants. Mandatory e-invoicing hits all Greek freelancers October 1, 2026 — we are the soft, beautiful layer on top of AADE's portal.

## Phase
Pre-launch. Currently building waitlist landing page → MVP → public beta by September 2026.

## Stack
- Next.js 16 (App Router), TypeScript, Tailwind v4
- Supabase (Postgres + Auth + Edge Functions)
- Vercel hosting
- Resend for transactional email
- PostHog for product analytics

## Design language
- Editorial Greek-fintech. NOT generic SaaS template.
- Fonts: EB Garamond (display, italic for emphasis) + IBM Plex Sans (body) — both with Greek subsets
- Palette: cream #FAF6EE, espresso #1A1612, terracotta #B8442A, gold #C8943A, taupe #6B5D4F
- Generous whitespace, asymmetric grids, restrained motion

## Locale
- Primary language: Greek (el-GR). All user-facing copy in Greek.
- Currency: EUR. Date format: DD/MM/YYYY. Numbers: comma decimal separator.

## Code conventions
- Server components by default. Client components only when needed.
- Server actions for mutations, not API routes, where possible.
- Zod for all input validation.
- Strict TypeScript — no `any`.
- Co-locate components with their routes. Shared UI in /src/components/ui/.
- Tailwind only. No CSS modules.

## What NOT to do
- Do not use shadcn defaults blindly — always restyle to our palette.
- Do not write to AADE APIs directly yet. We are NOT a certified provider in v1.
- Do not store sensitive financial data in v1.

## Voice
- Greek that sounds human, not translated. Use "εσύ" not "εσείς".
- Confident but humble. We are a helper, not a replacement for accountants.
- The accountant is our friend, not our enemy.

## Current sprint goal
Migrate the existing single-file HTML landing page prototype to a proper Next.js multi-component page. Wire Supabase waitlist. Deploy to easydata.gr. Target: live by end of week.

## Decisions Log
- 2026-05-09: Display=EB Garamond + body=IBM Plex Sans. Both have Greek subsets via Google Fonts. Italic loaded for all four weights instead of selectively splitting loaders — accepted ~2 extra small WOFF2s for cleaner code.
- 2026-05-09: Client-direct Supabase via anon key + RLS insert-only policy. No service_role needed yet. Will revisit when admin functionality is added.
