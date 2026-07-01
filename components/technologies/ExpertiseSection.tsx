"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, Code2, Award } from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Technologies Stack",
    icon: Code2,
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
    icon: Briefcase,
  },
  {
    value: 15,
    suffix: "+",
    label: "Industries Served",
    icon: Building2,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
    icon: Award,
  },
];

const expertisePoints = [
  "Enterprise Web Applications",
  "Mobile Apps (iOS & Android)",
  "Cloud-Native Solutions",
  "API Design & Development",
];

export default function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-4
                py-2
                text-sm
                font-medium
                text-blue-600
              "
            >
              Technology Expertise
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Engineering Reliable
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-teal-500
                  bg-clip-text
                  text-transparent
                "
              >
                High-Performance Digital Solutions
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              We combine cutting-edge technologies and industry-proven best
              practices to engineer secure, scalable, and high-performance
              digital products built to exceed business expectations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {expertisePoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />

                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-blue-200
                      hover:shadow-xl
                    "
                  >
                    <div
                      className="
                        mb-5
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-white
                      "
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3
                      className="
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    bg-clip-text
    text-4xl
    font-bold
    text-transparent
  "
                    >
                      <AnimatedCounter
                        value={item.value}
                        suffix={item.suffix}
                      />
                    </h3>

                    <p className="mt-2 text-slate-600">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
