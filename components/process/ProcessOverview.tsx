'use client';

import {
  BrainCircuit,
  MessagesSquare,
  Workflow,
  Handshake,
  CheckCircle2,
} from 'lucide-react';

const principles = [
  {
    icon: BrainCircuit,
    title: 'Discovery Driven',
    description:
      'Deep business understanding before development begins.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    description:
      'Regular updates and complete project visibility.',
  },
  {
    icon: Workflow,
    title: 'Agile Execution',
    description:
      'Flexible development cycles with continuous improvement.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description:
      'Ongoing support, optimization, and growth strategies.',
  },
];

export default function ProcessOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Card */}
          <div className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Why Our Process Works
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
              Built For
              <span className="block text-cyan-600">
                Consistency & Excellence
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Great digital products are not created through random execution.
              They are built through a structured process that aligns business
              objectives, user needs, and technical excellence.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our framework ensures every project moves forward with clarity,
              accountability, and measurable business outcomes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Clear project roadmap',
                'Transparent collaboration',
                'Reduced project risks',
                'Scalable technology decisions',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  Every stage is carefully designed to maximize quality,
                  efficiency, and long-term business value.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Core Principles
              </span>

              <h3 className="mt-3 text-3xl font-bold text-slate-900">
                The Foundation Of Every Project
              </h3>
            </div>

            <div className="space-y-5">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-5 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="mb-2 text-sm font-semibold text-cyan-600">
                        0{index + 1}
                      </div>

                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Framework Card */}
        <div className="mt-10 rounded-[32px] border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-cyan-50 p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                Strategic Delivery Framework
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                More Than Development,
                <span className="block text-cyan-600">
                  A Complete Business Solution
                </span>
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                We combine strategy, design, development, quality assurance,
                deployment, and ongoing support into a unified process that
                helps businesses launch with confidence and scale efficiently.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Business Strategy',
                'Quality Assurance',
                'Risk Management',
                'Continuous Growth',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}