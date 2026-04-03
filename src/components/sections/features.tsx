// Server component — animation wrappers are client components imported here

import {
  GitBranch,
  Users,
  BarChart3,
  Bell,
  Clock,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { features } from "@/content/features";

const iconMap: Record<string, LucideIcon> = {
  GitBranch,
  Users,
  BarChart3,
  Bell,
  Clock,
  Layers,
};

export function Features() {
  return (
    <section id="features" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the moment after the sale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Acquisition tools tell you how users arrive. Helios tells you
            what happens next — and what to do when things go wrong.
          </p>
        </FadeIn>

        {/* Feature grid — cards stagger-reveal on scroll */}
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <Card className="gap-3 p-6 h-full">
                  <CardHeader className="p-0">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
