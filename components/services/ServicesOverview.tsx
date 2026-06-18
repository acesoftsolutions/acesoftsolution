'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const services = [
  {
    id: '01',
    icon: Globe,
    title: 'Web Engineering',
    description:
      'Enterprise-grade websites, SaaS platforms, customer portals, and scalable web applications built for performance and business growth.',
    features: [
      'Custom Web Applications',
      'Enterprise Portals',
      'SaaS Development',
      'API Integrations',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'AWS',
    ],
    gradient:
      'from-blue-600 via-cyan-500 to-violet-600',
  },

  {
    id: '02',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform and native mobile experiences designed for scalability, engagement, and exceptional user satisfaction.',
    features: [
      'iOS & Android Apps',
      'Flutter Development',
      'React Native Apps',
      'App Maintenance',
    ],
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'Node.js',
    ],
    gradient:
      'from-cyan-500 via-blue-500 to-indigo-600',
  },

  {
    id: '03',
    icon: Brain,
    title: 'AI & Automation',
    description:
      'Intelligent solutions that automate workflows, improve efficiency, and unlock new business opportunities.',
    features: [
      'AI Chatbots',
      'Workflow Automation',
      'OpenAI Integrations',
      'Predictive Analytics',
    ],
    technologies: [
      'OpenAI',
      'Python',
      'LangChain',
      'Vector DB',
      'Node.js',
      'TensorFlow',
    ],
    gradient:
      'from-violet-600 via-fuchsia-500 to-pink-500',
  },

  {
    id: '04',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Modern cloud infrastructure and deployment pipelines built for reliability, scalability, and security.',
    features: [
      'Cloud Migration',
      'CI/CD Pipelines',
      'Infrastructure Automation',
      'Monitoring & Security',
    ],
    technologies: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform',
    ],
    gradient:
      'from-sky-500 via-cyan-500 to-emerald-500',
  },

  {
    id: '05',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Human-centered experiences focused on usability, accessibility, engagement, and conversion optimization.',
    features: [
      'UX Research',
      'Wireframing',
      'UI Design Systems',
      'Prototyping',
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Illustrator',
      'Framer',
      'Maze',
      'Hotjar',
    ],
    gradient:
      'from-orange-500 via-pink-500 to-rose-500',
  },

  {
    id: '06',
    icon: TrendingUp,
    title: 'Digital Growth',
    description:
      'SEO, analytics, performance optimization, and growth strategies that generate measurable business outcomes.',
    features: [
      'SEO Optimization',
      'Performance Audits',
      'Conversion Strategy',
      'Analytics & Tracking',
    ],
    technologies: [
      'GA4',
      'Search Console',
      'Ahrefs',
      'SEMrush',
      'Hotjar',
      'Tag Manager',
    ],
    gradient:
      'from-emerald-500 via-green-500 to-teal-500',
  },
];

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(
    services[0]
  );

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
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
              Our Expertise
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
              Digital Expertise Across
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
                Every Stage of Innovation
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We combine strategy, design, engineering,
              cloud, and artificial intelligence to build
              future-ready digital solutions that help
              organizations innovate, scale, and stay
              ahead of the competition.
            </p>
          </div>

          {/* Main Showcase */}

          <div className="mt-20">
            <div
              className="
                rounded-[40px]
                border
                border-slate-200
                bg-white
                p-6
                lg:p-8
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              "
            >
              <div className="grid gap-8 lg:grid-cols-12">
                {/* Left Navigation */}

                <div className="lg:col-span-4">
                  <div className="space-y-3">
                    {services.map((service) => {
                      const Icon = service.icon;

                      const isActive =
                        activeService.id === service.id;

                      return (
                        <motion.button
                          key={service.id}
                          whileHover={{
                            x: 6,
                          }}
                          onMouseEnter={() =>
                            setActiveService(service)
                          }
                          onClick={() =>
                            setActiveService(service)
                          }
                          className={`
                            w-full
                            rounded-3xl
                            p-5
                            text-left
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? `bg-gradient-to-r ${service.gradient} text-white shadow-xl`
                                : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
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
                                {service.id}
                              </p>

                              <h3 className="font-semibold">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Showcase Starts Here */}

                <div className="lg:col-span-8">
                                      <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
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
                      className="h-full"
                    >
                      {/* Showcase Card */}

                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[32px]
                          border
                          border-slate-200
                          bg-gradient-to-br
                          from-white
                          to-slate-50
                          p-8
                          lg:p-10
                          h-full
                        "
                      >
                        {/* Gradient Glow */}

                        <div
                          className={`
                            absolute
                            inset-0
                            opacity-10
                            bg-gradient-to-br
                            ${activeService.gradient}
                          `}
                        />

                        <div className="relative">
                          {/* Header */}

                          <div className="flex flex-wrap items-start justify-between gap-6">
                            <div>
                              <div
                                className={`
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-full
                                  bg-gradient-to-r
                                  ${activeService.gradient}
                                  px-4
                                  py-2
                                  text-sm
                                  font-medium
                                  text-white
                                `}
                              >
                                Selected Service
                              </div>

                              <h3 className="mt-6 text-4xl font-bold text-slate-900">
                                {activeService.title}
                              </h3>

                              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                                {activeService.description}
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
                                ${activeService.gradient}
                                shadow-xl
                              `}
                            >
                              <activeService.icon className="h-10 w-10 text-white" />
                            </div>
                          </div>

                          {/* Features */}

                          <div className="mt-10">
                            <h4 className="text-lg font-semibold text-slate-900">
                              Core Capabilities
                            </h4>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                              {activeService.features.map(
                                (feature) => (
                                  <motion.div
                                    key={feature}
                                    initial={{
                                      opacity: 0,
                                      x: -10,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    className="
                                      flex
                                      items-center
                                      gap-3
                                      rounded-2xl
                                      border
                                      border-slate-200
                                      bg-white
                                      px-5
                                      py-4
                                    "
                                  >
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />

                                    <span className="font-medium text-slate-700">
                                      {feature}
                                    </span>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Technology Stack */}

                          <div className="mt-10">
                            <h4 className="text-lg font-semibold text-slate-900">
                              Technology Stack
                            </h4>

                            <div className="mt-5 flex flex-wrap gap-3">
                              {activeService.technologies.map(
                                (tech) => (
                                  <motion.div
                                    key={tech}
                                    whileHover={{
                                      y: -3,
                                    }}
                                    className="
                                      rounded-full
                                      border
                                      border-slate-200
                                      bg-white
                                      px-4
                                      py-2
                                      text-sm
                                      font-medium
                                      text-slate-700
                                      shadow-sm
                                    "
                                  >
                                    {tech}
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>

                          {/* CTA Section */}

                          <div
                            className={`
                              mt-10
                              rounded-[28px]
                              bg-gradient-to-r
                              ${activeService.gradient}
                              p-6
                              text-white
                            `}
                          >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                              <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                                  Ready To Build?
                                </p>

                                <h4 className="mt-2 text-2xl font-bold">
                                  Let's Turn Your Idea Into Reality
                                </h4>

                                <p className="mt-2 text-white/90">
                                  Work with our experts to design,
                                  develop, and launch scalable
                                  digital solutions.
                                </p>
                              </div>

                              <motion.button
                                whileHover={{
                                  scale: 1.05,
                                }}
                                whileTap={{
                                  scale: 0.98,
                                }}
                                className="
                                  inline-flex
                                  items-center
                                  gap-2
                                  rounded-2xl
                                  bg-white
                                  px-6
                                  py-4
                                  font-semibold
                                  text-slate-900
                                  shadow-lg
                                "
                              >
                                Start Your Project

                                <ArrowRight className="h-5 w-5" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                              </div>
            </div>
          </div>

          {/* Enterprise Metrics */}

          <div className="mt-16">
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >
              {/* Background Glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-cyan-500/[0.03]" />

              <div className="relative">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left Content */}

                  <div className="lg:col-span-4">
                    <span
                      className="
                        inline-flex
                        items-center
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
                      Proven Results
                    </span>

                    <h3 className="mt-5 text-3xl font-bold text-slate-900">
                      Delivering Measurable
                      Digital Success
                    </h3>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      We partner with startups,
                      SMEs, and enterprises to
                      build innovative digital
                      solutions that create
                      measurable business impact
                      and long-term value.
                    </p>
                  </div>

                  {/* Stats */}

                  <div className="lg:col-span-8">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          value: '50+',
                          label: 'Projects Delivered',
                        },
                        {
                          value: '98%',
                          label: 'Client Retention',
                        },
                        {
                          value: '10+',
                          label: 'Industries Served',
                        },
                        {
                          value: '24/7',
                          label: 'Support Available',
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
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
                            y: -6,
                          }}
                          className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-slate-50
                            p-6
                            text-center
                            transition-all
                            duration-300
                            hover:border-blue-200
                            hover:bg-white
                          "
                        >
                          <h4
                            className="
                              text-4xl
                              font-bold
                              bg-gradient-to-r
                              from-blue-600
                              via-cyan-500
                              to-violet-600
                              bg-clip-text
                              text-transparent
                            "
                          >
                            {stat.value}
                          </h4>

                          <p className="mt-3 text-sm text-slate-600">
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Strip */}

                <div className="mt-10 border-t border-slate-200 pt-8">
                  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
                    <div>
                      <p className="text-sm text-slate-500">
                        Expertise
                      </p>
                      <p className="font-semibold text-slate-900">
                        Web • Mobile • AI • Cloud
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Industries
                      </p>
                      <p className="font-semibold text-slate-900">
                        Healthcare • Finance • Retail
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Technologies
                      </p>
                      <p className="font-semibold text-slate-900">
                        React • Next.js • Node.js
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">
                        Commitment
                      </p>
                      <p className="font-semibold text-slate-900">
                        Quality • Security • Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}