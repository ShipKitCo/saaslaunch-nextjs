export const hero = {
  badge: "Now with Predictive Churn · Early Access",
  headline: "Your users are telling you",
  headlineHighlight: "why they leave.",
  body: "Helios captures every step of the customer journey — from first click to power user — and surfaces the exact moments where you're losing people. Stop guessing. Start knowing.",
  ctaPrimary: {
    label: "Start Free Trial",
    href: "#cta",
  },
  ctaSecondary: {
    label: "See how it works",
    href: "#product",
  },
  disclaimer: "No credit card required · 14-day trial · Cancel anytime",
} as const;

export const slides = [
  {
    src: "/images/hero-dashboard.png",
    alt: "Helios journey overview — conversion funnel and churn risk dashboard",
  },
  {
    src: "/images/feature-journey.png",
    alt: "Helios user journey map — signup to power user flow with drop-off analysis",
  },
  {
    src: "/images/feature-churn.png",
    alt: "Helios predictive churn — at-risk accounts flagged 30 days before they leave",
  },
] as const;
