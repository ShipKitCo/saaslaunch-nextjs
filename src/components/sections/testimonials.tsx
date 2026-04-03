// Server component — animation wrappers imported from client components

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The teams that stopped guessing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Over 6,200 SaaS teams use Helios to understand what happens after
            the sale — and what to do about it.
          </p>
        </FadeIn>

        {/* Testimonial cards — stagger on scroll */}
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
            <Card className="flex flex-col gap-4 p-6 h-full">
              <CardContent className="p-0 flex flex-col gap-4">
                {/* Quote */}
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* CUSTOMIZE: Replace avatar placeholder with real photo — 48×48px */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
