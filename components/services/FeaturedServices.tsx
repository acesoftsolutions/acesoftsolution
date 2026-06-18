'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const featuredServices = [
  {
    id: '01',
    title: 'Web Engineering',
    icon: Globe,
    description:
      'Build enterprise-grade websites, SaaS platforms, customer portals, and custom digital products designed for scalability, performance, and long-term business growth.',

    features: [
      'Next.js & React Development',
      'Enterprise Web Applications',
      'Custom SaaS Platforms',
      'API Development & Integrations',
    ],

    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'AWS',
    ],

    outcomes: [
      'Faster Time To Market',
      'Scalable Architecture',
      'Improved User Experience',
    ],

    gradient:
      'from-blue-600 via-cyan-500 to-violet-600',
  },

  {
    id: '02',
    title: 'Mobile Development',
    icon: Smartphone,
    description:
      'Create engaging mobile experiences across iOS and Android platforms with high-performance applications designed for modern users.',

    features: [
      'Cross Platform Development',
      'Native-like Performance',
      'App Store Deployment',
      'Long-Term Maintenance',
    ],

    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'Node.js',
    ],

    outcomes: [
      'Higher User Engagement',
      'Cross-Platform Reach',
      'Faster Development Cycles',
    ],

    gradient:
      'from-violet-600 via-purple-500 to-fuchsia-500',
  },

  {
    id: '03',
    title: 'AI & Automation',
    icon: Brain,
    description:
      'Leverage artificial intelligence and intelligent automation to streamline operations, improve efficiency, and unlock new opportunities for growth.',

    features: [
      'AI Integrations',
      'Business Automation',
      'Chatbots & Assistants',
      'Data Intelligence',
    ],

    technologies: [
      'OpenAI',
      'Python',
      'LangChain',
      'Vector Database',
      'Node.js',
      'TensorFlow',
    ],

    outcomes: [
      'Reduced Operational Costs',
      'Automated Workflows',
      'Smarter Decision Making',
    ],

    gradient:
      'from-cyan-600 via-blue-500 to-indigo-600',
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-950">
      {/* Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
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
        <AnimatedSection>
          {/* Header */}

          <div className="max-w-4xl mx-auto text-center">
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
                text-sm
                font-medium
                text-cyan-300
              "
            >
              <Sparkles size={16} />
              Featured Solutions
            </div>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Engineering Solutions
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
                Built For Business Growth
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              Our core expertise helps organizations
              modernize operations, accelerate innovation,
              and build future-ready digital products that
              deliver measurable business outcomes.
            </p>
          </div>

          {/* Timeline Services */}

          <div className="relative mt-24">
            {/* Center Timeline */}

            <div
              className="
                hidden
                lg:block
                absolute
                left-1/2
                top-0
                h-full
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-blue-500
                via-cyan-500
                to-violet-500
              "
            />

            <div className="space-y-24">
              {featuredServices.map(
                (service, index) => {
                  const Icon = service.icon;

                  const isEven =
                    index % 2 === 0;

                  return (
                    <motion.div
                      key={service.id}
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
                        duration: 0.6,
                      }}
                      className="
                        relative
                        grid
                        lg:grid-cols-12
                        gap-10
                        items-center
                      "
                    >
                      {/* Timeline Dot */}

                      <div
                        className="
                          hidden
                          lg:flex
                          absolute
                          left-1/2
                          top-16
                          h-6
                          w-6
                          -translate-x-1/2
                          rounded-full
                          border-4
                          border-slate-950
                          bg-cyan-400
                          shadow-[0_0_30px_rgba(34,211,238,0.8)]
                        "
                      />

                      {/* Content Starts Here */}
                                            {/* Left Content */}

                      <div
                        className={`
                          ${
                            isEven
                              ? 'lg:col-span-5 lg:col-start-1'
                              : 'lg:col-span-5 lg:col-start-8'
                          }
                        `}
                      >
                        <div className="relative">
                          {/* Watermark Number */}

                          <div
                            className="
                              absolute
                              -top-10
                              left-0
                              text-[120px]
                              md:text-[160px]
                              font-black
                              leading-none
                              text-white/[0.03]
                              select-none
                              pointer-events-none
                            "
                          >
                            {service.id}
                          </div>

                          <div className="relative z-10">
                            {/* Service Badge */}

                            <div
                              className={`
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                bg-gradient-to-r
                                ${service.gradient}
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-white
                              `}
                            >
                              <Icon className="h-4 w-4" />
                              Featured Service
                            </div>

                            {/* Title */}

                            <h3
                              className="
                                mt-6
                                text-3xl
                                md:text-4xl
                                font-bold
                                text-white
                              "
                            >
                              {service.title}
                            </h3>

                            {/* Description */}

                            <p
                              className="
                                mt-6
                                text-lg
                                leading-relaxed
                                text-slate-400
                              "
                            >
                              {service.description}
                            </p>

                            {/* Features */}

                            <div className="mt-8">
                              <h4
                                className="
                                  text-sm
                                  uppercase
                                  tracking-[0.2em]
                                  text-cyan-400
                                "
                              >
                                Core Capabilities
                              </h4>

                              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                {service.features.map(
                                  (feature) => (
                                    <div
                                      key={feature}
                                      className="
                                        flex
                                        items-center
                                        gap-3
                                      "
                                    >
                                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />

                                      <span className="text-slate-300">
                                        {feature}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* Technology Stack */}

                            <div className="mt-8">
                              <h4
                                className="
                                  text-sm
                                  uppercase
                                  tracking-[0.2em]
                                  text-cyan-400
                                "
                              >
                                Technology Stack
                              </h4>

                              <div className="mt-5 flex flex-wrap gap-3">
                                {service.technologies.map(
                                  (tech) => (
                                    <motion.div
                                      key={tech}
                                      whileHover={{
                                        y: -3,
                                      }}
                                      className="
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/5
                                        px-4
                                        py-2
                                        text-sm
                                        font-medium
                                        text-slate-300
                                        backdrop-blur-xl
                                      "
                                    >
                                      {tech}
                                    </motion.div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* Business Outcomes */}

                            <div className="mt-10">
                              <h4
                                className="
                                  text-sm
                                  uppercase
                                  tracking-[0.2em]
                                  text-cyan-400
                                "
                              >
                                Business Outcomes
                              </h4>

                              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                                {service.outcomes.map(
                                  (outcome) => (
                                    <div
                                      key={outcome}
                                      className="
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/5
                                        p-4
                                        text-center
                                        backdrop-blur-xl
                                      "
                                    >
                                      <p
                                        className="
                                          text-sm
                                          font-medium
                                          text-white
                                        "
                                      >
                                        {outcome}
                                      </p>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* CTA */}

                            <Link
                              href="/contact"
                              className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                mt-10
                                font-semibold
                                text-cyan-300
                              "
                            >
                              Discuss Your Project

                              <ArrowRight
                                size={18}
                                className="
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-1
                                "
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Visual Side Starts Here */}

                      <div
                        className={`
                          ${
                            isEven
                              ? 'lg:col-span-5 lg:col-start-8'
                              : 'lg:col-span-5 lg:col-start-1'
                          }
                        `}
                      >
                                                <motion.div
                          whileHover={{
                            y: -8,
                            scale: 1.02,
                          }}
                          className={`
                            relative
                            overflow-hidden
                            rounded-[36px]
                            bg-gradient-to-br
                            ${service.gradient}
                            p-8
                            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                          `}
                        >
                          {/* Background Glow */}

                          <div className="absolute inset-0 bg-white/[0.04]" />

                          {/* Floating Analytics Card */}

                          <motion.div
                            animate={{
                              y: [0, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="
                              absolute
                              right-6
                              top-6
                              rounded-2xl
                              border
                              border-white/20
                              bg-white/10
                              px-5
                              py-4
                              backdrop-blur-xl
                            "
                          >
                            <p className="text-xs uppercase tracking-widest text-white/70">
                              Growth
                            </p>

                            <h4 className="mt-1 text-2xl font-bold text-white">
                              +127%
                            </h4>
                          </motion.div>

                          {/* Main Dashboard */}

                          <div
                            className="
                              relative
                              rounded-[30px]
                              border
                              border-white/15
                              bg-white/10
                              backdrop-blur-xl
                              p-6
                            "
                          >
                            {/* Top Bar */}

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-white/60" />
                                <div className="h-3 w-3 rounded-full bg-white/40" />
                                <div className="h-3 w-3 rounded-full bg-white/30" />
                              </div>

                              <span className="text-xs text-white/70">
                                Enterprise Solution
                              </span>
                            </div>

                            {/* Icon */}

                            <div className="mt-10 flex justify-center">
                              <div
                                className="
                                  flex
                                  h-24
                                  w-24
                                  items-center
                                  justify-center
                                  rounded-[28px]
                                  bg-white
                                  shadow-xl
                                "
                              >
                                <Icon className="h-12 w-12 text-slate-900" />
                              </div>
                            </div>

                            {/* Title */}

                            <div className="mt-8 text-center">
                              <h4 className="text-2xl font-bold text-white">
                                {service.title}
                              </h4>

                              <p className="mt-2 text-white/80">
                                Scalable, secure, and future-ready
                                digital solutions.
                              </p>
                            </div>

                            {/* Metrics */}

                            <div className="mt-8 grid grid-cols-3 gap-4">
                              <div
                                className="
                                  rounded-2xl
                                  bg-white/10
                                  p-4
                                  text-center
                                "
                              >
                                <h5 className="text-xl font-bold text-white">
                                  50+
                                </h5>

                                <p className="mt-1 text-xs text-white/70">
                                  Projects
                                </p>
                              </div>

                              <div
                                className="
                                  rounded-2xl
                                  bg-white/10
                                  p-4
                                  text-center
                                "
                              >
                                <h5 className="text-xl font-bold text-white">
                                  98%
                                </h5>

                                <p className="mt-1 text-xs text-white/70">
                                  Retention
                                </p>
                              </div>

                              <div
                                className="
                                  rounded-2xl
                                  bg-white/10
                                  p-4
                                  text-center
                                "
                              >
                                <h5 className="text-xl font-bold text-white">
                                  24/7
                                </h5>

                                <p className="mt-1 text-xs text-white/70">
                                  Support
                                </p>
                              </div>
                            </div>

                            {/* Progress Area */}

                            <div className="mt-8">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-white/80">
                                  Project Success
                                </span>

                                <span className="text-sm font-semibold text-white">
                                  94%
                                </span>
                              </div>

                              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
                                <motion.div
                                  initial={{
                                    width: 0,
                                  }}
                                  whileInView={{
                                    width: '94%',
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    duration: 1.5,
                                  }}
                                  className="h-full rounded-full bg-white"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Floating Mini Card */}

                          <motion.div
                            animate={{
                              y: [0, 10, 0],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                            className="
                              absolute
                              -bottom-4
                              left-8
                              rounded-2xl
                              border
                              border-white/20
                              bg-white/10
                              px-5
                              py-4
                              backdrop-blur-xl
                            "
                          >
                            <div className="flex items-center gap-3">
                              <TrendingUp className="h-5 w-5 text-white" />

                              <div>
                                <p className="text-xs text-white/70">
                                  Performance
                                </p>

                                <p className="font-semibold text-white">
                                  Optimized
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}