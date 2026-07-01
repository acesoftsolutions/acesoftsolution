"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Requirements Analysis",
    description:
      "We conduct in-depth discovery to understand your business objectives, user expectations, market opportunities, competitive landscape, and technical requirements—establishing a strategy-aligned foundation for every decision ahead.",

    deliverables: [
      "Business & Competitor Analysis",
      "Stakeholder Workshops",
      "Detailed Requirement Gathering",
      "Project Scope & Feasibility",
    ],

    gradient: "from-blue-600 via-cyan-500 to-violet-600",
  },

  {
    number: "02",
    icon: ClipboardCheck,
    title: "Strategy & Project Planning",
    description:
      "We define a comprehensive technical roadmap, scalable architecture, sprint priorities, and a phased implementation strategy—built to ensure predictable, on-time execution and full alignment with your business objectives.",

    deliverables: [
      "Technical Architecture Design",
      "Product Roadmap Planning",
      "Technology Stack Selection",
      "Detailed Project Timeline",
    ],

    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },

  {
    number: "03",
    icon: PenTool,
    title: "UI/UX Design & Prototyping",
    description:
      "We craft intuitive user experiences and visually compelling interfaces, validated through user research and interactive prototyping—designed to maximize usability and drive measurable business outcomes.",

    deliverables: [
      "Low & High-Fidelity Wireframes",
      "UI Design Systems",
      "UX Research & User Testing",
      "Interactive Prototypes",
    ],

    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },

  {
    number: "04",
    icon: Code2,
    title: "Agile Development & Engineering",
    description:
      "We build scalable, secure, and high-performance digital products using modern tech stacks, clean code principles, and agile sprint cycles aligned with your business goals.",

    deliverables: [
      "Frontend Development",
      "Backend Development",
      "Third-Party API Integration",
      "Code & Performance Optimization",
    ],

    gradient: "from-emerald-500 via-green-500 to-teal-500",
  },

  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    description:
      "We rigorously validate functionality, security, performance, and reliability across all devices and environments—ensuring a flawless, bug-free user experience before launch.",

    deliverables: [
      "Quality Assurance (QA)",
      "Security & Penetration Testing",
      "Performance Load Testing",
      "Bug Detection & Resolution",
    ],

    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },

  {
    number: "06",
    icon: Rocket,
    title: "Production Deployment & Launch",
    description:
      "We launch your solution using optimized cloud infrastructure, automated CI/CD deployment pipelines, and real-time monitoring systems—ensuring a seamless, zero-downtime go-live.",

    deliverables: [
      "Production Release",
      "Cloud Infrastructure Setup",
      "Real-Time Monitoring",
      "Go-Live Launch Support",
    ],

    gradient: "from-sky-500 via-cyan-500 to-blue-600",
  },

  {
    number: "07",
    icon: Headphones,
    title: "Ongoing Support & Maintenance",
    description:
      "Delivering continuous maintenance, proactive updates, real-time performance monitoring, and dedicated long-term technical support for your live product.",

    deliverables: [
      "Proactive Maintenance",
      "Feature Enhancements",
      "Real-Time Monitoring",
      "24/7 Technical Support",
    ],

    gradient: "from-rose-500 via-pink-500 to-purple-600",
  },
];
export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  const ActiveIcon = activeStep.icon;

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">
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
                text-sm
                font-medium
                text-blue-700
              "
            >
              <Sparkles size={16} />
              Our Process
            </div>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                md:text-4xl
                xl:text-5xl
              "
            >
              How We Transform Ideas
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
                Into Measurable Digital Success
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Our structured process ensures complete transparency, seamless
              collaboration, predictable delivery timelines, and long-term
              business success.
            </p>
          </div>

          {/* Main Process Layout */}

          <div className="mt-20 grid gap-8 lg:grid-cols-12">
            {/* Left Active Content */}

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                    lg:min-h-[720px]
                    lg:p-10
                  "
                >
                  {/* Active Gradient */}

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${activeStep.gradient}
                      opacity-[0.04]
                    `}
                  />

                  <div className="relative z-10">
                    {/* Top Content Row */}

                    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                      {/* Left Content */}

                      <div className="lg:col-span-7">
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            bg-gradient-to-r
                            ${activeStep.gradient}
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-white
                          `}
                        >
                          Step {activeStep.number}
                        </span>

                        <h3 className="mt-5 text-4xl font-bold text-slate-900">
                          {activeStep.title}
                        </h3>

                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                          {activeStep.description}
                        </p>
                      </div>

                      {/* Right Illustration Area */}

                      <div className="lg:col-span-5">
                        <div
                          className={`
                            relative
                            flex
                            h-[260px]
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[32px]
                            bg-gradient-to-br
                            ${activeStep.gradient}
                          `}
                        >
                          <div className="absolute h-56 w-56 rounded-full bg-white/10" />

                          <div className="absolute h-36 w-36 rounded-full border border-white/20" />

                          <ActiveIcon className="relative z-10 h-24 w-24 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Deliverables + Insight will continue in Part 2 */}
                    {/* Deliverables + Insight */}

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                      {/* Deliverables */}

                      <div
                        className="
                          rounded-[28px]
                          border
                          border-slate-200
                          bg-white/80
                          p-6
                          backdrop-blur-sm
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-gradient-to-br
                              ${activeStep.gradient}
                            `}
                          >
                            <CheckCircle2 className="h-6 w-6 text-white" />
                          </div>

                          <h4 className="text-lg font-bold text-slate-900">
                            Key Deliverables
                          </h4>
                        </div>

                        <div className="mt-6 space-y-4">
                          {activeStep.deliverables.map((item) => (
                            <motion.div
                              key={item}
                              whileHover={{
                                x: 6,
                              }}
                              className="
                                  flex
                                  items-center
                                  gap-3
                                  rounded-2xl
                                  border
                                  border-slate-100
                                  bg-slate-50
                                  px-4
                                  py-4
                                "
                            >
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                              <span className="font-medium text-slate-700">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Insight */}

                      <div
                        className="
                          rounded-[28px]
                          border
                          border-slate-200
                          bg-white/80
                          p-6
                          backdrop-blur-sm
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-gradient-to-br
                              ${activeStep.gradient}
                            `}
                          >
                            <ActiveIcon className="h-6 w-6 text-white" />
                          </div>

                          <h4 className="text-lg font-bold text-slate-900">
                            Process Insight
                          </h4>
                        </div>

                        <p className="mt-6 leading-relaxed text-slate-600">
                          Every phase of our delivery framework is carefully
                          planned to minimize project risks, improve
                          communication, maintain transparency, and ensure
                          business objectives remain aligned with technical
                          execution.
                        </p>

                        <div
                          className={`
                            mt-6
                            rounded-3xl
                            bg-gradient-to-r
                            ${activeStep.gradient}
                            p-[1px]
                          `}
                        >
                          <div
                            className="
                              rounded-3xl
                              bg-white
                              p-5
                            "
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-slate-500">
                                  Current Phase
                                </p>

                                <h5 className="mt-1 text-xl font-bold text-slate-900">
                                  {activeStep.title}
                                </h5>
                              </div>

                              <ArrowRight className="h-5 w-5 text-slate-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ================= Right Navigation ================= */}

            <div className="lg:col-span-4">
              <div
                className="
      sticky
      top-28
      rounded-[32px]
      border
      border-slate-200
      bg-white
      p-5
      shadow-[0_15px_40px_rgba(15,23,42,0.06)]
    "
              >
                {/* Header */}

                <div className="mb-5">
                  <span
                    className="
          inline-flex
          rounded-full
          bg-blue-50
          px-3
          py-1
          text-[11px]
          font-semibold
          tracking-[0.18em]
          text-blue-700
        "
                  >
                    DELIVERY FLOW
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    Project Journey
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Navigate through every stage of our delivery process.
                  </p>
                </div>

                {/* Steps */}

                <div className="space-y-3">
                  {processSteps.map((step) => {
                    const Icon = step.icon;

                    const isActive = activeStep.number === step.number;

                    return (
                      <motion.button
                        key={step.number}
                        whileHover={{
                          x: 4,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onMouseEnter={() => setActiveStep(step)}
                        onClick={() => setActiveStep(step)}
                        className="group w-full text-left"
                      >
                        <div
                          className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      border-transparent
                      bg-gradient-to-r
                      ${step.gradient}
                      text-white
                      shadow-lg
                    `
                    : `
                      border-slate-200
                      bg-white
                      hover:border-blue-200
                      hover:bg-blue-50/40
                      hover:shadow-md
                    `
                }
              `}
                        >
                          {/* Hover Accent */}

                          {!isActive && (
                            <div
                              className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    origin-top
                    scale-y-0
                    bg-gradient-to-b
                    from-blue-600
                    to-cyan-500
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                  "
                            />
                          )}

                          <div className="flex items-center gap-3 px-4 py-3">
                            {/* Icon */}

                            <div
                              className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-white/20"
                        : "bg-gradient-to-br from-blue-50 to-cyan-100 group-hover:scale-105"
                    }
                  `}
                            >
                              <Icon
                                className={`
                      h-5
                      w-5

                      ${isActive ? "text-white" : "text-blue-600"}
                    `}
                              />
                            </div>

                            {/* Content */}

                            <div className="flex-1">
                              <p
                                className={`
                      text-[10px]
                      font-bold
                      tracking-[0.22em]

                      ${isActive ? "text-white/70" : "text-slate-400"}
                    `}
                              >
                                STEP {step.number}
                              </p>

                              <h4
                                className={`
                      mt-1
                      text-[15px]
                      font-semibold
                      leading-5

                      ${
                        isActive
                          ? "text-white"
                          : "text-slate-900 group-hover:text-blue-700"
                      }
                    `}
                              >
                                {step.title}
                              </h4>
                            </div>

                            <ArrowRight
                              className={`
                    h-4
                    w-4
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "translate-x-1 opacity-0 text-blue-600 group-hover:translate-x-0 group-hover:opacity-100"
                    }
                  `}
                            />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
