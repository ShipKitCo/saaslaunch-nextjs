# SaaSLaunch — Next.js 16 SaaS Landing Page Template

> **Purchased this template?** Download the full source from your Gumroad receipt and follow the Quick Start below.
>
> **Don't have it yet?** [Get it on Gumroad →](https://shipkitco.gumroad.com/l/rmwryv)

---

A production-ready, dark-mode-first SaaS landing page built with Next.js 16 App Router, Tailwind CSS, shadcn/ui, and Framer Motion. 11 sections, fully responsive, ships in hours not weeks.

---

## What's included

11 production-ready sections:

| Section | Notes |
|---|---|
| Navbar | Dark/light mode toggle, mobile menu |
| Hero | Live product screenshot carousel (auto-advance + keyboard nav) |
| Social Proof | Logo marquee strip |
| Feature Grid | Icon + copy cards |
| Product Deep-Dive | Full-width feature walkthrough |
| Stats | Animated counters on scroll |
| Testimonials | Card grid with avatars |
| Pricing | 3-tier table, monthly/annual toggle |
| FAQ | Accordion |
| CTA | Email capture with success state |
| Footer | Links, social icons, copyright |

---

## Quick Start

**Step 1 — Install dependencies**

```bash
npm install
```

**Step 2 — Run the dev server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Step 3 — Customize**

See **[CUSTOMIZE.md](CUSTOMIZE.md)** for the full retheme guide. The three fastest wins:

- **Primary color** → `src/app/globals.css` → update `--primary`
- **Brand name** → global find/replace `SaaSLaunch` → your product name
- **Copy** → `src/app/page.tsx` → all section content in one file

**Step 4 — Deploy**

```bash
npm run build
vercel deploy
```

Vercel detects Next.js automatically. For Netlify/Render/Railway: build command `npm run build`, output `.next`.

---

## AI Prompts

The `ai-prompts/` folder has 6 prompts for generating section copy with Claude or ChatGPT:

| File | Generates |
|---|---|
| `01-rebrand.md` | Full rebrand plan |
| `02-copy-rewrite.md` | Section copy for your product |
| `03-generate-testimonials.md` | Testimonial cards |
| `04-pricing-tiers.md` | Pricing tier names, features, copy |
| `05-faq.md` | FAQ questions and answers |
| `06-add-section.md` | New section component code |

---

## Tech Stack

- **Framework** — Next.js 16 App Router
- **Styling** — Tailwind CSS + shadcn/ui
- **Animations** — Framer Motion
- **Fonts** — Geist (via `next/font`)
- **Icons** — Lucide React
- **Deploy** — Vercel (zero config)

---

## Support

- **Customization:** [CUSTOMIZE.md](CUSTOMIZE.md)
- **Bugs:** [Open an issue](https://github.com/ShipKitCo/saaslaunch-nextjs/issues)
- **Purchase support:** Reply to your Gumroad receipt email

---

Made by [ShipKitCo](https://shipkitco.gumroad.com)
