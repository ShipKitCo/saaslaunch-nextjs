# FAQ Generation Prompt

Use this to generate 6 FAQ entries for your product and target customer.

Attach: faq.ts

---

I need 6 FAQ entries for a SaaS landing page.

My product: [PRODUCT NAME] — [ONE SENTENCE DESCRIPTION]
Target customer: [JOB TITLE at COMPANY TYPE]
Biggest objections I hear: [list 2–3 real objections from sales calls or support tickets]
Main competitors prospects compare us to: [COMPETITOR NAMES]

Please generate 6 FAQ entries matching this TypeScript interface:
```ts
interface FAQ {
  value: string;   // kebab-case identifier, 1–3 words
  question: string; // the question as a prospect would actually ask it
  answer: string;   // 2–4 sentences, plain language
}
```

The 6 entries should cover:
1. Setup / time-to-value (how fast can I see results?)
2. Migration / switching cost (what about my existing tools?)
3. Use-case fit (does it work for my specific situation?)
4. Data privacy / compliance (is my data safe?)
5. Trial / pricing risk (what happens if I don't upgrade?)
6. One objection specific to my product type (use the objections I listed above)

Rules:
- Write answers the way a senior support engineer would — direct, specific, no fluff
- Never start an answer with "Great question!" or similar
- If the answer is "it depends", say what it depends on with a concrete example
- Competitor comparisons should be fair and honest — not dismissive
- Keep answers under 60 words each

Output the complete faqs array, ready to paste into faq.ts.
