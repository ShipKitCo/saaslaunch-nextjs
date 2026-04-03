export interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  display: string; // The full formatted string shown after animation
}

export const stats: Stat[] = [
  {
    value: 6200,
    suffix: "+",
    label: "SaaS teams on Helios",
    display: "6,200+",
  },
  {
    value: 41,
    suffix: "%",
    label: "Average reduction in trial-to-paid time",
    display: "41%",
  },
  {
    value: 30,
    suffix: " days",
    label: "Average churn warning lead time",
    display: "30 days",
  },
  {
    prefix: "$",
    value: 3.8,
    suffix: "M",
    label: "Expansion revenue attributed by Helios customers last quarter",
    display: "$3.8M",
  },
];
