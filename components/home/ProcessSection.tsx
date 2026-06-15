'use client';

import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  RefreshCw,
} from 'lucide-react';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description:
      'We analyze your business goals and requirements to define the project scope.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description:
      'A detailed roadmap and technology strategy is prepared for successful execution.',
  },
  {
    icon: Code,
    title: 'Design & Development',
    description:
      'Our team develops scalable and future-ready digital solutions.',
  },
  {
    icon: Rocket,
    title: 'Testing & Deployment',
    description:
      'Quality assurance and deployment ensure a smooth launch experience.',
  },
  {
    icon: RefreshCw,
    title: 'Support & Growth',
    description:
      'Continuous support, optimization and upgrades help your business scale.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <AnimatedSection>

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-white/[0.03]
                px-5
                py-2
                text-sm
                text-cyan-300
              "
            >
              Our Development Process
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
              How We Transform

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Ideas Into Reality
              </span>

            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                text-white/60
              "
            >
              A proven workflow designed to deliver
              quality software solutions efficiently
              and successfully.
            </p>

          </div>

        </AnimatedSection>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Center Line */}

          <div
            className="
              absolute
              left-1/2
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-cyan-500/30
              to-transparent
              lg:block
            "
          />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection
                  key={step.title}
                  delay={index * 0.1}
                >

                  <div
                    className={`
                      relative
                      flex
                      items-center
                      ${
                        index % 2 === 0
                          ? 'lg:justify-start'
                          : 'lg:justify-end'
                      }
                    `}
                  >

                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="
                        w-full
                        lg:w-[46%]
                        rounded-[32px]
                        border
                        border-cyan-500/10
                        bg-[#0B1220]
                        p-8
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-cyan-500/20
                        hover:shadow-[0_25px_80px_rgba(60,200,245,0.12)]
                      "
                    >

                      <div
                        className="
                          mb-6
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-[#0E4DB7]
                          via-[#3CC8F5]
                          to-[#12C7B5]
                        "
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-cyan-300
                        "
                      >
                        Step {index + 1}
                      </span>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-bold
                          text-white
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          leading-relaxed
                          text-white/60
                        "
                      >
                        {step.description}
                      </p>

                    </motion.div>

                    {/* Timeline Circle */}

                    <div
                      className="
                        absolute
                        left-1/2
                        hidden
                        h-6
                        w-6
                        -translate-x-1/2
                        rounded-full
                        border-4
                        border-[#080c14]
                        bg-cyan-400
                        lg:block
                      "
                    />

                  </div>

                </AnimatedSection>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}