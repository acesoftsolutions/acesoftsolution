"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  CloudCog,
  Cpu,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface TechnologyEcosystemProps {
  service: {
    technologies: string[];
  };
}

const capabilityAreas = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Modern responsive interfaces focused on speed, accessibility and user experience.",
  },
  {
    icon: Database,
    title: "Backend",
    description:
      "Scalable APIs, databases and secure business logic powering enterprise applications.",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, CI/CD pipelines and automated deployments.",
  },
];

const techIcons = [
  Cpu,
  Code2,
  Database,
  CloudCog,
  ShieldCheck,
  Zap,
];

export default function TechnologyEcosystem({
  service,
}: TechnologyEcosystemProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40 py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50/60 to-white" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-[120px]" />
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
            duration: .6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            Technology Ecosystem
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Built With
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              Modern Technologies
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            We leverage modern frameworks, cloud platforms and engineering
            practices to build secure, scalable and future-ready digital
            solutions.
          </p>
        </motion.div>

        {/* Technology Badges */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {service.technologies.map((tech, index) => {
            const Icon = techIcons[index % techIcons.length];

            return (
              <motion.div
                key={tech}
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: .2,
                }}
                className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Icon className="h-4 w-4 text-blue-600 transition-all duration-300 group-hover:text-white" />
                </div>

                <span className="text-sm font-medium text-slate-700">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capability Cards */}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {capabilityAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Background Number */}
                <span className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-600 group-hover:to-cyan-500">
                  <Icon className="h-8 w-8 text-blue-600 transition-all duration-500 group-hover:text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="relative z-10 mt-8 space-y-3 border-t border-slate-100 pt-6">
                  {[
                    "Scalable Solutions",
                    "Modern Stack",
                    "Performance Optimized",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-600" />

                      <span className="text-sm font-medium text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-blue-50/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Technology Summary */}
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
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50/30"
        >
          <div className="grid gap-6 p-8 md:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            {/* Left */}

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Technology Stack
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                Modern Tools For
                <span className="block">
                  High-Performance Applications
                </span>
              </h3>

              <p className="mt-6 leading-8 text-slate-600">
                We carefully select technologies based on project goals,
                scalability requirements, performance, security, and
                maintainability. This ensures every solution remains reliable,
                future-ready, and easy to evolve as your business grows.
              </p>
            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: "Performance",
                },
                {
                  icon: ShieldCheck,
                  title: "Security",
                },
                {
                  icon: CloudCog,
                  title: "Cloud Ready",
                },
                {
                  icon: Zap,
                  title: "Scalability",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-500">
                      <Icon className="h-7 w-7 text-blue-600 transition-all duration-300 group-hover:text-white" />
                    </div>

                    <h4 className="mt-4 text-base font-semibold text-slate-900">
                      {item.title}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}