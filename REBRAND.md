# Rebrand This Template in 30 Minutes Using AI

All text content lives in `src/content/`. You never need to touch a component file to rebrand this template.

---

## What's in `src/content/`

| File | What it controls |
|------|-----------------|
| `site.ts` | Product name, tagline, brand color, social handles |
| `hero.ts` | Headline, subhead, badge text, CTA labels, screenshot slides |
| `features.ts` | Feature names, descriptions, icon names |
| `stats.ts` | Stats strip — numbers, labels, descriptions |
| `testimonials.ts` | Quotes, names, titles, company names |
| `pricing.ts` | Tier names, prices, feature rows |
| `faq.ts` | Questions and answers |
| `cta.ts` | Bottom CTA headline, body copy, button label |
| `social-proof.ts` | Logo strip company names |
| `navbar.ts` | Navigation links |
| `footer.ts` | Footer link groups, tagline, social URLs |

---

## Step-by-Step Rebrand with Claude

### Step 1 — Open the rebrand prompt
Open `ai-prompts/01-rebrand.md`. Fill in your product details at the top.

### Step 2 — Give Claude the content files
In Claude (claude.ai or Claude Code), paste:
- The filled-in prompt from `ai-prompts/01-rebrand.md`
- The contents of the content files you want to change

Claude will return complete replacement files ready to paste.

### Step 3 — Paste the new content
Replace each content file with Claude's output. The changes propagate everywhere automatically — no component files needed.

### Step 4 — Preview
```bash
npm install   # first time only
npm run dev
```
Open `http://localhost:3000` and review your rebranded template.

### Step 5 — Replace product images (optional)
The hero and feature sections use images from `public/images/`. Replace them with:
- Your own product screenshots, or
- Run `node scripts/render-product-graphics.js` after updating the render script for your UI

### Step 6 — Update the accent color (optional)
Open `src/app/globals.css` and change the `--primary` HSL values.
Update `tailwind.config.ts` to match.

---

## Other AI prompts in `ai-prompts/`

| Prompt | Use it when... |
|--------|---------------|
| `02-copy-rewrite.md` | You want to rewrite copy for a completely different niche |
| `03-generate-testimonials.md` | You need fresh testimonials with specific results |
| `04-pricing-tiers.md` | You want to redesign the pricing structure |
| `05-faq.md` | You need FAQ entries for a new product type |
| `06-add-section.md` | You want to add a section that doesn't exist yet |

---

## Total time with AI: 20–30 minutes
