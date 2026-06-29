"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Layers3,
  Zap,
  Sparkles,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const techCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, performant, and responsive interfaces built with industry-leading frontend frameworks.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vue.js",
    ],

    gradient: "from-blue-600 via-cyan-500 to-violet-600",
  },

  {
    icon: Server,
    title: "Backend Development",
    description:
      "Robust, scalable server-side solutions and API architectures powering your digital products.",

    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Microservices",
      "GraphQL",
    ],

    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },

  {
    icon: Database,
    title: "Database Systems & Management",
    description:
      "Secure, high-performance database architecture, management, and optimization for any scale.",

    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Database Optimization",
      "Firebase",
    ],

    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },

  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Scalable cloud deployments, automated CI/CD pipelines, and managed infrastructure for enterprise applications.",

    technologies: [
      "AWS",
      "Vercel",
      "Docker",
      "CI/CD",
      "Cloud Infrastructure",
      "Kubernetes",
      "Azure",
    ],

    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },
];

const stats = [
  {
    value: "20+",
    label: "Technologies",
  },

  {
    value: "100%",
    label: "Scalable Solutions",
  },

  {
    value: "Cloud",
    label: "Native Architecture",
  },

  {
    value: "Enterprise",
    label: "Security Standards",
  },
];

export default function TechnologyExpertise() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
        py-12
        lg:py-16
      "
    >
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <AnimatedSection>
          {/* Header */}

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span
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
                  text-sm
                  font-medium
                  text-blue-700
                "
              >
                <Sparkles size={16} />
                Technology Expertise
              </span>

              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  leading-tight
                  text-slate-900
                  md:text-4xl
                  xl:text-5xl
                "
              >
                Engineered with Cutting
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-violet-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  Technologies and Enterprise-Grade Architecture
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p
                className="
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                We leverage industry-proven technologies, cutting-edge
                frameworks, and enterprise-grade architecture patterns to build
                secure, scalable, and future-ready digital solutions.
              </p>
            </div>
          </div>

          {/* Statistics */}

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                <h3
                  className="
                    text-3xl
                    font-bold
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-violet-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Technology Cards */}

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {techCategories.map((category) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-500
                    hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]
                  "
                >
                  {/* Gradient Overlay */}

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${category.gradient}
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-[0.04]
                    `}
                  />

                  <div className="relative z-10">
                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-3xl
                        bg-gradient-to-br
                        ${category.gradient}
                        text-white
                        shadow-lg
                      `}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Title */}

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {category.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-8 flex flex-wrap gap-3">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                              rounded-2xl
                              border
                              border-blue-100
                              bg-blue-50
                              px-4
                              py-2
                              text-sm
                              font-medium
                              text-blue-700
                            "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Line */}

                    <div
                      className={`
                        mt-8
                        h-1
                        w-16
                        rounded-full
                        bg-gradient-to-r
                        ${category.gradient}
                        transition-all
                        duration-500
                        group-hover:w-32
                      `}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Architecture Section Starts In Part 3 */}
          <div className="mt-20">
            <div
              className="
                overflow-hidden
                rounded-[40px]
                bg-slate-900
              "
            >
              <div className="grid lg:grid-cols-4">
                {[
                  {
                    icon: Layers3,
                    title: "Scalable Architecture",
                    description:
                      "Engineered to support rapid growth, peak performance, and long-term maintainability at any scale of operation.",
                  },

                  {
                    icon: ShieldCheck,
                    title: "Enterprise-Grade Security",
                    description:
                      "Built to the highest security standards—OWASP-compliant, with robust authentication, data encryption, and infrastructure protection.",
                  },

                  {
                    icon: Cloud,
                    title: "Cloud-Native & Ready",
                    description:
                      "Cloud-native deployments optimized for high availability, auto-scaling, and maximum infrastructure reliability.",
                  },

                  {
                    icon: Zap,
                    title: "Performance Optimization",
                    description:
                      "Performance-first engineering with optimized code, intelligent caching, fast load times, and exceptional user experiences across every device.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -6,
                      }}
                      className={`
                        relative
                        p-8
                        lg:p-10
                        ${
                          index !== 3
                            ? "border-b lg:border-b-0 lg:border-r border-white/10"
                            : ""
                        }
                      `}
                    >
                      {/* Glow */}

                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 transition-all duration-500 hover:from-blue-500/5 hover:to-cyan-500/5" />

                      <div className="relative z-10">
                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-3xl
                            bg-white/10
                            backdrop-blur-xl
                          "
                        >
                          <Icon className="h-8 w-8 text-cyan-400" />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            leading-relaxed
                            text-slate-400
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
