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
    <section className="relative overflow-hidden bg-white py-10 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E0F7FF_0%,transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:76px_76px] opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-md border border-blue-100 bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700 shadow-sm">
            Client Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            Transforming businesses through{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
              software innovation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            See how our software development company helps businesses achieve
            measurable growth through practical and scalable digital solutions.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6">
          {caseStudies.map((study, index) => {
            const primaryMetric = study.metrics.primary.value;
            const secondaryMetric = study.metrics.secondary.value;

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100 sm:p-6 lg:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100 opacity-0 blur-3xl transition group-hover:opacity-100" />

                <div className="relative grid gap-8 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_390px]">
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-md bg-blue-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
                        {study.industry}
                      </span>

                      <span className="text-sm font-bold text-slate-300">
                        {String(index + 1).padStart(2, '0')} /{' '}
                        {String(caseStudies.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 lg:text-4xl">
                      {study.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                      {study.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Client
                        </p>
                        <p className="mt-1 font-bold text-slate-900">
                          {study.client}
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Duration
                        </p>
                        <p className="mt-1 font-bold text-slate-900">
                          {study.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      <div>
                        <div className="inline-flex rounded-md bg-red-50 px-3 py-1.5 text-sm font-bold text-red-600">
                          Challenge
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="inline-flex rounded-md bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-600">
                          Solution
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <div className="inline-flex rounded-md bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                          Results
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/70">
                      <div className="aspect-[4/3]">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                        <span className="rounded-md border border-white/15 bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 backdrop-blur">
                          {study.launchStatus}
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-blue-700 shadow-lg">
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <TrendingUp className="h-6 w-6 text-cyan-600" />
                        <h4 className="mt-3 text-3xl font-black text-slate-950">
                          {primaryMetric}
                        </h4>
                        <p className="mt-1 text-sm leading-5 text-slate-500">
                          {study.metrics.primary.label}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <Users className="h-6 w-6 text-violet-600" />
                        <h4 className="mt-3 text-3xl font-black text-slate-950">
                          {secondaryMetric}
                        </h4>
                        <p className="mt-1 text-sm leading-5 text-slate-500">
                          {study.metrics.secondary.label}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-950 p-5">
                      <div className="flex items-start gap-3">
                        <Target className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                        <div>
                          <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
                            Business Goal
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/80">
                            {study.businessGoal}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 px-6 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
                    >
                      View Full Case Study
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}