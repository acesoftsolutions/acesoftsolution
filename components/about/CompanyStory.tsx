'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

const milestones = [
  {
    value: '2014',
    label: 'Founded',
  },
  {
    value: '500+',
    label: 'Projects Delivered',
  },
  {
    value: '150+',
    label: 'Clients Served',
  },
];

const capabilities = [
  'Custom software platforms tailored to your business processes',
  'ERP systems and end-to-end business automation ',
  'AI-powered digital workflows and intelligent automation',
  'Cloud-ready product architecture built for scale and security',
];

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Left Side */}
          <AnimatedSection direction="left" className="h-full">
            <div className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
              <div className="relative min-h-[330px] flex-1">
                <img
                  src="/aboutimage.png"
                  alt="ACE SOFT SOLUTION team collaborating on digital products"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="max-w-sm rounded-xl border border-white/15 bg-white/95 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
                      Since 2016
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-slate-950">
                      Technology With Purpose, Built For Measurable Impact
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Ace Soft Solution was founded in 2014 with a clear, focused mission: helping businesses harness the power of technology to grow faster, operate smarter, and deliver better customer experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid border-t border-slate-200 sm:grid-cols-3">
                {milestones.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r last:border-r-0"
                  >
                    <p className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-3xl font-black text-transparent">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side */}
          <AnimatedSection direction="right" className="h-full">
            <div className="flex h-full min-h-[620px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit rounded-md border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-cyan-700">
                Our Story
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                From a Focused Software Team to a Trusted  {" "}
                <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                 Global Technology Partner
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Over the past decade, we have delivered 500+ projects spanning custom web applications, mobile apps, SaaS platforms, enterprise ERP systems, AI-powered workflows, and cloud-ready architectures. Every solution we build is driven by one question: does it create measurable business value? This commitment to outcome-first engineering is what separates Ace Soft Solution from traditional software vendors - and why 98% of our clients stay with us long term.
                </p>

                

              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-16 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">
                      ✓
                    </span>
                    <span className="text-sm font-bold leading-5 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-xl bg-slate-950 p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
                    What drives us
                  </p>
                  <p className="mt-2 text-lg font-bold leading-7 text-white">
                    Building reliable software systems that help teams work better, scale faster, and grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}