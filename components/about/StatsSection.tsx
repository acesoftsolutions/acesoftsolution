"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Trophy, Award, Clock } from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted by growing businesses and enterprise teams.",
  },
  {
    icon: Trophy,
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successful web, mobile, ERP, AI and cloud solutions.",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Technology Experts",
    description: "Skilled professionals across modern technology stacks.",
  },
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "A decade of consistent innovation and delivery.",
  },
];

function Counter({
  value,
  suffix = "",
  duration = 1800,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          return;
        }

        let animationFrame: number;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(value * easedProgress));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E0F7FF_0%,transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-5 py-12 shadow-2xl shadow-slate-300/70 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0E4DB7]/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#12C7B5]/35 blur-3xl" />

          <div className="relative">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex rounded-md border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-200 backdrop-blur">
                  Company Impact
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Numbers that reflect{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                    excellence
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Our commitment to innovation, engineering quality, and genuine
                  client success has produced a track record that speaks
                  clearly. These are not vanity metrics - each number reflects a
                  real client, a delivered project, or a long-term relationship
                  built on trust and results.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <AnimatedSection key={stat.label} delay={index * 0.08}>
                    <div className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.12] sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#0E4DB7] shadow-lg shadow-black/10">
                          <Icon className="h-7 w-7" />
                        </div>

                        <span className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white/60">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-8 text-5xl font-black tracking-tight text-white">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </h3>

                      <p className="mt-3 text-lg font-bold text-white">
                        {stat.label}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {stat.description}
                      </p>

                      <div className="mt-auto pt-7">
                        <div className="h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/40 to-cyan-300/0" />
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
