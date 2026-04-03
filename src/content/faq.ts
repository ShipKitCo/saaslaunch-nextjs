export interface FAQ {
  value: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    value: "instrumentation",
    question: "How long does it take to set up tracking?",
    answer:
      "Most teams are seeing live data within one afternoon. You install a single JavaScript snippet, and Helios auto-captures page views, clicks, form completions, and API calls. Manual event tagging is optional — not required.",
  },
  {
    value: "existing-analytics",
    question: "We already use Mixpanel / Amplitude. Why switch?",
    answer:
      "You don't have to. Helios is built to work alongside your existing tools. What it adds is the churn prediction layer and account-level rollups that event-based tools don't do well. Many teams run Helios in parallel, then consolidate once they see the difference.",
  },
  {
    value: "b2b",
    question: "Does it work for B2B products with multiple seats per account?",
    answer:
      "Yes — B2B is the primary use case. Helios groups individual user events into account-level health scores, tracks seat utilization, identifies which users are champions versus inactive, and surfaces accounts where a key user has gone quiet.",
  },
  {
    value: "privacy",
    question: "How does Helios handle GDPR and data privacy?",
    answer:
      "Helios is GDPR and CCPA compliant. All data is encrypted in transit and at rest. EU customers can opt into EU-only data residency. We never sell or share your user data, and deletion requests are processed within 72 hours.",
  },
  {
    value: "trial",
    question: "What happens after the 14-day trial?",
    answer:
      "Your data stays intact and your integrations keep running. If you don't upgrade, your account moves to the free tier with a 500 monthly active user limit. No data is deleted for 90 days after a trial ends.",
  },
  {
    value: "accuracy",
    question: "How accurate is the churn prediction?",
    answer:
      "Accuracy varies by product and data volume, but customers with 6+ months of historical data typically see 78–85% precision on high-risk flags. The model improves continuously — every intervention outcome you record makes the next prediction sharper.",
  },
];
