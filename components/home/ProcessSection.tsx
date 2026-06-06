'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and requirements through detailed consultations.',
    color: 'from-[#7B4F2C] to-[#A47148]'
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Our team crafts a comprehensive strategy and roadmap tailored to your specific needs.',
    color: 'from-[#A47148] to-[#D4A373]'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We bring your vision to life using the latest technologies and best practices.',
    color: 'from-[#D4A373] to-[#7B4F2C]'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'After thorough testing, we deploy your solution and ensure a smooth launch.',
    color: 'from-[#7B4F2C] to-[#A47148]'
  },
  {
    icon: RefreshCw,
    title: 'Support',
    description: 'We provide ongoing support, maintenance, and optimization to ensure continued success.',
    color: 'from-[#A47148] to-[#D4A373]'
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Bring Your{' '}
            <span className="text-gradient">Ideas to Life</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Our proven development process ensures we deliver exceptional results
            on time and within budget.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow`}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-light border border-primary flex items-center justify-center text-xs text-accent font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
