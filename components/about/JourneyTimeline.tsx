'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description:
      'Started with a vision to help businesses embrace digital transformation.',
  },
  {
    year: '2017',
    title: '100+ Projects Delivered',
    description:
      'Successfully delivered solutions across multiple industries.',
  },
  {
    year: '2020',
    title: 'Enterprise Expansion',
    description:
      'Expanded services to enterprise software and ERP systems.',
  },
  {
    year: '2023',
    title: 'AI Solutions Launch',
    description:
      'Introduced AI automation and intelligent business solutions.',
  },
  {
    year: '2025',
    title: 'Global Growth',
    description:
      'Serving clients across multiple countries and industries.',
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:76px_76px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-md border border-cyan-100 bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-700 shadow-sm">
              Our Journey
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              A decade of innovation, delivery and{' '}
              <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                consistent growth
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              From a focused software team to a trusted technology partner, our
              journey has been shaped by practical innovation and measurable
              client outcomes.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] md:left-1/2" />

          <div className="space-y-6 md:space-y-10">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection key={item.year} delay={index * 0.08}>
                  <div
                    className={`relative flex ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <div className="ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[46%]">
                      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100 sm:p-7 lg:p-8">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5]" />
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-100 opacity-0 blur-3xl transition group-hover:opacity-100" />

                        <div className="relative flex items-start justify-between gap-5">
                          <span className="inline-flex rounded-md bg-cyan-50 px-3 py-2 text-sm font-black text-cyan-700 ring-1 ring-cyan-100">
                            {item.year}
                          </span>

                          <span className="text-sm font-bold text-slate-300">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="relative mt-5 text-2xl font-black tracking-tight text-slate-950">
                          {item.title}
                        </h3>

                        <p className="relative mt-4 text-base leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-5 top-8 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#12C7B5] shadow-lg shadow-cyan-300/60 ring-4 ring-cyan-100 md:left-1/2" />

                    <div
                      className={`absolute top-10 hidden h-px w-[8%] bg-gradient-to-r from-cyan-200 to-transparent md:block ${
                        isLeft
                          ? 'left-[46%]'
                          : 'right-[46%] rotate-180'
                      }`}
                    />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}