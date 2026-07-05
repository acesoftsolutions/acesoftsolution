'use client';

import { Eye, Target } from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const principles = [
  'Innovation-led delivery',
  'Scalable architecture',
  'Business-focused outcomes',
];

const cards = [
  {
    title: 'Our Mission',
    icon: Target,
    description:
      'To empower businesses through innovative software, intelligent automation and scalable digital solutions that accelerate growth and create lasting competitive advantage.',
    points: [
      'Build solutions that solve real business problems',
      'Improve operational speed through automation',
      'Deliver reliable products ready for long-term scale',
    ],
  },
  {
    title: 'Our Vision',
    icon: Eye,
    description:
      'To become a globally trusted technology partner known for innovation, reliability and delivering transformative digital experiences that shape the future of business.',
    points: [
      'Be a long-term partner for digital transformation',
      'Create future-ready technology ecosystems',
      'Set higher standards for quality and reliability',
    ],
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:76px_76px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-md border border-cyan-100 bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-700 shadow-sm">
              Mission & Vision
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              What drives everything{' '}
              <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                we do
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our mission defines how we deliver value today, while our vision
              guides the kind of technology partner we are building for the
              future.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {principles.map((item) => (
              <span
                key={item}
                className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <AnimatedSection
                key={card.title}
                direction={index === 0 ? 'left' : 'right'}
                className="h-full"
              >
                <div className="group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-100 sm:p-8 lg:p-10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5]" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] shadow-lg shadow-cyan-200">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <span className="rounded-md bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200">
                      {index === 0 ? 'Today' : 'Future'}
                    </span>
                  </div>

                  <h3 className="relative mt-8 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {card.title}
                  </h3>

                  <p className="relative mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {card.description}
                  </p>

                  <div className="relative mt-8 grid gap-3">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#12C7B5]" />
                        <p className="text-sm font-semibold leading-6 text-slate-700">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-auto pt-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                    <p className="mt-5 text-sm font-semibold leading-6 text-slate-500">
                      Built on clarity, accountability and measurable business
                      value.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}