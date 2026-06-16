'use client';

import {
  Users,
  Trophy,
  Award,
  Clock,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const stats = [
  {
    icon: Users,
    value: '150+',
    label: 'Happy Clients',
  },
  {
    icon: Trophy,
    value: '500+',
    label: 'Projects Delivered',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Technology Experts',
  },
  {
    icon: Clock,
    value: '10+',
    label: 'Years Experience',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-[#0E4DB7]
            via-[#3CC8F5]
            to-[#12C7B5]
            p-10
            lg:p-16
          "
        >
          <AnimatedSection>
            <div className="text-center">
              <h2
                className="
                  text-4xl
                  font-bold
                  text-white
                  md:text-5xl
                "
              >
                Numbers That Reflect
                Excellence
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-lg
                  text-white/90
                "
              >
                Our commitment to innovation,
                quality and client success has
                helped us deliver measurable
                results for businesses worldwide.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <AnimatedSection
                  key={stat.label}
                  delay={index * 0.08}
                >
                  <div
                    className="
                      rounded-[28px]
                      bg-white/10
                      p-8
                      text-center
                      backdrop-blur-sm
                    "
                  >
                    <Icon
                      className="
                        mx-auto
                        h-10
                        w-10
                        text-white
                      "
                    />

                    <h3
                      className="
                        mt-5
                        text-5xl
                        font-black
                        text-white
                      "
                    >
                      {stat.value}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-white/80
                      "
                    >
                      {stat.label}
                    </p>
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