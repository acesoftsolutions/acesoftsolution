'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Heart,
  Shield,
  Lightbulb,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description:
      'Our clients are at the center of every decision we make. Their growth is our greatest achievement.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We build trust through transparency, honesty and accountability in every partnership.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace emerging technologies and creative thinking to solve complex business challenges.',
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-100
                bg-cyan-50
                px-5
                py-2
                text-sm
                font-semibold
                text-cyan-700
              "
            >
              Our Core Values
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                text-slate-900
                md:text-5xl
              "
            >
              The Principles Behind
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
                Every Solution We Build
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <AnimatedSection
                key={value.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    h-full
                    rounded-[32px]
                    bg-white
                    p-8
                    shadow-sm
                    ring-1
                    ring-slate-200
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
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

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}