'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Layers3,
  Code2,
  Database,
  Cloud,
  Globe,
  CheckCircle2,
} from 'lucide-react';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'AWS',
  'Docker',
  'Tailwind CSS',
];

const stats = [
  {
    number: '20+',
    label: 'Technologies',
  },
  {
    number: '50+',
    label: 'Projects',
  },
  {
    number: '10+',
    label: 'Industries',
  },
  {
    number: '99%',
    label: 'Satisfaction',
  },
];

const stackData = [
  {
    icon: Globe,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Database,
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    items: ['AWS', 'Docker', 'CI/CD'],
  },
];

export default function TechnologyHero() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] pt-12 pb-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
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
              duration: 0.8,
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <Layers3 className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-medium text-cyan-300">
                Technology Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Modern Technologies

              <span className="mt-2 block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                For Scalable Digital Products
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              We leverage cutting-edge technologies, cloud infrastructure,
              and modern development practices to build scalable, secure,
              and future-ready digital solutions that help businesses
              innovate faster.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Modern Architecture',
                'Cloud Native Solutions',
                'Enterprise Security',
                'Scalable Infrastructure',
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

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                "
              >
                Explore Technologies

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Get Consultation
              </button>
            </div>

            {/* Technology Chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
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
                </motion.span>
              ))}
            </div>
          </motion.div>
                    {/* Right Side */}
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              "
            >
              {/* Card Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Technology Ecosystem
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Our Core Stack
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                  <span className="text-xs font-medium text-emerald-400">
                    Active
                  </span>
                </div>
              </div>

              {/* Stack Grid */}
              <div className="grid gap-4">
                {stackData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -3,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        p-5
                        transition-all
                        duration-300
                        hover:border-blue-500/20
                        hover:bg-white/[0.04]
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-500/10
                          "
                        >
                          <Icon className="h-6 w-6 text-cyan-400" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.items.map((tech) => (
                              <span
                                key={tech}
                                className="
                                  rounded-lg
                                  border
                                  border-white/10
                                  bg-white/[0.03]
                                  px-3
                                  py-1
                                  text-xs
                                  text-slate-300
                                "
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Info */}
              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-blue-500/5
                  p-5
                "
              >
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-cyan-400" />

                  <div>
                    <h4 className="font-semibold text-white">
                      Enterprise-Grade Development
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      Modern frameworks, scalable architecture, and
                      cloud-native solutions built for long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Project Card */}
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
                -bottom-8
                -left-8
                hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0f172a]
                p-5
                backdrop-blur-xl
                shadow-xl
                lg:block
              "
            >
              <p className="text-3xl font-bold text-white">
                50+
              </p>

              <p className="text-sm text-slate-400">
                Projects Delivered
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {item.number}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}