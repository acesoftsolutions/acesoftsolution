'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  BarChart3,
  Workflow,
  Layers3,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface Props {
  image: string;
  title: string;
}

export default function ProjectGallery({ image, title }: Props) {
  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.07),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_38%)]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <AnimatedSection>
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium">
                <Sparkles size={14} />
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

          {/* Main content: image left (medium size) + highlights right, stacked */}
          <div className="grid lg:grid-cols-12 gap-6 mt-14 items-start">
            {/* Showcase image — medium, sticky-ish, not full width */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-[340px] object-cover"
                  />
                </div>

                {/* Product Experience copy under the image */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Product Experience
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Every screen and workflow was carefully
                    crafted to improve usability, simplify
                    operations, and deliver a seamless
                    experience across desktop and mobile
                    devices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights — 2x2 grid + enterprise card, on the right */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Monitor className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Modern Interface
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Clean, responsive, and intuitive user
                    experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Analytics Driven
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Real-time insights for smarter business
                    decisions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                    <Workflow className="w-5 h-5 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Automated Workflows
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Reduced manual effort through process
                    automation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <Layers3 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Scalable Architecture
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Built to support future growth and
                    expansion.
                  </p>
                </motion.div>
              </div>

              {/* Enterprise Ready card — full width under the 2x2 grid */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-5 bg-slate-900 rounded-3xl p-7 text-white flex items-center gap-6 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="shrink-0 w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center relative">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="relative">
                  <h4 className="text-lg font-semibold mb-1">
                    Enterprise Ready
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    Optimized for performance, scalability,
                    security, and long-term business growth.
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