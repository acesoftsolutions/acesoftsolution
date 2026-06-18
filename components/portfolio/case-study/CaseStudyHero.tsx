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
} from 'lucide-react';

interface Props {
  portfolio: any;
}

export default function CaseStudyHero({
  portfolio,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_30%)]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Back */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium">
            {portfolio.industry}
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            {portfolio.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {portfolio.description}
          </p>
        </motion.div>

        {/* Meta Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Building2 className="w-5 h-5 text-blue-600 mb-3" />
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Client
            </p>
            <p className="text-slate-900 font-semibold mt-1">
              {portfolio.client}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Briefcase className="w-5 h-5 text-cyan-600 mb-3" />
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Industry
            </p>
            <p className="text-slate-900 font-semibold mt-1">
              {portfolio.industry}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Calendar className="w-5 h-5 text-violet-600 mb-3" />
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Duration
            </p>
            <p className="text-slate-900 font-semibold mt-1">
              {portfolio.duration}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <Rocket className="w-5 h-5 text-emerald-600 mb-3" />
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Status
            </p>
            <p className="text-slate-900 font-semibold mt-1">
              {portfolio.launchStatus}
            </p>
          </div>
        </div>

        {/* Impact Section */}
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <Target className="w-6 h-6 text-cyan-400 mb-4" />

            <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">
              Business Goal
            </p>

            <h3 className="text-xl font-semibold">
              {portfolio.businessGoal}
            </h3>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <TrendingUp className="w-6 h-6 text-blue-600 mb-4" />

            <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">
              Primary Impact
            </p>

            <h3 className="text-4xl font-bold text-slate-900">
              {portfolio.metrics.primary.value}
            </h3>

            <p className="text-slate-600 mt-2">
              {portfolio.metrics.primary.label}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <Users className="w-6 h-6 text-violet-600 mb-4" />

            <p className="text-sm uppercase tracking-widest text-slate-500 mb-3">
              Secondary Impact
            </p>

            <h3 className="text-4xl font-bold text-slate-900">
              {portfolio.metrics.secondary.value}
            </h3>

            <p className="text-slate-600 mt-2">
              {portfolio.metrics.secondary.label}
            </p>
          </div>
        </div>

        {/* Showcase Image */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-10"
        >
          <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src={portfolio.image}
              alt={portfolio.title}
              width={1600}
              height={900}
              priority
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Static Trust Line */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <span>Enterprise Grade Architecture</span>
          <span>•</span>
          <span>Scalable Cloud Infrastructure</span>
          <span>•</span>
          <span>Modern User Experience</span>
          <span>•</span>
          <span>Business Growth Focused</span>
        </div>
      </div>
    </section>
  );
}