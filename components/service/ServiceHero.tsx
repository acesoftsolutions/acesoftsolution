'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface ServiceHeroProps {
  service: any;
}

export default function ServiceHero({
  service,
}: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-[#020617] pt-12 pb-12 lg:pt-4=20 lg:pb-16">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[140px]" />
      </div>

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-20 lg:grid-cols-12">
          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:col-span-7"
          >
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
              "
            >
              <Sparkles size={14} />

              Enterprise Technology Solutions
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                max-w-[720px]
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                md:text-6xl
                xl:text-7xl
              "
            >
              {service.heroTitle}
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[680px]
                text-lg
                leading-relaxed
                text-slate-400
                md:text-xl
              "
            >
              {service.heroDescription}
            </p>

            {/* Benefits */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Custom-Built Solutions',
                'Scalable Architecture',
                'Dedicated Development Team',
                'Long-Term Technical Support',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Start Your Project

                <ArrowRight size={18} />
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
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                View Case Studies
              </Link>
            </div>

            {/* Trust Metrics */}

            <div
              className="
                mt-16
                grid
                max-w-[620px]
                grid-cols-3
                gap-8
                border-t
                border-white/10
                pt-8
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-white">
                  100+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  50+
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Global Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  98%
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Client Retention
                </p>
              </div>
            </div>
          </motion.div>
                    {/* Right Visual */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[480px]">
              {/* Growth Card */}

              <div
                className="
                  absolute
                  -top-6
                  right-0
                  z-20
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Growth
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />

                  <span className="text-2xl font-bold text-white">
                    +127%
                  </span>
                </div>
              </div>

              {/* Main Card */}

              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-gradient-to-br
                  ${service.gradient}
                  p-[1px]
                  shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                `}
              >
                <div
                  className="
                    rounded-[32px]
                    bg-[#0B1120]
                    p-8
                  "
                >
                  {/* Header */}

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-white/70" />

                      <div className="h-3 w-3 rounded-full bg-white/40" />

                      <div className="h-3 w-3 rounded-full bg-white/20" />
                    </div>

                    <span className="text-xs text-slate-500">
                      Enterprise Service
                    </span>
                  </div>

                  {/* Icon */}

                  <div className="mt-12 flex justify-center">
                    <div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-3xl
                        bg-white
                        shadow-xl
                      "
                    >
                      <Icon className="h-12 w-12 text-slate-900" />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="mt-8 text-center">
                    <h3 className="text-3xl font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-slate-400">
                      Secure, scalable, and
                      future-ready digital solutions
                      built for modern businesses.
                    </p>
                  </div>

                  {/* Technologies */}

                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {service.technologies
                      ?.slice(0, 4)
                      .map((tech: string) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-1.5
                            text-xs
                            text-slate-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Success Indicator */}

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        Project Success Rate
                      </span>

                      <span className="text-sm font-semibold text-white">
                        96%
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: '96%',
                        }}
                        transition={{
                          duration: 1.5,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-white
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom Stats */}

                  <div className="mt-10 grid grid-cols-3 gap-3">
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        text-center
                      "
                    >
                      <h4 className="text-xl font-bold text-white">
                        100+
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        Projects
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        text-center
                      "
                    >
                      <h4 className="text-xl font-bold text-white">
                        50+
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        Clients
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        text-center
                      "
                    >
                      <h4 className="text-xl font-bold text-white">
                        24/7
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Support Card */}

              <div
                className="
                  absolute
                  -bottom-6
                  left-0
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <p className="text-xs text-slate-500">
                  Dedicated Team
                </p>

                <p className="mt-1 font-semibold text-white">
                  End-to-End Support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}