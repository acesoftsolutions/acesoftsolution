"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: BriefcaseBusiness,
  },
  {
    value: "10+",
    label: "Industries Served",
    icon: Trophy,
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    icon: Users,
  },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-14 lg:pt-12 lg:pb-12">
      {/* Background Effects */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Badge */}
            <div
              className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
          "
            >
              <Sparkles className="h-4 w-4 text-blue-600" />

              <span className="text-sm font-semibold text-blue-600">
                Portfolio Showcase
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
            mt-8
            text-4xl
            font-black
            leading-[1]
            tracking-tight
            text-slate-950
            md:text-5xl
            lg:text-6xl
          "
            >
              Building
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
                Software Solutions
              </span>
              That Drive Results
            </h1>

            {/* Description */}
            <p
              className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-slate-600
          "
            >
              As a software development company, we've delivered enterprise platforms, SaaS products, mobile apps, and e-commerce solutions that help businesses accelerate growth, boost efficiency, and achieve measurable outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                className="
              group
              inline-flex
              items-center
              justify-center
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
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
            "
              >
                Explore Projects
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-8
              py-4
              font-semibold
              text-slate-900
              transition-all
              duration-300
              hover:border-blue-200
              hover:bg-blue-50
            "
              >
                Start Your Project
              </button>
            </div>
          </motion.div>

          {/* Right Showcase */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            {/* Main Card */}
            <div
              className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200
            bg-white/80
            p-8
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
            >
              <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600"
                  alt="Portfolio"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <span className="text-sm font-semibold text-blue-600">
                  Featured Software Project
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Enterprise Business Platform
                </h3>

                <p className="mt-3 text-slate-600">
                  A scalable software ecosystem built to automate workflows, improve collaboration, and accelerate business operations.
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
            absolute
            -left-6
            top-12
            hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-xl
            lg:block
          "
            >
              <h4 className="text-3xl font-bold text-slate-900">120%</h4>

              <p className="text-sm text-slate-500">Revenue Growth</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
            absolute
            -right-6
            bottom-12
            hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-xl
            lg:block
          "
            >
              <h4 className="text-3xl font-bold text-slate-900">50K+</h4>

              <p className="text-sm text-slate-500">Active Users</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
