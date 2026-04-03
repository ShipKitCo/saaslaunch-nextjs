"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hero, slides } from "@/content/hero";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    if (!emblaApi) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "ArrowRight") emblaApi.scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pt-16"
    >
      {/* Subtle grid / glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/* Left column — copy */}
        <div className="flex flex-col justify-center gap-6">
          <Badge variant="outline" className="w-fit border-primary/40 text-primary">
            {hero.badge}
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headline}{" "}
            <span className="text-primary">{hero.headlineHighlight}</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.body}
          </p>

          <div className="flex flex-wrap gap-3">
            {/* CUSTOMIZE: Point these CTAs to your actual sign-up / demo URLs */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              render={<a href={hero.ctaPrimary.href} />}
            >
              {hero.ctaPrimary.label}
            </Button>
            <Button size="lg" variant="outline" render={<a href={hero.ctaSecondary.href} />}>
              {hero.ctaSecondary.label}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            {hero.disclaimer}
          </p>
        </div>

        {/* Right column — carousel */}
        <div className="flex flex-col gap-4">
          {/* Carousel viewport */}
          <div
            className="overflow-hidden rounded-xl border border-border shadow-2xl"
            ref={emblaRef}
            aria-label="Product screenshot carousel"
          >
            <div className="flex">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="relative min-w-0 flex-[0_0_100%]"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top"
                      priority={i === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2" role="tablist" aria-label="Carousel slides">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === selectedIndex}
                aria-label={`Slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
