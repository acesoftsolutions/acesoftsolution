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
  Eye,
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
    icon: Eye,
    title: 'Review',
    description: 'Client Feedback & Iteration',
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
    <section className="relative overflow-hidden bg-slate-950 py-10 lg:py-14">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            <Layers3 className="h-4 w-4" />
            Our Development Process
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            A Process Designed{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              To Deliver Exceptional Results
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            From initial discovery to post-launch growth, every stage is
            structured for quality, transparency, and maximum business impact.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition-all hover:border-cyan-500/30 hover:bg-white/5"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-10 lg:mt-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 lg:p-8 backdrop-blur-xl">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-white">The Ace Soft Solution Framework</h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                A proven 8-phase methodology that transforms ideas into scalable digital products.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="group rounded-2xl border border-white/10 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-slate-900/80"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="mb-1 text-xs font-mono tracking-widest text-cyan-500">
                      PHASE {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-2xl font-semibold text-white">{step.title}</h3>

                    <p className="mt-3 text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Final Statement */}
            <div className="mt-6 rounded-2xl border border-cyan-500/10 bg-cyan-500/[0.03] p-8 text-center">
              <p className="mx-auto max-w-2xl text-slate-300">
                Every project follows this structured roadmap to reduce risk,
                ensure quality, and deliver long-term business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}