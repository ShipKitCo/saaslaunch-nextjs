# Generate Testimonials Prompt

Use this to generate 3–5 realistic testimonials with the right structure.

Attach: testimonials.ts

---

I need 3–5 fictional but realistic customer testimonials for a SaaS landing page.

My product: [PRODUCT NAME] — [ONE SENTENCE DESCRIPTION]
Target customer: [JOB TITLE at COMPANY TYPE]

Each testimonial must follow this exact structure:
- Result: what improved (with a specific number)
- Action: what they did with the product that caused it
- Tone: direct, slightly tired, like someone who found a real solution — not marketing speak

Format each as a Testimonial object matching this TypeScript interface:
```ts
interface Testimonial {
  name: string;    // fictional but realistic full name
  role: string;    // "Job Title @ Company Name" — use fictional company names
  quote: string;   // 2–3 sentences max. Result first, then the action.
  initials: string; // first letters of first and last name
}
```

Rules:
- Never start a quote with "I" — it reads as too self-focused
- Include at least one metric per quote (%, days, hours, $, or a count)
- Company names should be plausible B2B SaaS company names — not real ones
- Titles should reflect actual buyer personas for this product type
- Mix seniority: one IC, one manager, one executive

Output the complete testimonials array, ready to paste into testimonials.ts.
