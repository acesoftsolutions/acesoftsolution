'use client';

import Link from 'next/link';

import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { industries } from '@/data/industries';

export default function IndustriesGrid() {
  return (
    <section className="relative bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          {/* Header */}

          <div className="max-w-4xl">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-5
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              Industry Expertise
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                md:text-5xl
              "
            >
              Industry Knowledge That
              <span className="block text-blue-600">
                Drives Better Solutions
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Every industry has unique workflows,
              regulations, customer expectations,
              and operational challenges. We build
              tailored digital solutions that align
              with your industry's specific needs.
            </p>
          </div>

          {/* Grid */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                   href={`/industries/${industry.slug}`}
                  key={industry.title}
                  className="
                    group
                    flex
                    h-full
                    flex-col
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-xl
                  "
                >
                  {/* Top */}

                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                        transition-all
                        duration-300
                        group-hover:bg-blue-100
                      "
                    >
                      <Icon
                        className="
                          h-7
                          w-7
                          text-blue-600
                        "
                      />
                    </div>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      Industry
                    </span>
                  </div>

                  {/* Content */}

                  <div className="mt-7 flex-1">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {industry.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {industry.description}
                    </p>
                  </div>

                  {/* Features */}

                  <div className="mt-6 space-y-2">
                    {[
                      'Custom Solutions',
                      'Scalable Architecture',
                      'Industry Best Practices',
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <CheckCircle2
                          className="
                            h-4
                            w-4
                            text-emerald-500
                          "
                        />

                        <span
                          className="
                            text-sm
                            text-slate-600
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      border-t
                      border-slate-100
                      pt-5
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-blue-600
                      "
                    >
                      Explore Industry
                    </span>

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        text-slate-400
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-blue-600
                      "
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}