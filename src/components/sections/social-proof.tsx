// Server component — no "use client" needed

import { logos } from "@/content/social-proof";

export function SocialProof() {
  return (
    <section
      id="social-proof"
      className="border-y border-border bg-muted/30 py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams at:
        </p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          />

          {/*
            The marquee div contains logos TWICE for a seamless infinite loop.
            animate-marquee is defined in globals.css and translates -50%.
          */}
          <div className="animate-marquee flex w-max gap-12 items-center">
            {/* CUSTOMIZE: Replace placeholder logos with your client logos in /public/logos/ */}
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-bold text-muted-foreground/50 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
