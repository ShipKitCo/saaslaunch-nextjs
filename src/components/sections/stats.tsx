"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { type Stat, stats } from "@/content/stats";

function AnimatedCounter({ stat, inView }: { stat: Stat; inView: boolean }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const duration = 2000; // ms
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * stat.value);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(stat.value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  // Format the animated number
  const formatted = (() => {
    if (stat.prefix === "< ") return stat.display; // static for "< 2hrs"
    if (stat.suffix === "M+") {
      return `${stat.prefix ?? ""}${count.toFixed(1)}${stat.suffix}`;
    }
    if (Number.isInteger(stat.value)) {
      return `${stat.prefix ?? ""}${Math.round(count).toLocaleString()}${stat.suffix}`;
    }
    return `${stat.prefix ?? ""}${count.toFixed(1)}${stat.suffix}`;
  })();

  return (
    <motion.span
      className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      {inView ? formatted : `${stat.prefix ?? ""}0${stat.suffix}`}
    </motion.span>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="stats"
      ref={ref}
      className="border-y border-border bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            prefersReducedMotion ? (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {stat.display}
                </span>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ) : (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedCounter stat={stat} inView={inView} />
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
