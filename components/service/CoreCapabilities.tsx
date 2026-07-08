"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface CoreCapabilitiesProps {
  service: {
    features: Feature[];
  };
}

export default function CoreCapabilities({ service }: CoreCapabilitiesProps) {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50/60 to-white" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
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
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            Core Capabilities
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Comprehensive Expertise
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              Across Every Stage
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From strategy and planning to engineering, deployment and
            optimization, we combine technical excellence with business
            expertise to deliver reliable digital solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,.10)]"
            >
              {/* Accent */}

              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />

              {/* Number */}

              <span className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Top */}

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-600 group-hover:to-cyan-500">
                  <CheckCircle2 className="h-8 w-8 text-blue-600 transition-all duration-500 group-hover:text-white" />
                </div>

               
              </div>

              {/* Content */}

              <div className="relative mt-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

              </div>

              {/* Glow */}

              <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-blue-50/70 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
