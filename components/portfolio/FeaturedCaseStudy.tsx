"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

import { caseStudies } from "@/data/portfolioData";

export default function FeaturedCaseStudy() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
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
            Client Success Stories
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
              Through Software Innovation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            See how our software development company helps businesses achieve
            measurable growth through innovative solutions.
          </p>
        </motion.div>

       {/*
  Drop this in place of your existing `<div className="mt-16 space-y-16">...</div>` block.
  Uses the same `caseStudies` data shape and the same imports you already have:
  motion, Link, TrendingUp, Users, Target, CheckCircle2, ArrowUpRight.
  No new dependencies required.
*/}
<div className="mt-16 space-y-10">
  {caseStudies.map((study, index) => {
    const primaryMetric = study.metrics.primary.value;
    const secondaryMetric = study.metrics.secondary.value;
    const isReversed = index % 2 !== 0;

    return (
      <motion.div
        key={study.id}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.06 }}
        className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
      >
        <div className="grid lg:grid-cols-2">
          {/* ================= Content ================= */}
          <div
            className={`flex flex-col justify-center p-8 lg:p-14 ${
              isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Eyebrow row */}
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
                {study.industry}
              </span>
              <span className="text-sm font-medium text-slate-400">
                {String(index + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
              {study.title}
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {study.description}
            </p>

            {/* Client & Duration — inline, no boxes, less visual noise */}
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 border-y border-slate-100 py-4 text-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400">Client</span>
                <span className="font-semibold text-slate-900">{study.client}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400">Duration</span>
                <span className="font-semibold text-slate-900">{study.duration}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700">{study.businessGoal}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">{study.launchStatus}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <TrendingUp className="h-6 w-6 text-cyan-600" />
                <h4 className="mt-3 text-4xl font-black leading-none text-slate-900">
                  {primaryMetric}
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  {study.metrics.primary.label}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <Users className="h-6 w-6 text-violet-600" />
                <h4 className="mt-3 text-4xl font-black leading-none text-slate-900">
                  {secondaryMetric}
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  {study.metrics.secondary.label}
                </p>
              </div>
            </div>
          </div>

          {/* ================= Image ================= */}
          <div
            className={`relative min-h-[320px] lg:min-h-full ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <img
              src={study.image}
              alt={study.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-950/0 lg:bg-gradient-to-r lg:from-slate-950/10 lg:via-transparent lg:to-transparent" />
          </div>
        </div>

        {/* ================= Bottom Story ================= */}
        <div className="border-t border-slate-200 bg-slate-50/60 p-8 lg:p-14">
          <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-slate-200">
            <div className="md:pr-8">
              <div className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-600">
                Challenge
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">
                {study.challenge}
              </p>
            </div>

            <div className="md:px-8">
              <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                Solution
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">
                {study.solution}
              </p>
            </div>

            <div className="md:pl-8">
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-600">
                Results
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">
                {study.result}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Industry</p>
              <p className="font-semibold text-slate-900">{study.industry}</p>
            </div>

            <Link
              href={`/portfolio/${study.slug}`}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]"
            >
              View Full Case Study
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
