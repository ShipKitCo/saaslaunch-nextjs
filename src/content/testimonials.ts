export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mia Okonkwo",
    role: "Head of Product @ Ferron",
    quote:
      "We discovered that users who activate three features in week one have 90% retention at six months. Helios found that pattern. Our old BI tool never would have.",
    initials: "MO",
  },
  {
    name: "Ethan Calloway",
    role: "CEO @ Tangent",
    quote:
      "We cut trial-to-paid time from 22 days to 14. The cohort view showed us exactly which onboarding step was killing conversion. Fixed it in a week.",
    initials: "EC",
  },
  {
    name: "Lena Park",
    role: "VP Customer Success @ Holloway",
    quote:
      "My team was drowning in manual account monitoring. Helios pings them when something actually matters. They've closed three expansion deals this quarter off churn alerts alone.",
    initials: "LP",
  },
];
