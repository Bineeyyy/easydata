# Backlog

## Done (2026-05-09)
- [x] Migrate single-file HTML prototype to Next.js App Router (multi-component)
- [x] Pick & wire fonts: EB Garamond (display) + IBM Plex Sans (body), both with Greek subsets
- [x] Provision Supabase project (`easydata`) + `public.waitlist` table + RLS insert-only policy
- [x] Wire hero + bottom CTA forms to Supabase via client-direct insert (anon key + RLS)
- [x] Validate email + map Postgres `23505` to a duplicate UX state
- [x] Push to GitHub (`Bineeyyy/easydata`)
- [x] Deploy to Vercel (`easydata-jet.vercel.app`)

## Done (2026-05-10)
- [x] Live countdown timer in hero with deadline-aware eyebrow
- [x] Sticky mobile waitlist CTA bar with hero/form-aware visibility
- [x] Copy: simplified benefits heading

## Today (2026-05-11) — pre-traffic polish
- [ ] Dynamic copyright year in `site-footer.tsx`
- [ ] OG image + richer `<Metadata>` (title template, canonical, og:image, twitter card)
- [ ] Favicon
- [ ] `/privacy` + `/terms` Greek stubs (GDPR-defensible, footer links wired)
- [ ] PostHog wire-up — env-keyed, graceful no-op when missing; track waitlist submit/duplicate/error, scroll depth (25/50/75/100), sticky CTA tap, exit modal show/dismiss/submit
- [ ] Exit-intent modal (desktop-only trigger)

## Next session
- [ ] Wire `easydata.gr` custom domain in Vercel (DNS, cert, www → apex redirect)
- [ ] Add Resend for transactional email (welcome confirmation when someone joins)
- [ ] Mobile nav: nav links currently hide below `lg` with no hamburger — add a drawer
- [ ] `sitemap.ts` + `robots.ts` (Next 16 file conventions)
- [ ] Decide: introduce a `(marketing)/layout.tsx` once `/privacy` and `/terms` exist
- [ ] First playwright/vitest setup once there's a non-trivial logic surface to cover

## Later
- [ ] Authenticated dashboard app (separate route group, real Supabase auth)
- [ ] Invoice-issuing flow (the actual product) — 3-tap UX from prototype
- [ ] Accountant monthly export (Excel + PDF, server-rendered)
- [ ] Reminder system for ΦΠΑ / ΕΦΚΑ deadlines (cron + Resend + push)
- [ ] AADE / myDATA integration — only after we resolve certified-provider path

## Open questions
- [ ] Resend: own-domain verification timeline (need MX/DKIM on `easydata.gr`)
- [ ] AADE myDATA: become a certified provider ourselves, or partner / proxy through one?
- [ ] Pricing locked at €9/mo in landing copy — is that the real launch price or a hero anchor?
- [ ] Where do we keep waitlist source-of-truth long-term? Stay on Supabase or sync to a CRM?
