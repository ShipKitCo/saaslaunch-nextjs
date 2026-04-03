"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { pricingFeatures as features, pricingTiers } from "@/content/pricing";

type Tier = "starter" | "pro" | "enterprise";

const tierKeys: Tier[] = ["starter", "pro", "enterprise"];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === false) {
    return <X className="mx-auto size-4 text-muted-foreground/50" />;
  }
  if (value === true) {
    return <CheckCircle className="mx-auto size-4 text-primary" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Priced for the stage you&apos;re in
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect in an afternoon. Start seeing value before your trial ends.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              onClick={() => setAnnual((prev) => !prev)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                annual
                  ? "border-primary bg-primary"
                  : "border-border bg-muted"
              }`}
            >
              <span
                className={`inline-block size-4 rounded-full bg-white shadow transition-transform ${
                  annual ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>

            <span
              className={`flex items-center gap-2 text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual
              {annual && (
                <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                  Save 20%
                </Badge>
              )}
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const key = tierKeys[i];
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            const showPerMonth = price !== "Custom";
            return (
              <Card
                key={tier.name}
                className={`flex flex-col ${tier.highlighted ? "relative border-primary ring-1 ring-primary" : ""}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-lg font-bold">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold">{price}</span>
                    {showPerMonth && (
                      <span className="mb-1 text-sm text-muted-foreground">/mo</span>
                    )}
                  </div>
                  {annual && tier.annualBilledAs && (
                    <p className="text-xs text-muted-foreground">{tier.annualBilledAs}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3 p-6">
                  <ul className="flex flex-col gap-2">
                    {features.map((f) => {
                      const val = f[key];
                      return (
                        <li key={f.label} className="flex items-center gap-3">
                          {val !== false ? (
                            <CheckCircle className="size-4 shrink-0 text-primary" />
                          ) : (
                            <X className="size-4 shrink-0 text-muted-foreground/40" />
                          )}
                          <span
                            className={`text-sm ${val === false ? "text-muted-foreground/50" : "text-foreground"}`}
                          >
                            {typeof val === "string"
                              ? `${f.label}: ${val}`
                              : f.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {/* CUSTOMIZE: Update href to your sign-up or contact URL */}
                  <Button
                    variant={tier.ctaVariant}
                    className={`w-full${tier.highlighted ? " bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                    render={<a href="#cta" />}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
