'use client';

import Link from 'next/link';

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function IndustryCTA() {
  return (
    <section className="bg-white pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-slate-200
              bg-slate-50
              p-8
              md:p-12
              lg:p-16
            "
          >
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Content */}

              <div className="lg:col-span-7">
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
                  Let's Build Together
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
                  Ready to Build Solutions
                  <span className="block text-blue-600">
                    For Your Industry?
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-slate-600
                  "
                >
                  Whether you're a startup,
                  growing business, or enterprise
                  organization, our team can help
                  you design, develop, and scale
                  technology solutions that create
                  measurable business impact.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Industry-Specific Expertise',
                    'Scalable Technology Solutions',
                    'Dedicated Development Team',
                    'Long-Term Support & Growth',
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <CheckCircle2
                        className="
                          h-5
                          w-5
                          text-emerald-500
                        "
                      />

                      <span className="text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card */}

              <div className="lg:col-span-5">
                <div
                  className="
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    Start Your Digital Journey
                  </h3>

                  <p
                    className="
                      mt-3
                      text-slate-600
                    "
                  >
                    Schedule a consultation with
                    our experts and discover how
                    technology can help your
                    business achieve its goals.
                  </p>

                  <div className="mt-8 space-y-4">
                    <Link
                      href="/contact"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-6
                        py-3
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-blue-700
                      "
                    >
                      Start Your Project

                      <ArrowRight
                        size={18}
                      />
                    </Link>

                    <Link
                      href="/contact"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        px-6
                        py-3
                        font-medium
                        text-slate-700
                        transition-all
                        duration-300
                        hover:border-blue-200
                      "
                    >
                      Schedule Consultation

                      <CalendarDays
                        size={18}
                      />
                    </Link>
                  </div>

                  <div
                    className="
                      mt-8
                      border-t
                      border-slate-100
                      pt-6
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >
                      Trusted by businesses across
                      healthcare, fintech,
                      ecommerce, logistics,
                      education, startups, and
                      enterprise sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}