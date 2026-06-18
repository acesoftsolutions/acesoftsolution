'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Lightbulb,
  Cog,
  CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface Props {
  portfolio: any;
}

export default function ChallengeSolution({
  portfolio,
}: Props) {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
              Challenge & Solution
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Transforming business challenges into
              measurable outcomes.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Every successful digital product begins with
              understanding the real business problem. Our
              team worked closely with stakeholders to
              identify challenges, define opportunities,
              and deliver a scalable solution.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-10">
              {/* Challenge */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shrink-0 relative z-10">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 flex-1">
                  <p className="text-sm font-medium text-red-600 mb-3">
                    THE CHALLENGE
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Identifying the Core Problem
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    {portfolio.challenge}
                  </p>
                </div>
              </motion.div>

              {/* Strategy */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 relative z-10">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 flex-1">
                  <p className="text-sm font-medium text-blue-600 mb-3">
                    OUR APPROACH
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Strategic Planning & Discovery
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    Through stakeholder workshops,
                    business analysis, and technical
                    discovery sessions, we developed a
                    roadmap focused on scalability,
                    performance, and long-term business
                    growth.
                  </p>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center shrink-0 relative z-10">
                  <Cog className="w-5 h-5 text-cyan-600" />
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8 flex-1">
                  <p className="text-sm font-medium text-cyan-600 mb-3">
                    THE SOLUTION
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Building a Scalable Digital Platform
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-lg">
                    {portfolio.solution}
                  </p>
                </div>
              </motion.div>

              {/* Result */}
              <motion.div
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0 relative z-10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="bg-slate-900 rounded-3xl p-8 flex-1 text-white">
                  <p className="text-sm font-medium text-emerald-400 mb-3">
                    THE OUTCOME
                  </p>

                  <h3 className="text-2xl font-bold mb-4">
                    Delivering Measurable Results
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-lg">
                    {portfolio.result}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}