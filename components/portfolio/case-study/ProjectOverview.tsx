'use client';

import {
  Building2,
  Briefcase,
  Clock3,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface Props {
  portfolio: any;
}

export default function ProjectOverview({
  portfolio,
}: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                Project Overview
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Building a scalable digital platform that
                delivers measurable business outcomes.
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {portfolio.overview ||
                    portfolio.description}
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team partnered closely with{' '}
                  {portfolio.client} to identify
                  operational challenges, define growth
                  opportunities, and build a modern
                  digital solution aligned with their
                  long-term business objectives.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-8">
                  Client Snapshot
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-cyan-400 mt-1" />

                    <div>
                      <p className="text-sm text-slate-400">
                        Client
                      </p>

                      <p>{portfolio.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Briefcase className="w-5 h-5 text-cyan-400 mt-1" />

                    <div>
                      <p className="text-sm text-slate-400">
                        Industry
                      </p>

                      <p>{portfolio.industry}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock3 className="w-5 h-5 text-cyan-400 mt-1" />

                    <div>
                      <p className="text-sm text-slate-400">
                        Duration
                      </p>

                      <p>{portfolio.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Rocket className="w-5 h-5 text-cyan-400 mt-1" />

                    <div>
                      <p className="text-sm text-slate-400">
                        Launch Status
                      </p>

                      <p>{portfolio.launchStatus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Goal */}
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-50 via-cyan-50 to-violet-50 border border-slate-200">
            <p className="text-sm uppercase tracking-wider text-blue-700 mb-3">
              Business Goal
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {portfolio.businessGoal}
            </h3>
          </div>

          {/* Outcomes */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <p className="text-sm text-slate-500 mb-3">
                Primary Outcome
              </p>

              <h3 className="text-5xl font-bold text-slate-900">
                {portfolio.metrics.primary.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {portfolio.metrics.primary.label}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <p className="text-sm text-slate-500 mb-3">
                Secondary Outcome
              </p>

              <h3 className="text-5xl font-bold text-slate-900">
                {portfolio.metrics.secondary.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {portfolio.metrics.secondary.label}
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <p className="text-sm text-slate-400 mb-3">
                Final Result
              </p>

              <p className="text-lg leading-relaxed">
                {portfolio.result}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Services Delivered
            </h3>

            <div className="flex flex-wrap gap-4">
              {portfolio.services?.map(
                (
                  service: string,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white"
                  >
                    <ArrowUpRight className="w-4 h-4 text-blue-600" />

                    <span className="text-slate-700">
                      {service}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}