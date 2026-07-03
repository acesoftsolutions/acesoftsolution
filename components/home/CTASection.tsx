"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Megaphone,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  const services = [
    {
      name: "Web Development",
      icon: Globe,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Mobile Apps",
      icon: Smartphone,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      name: "AI & ML Solutions",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-sky-500 to-cyan-500",
    },
    {
      name: "Digital Marketing",
      icon: Megaphone,
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] py-12">
      {/* ================= Background ================= */}

      <div className="absolute inset-0">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Glow Left */}

        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/20
            blur-[160px]
          "
        />

        {/* Glow Right */}

        <div
          className="
            absolute
            right-[-180px]
            bottom-[-180px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-600/20
            blur-[180px]
          "
        />

        {/* Floating Dots */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute left-1/4 top-24 h-2 w-2 rounded-full bg-cyan-400"
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute right-1/4 top-44 h-1.5 w-1.5 rounded-full bg-sky-400"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-slate-200">
                Let's Build Together
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mx-auto
                mt-10
                max-w-6xl
                text-center
                text-4xl
                font-black
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                md:text-6xl
                xl:text-[6rem]
              "
            >
              Ready To
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                SCALE YOUR BUSINESS?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              Whether you're launching a startup, scaling operations, automating
              workflows, or building enterprise-grade software, our team
              delivers modern digital products engineered for performance,
              growth, and long-term success.
            </p>

            {/* CTA */}

            <div className="mt-12 flex justify-center">
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    via-sky-500
                    to-blue-600
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-[0_20px_60px_rgba(6,182,212,.35)]
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:shadow-[0_30px_90px_rgba(6,182,212,.55)]
                  "
                >
                  Start Your Project
                  <ArrowRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </motion.div>
            </div>

            {/* Service Pills */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                    }}
                    className="group relative"
                  >
                    {/* Glow */}

                    <div
                      className={`
                        absolute
                        -inset-1
                        rounded-full
                        bg-gradient-to-r
                        ${service.color}
                        opacity-0
                        blur-xl
                        transition-all
                        duration-500
                        group-hover:opacity-40
                      `}
                    />

                    {/* Glass Card */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.05]
                        px-5
                        py-3
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:border-cyan-400/40
                        group-hover:bg-white/[0.08]
                        group-hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                      "
                    >
                      {/* Animated Shine */}

                      <div
                        className="
                          absolute
                          inset-y-0
                          -left-24
                          w-16
                          -skew-x-12
                          bg-white/30
                          blur-sm
                          transition-all
                          duration-700
                          group-hover:left-[130%]
                        "
                      />

                      {/* Neon Border */}

                      <div
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500/0
                          via-cyan-500/20
                          to-blue-500/0
                          opacity-0
                          blur-md
                          transition-all
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      <div className="relative flex items-center gap-3">
                        {/* Icon */}

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-br
                            ${service.color}
                            text-white
                            shadow-[0_0_25px_rgba(6,182,212,.35)]
                            transition-all
                            duration-500
                            group-hover:rotate-12
                            group-hover:scale-110
                          `}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Text */}

                        <span
                          className="
                            whitespace-nowrap
                            font-semibold
                            text-slate-200
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          {service.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Bottom Decorative Line */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <div className="relative h-px w-72 overflow-hidden rounded-full bg-white/10">
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400
                    to-transparent
                  "
                />
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}