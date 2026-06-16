'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Palette,
  Network,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const teams = [
  {
    title: 'Software Engineers',
    icon: Code2,
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Building scalable web applications, enterprise software and cloud-native systems.',
  },

  {
    title: 'AI Specialists',
    icon: Brain,
    image:
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Developing intelligent automation, machine learning and AI-powered business solutions.',
  },

  {
    title: 'UI/UX Designers',
    icon: Palette,
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Creating user-centric experiences that drive engagement and business growth.',
  },

  {
    title: 'Solution Architects',
    icon: Network,
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description:
      'Designing enterprise-grade architectures for performance, security and scalability.',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
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
              Our Team
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
              Experts Behind
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
                Every Successful Project
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-slate-600
              "
            >
              A multidisciplinary team of engineers,
              designers, AI experts and consultants
              working together to deliver impactful
              digital solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {teams.map((team, index) => {
            const Icon = team.icon;

            return (
              <AnimatedSection
                key={team.title}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="
                    overflow-hidden
                    rounded-[32px]
                    bg-white
                    shadow-sm
                    ring-1
                    ring-slate-200
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                >
                  <div className="aspect-[4/4] overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-7">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-br
                        from-[#0E4DB7]
                        via-[#3CC8F5]
                        to-[#12C7B5]
                      "
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {team.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-slate-600
                        leading-relaxed
                      "
                    >
                      {team.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}