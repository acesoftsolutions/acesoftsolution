'use client';

import {
  TrendingUp,
  Users,
  Rocket,
  Award,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const metrics = [
  {
    icon: TrendingUp,
    value: '120%',
    label: 'Revenue Growth',
  },

  {
    icon: Users,
    value: '50K+',
    label: 'Users Served',
  },

  {
    icon: Rocket,
    value: '45%',
    label: 'Productivity Increase',
  },

  {
    icon: Award,
    value: '100%',
    label: 'Client Satisfaction',
  },
];

export default function SuccessMetrics() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
              Business Impact
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Delivering Measurable Results
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Every solution we build is designed to
              create real business value and support
              long-term growth.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {metrics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-[32px]
                    p-8
                    text-center
                    hover:shadow-xl
                    transition-all
                  "
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-5xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Statement */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed">
              From startups to enterprise organizations,
              we help businesses streamline operations,
              improve customer experiences, and unlock
              new growth opportunities through
              technology.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}