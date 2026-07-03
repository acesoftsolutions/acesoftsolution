"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "DevOps",
];

const services = [
  "Custom Software Development",
  "Enterprise Web Applications",
  "Mobile App Development",
  "AI & Process Automation",
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-12 pb-24 lg:pt-20 lg:pb-16">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT */}

          <div className="lg:col-span-7">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
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
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-blue-300
                "
              >
                <Sparkles size={16} />
                Award-Winning Digital Engineering Partner
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-8
                  text-5xl
                  md:text-6xl
                  xl:text-7xl
                  font-bold
                  leading-[1.05]
                  tracking-tight
                  text-white
                "
              >
                Engineering
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-300
                    to-violet-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Future-Ready
                </span>
                Digital Solutions
              </h1>

              {/* Description */}

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-lg
                  md:text-xl
                  leading-relaxed
                  text-slate-400
                "
              >
                From custom software development and cloud engineering to
                AI-powered automation and ERP systems, we help startups, SMEs,
                and enterprises build scalable digital solutions that accelerate
                growth, optimize operations, and deliver measurable, real-world
                business impact.
              </p>

              {/* Services */}

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {services.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      x: 4,
                    }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />

                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}

              <div className="flex flex-wrap gap-4 mt-12">
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Book a Free Strategy Call
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  Explore Case Studies
                </Link>
              </div>
              {/* Trust Metrics */}

              <div className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                  <span className="ml-2 text-sm font-medium text-slate-300">
                    4.9 Client Satisfaction
                  </span>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">500+</p>

                  <p className="text-sm text-slate-500">Projects Delivered</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">15+</p>

                  <p className="text-sm text-slate-500">Industries Served</p>
                </div>

                
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative"
            >
              {/* Main Dashboard */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

                {/* Header */}

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                      Digital Transformation
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      Enterprise Growth Dashboard
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-500
                    "
                  >
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Growth Card */}

                <div
                  className="
                    mt-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-slate-900/70
                    p-6
                  "
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Business Growth</p>

                      <h4 className="mt-2 text-5xl font-bold text-white">
                        +127%
                      </h4>
                    </div>

                    <div className="rounded-2xl bg-emerald-500/10 px-4 py-2">
                      <span className="text-sm font-medium text-emerald-400">
                        Performance Boost
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "87%",
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-blue-500
                        via-cyan-400
                        to-violet-500
                      "
                    />
                  </div>
                </div>

                {/* Service Grid */}

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/60
                      p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-wide text-cyan-400">
                      AI
                    </p>

                    <h5 className="mt-2 text-lg font-semibold text-white">
                      Automation & Intelligence
                    </h5>

                    <p className="mt-2 text-sm text-slate-400">
                      Intelligent workflow automation and AI-driven business
                      process optimization at scale.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/60
                      p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-wide text-cyan-400">
                      Cloud
                    </p>

                    <h5 className="mt-2 text-lg font-semibold text-white">
                      Infrastructure & DevOps
                    </h5>

                    <p className="mt-2 text-sm text-slate-400">
                      Scalable, secure cloud-native applications, deployments,
                      and managed DevOps pipelines.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/60
                      p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-wide text-cyan-400">
                      Web
                    </p>

                    <h5 className="mt-2 text-lg font-semibold text-white">
                      Applications
                    </h5>

                    <p className="mt-2 text-sm text-slate-400">
                      Enterprise-grade web applications, SaaS platforms, and
                      scalable digital solutions.
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/60
                      p-5
                    "
                  >
                    <p className="text-xs uppercase tracking-wide text-cyan-400">
                      Mobile
                    </p>

                    <h5 className="mt-2 text-lg font-semibold text-white">
                      Experiences & Apps
                    </h5>

                    <p className="mt-2 text-sm text-slate-400">
                      Native and cross-platform mobile development for iOS,
                      Android, and emerging platforms.
                    </p>
                  </div>
                </div>
                {/* Enterprise Footer Card */}

              </motion.div>

              {/* Floating Tech Badges */}

              {technologies.map((tech, index) => {
                const positions = [
                  "top-8 -left-10",
                  "top-20 -right-10",
                  "bottom-24 -left-8",
                  "bottom-10 -right-8",
                  "top-1/2 -left-12",
                  "top-1/2 -right-12",
                ];

                return (
                  <motion.div
                    key={tech}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      hidden
                      lg:flex
                      items-center
                      justify-center
                      px-4
                      py-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-sm
                      font-medium
                      text-white
                      ${positions[index]}
                    `}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
