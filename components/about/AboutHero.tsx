'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

const stats = [
  {
    value: '250+',
    label: 'Projects Delivered',
    detail: 'Across web, mobile, ERP and cloud platforms',
  },
  {
    value: '150+',
    label: 'Happy Clients',
    detail: 'Startups, SMEs and enterprise teams',
  },
  {
    value: '10+',
    label: 'Years Experience',
    detail: 'Building reliable digital products since 2014',
  },
];

const highlights = [
  'Custom Software Development',
  'AI Automation',
  'ERP Solutions',
  'Cloud Technologies',
];

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC] pt-12 pb-20 lg:pt-18 lg:pb-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,#E0F7FF_0%,transparent_38%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            {/* Content */}
            <div>
              <span className="inline-flex items-center rounded-md border border-cyan-100 bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
                About ACE SOFT SOLUTION
              </span>

              <h1 className="mt-7 max-w-4xl text-3xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-4xl xl:text-[2.9rem]">
                Ace Soft Solution - A Software Development Company Built on a Decade of Delivering
                <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                   Real Business Impact
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Since 2016, We help startups, SMEs, and enterprises move from idea to scalable, secure digital product with speed, precision, and confidence - backed by 10+ years of engineering excellence.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-slate-950 px-7 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[#0E4DB7]"
                >
                  Start a Project
                </a>

                <a
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#12C7B5]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Info Panel */}
            <div className="relative">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/80">
                <div className="rounded-md border border-slate-100 bg-slate-50 p-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Company Snapshot
                      </p>
                      <h2 className="mt-1 text-2xl font-black text-slate-950">
                        Trusted Technology Partner
                      </h2>
                    </div>

                    <div className="rounded-md bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                      Active
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3 className="text-base font-bold text-slate-900">
                              {item.label}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {item.detail}
                            </p>
                          </div>

                          <p className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-4xl font-black text-transparent">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-md bg-slate-950 p-5">
                    <p className="text-sm font-semibold text-cyan-300">
                      Our Focus
                    </p>
                    <p className="mt-2 text-lg font-bold leading-snug text-white">
                      Designing reliable digital systems that help businesses
                      work faster, scale smarter and grow with confidence.
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