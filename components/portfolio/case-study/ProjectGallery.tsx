'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  BarChart3,
  Workflow,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface Props {
  image: string;
  title: string;
}

export default function ProjectGallery({
  image,
  title,
}: Props) {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium">
                Solution Showcase
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Designed to deliver exceptional user
                experiences and business efficiency.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg text-slate-600 leading-relaxed">
                The platform combines modern design,
                intuitive workflows, and enterprise-grade
                functionality to create a seamless digital
                experience.
              </p>
            </div>
          </div>

          {/* Platform Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <Monitor className="w-8 h-8 text-blue-600 mb-4" />

              <h3 className="font-semibold text-slate-900 mb-2">
                Modern Interface
              </h3>

              <p className="text-slate-600 text-sm">
                Clean, responsive, and intuitive user
                experience.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <BarChart3 className="w-8 h-8 text-cyan-600 mb-4" />

              <h3 className="font-semibold text-slate-900 mb-2">
                Analytics Driven
              </h3>

              <p className="text-slate-600 text-sm">
                Real-time insights for smarter business
                decisions.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <Workflow className="w-8 h-8 text-violet-600 mb-4" />

              <h3 className="font-semibold text-slate-900 mb-2">
                Automated Workflows
              </h3>

              <p className="text-slate-600 text-sm">
                Reduced manual effort through process
                automation.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-6">
              <Layers3 className="w-8 h-8 text-emerald-600 mb-4" />

              <h3 className="font-semibold text-slate-900 mb-2">
                Scalable Architecture
              </h3>

              <p className="text-slate-600 text-sm">
                Built to support future growth and
                expansion.
              </p>
            </div>
          </div>

          {/* Main Showcase */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-12"
          >
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={image}
                alt={title}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bottom Summary */}
          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Product Experience
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg">
                Every screen and workflow was carefully
                crafted to improve usability, simplify
                operations, and deliver a seamless
                experience across desktop and mobile
                devices. The result is a platform that
                balances powerful functionality with an
                intuitive user experience.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <ArrowUpRight className="w-6 h-6 text-cyan-400 mb-4" />

                <h4 className="text-xl font-semibold mb-3">
                  Enterprise Ready
                </h4>

                <p className="text-slate-300 leading-relaxed">
                  Optimized for performance, scalability,
                  security, and long-term business growth.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}