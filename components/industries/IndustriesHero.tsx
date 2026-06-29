'use client';

import Link from 'next/link';

import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import Counter from '@/components/shared/Counter';

const industries = [
  'Healthcare',
  'FinTech',
  'Retail & eCommerce',
  'Education',
  'Transportation',
  'Real Estate',
];

const highlights = [
  'Custom Software',
  'AI Solutions',
  'Cloud Applications',
  'Digital Transformation',
];

const stats = [
  {
    value: 250,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Clients Worldwide',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Industries Served',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Retention',
  },
];

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120]">
      {/* Background Effects */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <AnimatedSection>
          <div className="grid items-center gap-16 lg:grid-cols-12">
            {/* Left Content */}

            <div className="lg:col-span-7">
              <span
                className="
                  inline-flex
                  items-center
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
                Industries We Serve
              </span>

              <h1
                className="
                  mt-8
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  md:text-5xl
                  xl:text-6xl
                "
              >
                Building Software Solutions
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Across Industries
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-400
                "
              >
               As a software development company, we partner with startups, enterprises, healthcare organizations, fintech companies, logistics providers, and retailers to build scalable solutions that accelerate growth and digital transformation.
              </p>

              {/* Highlights */}

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800/60
                      px-4
                      py-2
                    "
                  >
                    <CheckCircle2
                      className="
                        h-4
                        w-4
                        text-emerald-400
                      "
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-300
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-500
                  "
                >
                  Start Your Project

                  <ArrowRight
                    size={18}
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-800/50
                    px-6
                    py-3
                    font-medium
                    text-slate-200
                    transition-all
                    duration-300
                    hover:border-slate-500
                  "
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right Card */}

            <div className="lg:col-span-5">
              <div
                className="
                  rounded-[32px]
                  border
                  border-slate-800
                  bg-slate-900/70
                  p-8
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-blue-400
                  "
                >
                  Industry Expertise
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Delivering Solutions
                  For Modern Businesses
                </h3>

                <div className="mt-8 space-y-3">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-800/50
                        px-4
                        py-3
                      "
                    >
                      <span className="text-slate-300">
                        {industry}
                      </span>

                      <CheckCircle2
                        className="
                          h-5
                          w-5
                          text-emerald-400
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}

          <div
            className="
              mt-20
              grid
              gap-6
              rounded-[32px]
              border
              border-slate-800
              bg-slate-900/60
              p-8
              backdrop-blur-xl
              md:grid-cols-4
            "
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3
                  className="
                    text-5xl
                    font-bold
                    text-white
                  "
                >
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-400
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}