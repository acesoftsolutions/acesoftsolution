'use client';

import { motion } from 'framer-motion';
import {
Search,
Lightbulb,
PenTool,
Code2,
Rocket,
TrendingUp,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const processSteps = [
{
number: '01',
title: 'Discovery & Analysis',
description:
'Understanding your business goals, challenges, users, and requirements to build the right solution foundation.',
icon: Search,
},
{
number: '02',
title: 'Strategy & Planning',
description:
'Creating a clear roadmap, project scope, timelines, technology stack, and execution strategy.',
icon: Lightbulb,
},
{
number: '03',
title: 'UI/UX Design',
description:
'Designing intuitive user experiences and modern interfaces focused on engagement and conversion.',
icon: PenTool,
},
{
number: '04',
title: 'Development',
description:
'Building scalable, secure, and high-performance solutions using modern technologies.',
icon: Code2,
},
{
number: '05',
title: 'Launch & Deployment',
description:
'Rigorous testing, optimization, deployment, and go-live support for a smooth launch.',
icon: Rocket,
},
{
number: '06',
title: 'Growth & Support',
description:
'Continuous improvements, maintenance, analytics, and scaling strategies for long-term success.',
icon: TrendingUp,
},
];

export default function ProcessSection() {
return ( <section className="bg-[#F8FAFC] py-14 lg:py-12"> <div className="mx-auto max-w-7xl px-5 lg:px-8">
{/* Header */}

    <AnimatedSection>
      <div className="mx-auto max-w-4xl text-center">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Our Process
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-slate-900
            md:text-5xl
            xl:text-6xl
          "
        >
          A Proven Process
          <span
            className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
          >
            Built For Results
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
          We follow a structured and transparent
          development process that ensures every
          project is delivered efficiently,
          strategically, and successfully.
        </p>
      </div>
    </AnimatedSection>

    {/* Desktop Timeline */}

    <div className="relative mt-24 hidden lg:block">
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-blue-200
          via-cyan-300
          to-teal-200
        "
      />

      <div className="space-y-12">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <AnimatedSection
              key={step.number}
              delay={index * 0.08}
            >
              <div
                className={`
                  flex items-center
                  ${
                    isEven
                      ? 'justify-start'
                      : 'justify-end'
                  }
                `}
              >
                <div
                  className={`
                    w-[calc(50%-40px)]
                    ${
                      isEven
                        ? 'pr-14'
                        : 'pl-14'
                    }
                  `}
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      relative
                      rounded-[32px]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:shadow-xl
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
                        from-blue-700
                        via-cyan-500
                        to-teal-500
                      "
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div
                      className="
                        text-sm
                        font-bold
                        text-blue-600
                      "
                    >
                      STEP {step.number}
                    </div>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <div
                  className="
                    absolute
                    left-1/2
                    flex
                    h-12
                    w-12
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-white
                    bg-gradient-to-r
                    from-blue-700
                    to-cyan-500
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                  "
                >
                  {step.number}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>

    {/* Mobile Layout */}

    <div className="mt-16 grid gap-5 lg:hidden">
      {processSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <AnimatedSection
            key={step.number}
            delay={index * 0.08}
          >
            <motion.div
              whileHover={{
                y: -4,
              }}
              className="
                rounded-[28px]
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-700
                    via-cyan-500
                    to-teal-500
                  "
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div>
                  <div
                    className="
                      text-xs
                      font-bold
                      tracking-wider
                      text-blue-600
                    "
                  >
                    STEP {step.number}
                  </div>

                  <h3
                    className="
                      mt-1
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        );
      })}
    </div>

    {/* Bottom CTA */}

    <AnimatedSection className="mt-20">
      <div
        className="
          overflow-hidden
          rounded-[40px]
          bg-white
          p-8
          shadow-sm
          ring-1
          ring-slate-200
          lg:p-12
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h3
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Transparent Process.
              Predictable Results.
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-slate-600
              "
            >
              From discovery to deployment and
              ongoing support, we ensure complete
              visibility and collaboration at every
              stage of your project.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              px-8
              py-5
              text-center
              text-white
            "
          >
            <div className="text-3xl font-bold">
              6-Step
            </div>

            <div className="text-white/90">
              Delivery Framework
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>


);
}
