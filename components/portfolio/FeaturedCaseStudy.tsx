'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
} from 'lucide-react';

import { caseStudies } from '@/data/portfolioData';

export default function FeaturedCaseStudy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
          className="text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Transforming Businesses

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              Through Digital Innovation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Explore how we help businesses achieve measurable growth
            through innovative technology solutions.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {caseStudies.map((study, index) => {
            const primaryMetric =
              study.metrics.primary.value;

            const secondaryMetric =
              study.metrics.secondary.value;

            return (
              <motion.div
                key={study.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-slate-200
                  bg-white/80
                  backdrop-blur-xl
                  shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                "
              >
                <div
                  className={`grid gap-10 lg:grid-cols-2 ${
                    index % 2 !== 0
                      ? 'lg:[&>*:first-child]:order-2'
                      : ''
                  }`}
                >
                                      {/* Content */}
                  <div className="p-8 lg:p-12">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        bg-gradient-to-r
                        from-blue-50
                        to-cyan-50
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-blue-700
                      "
                    >
                      {study.industry}
                    </span>

                    <h3 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                      {study.title}
                    </h3>

                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                      {study.description}
                    </p>

                    {/* Client & Duration */}
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Client
                        </p>

                        <p className="font-semibold text-slate-900">
                          {study.client}
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Duration
                        </p>

                        <p className="font-semibold text-slate-900">
                          {study.duration}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-slate-700
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      <div
                        className="
                          rounded-3xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-6
                        "
                      >
                        <TrendingUp className="h-8 w-8 text-cyan-600" />

                        <h4 className="mt-4 text-5xl font-black text-slate-900">
                          {primaryMetric}
                        </h4>

                        <p className="mt-2 text-slate-600">
                          {study.metrics.primary.label}
                        </p>
                      </div>

                      <div
                        className="
                          rounded-3xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-6
                        "
                      >
                        <Users className="h-8 w-8 text-violet-600" />

                        <h4 className="mt-4 text-5xl font-black text-slate-900">
                          {secondaryMetric}
                        </h4>

                        <p className="mt-2 text-slate-600">
                          {study.metrics.secondary.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Preview Side */}
                  <div className="relative p-8 lg:p-12">
                    <div
                      className="
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-slate-200
                        bg-white
                        shadow-xl
                      "
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="
                          h-[420px]
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-105
                        "
                      />
                    </div>

                    {/* Floating Goal Card */}
                    <div
                      className="
                        absolute
                        left-0
                        top-20
                        hidden
                        rounded-2xl
                        bg-white
                        p-5
                        shadow-xl
                        lg:block
                      "
                    >
                      <Target className="h-8 w-8 text-blue-600" />

                      <h5 className="mt-3 font-bold text-slate-900">
                        Business Goal
                      </h5>

                      <p className="text-sm text-slate-600">
                        {study.businessGoal}
                      </p>
                    </div>

                    {/* Floating Status Card */}
                    <div
                      className="
                        absolute
                        bottom-16
                        right-0
                        hidden
                        rounded-2xl
                        bg-white
                        p-5
                        shadow-xl
                        lg:block
                      "
                    >
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />

                      <h5 className="mt-3 font-bold text-slate-900">
                        Launch Status
                      </h5>

                      <p className="text-sm text-slate-600">
                        {study.launchStatus}
                      </p>
                    </div>
                  </div>
                </div>
                                {/* Bottom Story */}
                <div className="border-t border-slate-200 p-8 lg:p-12">
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <div
                        className="
                          inline-flex
                          rounded-xl
                          bg-red-50
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          text-red-600
                        "
                      >
                        Challenge
                      </div>

                      <p className="mt-4 leading-relaxed text-slate-600">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <div
                        className="
                          inline-flex
                          rounded-xl
                          bg-blue-50
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          text-blue-600
                        "
                      >
                        Solution
                      </div>

                      <p className="mt-4 leading-relaxed text-slate-600">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <div
                        className="
                          inline-flex
                          rounded-xl
                          bg-emerald-50
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          text-emerald-600
                        "
                      >
                        Results
                      </div>

                      <p className="mt-4 leading-relaxed text-slate-600">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      mt-10
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div>
                      <p className="text-sm text-slate-500">
                        Industry
                      </p>

                      <p className="font-semibold text-slate-900">
                        {study.industry}
                      </p>
                    </div>

                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        via-cyan-500
                        to-violet-500
                        px-8
                        py-4
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
                      "
                    >
                      View Full Case Study

                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}