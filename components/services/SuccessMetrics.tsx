'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Rocket,
  Award,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const metrics = [
  {
    icon: TrendingUp,
    value: 120,
    suffix: '%',
    label: 'Revenue Growth',
    description:
      'Helping businesses accelerate revenue through digital transformation.',

    gradient:
      'from-blue-600 via-cyan-500 to-violet-600',
  },

  {
    icon: Users,
    value: 50,
    suffix: 'K+',
    label: 'Users Served',
    description:
      'Building products that scale and serve thousands of users globally.',

    gradient:
      'from-cyan-500 via-blue-500 to-indigo-600',
  },

  {
    icon: Rocket,
    value: 45,
    suffix: '%',
    label: 'Productivity Increase',
    description:
      'Optimized workflows and automation driving operational efficiency.',

    gradient:
      'from-emerald-500 via-green-500 to-teal-500',
  },

  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    description:
      'Focused on delivering exceptional results and long-term partnerships.',

    gradient:
      'from-orange-500 via-amber-500 to-yellow-500',
  },
];

function CountUp({
  end,
  suffix = '',
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);

        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function SuccessMetrics() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        py-12
        lg:py-16
      "
    >
      {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-100
                bg-emerald-50
                px-5
                py-2
                text-sm
                font-medium
                text-emerald-700
              "
            >
              <Sparkles size={16} />
              Business Impact
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-bold
                text-slate-900
                md:text-4xl
                xl:text-5xl
              "
            >
              Delivering Proven

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
                Measurable Business Results
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
              Every solution we engineer is purpose-built to create
              tangible business value, drive operational efficiency,
              and fuel sustainable long-term growth.

            </p>
          </div>

          {/* Metrics Grid */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {metrics.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -10,
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
                  {/* Background Gradient */}

                  <div
                    className={`
                      absolute
                      inset-0
                      bg-gradient-to-br
                      ${item.gradient}
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
                        ${item.gradient}
                        text-white
                        shadow-lg
                      `}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Number */}

                    <h3
                      className="
                        mt-8
                        text-5xl
                        font-bold
                        text-slate-900
                        lg:text-6xl
                      "
                    >
                      <CountUp
                        end={item.value}
                        suffix={item.suffix}
                      />
                    </h3>

                    {/* Label */}

                    <h4
                      className="
                        mt-4
                        text-xl
                        font-semibold
                        text-slate-900
                      "
                    >
                      {item.label}
                    </h4>

                    {/* Description */}

                    <p
                      className="
                        mt-4
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom Accent */}

                    <div
                      className={`
                        mt-8
                        h-1
                        w-16
                        rounded-full
                        bg-gradient-to-r
                        ${item.gradient}
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

      
      

        </AnimatedSection>
      </div>
    </section>
  );
}