'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const highlights = [
  'Free project consultation with a senior engineer',
  'Clear technical roadmap and realistic timeline',
  'Scalable product strategy tailored to your budget and goals',
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E0F7FF_0%,transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-5 py-12 shadow-2xl shadow-slate-300/70 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0E4DB7]/45 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#12C7B5]/35 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-200 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Let&apos;s Build Together
                </span>

                <h2 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                  Ready to transform your{' '}
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                    business?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  Whether you are launching a startup and need a robust MVP, scaling operations and need enterprise-grade software, implementing AI automation, or modernizing a legacy system - our team is ready to help you move with clarity, speed, and confidence.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-50"
                  >
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-7 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-black/10 backdrop-blur sm:p-6">
                <div className="rounded-xl bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
                    What happens next
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    Start with a focused discovery call
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                   We listen, we understand your goals, and we map out the right technical path forward - no generic proposals, no pressure.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#12C7B5]" />
                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-slate-950 p-4">
                    <p className="text-sm font-semibold leading-6 text-white">
                      From idea to launch, we help turn complex requirements into reliable, scalable software products that drive real business growth. 
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