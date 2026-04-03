export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "GitBranch",
    title: "Full Journey Capture",
    description:
      "Track every user action from anonymous first visit through signup, activation, and expansion. One snippet, complete visibility.",
  },
  {
    icon: "BarChart3",
    title: "Cohort Intelligence",
    description:
      "See exactly which acquisition channels produce users who stay. Compare any cohort across any dimension — feature, plan, region, or date.",
  },
  {
    icon: "Bell",
    title: "Predictive Churn Alerts",
    description:
      "Helios flags at-risk accounts 30 days before they cancel. Your CS team gets a reason, a risk score, and a suggested action.",
  },
  {
    icon: "Clock",
    title: "Time-to-Value Tracking",
    description:
      "Know the exact sequence of events that converts a trial into a paying customer. Optimize the path — not just the destination.",
  },
  {
    icon: "Users",
    title: "Account-Level Rollups",
    description:
      "B2B-ready from day one. See team-level health scores, seat utilization, and champion engagement across every account.",
  },
  {
    icon: "Layers",
    title: "Slack + CRM Sync",
    description:
      "Push churn alerts, expansion signals, and milestone events directly to Slack, HubSpot, or Salesforce. Helios fits the workflow your team already uses.",
  },
];
