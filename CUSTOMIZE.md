# CUSTOMIZE.md — SaaSLaunch Token Reference

This file is your complete guide to retheme and reconfigure SaaSLaunch. No CSS expertise required. Work through it top to bottom once and your site will look like yours, not a template.

---

## How it works

All visual design tokens live in one file: `src/app/globals.css`.

- The `:root` block controls **light mode**.
- The `.dark` block controls **dark mode**.

Change a value once in the right block and it applies everywhere that token is used — buttons, borders, cards, focus rings, text. You never need to hunt through individual components.

The template ships with the default theme set to **dark** (see [Dark Mode Default](#dark-mode-default) below to change this).

---

## Color Tokens

### How to read the values

Tokens use the `oklch` color space, which is perceptually uniform — adjusting lightness actually looks linear to the human eye. Each token has a hex comment next to it for reference. You can use either format; both work in modern browsers.

Useful tool: [oklch.com](https://oklch.com) — paste any hex color and get the `oklch` equivalent instantly.

---

### Light Mode Tokens (`:root` block in `globals.css`)

**`--primary`**
- What it controls: All interactive accent elements — primary buttons, active navigation dots, focus rings, badge backgrounds, pricing card highlight border, checklist icons.
- Current value: `oklch(0.585 0.233 277.117)` — Electric Indigo `#6366F1`
- To change to Emerald Green: `--primary: oklch(0.696 0.17 162.48); /* #10b981 */`
- To change to Rose: `--primary: oklch(0.645 0.2 15.34); /* #f43f5e */`

**`--primary-foreground`**
- What it controls: Text and icons that appear on top of `--primary` colored backgrounds (e.g., the label inside a primary button).
- Current value: `oklch(0.982 0 0)` — near-white `#FAFAFA`
- Only change this if you switch `--primary` to a light color that needs dark text on top.

**`--background`**
- What it controls: The page background color. Used on `<body>` and every section that has no explicit background override.
- Current value: `oklch(0.982 0 0)` — off-white `#FAFAFA`

**`--foreground`**
- What it controls: Default body text color. Headlines, paragraph text, nav links in their default state.
- Current value: `oklch(0.151 0.006 285)` — near-black `#18181B`

**`--card`**
- What it controls: The fill color of all `<Card>` components — pricing cards, testimonial cards, feature cards.
- Current value: `oklch(1 0 0)` — pure white `#FFFFFF`

**`--card-foreground`**
- What it controls: Text inside cards.
- Current value: `oklch(0.151 0.006 285)` — same near-black as `--foreground` `#18181B`

**`--muted`**
- What it controls: Backgrounds for subtle UI elements — section backgrounds that use `bg-muted/20`, toggle track backgrounds, secondary button hover states.
- Current value: `oklch(0.97 0 0)` — very light gray `#F4F4F5`

**`--muted-foreground`**
- What it controls: Subdued text — subheadings, nav links in default state, pricing descriptions, feature list secondary labels.
- Current value: `oklch(0.521 0.008 285)` — mid gray `#71717A`

**`--border`**
- What it controls: All dividing lines — card borders, navbar bottom border, hero carousel border, input outlines, separator lines.
- Current value: `oklch(0.912 0.003 285)` — light gray `#E4E4E7`

**`--ring`**
- What it controls: The focus-visible outline ring on interactive elements. Uses the same value as `--primary` so the focus color always matches the brand color.
- Current value: `oklch(0.585 0.233 277.117)` — same as `--primary` `#6366F1`

---

### Dark Mode Tokens (`.dark` block in `globals.css`)

The `.dark` block follows the same token names. Only the values differ — they are tuned for a near-black canvas.

**`--primary`** (dark): `oklch(0.634 0.228 277.117)` — brighter indigo `#818cf8` (lifted so it pops on dark backgrounds)

**`--primary-foreground`** (dark): `oklch(0.076 0 0)` — near-black, for text on top of the bright primary

**`--background`** (dark): `oklch(0.076 0.002 285)` — near-black `#0A0A0B`

**`--foreground`** (dark): `oklch(0.965 0.002 285)` — near-white `#F4F4F5`

**`--card`** (dark): `oklch(0.13 0.003 285)` — dark surface `#111115`

**`--card-foreground`** (dark): `oklch(0.965 0.002 285)` — near-white `#F4F4F5`

**`--muted`** (dark): `oklch(0.19 0.003 285)` — dark gray surface

**`--muted-foreground`** (dark): `oklch(0.521 0.008 285)` — mid gray `#71717A` (same as light mode)

**`--border`** (dark): `oklch(0.226 0.004 285)` — subtle dark border `#27272A`

**`--ring`** (dark): `oklch(0.634 0.228 277.117)` — matches dark `--primary`

---

### Border Radius

The `--radius` token scales all rounded corners across the template.

```css
/* src/app/globals.css — :root block */
--radius: 0.5rem;   /* default — 8px */
```

To make the design more rounded: `--radius: 0.75rem;`
To make it sharper / squarer: `--radius: 0.25rem;`

All derived radius tokens (`--radius-sm`, `--radius-md`, `--radius-lg`, etc.) scale automatically from this single value.

---

## Typography

### Changing the heading font

Fonts are loaded in `src/app/layout.tsx` via `next/font/google`. The template ships with three fonts:

```tsx
// src/app/layout.tsx — lines 6–19
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
```

The CSS token `--font-heading` in `globals.css` is set to `var(--font-geist-sans)`. To use a different heading font:

1. Import the new font in `layout.tsx` and add its CSS variable to the `<html>` className.
2. Change `--font-heading` in the `@theme inline` block of `globals.css` to point to the new variable.

Example — use Inter for headings:

```tsx
// layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// add "--font-inter" to the html className
```

```css
/* globals.css — @theme inline block */
--font-heading: var(--font-inter);
```

### Changing the body font

The body font is controlled by `--font-sans` in the `@theme inline` block, currently set to `var(--font-geist-sans)`. Follow the same two-step pattern above, pointing `--font-sans` at your new font variable.

### Font size scale

The template uses Tailwind's default font size scale — no overrides. To change heading sizes, update the Tailwind class on the element directly (e.g., change `text-4xl` to `text-3xl` on the `<h1>` in `hero.tsx`).

---

## Spacing and Layout

### Container max-width

All sections use `max-w-7xl` (80rem / 1280px) with horizontal padding `px-4 sm:px-6 lg:px-8`. To change the site width, do a find-and-replace of `max-w-7xl` across the `src/components/sections/` directory.

### Section vertical padding

All sections use `py-24 sm:py-32` (96px / 128px). To tighten spacing site-wide, find-and-replace `py-24 sm:py-32` with your preferred values (e.g., `py-16 sm:py-24`).

### Tailwind config

The project uses Tailwind CSS v4 with `@import "tailwindcss"` — there is no `tailwind.config.js` file. Custom theme extensions are handled via CSS variables in `globals.css` and the `@theme inline` block.

---

## Adding Your Logo

### Text logo (default)

Open `src/components/sections/navbar.tsx`, line 41:

```tsx
{/* CUSTOMIZE: Replace "SaaSLaunch" with your product name */}
SaaSLaunch
```

Replace `SaaSLaunch` with your product name.

### Image logo

1. Add your logo file to `/public/` (e.g., `/public/logo.svg`).
2. In `navbar.tsx`, replace the `<span>` on lines 39–43 with a `next/image` component:

```tsx
import Image from "next/image";

// Replace the <span> with:
<Image src="/logo.svg" alt="Your Product Name" width={120} height={32} priority />
```

Keep the wrapping `<a href="#hero">` in place — it is the accessible home link.

---

## Swapping Hero Screenshots

The hero carousel is in `src/components/sections/hero.tsx`. The three slides are defined in the `slides` array at the top of the file (lines 8–21). Each slide object controls the placeholder background color — you can delete these once you have real screenshots.

Inside the carousel render (lines 119–135), each slide renders this placeholder:

```tsx
{/* CUSTOMIZE: Replace this placeholder div with a next/image component pointing to /public/screenshots/ */}
<div
  role="img"
  aria-label={`Product screenshot ${i + 1} of ${slides.length}`}
  className={`flex aspect-[3/2] w-full items-center justify-center rounded-xl border-2 border-dashed border-border ${slide.bg}`}
>
  <p className="px-6 text-center text-sm text-muted-foreground">
    {slide.label}
  </p>
</div>
```

Replace that entire `<div>` block with:

```tsx
import Image from "next/image";

<Image
  src="/screenshots/screenshot-1.png"
  alt="Product screenshot showing the dashboard"
  width={1200}
  height={800}
  className="w-full rounded-xl"
  priority={i === 0}
/>
```

Repeat for slides 2 and 3 (`screenshot-2.png`, `screenshot-3.png`). The carousel wrapper handles the layout — you only need to swap the inner content.

---

## Placeholder Images

The following slots use placeholder `<div>` elements with dashed borders. Replace each with a `next/image` pointing to a real file in `/public/`.

| Section | Count | Recommended dimensions | Location in code |
|---|---|---|---|
| Hero carousel | 3 slides | 1200×800px (3:2 ratio) | `hero.tsx` lines 125–133, once per slide |
| Product Deep-Dive | 3 images | 1200×675px (16:9 ratio, `aspect-video`) | `product-deep-dive.tsx` — the `PlaceholderImage` component, line 56 |
| Testimonial avatars | 3 avatars | 48×48px | `testimonials.tsx` lines 65–67 — replace the `<div>` showing initials |

For testimonial avatars, replace the initials `<div>` with:

```tsx
import Image from "next/image";

<Image
  src="/avatars/alex-rivera.jpg"
  alt="Alex Rivera"
  width={48}
  height={48}
  className="size-10 rounded-full object-cover"
/>
```

---

## Changing the Pricing

Open `src/components/sections/pricing.tsx`.

### Feature checklist

The `features` array at the top of the file (lines 16–57) drives every row in the pricing table and every item in each tier's card list. Each item has this shape:

```tsx
interface Feature {
  label: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}
```

- `true` renders a green checkmark.
- `false` renders a muted X (feature not included).
- A string (e.g., `"50GB"`) renders that text inline with the label.

To add a feature row, append an object to the array:

```tsx
{ label: "Two-factor Auth", starter: false, pro: true, enterprise: true },
```

To remove a feature, delete its object from the array.

### Tier prices

Prices are hard-coded in the card JSX. Search for `"$0"`, `"$49"`, and `"$39"` (the annual Pro price) within the file to update them. The annual toggle uses a ternary: `{annual ? "$39" : "$49"}`.

### CTA button URLs

Each card's `<CardFooter>` has a `// CUSTOMIZE: Update href` comment. Update the `href` on the `<a>` element inside `render={<a href="#cta" />}` to point to your actual sign-up or contact URL.

---

## Changing the FAQ

Open `src/components/sections/faq.tsx`.

The `faqs` array (lines 11–48) is a list of objects with this shape:

```tsx
{
  value: "unique-key",   // used as the accordion item key — must be unique
  question: "Your question here?",
  answer: "Your answer here.",
}
```

To add a question, append a new object to the array.
To remove a question, delete its object.
To reorder questions, reorder the objects in the array.

The accordion allows one item open at a time and is collapsible — no configuration needed.

---

## Dark Mode Default

The default theme is set in `src/app/layout.tsx`, line 41:

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"   // ← change this
  enableSystem
  disableTransitionOnChange
>
```

Options:
- `"dark"` — always starts in dark mode (current default)
- `"light"` — always starts in light mode
- `"system"` — follows the operating system preference

The `enableSystem` prop means that if `defaultTheme` is `"system"`, the page will match the user's OS setting automatically. Set `enableSystem` to `false` to ignore OS preference entirely.

The theme toggle button in the navbar lets visitors switch between dark and light regardless of the default.
