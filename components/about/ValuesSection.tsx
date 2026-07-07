'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Shield, Lightbulb } from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    label: 'Quality First',
    description:
      'We deliver thoughtful, reliable and high-performing solutions with a strong focus on detail, usability and long-term value.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    label: 'Partnership',
    description:
      'We align every decision with our clients’ business goals, helping them grow faster, operate smarter and serve customers better.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    label: 'Trust',
    description:
      'We build lasting relationships through honest communication, transparent delivery and accountable decision-making.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    label: 'Future Ready',
    description:
      'We use modern technologies, creative thinking and practical strategy to solve complex business challenges with confidence.',
  },
];

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E0F7FF_0%,transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-md border border-cyan-100 bg-cyan-50 px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-700">
              Our Core Values
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              The principles behind every{' '}
              <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                solution we build
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our core values are not aspirational posters on a wall - they are the operating principles embedded into how we scope projects, write code, communicate with clients, and measure success. Every engagement at Ace Soft Solution is shaped by these four commitments.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition duration-300 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100 sm:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5]" />
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-100 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] shadow-lg shadow-cyan-200">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <span className="rounded-md bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200">
                      {value.label}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-2xl font-black tracking-tight text-slate-950">
                    {value.title}
                  </h3>

                  <p className="relative mt-4 text-base leading-7 text-slate-600">
                    {value.description}
                  </p>

                  <div className="relative mt-auto pt-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      Built into every engagement.
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}