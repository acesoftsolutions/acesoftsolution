'use client';

import {
  CheckCircle2,
  MonitorSmartphone,
  Smartphone,
  Database,
  Cloud,
  Brain,
  BarChart3,
  Settings,
  Layers3,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const solutions = [
  {
    icon: MonitorSmartphone,
    title: 'Custom Web Applications',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
  },
  {
    icon: Layers3,
    title: 'SaaS Platforms',
  },
  {
    icon: Database,
    title: 'ERP & CRM Systems',
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
  },
  {
    icon: Cloud,
    title: 'Cloud Applications',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboards',
  },
  {
    icon: Settings,
    title: 'Business Automation',
  },
];

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14">
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-slate-700
                bg-slate-900
                px-5
                py-2
                text-sm
                font-medium
                text-slate-300
              "
            >
              Industry Solutions
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
              "
            >
              Technology Solutions Built
              <span className="block text-blue-400">
                For Every Industry
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              From custom software and mobile
              applications to AI-powered platforms
              and cloud infrastructure, we deliver
              solutions that help organizations
              innovate, automate, and scale.
            </p>
          </div>

          {/* Solutions Grid */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[28px]
                    border
                    border-slate-800
                    bg-slate-900/70
                    p-7
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-slate-900
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-500/10
                    "
                  >
                    <Icon
                      className="
                        h-7
                        w-7
                        text-blue-400
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Content */}

          <div
            className="
              mt-16
              grid
              gap-8
              rounded-[32px]
              border
              border-slate-800
              bg-slate-900/60
              p-8
              lg:grid-cols-2
            "
          >
            <div>
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Designed For Modern Business Growth
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-slate-400
                "
              >
                Every solution is designed with
                scalability, security, performance,
                and long-term maintainability in
                mind, helping businesses adapt and
                grow in a rapidly changing market.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Tailored to industry-specific workflows',
                'Cloud-native and scalable architecture',
                'Enterprise-grade security standards',
                'Seamless integration with existing systems',
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
                      text-emerald-400
                    "
                  />

                  <span
                    className="
                      text-slate-300
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}