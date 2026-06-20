'use client';

import Link from 'next/link';

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Globe,
  TrendingUp,
  Layers3,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import Counter from '@/components/shared/Counter';

interface IndustryHeroProps {
  industry: any;
}

const trustPoints = [
  'Enterprise Security',
  'Cloud Native',
  'AI-Driven Solutions',
  '24/7 Support',
];

export default function IndustryHero({
  industry,
}: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#07111F]">
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/15 blur-[140px]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)]
          bg-[size:72px_72px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <AnimatedSection>
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* Left Content */}

            <div className="lg:col-span-7">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-blue-300
                "
              >
                <Sparkles className="h-4 w-4" />
                {industry.hero.badge}
              </div>

              <h1
                className="
                  mt-8
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-white
                  md:text-5xl
                  xl:text-6xl
                "
              >
                {industry.title}
                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-300
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Software Development
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-slate-400
                  md:text-xl
                "
              >
                {industry.hero.description}
              </p>

              {/* Trust Pills */}

              <div className="mt-10 flex flex-wrap gap-3">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-900/60
                      px-4
                      py-2
                      transition-all
                      duration-300
                      hover:border-blue-500/40
                    "
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-blue-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-blue-500
                    hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]
                  "
                >
                  Discuss Your Project

                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    rounded-2xl
                    border
                    border-slate-700
                    bg-slate-900/50
                    px-7
                    py-4
                    font-semibold
                    text-slate-200
                    transition-all
                    duration-300
                    hover:border-blue-500/40
                    hover:bg-slate-800
                  "
                >
                  View Case Studies
                </Link>
              </div>

              {/* Trust Row */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-6
                  text-sm
                  text-slate-400
                "
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Enterprise Security
                </div>

                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  Agile Delivery
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-400" />
                  Global Delivery
                </div>
              </div>
            </div>

            {/* Right Dashboard */}

            <div className="lg:col-span-5">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-slate-900
                  via-slate-900
                  to-slate-950
                  p-8
                  backdrop-blur-xl
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Industry Snapshot
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      Digital Excellence
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-500/10
                    "
                  >
                    <Layers3 className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                {/* Dynamic Industry Stats */}

                <div className="mt-8 space-y-4">
                  {industry.hero.stats.map(
                    (stat: any, index: number) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-slate-800
                          bg-slate-800/40
                          px-5
                          py-4
                          transition-all
                          duration-300
                          hover:border-blue-500/30
                        "
                      >
                        <span className="text-slate-300">
                          {stat.label}
                        </span>

                        <span
                          className="
                            text-xl
                            font-bold
                            text-white
                          "
                        >
                          {stat.value}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* KPI Grid */}

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-800/40
                      p-5
                    "
                  >
                    <TrendingUp className="mb-3 h-5 w-5 text-blue-400" />

                    <div className="text-3xl font-bold text-white">
                      <Counter end={98} suffix="%" />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Success Rate
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-800
                      bg-slate-800/40
                      p-5
                    "
                  >
                    <ShieldCheck className="mb-3 h-5 w-5 text-cyan-400" />

                    <div className="text-3xl font-bold text-white">
                      <Counter end={24} suffix="/7" />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Support
                    </p>
                  </div>
                </div>

                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-56
                    w-56
                    rounded-full
                    bg-blue-500/20
                    blur-[120px]
                  "
                />
              </div>
            </div>
          </div>

       
        </AnimatedSection>
      </div>
    </section>
  );
}