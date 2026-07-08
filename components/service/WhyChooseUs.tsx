"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Layers3,
  Users,
  Headphones,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Quality",
    description:
      "We follow industry best practices, secure development standards, and rigorous quality assurance to deliver reliable, scalable, and future-ready digital solutions.",
  },
  {
    icon: Rocket,
    title: "Fast & Agile Delivery",
    description:
      "Using agile methodologies and streamlined workflows, we accelerate development cycles while maintaining exceptional quality and complete project transparency.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Our solutions are built with modern architecture that easily adapts to growing users, business requirements, and future technology advancements.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our multidisciplinary experts combine strategy, UI/UX, engineering, cloud technologies, and business insights to deliver measurable business value.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "Beyond deployment, we provide proactive maintenance, continuous improvements, security updates, and technical support to ensure ongoing success.",
  },
  {
    icon: TrendingUp,
    title: "Business-Focused Results",
    description:
      "Every project is aligned with your business objectives to improve productivity, customer engagement, operational efficiency, and sustainable growth.",
  },
];

export default function WhyChooseService() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-[120px]" />
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
          <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            WHY CHOOSE US
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Why Businesses
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              Trust Our Expertise
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine technical excellence, strategic thinking and
            business-focused innovation to build secure, scalable and
            high-performing digital solutions that deliver measurable long-term
            value.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceHighlights.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,.10)]"
              >
                {/* Hover Accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Number */}

                <span className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-500 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-cyan-500">
                  <Icon className="h-8 w-8 text-blue-600 transition-all duration-500 group-hover:text-white" />
                </div>

                {/* Content */}

                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Glow */}

                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-blue-50/70 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
