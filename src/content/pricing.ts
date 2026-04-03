export interface PricingFeature {
  label: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface PricingTier {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualBilledAs?: string;
  description: string;
  cta: string;
  ctaVariant: "default" | "outline";
  highlighted?: boolean;
  badge?: string;
}

export const pricingFeatures: PricingFeature[] = [
  {
    label: "Monthly Active Users",
    starter: "500",
    pro: "5,000",
    enterprise: "Unlimited",
  },
  {
    label: "Events / month",
    starter: "1M",
    pro: "10M",
    enterprise: "Unlimited",
  },
  {
    label: "Data retention",
    starter: "30 days",
    pro: "12 months",
    enterprise: "Unlimited",
  },
  {
    label: "Cohort analysis",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Advanced",
  },
  { label: "Journey maps", starter: true, pro: true, enterprise: true },
  { label: "Predictive churn alerts", starter: false, pro: true, enterprise: true },
  { label: "CRM sync", starter: false, pro: true, enterprise: true },
  { label: "Slack alerts", starter: false, pro: true, enterprise: true },
  { label: "API access", starter: false, pro: true, enterprise: true },
  { label: "EU data residency", starter: false, pro: false, enterprise: true },
  { label: "Custom ML models", starter: false, pro: false, enterprise: true },
  { label: "SSO + SCIM", starter: false, pro: false, enterprise: true },
  { label: "Dedicated CSM", starter: false, pro: false, enterprise: true },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "For early-stage teams learning how their users move.",
    cta: "Get Started Free",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    monthlyPrice: "$49",
    annualPrice: "$39",
    annualBilledAs: "Billed as $468/yr",
    description: "For growing teams that need to predict churn, not react to it.",
    cta: "Start Free Trial",
    ctaVariant: "default",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "For enterprise SaaS with complex accounts and compliance requirements.",
    cta: "Contact Sales",
    ctaVariant: "outline",
  },
];
