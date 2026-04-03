"use client";
// "use client" is required here because the form uses an onSubmit event handler.
// To convert to a Server Action, replace onSubmit with a Next.js Server Action (action={myAction}).

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cta } from "@/content/cta";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Indigo glow gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {cta.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {cta.body}
        </p>

        {/* Email capture form */}
        {/* CUSTOMIZE: Wire up this form to your email capture service (Resend, ConvertKit, etc.) */}
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder={cta.emailPlaceholder}
            required
            aria-label="Email address"
            className="h-11 flex-1 text-base"
          />
          <Button
            type="submit"
            size="lg"
            className="h-11 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {cta.buttonLabel}
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          {cta.disclaimer}
        </p>
      </div>
    </section>
  );
}
