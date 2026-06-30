'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  Briefcase,
  Calendar,
  Rocket,
  TrendingUp,
  Users,
  Target,
  ArrowUpRight,
} from 'lucide-react';

interface Props {
  portfolio: any;
}

export default function CaseStudyHero({ portfolio }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-12 pb-20">
      {/* Background accents — all light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.10),transparent_40%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_30%,transparent_100%)]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Back */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Split header: text left, image right — equal height, compact */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left column — copy + meta, light panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.12)] p-7 lg:p-9"
          >
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide">
                {portfolio.industry}
              </span>

              <h1 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                {portfolio.title}
              </h1>

              <p className="mt-4 text-[15px] text-slate-600 leading-relaxed">
                {portfolio.description}
              </p>
            </div>

            {/* Meta list */}
            <div className="mt-6 divide-y divide-slate-100 border-t border-b border-slate-100">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Client</span>
                </div>
                <span className="text-slate-900 font-semibold text-sm">
                  {portfolio.client}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Briefcase className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm">Industry</span>
                </div>
                <span className="text-slate-900 font-semibold text-sm">
                  {portfolio.industry}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Calendar className="w-4 h-4 text-violet-600" />
                  <span className="text-sm">Duration</span>
                </div>
                <span className="text-slate-900 font-semibold text-sm">
                  {portfolio.duration}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2.5 text-slate-500">
                  <Rocket className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm">Status</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {portfolio.launchStatus}
                </span>
              </div>
            </div>

            {/* Business goal */}
            <div className="mt-6 flex items-start gap-3">
              <Target className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
              <p className="text-slate-700 leading-relaxed text-[15px]">
                <span className="text-slate-400 uppercase tracking-widest text-xs font-medium block mb-1">
                  Business Goal
                </span>
                {portfolio.businessGoal}
              </p>
            </div>
          </motion.div>

          {/* Right column — image, same height as left panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative min-h-[320px]"
          >
            <div className="relative h-full overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)]">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              <Link
                href={portfolio.liveUrl || '#'}
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors shadow-lg border border-slate-200"
              >
                View Live
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Impact strip — light, full-width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 rounded-[28px] bg-white border border-slate-200 px-8 py-10 grid sm:grid-cols-2 gap-8 sm:gap-4 relative overflow-hidden shadow-[0_20px_60px_-30px_rgba(15,23,42,0.10)]"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cyan-100/60 blur-3xl" />

          <div className="relative flex items-center gap-5 sm:border-r sm:border-slate-100 sm:pr-8">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                Primary Impact
              </p>
              <h3 className="text-3xl font-bold text-slate-900 leading-none">
                {portfolio.metrics.primary.value}
              </h3>
              <p className="text-slate-500 text-sm mt-1.5">
                {portfolio.metrics.primary.label}
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-5">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                Secondary Impact
              </p>
              <h3 className="text-3xl font-bold text-slate-900 leading-none">
                {portfolio.metrics.secondary.value}
              </h3>
              <p className="text-slate-500 text-sm mt-1.5">
                {portfolio.metrics.secondary.label}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust line */}
        <div className="mt-6 rounded-[20px] border border-slate-200 bg-white px-8 py-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>Enterprise Grade Architecture</span>
          <span className="text-slate-300">•</span>
          <span>Scalable Cloud Infrastructure</span>
          <span className="text-slate-300">•</span>
          <span>Modern User Experience</span>
          <span className="text-slate-300">•</span>
          <span>Business Growth Focused</span>
        </div>
      </div>
    </section>
  );
}