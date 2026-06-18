'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'Understanding business objectives, user expectations, market opportunities, and project requirements to establish a solid foundation.',

    deliverables: [
      'Business Analysis',
      'Stakeholder Workshops',
      'Requirement Gathering',
      'Project Scope Definition',
    ],

    gradient:
      'from-blue-600 via-cyan-500 to-violet-600',
  },

  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Strategy',
    description:
      'Defining the technical roadmap, architecture, priorities, and implementation strategy to ensure successful execution.',

    deliverables: [
      'Technical Architecture',
      'Roadmap Planning',
      'Technology Selection',
      'Project Timeline',
    ],

    gradient:
      'from-cyan-500 via-blue-500 to-indigo-600',
  },

  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description:
      'Creating intuitive user experiences and visually engaging interfaces focused on usability and business goals.',

    deliverables: [
      'Wireframes',
      'UI Design',
      'UX Research',
      'Interactive Prototypes',
    ],

    gradient:
      'from-violet-600 via-purple-500 to-fuchsia-500',
  },

  {
    number: '04',
    icon: Code2,
    title: 'Development',
    description:
      'Building scalable, secure, and high-performance digital products using modern technologies and best practices.',

    deliverables: [
      'Frontend Development',
      'Backend Development',
      'API Integrations',
      'Performance Optimization',
    ],

    gradient:
      'from-emerald-500 via-green-500 to-teal-500',
  },

  {
    number: '05',
    icon: ShieldCheck,
    title: 'Testing',
    description:
      'Validating functionality, security, performance, and reliability to ensure a flawless user experience.',

    deliverables: [
      'Quality Assurance',
      'Security Testing',
      'Performance Testing',
      'Bug Resolution',
    ],

    gradient:
      'from-orange-500 via-amber-500 to-yellow-500',
  },

  {
    number: '06',
    icon: Rocket,
    title: 'Deployment',
    description:
      'Launching the solution with optimized infrastructure, monitoring systems, and deployment workflows.',

    deliverables: [
      'Production Release',
      'Infrastructure Setup',
      'Monitoring Configuration',
      'Launch Support',
    ],

    gradient:
      'from-sky-500 via-cyan-500 to-blue-600',
  },

  {
    number: '07',
    icon: Headphones,
    title: 'Support',
    description:
      'Providing continuous maintenance, updates, monitoring, and long-term technical assistance.',

    deliverables: [
      'Maintenance',
      'Feature Enhancements',
      'Monitoring',
      'Technical Support',
    ],

    gradient:
      'from-rose-500 via-pink-500 to-purple-600',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(
    processSteps[0]
  );

  const ActiveIcon = activeStep.icon;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
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
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                tracking-tight
                text-slate-900
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
                Into Digital Success
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Our structured delivery framework ensures
              transparency, collaboration, predictable
              outcomes, and long-term business success.
            </p>
          </div>

          {/* Main Layout */}

          <div className="mt-20 grid gap-8 lg:grid-cols-12">
            {/* Left Content Panel */}

            <div className="lg:col-span-7">
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
                    lg:p-10
                    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                  "
                >
                  {/* Active Content Starts Here */}
                                    {/* Gradient Glow */}

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${activeStep.gradient}
                      opacity-[0.04]
                    `}
                  />

                  <div className="relative">
                    {/* Top Header */}

                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div>
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            bg-gradient-to-r
                            ${activeStep.gradient}
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-white
                          `}
                        >
                          Step {activeStep.number}
                        </span>

                        <h3 className="mt-5 text-4xl font-bold text-slate-900">
                          {activeStep.title}
                        </h3>

                        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                          {activeStep.description}
                        </p>
                      </div>

                      <div
                        className={`
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-3xl
                          bg-gradient-to-br
                          ${activeStep.gradient}
                          shadow-xl
                        `}
                      >
                        <ActiveIcon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Deliverables */}

                    <div className="mt-10">
                      <h4 className="text-lg font-semibold text-slate-900">
                        Key Deliverables
                      </h4>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {activeStep.deliverables.map(
                          (item) => (
                            <motion.div
                              key={item}
                              whileHover={{
                                x: 4,
                              }}
                              className="
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                px-5
                                py-4
                              "
                            >
                              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />

                              <span className="font-medium text-slate-700">
                                {item}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Process Insights */}

                    <div
                      className="
                        mt-10
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-slate-50
                        p-6
                      "
                    >
                      <div className="flex items-start gap-4">
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

                        <div>
                          <h4 className="font-semibold text-slate-900">
                            Process Insight
                          </h4>

                          <p className="mt-2 text-slate-600 leading-relaxed">
                            Every stage is designed to
                            reduce project risk, improve
                            collaboration, and ensure that
                            business goals remain aligned
                            with technical execution.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Process Outcomes */}

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                      {[
                        {
                          value: '100%',
                          label: 'Transparency',
                        },
                        {
                          value: 'Agile',
                          label: 'Execution',
                        },
                        {
                          value: 'Fast',
                          label: 'Delivery',
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            text-center
                          "
                        >
                          <h5
                            className="
                              text-2xl
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
                          </h5>

                          <p className="mt-2 text-sm text-slate-600">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Navigation */}

            <div className="lg:col-span-5">
              <div
                className="
                  rounded-[40px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                "
              >
                <div className="space-y-3">
                  {processSteps.map((step) => {
                    const Icon = step.icon;

                    const isActive =
                      activeStep.number ===
                      step.number;

                    return (
                      <motion.button
                        key={step.number}
                        whileHover={{
                          x: 6,
                        }}
                        onMouseEnter={() =>
                          setActiveStep(step)
                        }
                        onClick={() =>
                          setActiveStep(step)
                        }
                        className="w-full text-left"
                      >
                        <div
                          className={`
                            rounded-3xl
                            p-5
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? `bg-gradient-to-r ${step.gradient} text-white shadow-lg`
                                : 'bg-slate-50 hover:bg-slate-100'
                            }
                          `}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                ${
                                  isActive
                                    ? 'bg-white/20'
                                    : 'bg-white'
                                }
                              `}
                            >
                              <Icon className="h-6 w-6" />
                            </div>

                            <div>
                              <p
                                className={`
                                  text-xs
                                  font-semibold
                                  tracking-widest
                                  ${
                                    isActive
                                      ? 'text-white/70'
                                      : 'text-slate-400'
                                  }
                                `}
                              >
                                {step.number}
                              </p>

                              <h4 className="font-semibold">
                                {step.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
                      </div>

          {/* Process Principles */}

          <div className="mt-20">
            <div
              className="
                rounded-[40px]
                border
                border-slate-200
                bg-white
                p-8
                lg:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Content */}

                <div className="lg:col-span-4">
                  <span
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
                      text-blue-700
                    "
                  >
                    Delivery Principles
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-slate-900">
                    Built Around
                    Transparency &
                    Collaboration
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Our delivery framework ensures
                    every stakeholder stays informed,
                    aligned, and involved throughout
                    the project lifecycle.
                  </p>
                </div>

                {/* Metrics */}

                <div className="lg:col-span-8">
                  <div className="grid gap-5 md:grid-cols-3">
                    {[
                      {
                        value: '100%',
                        title:
                          'Transparent Communication',
                      },
                      {
                        value: 'Agile',
                        title:
                          'Development Methodology',
                      },
                      {
                        value: 'End-to-End',
                        title:
                          'Project Ownership',
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{
                          y: -6,
                        }}
                        className="
                          rounded-[28px]
                          border
                          border-slate-200
                          bg-slate-50
                          p-8
                          text-center
                        "
                      >
                        <h4
                          className="
                            text-3xl
                            lg:text-4xl
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
                        </h4>

                        <p className="mt-3 text-slate-600">
                          {item.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Banner */}

          <div className="mt-16">
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-violet-600
                p-10
                lg:p-14
              "
            >
              {/* Decorative Blurs */}

              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

              <div className="relative z-10 text-center">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-white/15
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    backdrop-blur-xl
                  "
                >
                  Structured For Success
                </span>

                <h3
                  className="
                    mt-6
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-white
                  "
                >
                  A Process Designed To
                  Deliver Predictable Results
                </h3>

                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-relaxed
                    text-white/90
                  "
                >
                  From discovery to post-launch
                  support, every step is carefully
                  planned to reduce risk, improve
                  efficiency, and maximize project
                  success.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <button
                    className="
                      rounded-2xl
                      bg-white
                      px-8
                      py-4
                      font-semibold
                      text-slate-900
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Start Your Project
                  </button>

                  <button
                    className="
                      rounded-2xl
                      border
                      border-white/20
                      bg-white/10
                      px-8
                      py-4
                      font-semibold
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:bg-white/20
                    "
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}