# Pricing Tiers Prompt

Use this to generate pricing tier names, feature rows, and price points for your product.

Attach: pricing.ts

---

I need to design pricing tiers for a SaaS product. Please generate a complete pricing.ts file.

My product: [PRODUCT NAME] — [ONE SENTENCE DESCRIPTION]
Pricing model: [e.g., per seat, per MAU, flat rate, usage-based]
Target segments: [e.g., "indie hackers, small teams, enterprises"]
Existing competitors and their prices: [e.g., "Competitor A: $29/mo, Competitor B: $99/mo"]

Please generate:

1. pricingTiers — 3 tiers with:
   - Meaningful names (not just "Starter/Pro/Enterprise" unless those fit)
   - Monthly and annual prices (annual = ~20% discount)
   - A description that speaks to the segment's specific situation
   - CTA labels that match what the segment expects

2. pricingFeatures — 10–14 rows that:
   - Start with the 3–4 most important limits (MAU, seats, events, etc.)
   - Include features that naturally gate higher tiers
   - Use "true/false" for boolean features, strings for limit values
   - Order rows so the starter tier looks generous but clearly limited

Rules:
- Price points should be defensible given competitor pricing
- Don't include features that don't exist — only real capabilities
- The "highlighted" tier should be the one with the best LTV for you, not just the middle one
- Annual billing note should show the actual annual total, not just the monthly equivalent

Output the complete pricing.ts file, ready to paste.
