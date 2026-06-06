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
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
];

export default function TechStackSection() {
  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Technology Stack
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            We leverage the latest technologies and frameworks to build robust,
            scalable, and future-proof solutions.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass rounded-xl p-4 text-center cursor-pointer group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <span className="text-xl font-bold text-white">{tech.name[0]}</span>
                  </div>
                  <p className="text-white font-medium text-sm">{tech.name}</p>
                  <p className="text-muted text-xs mt-1">{tech.category}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
