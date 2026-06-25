'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Layers3,
  Search,
  Target,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Requirements & Research',
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'Roadmap & Planning',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'UI & UX Experience',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Build & Integrate',
  },
  {
    icon: ShieldCheck,
    title: 'Testing',
    description: 'Quality Assurance',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deployment & Release',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Support & Scale',
  },
];

export default function ProcessHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 pb-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            <Layers3 className="h-4 w-4" />
            Our Development Process
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
            A Process Designed
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              To Deliver Exceptional Results
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            From initial discovery to post-launch growth, every stage of our
            workflow is structured to maximize quality, transparency, and
            business impact.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400"
            >
              Start Your Project

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Process Journey Canvas */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-12">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-white">
                  The Ace Soft Solution Framework
                </h2>

                <p className="mt-3 text-slate-400">
                  A proven methodology that transforms ideas into scalable
                  digital solutions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-7 w-7" />
                      </div>

                      <div className="mb-2 text-sm font-medium text-cyan-400">
                        Phase {index + 1}
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Statement */}
              <div className="mt-10 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-6 text-center">
                <p className="mx-auto max-w-3xl text-slate-300">
                  Every engagement follows a structured roadmap focused on
                  reducing risk, improving delivery efficiency, and ensuring
                  long-term business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}