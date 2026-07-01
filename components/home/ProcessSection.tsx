"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Requirements Analysis",
    description:
      "We deep-dive into your business goals, target users, technical challenges, and project requirements to build a solid, strategy-aligned solution foundation.",
    icon: Search,
    gradient:
      "from-blue-600 via-cyan-500 to-sky-500",
    glow:
      "shadow-blue-500/20",
    accent:
      "before:bg-cyan-500",
  },
  {
    number: "02",
    title: "Strategy & Project Planning",
    description:
      "We define a clear project roadmap, detailed scope, realistic timelines, the right technology stack, and a phased execution strategy built for predictable delivery.",
    icon: Lightbulb,
    gradient:
      "from-violet-600 via-fuchsia-500 to-pink-500",
    glow:
      "shadow-fuchsia-500/20",
    accent:
      "before:bg-fuchsia-500",
  },
  {
    number: "03",
    title: "UI/UX Design & Prototyping",
    description:
      "We craft intuitive, visually compelling user interfaces and interactive prototypes focused on maximizing engagement, usability, and conversion performance.",
    icon: PenTool,
    gradient:
      "from-emerald-600 via-teal-500 to-cyan-500",
    glow:
      "shadow-emerald-500/20",
    accent:
      "before:bg-emerald-500",
  },
  {
    number: "04",
    title: "Development & Engineering",
    description:
      "We build scalable, secure, and high-performance software using modern tech stacks, clean code practices, and agile sprint-based development cycles.",
    icon: Code2,
    gradient:
      "from-orange-500 via-amber-500 to-yellow-400",
    glow:
      "shadow-orange-500/20",
    accent:
      "before:bg-orange-500",
  },
  {
    number: "05",
    title: "Testing, Launch & Deployment",
    description:
      "We conduct rigorous QA testing, performance optimization, and seamless deployment followed by dedicated go-live support to ensure a flawless launch.",
    icon: Rocket,
    gradient:
      "from-indigo-600 via-sky-500 to-cyan-500",
    glow:
      "shadow-indigo-500/20",
    accent:
      "before:bg-indigo-500",
  },
  {
    number: "06",
    title: "Growth, Support & Optimization",
    description:
      "We provide continuous maintenance, performance analytics, feature enhancements, and strategic scaling support to drive long-term growth and maximize ROI.",
    icon: TrendingUp,
    gradient:
      "from-rose-600 via-pink-500 to-fuchsia-500",
    glow:
      "shadow-rose-500/20",
    accent:
      "before:bg-rose-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-14">

      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/30 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* ========================= HEADER ========================= */}

        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              Our Process
            </motion.span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl xl:text-6xl">
              A Structured Process
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Engineered For Results
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              We follow a transparent, milestone-driven development process that
              ensures every project is delivered on time, within budget, and to
              the highest standard.
            </p>
          </div>
        </AnimatedSection>

        {/* ====================== DESKTOP TIMELINE ====================== */}

        <div className="relative mt-16 hidden lg:block">

          {/* Main Timeline */}

          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">

            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-xl" />

            {/* Line */}

            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 via-teal-400 to-violet-500" />

          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

                            return (
                <AnimatedSection key={step.number} delay={index * 0.08}>
                  <div
                    className={`relative flex items-center ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className="absolute left-1/2 z-20 -translate-x-1/2"
                    >
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-cyan-100">
                        <div
                          className={`absolute inset-1 rounded-full bg-gradient-to-br ${step.gradient}`}
                        />

                        <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400/20" />

                        <span className="relative text-sm font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className={`group relative w-[calc(50%-46px)] overflow-hidden rounded-[30px] border border-slate-200 bg-white ${
                        isEven ? "mr-16" : "ml-16"
                      }`}
                    >
                      {/* Hover Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-all duration-500 group-hover:opacity-[0.05]`}
                      />

                      {/* Accent */}
                      <div
                        className={`absolute left-0 top-0 h-full w-1.5 ${step.accent}`}
                      />

                      {/* Glow */}
                      <div
                        className={`absolute inset-0 rounded-[30px] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 ${step.glow}`}
                      />

                      <div className="relative p-8">

                        {/* Top */}
                        <div className="flex items-start justify-between">

                          <motion.div
                            whileHover={{
                              rotate: 8,
                              scale: 1.08,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className={`flex h-18 w-18 items-center justify-center rounded-[22px] bg-gradient-to-br ${step.gradient} shadow-lg`}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </motion.div>

                          <span
                            className={`rounded-full bg-gradient-to-r ${step.gradient} px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white`}
                          >
                            STEP {step.number}
                          </span>
                        </div>

                        {/* Title */}

                        <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                          {step.title}
                        </h3>

                        {/* Divider */}

                        <div
                          className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r ${step.gradient}`}
                        />

                        {/* Description */}

                        <p className="mt-5 leading-8 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

                {/* ====================== MOBILE LAYOUT ====================== */}

        <div className="mt-12 grid gap-5 lg:hidden">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <AnimatedSection key={step.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-all duration-500 group-hover:opacity-[0.06]`}
                  />

                  {/* Left Accent */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1.5 ${step.accent}`}
                  />

                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 ${step.glow}`}
                  />

                  <div className="relative p-6">

                    {/* Top */}

                    <div className="flex items-start gap-4">

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </motion.div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-3">

                          <span
                            className={`rounded-full bg-gradient-to-r ${step.gradient} px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white`}
                          >
                            STEP {step.number}
                          </span>

                          <div
                            className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${step.gradient}`}
                          />
                        </div>

                        <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}

                    <div
                      className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r ${step.gradient}`}
                    />

                    {/* Description */}

                    <p className="mt-5 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

                {/* ========================= CTA ========================= */}

        <AnimatedSection className="mt-14">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            {/* Background Decoration */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-100/60 blur-3xl" />

              <div className="absolute -right-16 -bottom-16 h-60 w-60 rounded-full bg-violet-100/60 blur-3xl" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.06),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.06),transparent_45%)]" />

            </div>

            <div className="relative flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">

              {/* Left */}

              <div className="max-w-2xl">

                <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-cyan-700 uppercase">
                  End-to-End Delivery
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                  Transparent Process.
                  <span className="block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Measurable Results.
                  </span>
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  From discovery through deployment and continuous support, we
                  keep every milestone transparent, collaborative, and focused
                  on delivering measurable business outcomes.
                </p>
              </div>

              {/* Right */}

              <div className="relative flex justify-center">

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 opacity-20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-700 via-cyan-500 to-teal-500 px-10 py-8 text-center text-white shadow-2xl">

                  <div className="text-5xl font-extrabold tracking-tight">
                    6
                  </div>

                  <div className="mt-2 text-lg font-semibold">
                    Delivery Steps
                  </div>

                  <div className="mt-1 text-sm text-white/85">
                    Strategy → Launch
                  </div>

                  <div className="mx-auto mt-6 h-px w-16 bg-white/30" />

                  <div className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                    Proven Framework
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}