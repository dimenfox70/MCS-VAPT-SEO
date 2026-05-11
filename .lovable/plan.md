# MCS Landing Page — Implementation Plan

A single-page premium landing site for Meit Cyber Solution (MCS), focused on VAPT services and Free SEO Audit lead generation. Frontend-only (no backend) — forms and audit panel are interactive demos.

## Design System

Update `src/styles.css` with a "premium cyber SaaS" theme (oklch tokens, light + dark):
- Background: white / soft navy (`oklch(0.18 0.04 250)`)
- Primary: electric blue `oklch(0.62 0.20 250)`
- Accent: cyan glow `oklch(0.78 0.15 210)`
- Surface: glassmorphism (`backdrop-blur` + low-opacity bg + subtle border)
- Gradients: `--gradient-primary` (blue→cyan), `--gradient-hero` (navy→blue glow)
- Shadows: `--shadow-glow` (cyan), `--shadow-elegant` (deep blue)
- Radius scale, smooth transitions
- Add custom keyframes: `scan-line`, `pulse-glow`, `float`, `shimmer`, plus existing `fade-in`, `scale-in`

Default to light theme with dark navy hero band — avoids "hacker black" feel.

## Page Structure (single route `/`)

All sections live in `src/routes/index.tsx`, composed of small components in `src/components/landing/`:

1. **Navbar** (`Navbar.tsx`) — sticky, glass blur, MCS logo mark, anchor links, "Book Consultation" CTA
2. **Hero** (`Hero.tsx`) — headline, subheading, two CTAs, animated cyber-grid SVG background, floating shield/scanner visual with glow + scan-line animation
3. **Services** (`ServicesHighlight.tsx`) — two equal glass cards: VAPT + Free SEO Audit, with lucide icons (Shield, Bug, Network, Lock / Search, Gauge, Smartphone)
4. **SEO Audit Panel** (`SeoAuditPanel.tsx`) — URL input + "Generate Free Audit Report" button. On submit: simulated 2s scan animation, then dashboard with 6 metric cards (SEO Score, Speed, Mobile, Meta, Security Headers, Broken Links) using mocked deterministic values derived from URL hash. Premium sections (keyword analysis, competitors, full issues, recommendations) rendered with `blur-sm` + lock overlay + "Unlock Full Report" CTA
5. **Why Choose MCS** (`WhyChooseUs.tsx`) — 6 trust cards in grid
6. **Stats Counter** (`StatsBar.tsx`) — animated count-up on scroll (Businesses Protected, Websites Audited, Vulnerabilities Found, Avg Response Time)
7. **Testimonials + Logos** (`Trust.tsx`) — 3 testimonial cards + grayscale client logo placeholders + security badge chips (ISO/OWASP/CERT-In style placeholders)
8. **Contact** (`Contact.tsx`) — two-column: left = direct contact (call/email/schedule meeting buttons with icons); right = consultation form with all listed fields, validated with `zod` + `react-hook-form` (already in deps), shadcn Form components. Submit shows toast (sonner) — no backend wired
9. **Footer** (`Footer.tsx`) — minimal, cyber grid subtle bg, contact, quick links, social icons
10. **Floating CTA** (`FloatingCTA.tsx`) — bottom-right "Talk to Expert" pill button + sticky bottom bar on mobile

## Interactivity

- SEO audit panel: local state, deterministic mock results (no API), scan animation overlay
- Smooth scroll for anchor nav
- Stats counters animate via IntersectionObserver
- Form: zod validation, sonner toast on submit
- Floating CTA appears after scroll > 400px

## SEO / Head

Update root `__root.tsx` head defaults and add per-page `head()` in `index.tsx`:
- Title: "MCS — VAPT & SEO Audit | Meit Cyber Solution" (<60 chars)
- Meta description (<160 chars), og:title, og:description, og:type=website, twitter card
- Single H1 in hero, semantic `<section>` with aria-labels, alt text on visuals, JSON-LD `Organization` + `Service`

## Files to Create/Modify

Modify:
- `src/styles.css` — design tokens, keyframes, utility classes (glass, glow, scan)
- `src/routes/index.tsx` — replace placeholder, compose sections, add `head()`

Create under `src/components/landing/`:
- `Navbar.tsx`, `Hero.tsx`, `CyberGrid.tsx` (animated SVG bg), `ServicesHighlight.tsx`, `SeoAuditPanel.tsx`, `WhyChooseUs.tsx`, `StatsBar.tsx`, `Trust.tsx`, `Contact.tsx`, `Footer.tsx`, `FloatingCTA.tsx`

Reuse existing shadcn: `button`, `card`, `input`, `form`, `label`, `textarea`, `select`, `sonner`, `badge`.

## Out of Scope (this turn)

- No backend / Lovable Cloud (form is demo only — can be wired later if requested)
- No real SEO scanning API
- No separate routes; this is a single landing page
