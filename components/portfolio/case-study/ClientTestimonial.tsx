'use client';

import { motion } from 'framer-motion';
import {
  Quote,
  TrendingUp,
  Building2,
  ArrowUpRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ClientTestimonial() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              Client Success Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Building long-term partnerships through
              measurable business results.
            </h2>
          </div>

          {/* Main Section */}
          <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="bg-white border border-slate-200 rounded-[32px] p-10">
                  <Building2 className="w-12 h-12 text-blue-600 mb-8" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    Client Feedback
                  </h3>

                  <p className="mt-5 text-slate-600 leading-relaxed">
                    Our focus extends beyond delivering
                    software. We help organizations
                    improve efficiency, drive growth, and
                    create sustainable competitive
                    advantages through technology.
                  </p>

                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                      Trusted Technology Partner
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7">
              <motion.div
                whileHover={{
                  y: -4,
                }}
                className="bg-white border border-slate-200 rounded-[32px] p-10 md:p-14"
              >
                <Quote className="w-16 h-16 text-blue-600 mb-8" />

                <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed">
                  "Ace Soft Solution demonstrated a deep
                  understanding of both technology and
                  business objectives. Their team
                  delivered a scalable solution that not
                  only met our requirements but created
                  measurable operational improvements
                  across the organization."
                </blockquote>

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-semibold text-slate-900">
                    Executive Leadership Team
                  </h4>

                  <p className="text-slate-500 mt-2">
                    Project Stakeholder
                  </p>
                </div>
              </motion.div>

              {/* Success Metrics */}
              <div className="grid md:grid-cols-3 gap-5 mt-6">
                <div className="bg-white border border-slate-200 rounded-3xl p-6">
                  <TrendingUp className="w-7 h-7 text-blue-600 mb-4" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    100%
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Client Satisfaction
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-6">
                  <TrendingUp className="w-7 h-7 text-cyan-600 mb-4" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    On-Time
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Delivery Success
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-6">
                  <TrendingUp className="w-7 h-7 text-violet-600 mb-4" />

                  <h3 className="text-3xl font-bold text-slate-900">
                    Enterprise
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Quality Standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-12 bg-slate-900 rounded-[32px] p-10 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white">
              More Than a Development Team
            </h3>

            <p className="mt-5 text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed">
              We partner with ambitious businesses to
              solve complex challenges, accelerate digital
              transformation, and build scalable products
              that deliver long-term value.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}