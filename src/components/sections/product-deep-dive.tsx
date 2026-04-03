// Server component — animation wrappers from client components

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

interface DeepDiveSection {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageRight: boolean;
}

const sections: DeepDiveSection[] = [
  {
    title: "See the whole journey, not just the last click",
    description:
      "Most analytics tools show you where users came from. Helios shows you what they did after — every session, every feature touch, every moment they almost churned but didn't.",
    bullets: [
      "Automatic event capture with zero manual tagging required",
      "Session timeline links every action to a user, account, and cohort",
      "Retroactive analysis on historical data — no re-instrumentation needed",
    ],
    imageSrc: "/images/feature-journey.png",
    imageAlt: "Helios user journey map showing conversion funnel and drop-off attribution",
    imageRight: true,
  },
  {
    title: "Retention curves that actually tell you something",
    description:
      "Our cohort analysis goes beyond week-over-week retention. Slice by acquisition channel, onboarding path, plan tier, or any event — and see immediately which cohorts stay and which ones silently stop.",
    bullets: [
      "Compare cohorts across 40+ dimensions without writing a query",
      "Overlay product changes on retention curves to measure real impact",
      "Auto-surface the cohort with the highest 90-day retention for benchmarking",
    ],
    imageSrc: "/images/feature-cohorts.png",
    imageAlt: "Helios cohort retention grid — monthly cohorts tracked across 8 weeks",
    imageRight: false,
  },
  {
    title: "30 days notice before an account leaves",
    description:
      "Helios trains a churn model on your own data — not industry benchmarks. It learns which behavior patterns precede cancellation in your product, and flags accounts while there's still time to act.",
    bullets: [
      "Risk scores updated daily based on usage, billing, and support signals",
      "Suggested intervention routed to the right person — CSM, AE, or founder",
      "Tracks outcome of every intervention to improve model accuracy over time",
    ],
    imageSrc: "/images/feature-churn.png",
    imageAlt: "Helios predictive churn dashboard — 6 accounts flagged with risk scores and suggested actions",
    imageRight: true,
  },
];

export function ProductDeepDive() {
  return (
    <section id="product" className="bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {sections.map((section, i) => (
            <FadeIn key={section.title} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                section.imageRight ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Text side */}
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border shadow-lg">
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
