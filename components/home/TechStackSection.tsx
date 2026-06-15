'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'TensorFlow', category: 'AI / ML' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
];

export default function TechStackSection() {
  return (
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-secondary mb-5">
            Technology Stack
          </span>

          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Modern Technologies
            <span className="block text-gradient">
              Built For Performance
            </span>
          </h2>

          <p className="text-muted text-lg leading-relaxed">
            We leverage cutting-edge frameworks, cloud platforms,
            databases, and AI technologies to build scalable,
            secure, and future-ready digital products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.name}
              delay={index * 0.05}
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 text-center overflow-hidden"
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5]" />

                <div className="mb-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0E4DB7]/15 via-[#3CC8F5]/10 to-[#12C7B5]/15">
                    <span className="text-xl font-bold text-white">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">
                  {tech.name}
                </h3>

                <p className="text-sm text-muted">
                  {tech.category}
                </p>

                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="mx-auto h-[2px] w-12 rounded-full bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5]" />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-20">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-gradient mb-2">
                  12+
                </h3>
                <p className="text-muted">
                  Modern Technologies
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gradient mb-2">
                  100%
                </h3>
                <p className="text-muted">
                  Scalable Architecture
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-gradient mb-2">
                  24/7
                </h3>
                <p className="text-muted">
                  Continuous Innovation
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}