"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface DeliveryProcessProps {
  service: {
    process: string[];
  };
}

const processIcons = [
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
];

const processDescriptions = [
  "We begin by understanding your business objectives, target audience, technical requirements, and long-term vision to establish a clear project roadmap.",
  "Our experts define workflows, user experiences, technical architecture, and implementation strategy before development starts.",
  "Using agile methodologies and modern technologies, we build scalable and secure software with continuous collaboration.",
  "Comprehensive testing, optimization, security validation, and quality assurance ensure every release meets enterprise standards.",
  "After launch, we provide monitoring, maintenance, updates, and ongoing improvements for long-term business success.",
];

export default function DeliveryProcess({
  service,
}: DeliveryProcessProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#f3f7fb_100%)] py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-100/40 blur-[120px]" />
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
            Delivery Process
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Our Proven
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              Delivery Process
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Every project follows a structured and transparent workflow
            designed to ensure quality, predictability and long-term
            business success.
          </p>
        </motion.div>

        {/* Process */}

        <div className="mt-8 space-y-6">
                    {service.process.map((step, index) => {
            const Icon =
              processIcons[index] ??
              processIcons[processIcons.length - 1];

            const description =
              processDescriptions[index] ??
              "This stage ensures smooth collaboration, continuous improvement, and successful project delivery.";

            const reverse = index % 2 === 1;

            return (
              <motion.div
                key={step}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,.08)]"
              >
                {/* Top Accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />

                <div
                  className={`grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[170px_1fr] ${
                    reverse ? "lg:grid-cols-[1fr_170px]" : ""
                  }`}
                >
                  {/* Left Block */}

                  <div
                    className={`${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 transition-all duration-500 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-cyan-500">
                      <Icon className="h-12 w-12 text-blue-600 transition-all duration-500 group-hover:text-white" />

                      <span className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white text-sm font-bold text-blue-600 shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}

                  <div
                    className={`${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
                      {step}
                    </h3>

                    <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                      {description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {[
                        "Planning",
                        "Collaboration",
                        "Quality",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    
                  </div>
                </div>

                {/* Hover Glow */}

                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-blue-50/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}

          {/* Closing */}
                  </div>
      </div>
    </section>
  );
}