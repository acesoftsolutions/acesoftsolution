'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface Props {
  portfolio: any;
}

export default function ResultsMetrics({
  portfolio,
}: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="max-w-4xl">
            <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
              Results & Impact
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
              Tangible business outcomes that
              accelerated growth and performance.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Success was measured not only through
              technical delivery but through meaningful
              business improvements and long-term value
              creation.
            </p>
          </div>

          {/* Large Metrics */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="border-b border-slate-200 pb-8">
                <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                  Primary Impact
                </p>

                <h3 className="text-7xl md:text-8xl font-bold text-slate-900">
                  {portfolio.metrics.primary.value}
                </h3>

                <p className="text-xl text-slate-600 mt-4">
                  {portfolio.metrics.primary.label}
                </p>
              </div>
            </div>

            <div>
              <div className="border-b border-slate-200 pb-8">
                <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                  Secondary Impact
                </p>

                <h3 className="text-7xl md:text-8xl font-bold text-slate-900">
                  {portfolio.metrics.secondary.value}
                </h3>

                <p className="text-xl text-slate-600 mt-4">
                  {portfolio.metrics.secondary.label}
                </p>
              </div>
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Key Outcomes
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                'Improved operational efficiency',
                'Enhanced customer experience',
                'Created a scalable digital foundation',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Before After */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Before */}
              <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <p className="text-red-600 font-medium mb-4">
                  Before
                </p>

                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Business Challenges
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {portfolio.challenge}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  <ArrowRight className="text-blue-600" />
                </div>
              </div>

              {/* After */}
              <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 text-white">
                <p className="text-emerald-400 font-medium mb-4">
                  After
                </p>

                <h4 className="text-2xl font-bold mb-4">
                  Business Results
                </h4>

                <p className="text-slate-300 leading-relaxed">
                  {portfolio.result}
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <motion.div
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            className="mt-20 text-center max-w-4xl mx-auto"
          >
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-6" />

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              {portfolio.businessGoal}
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              The solution provided a strong foundation
              for future growth while helping the client
              achieve immediate measurable business
              improvements.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}