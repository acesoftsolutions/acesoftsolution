'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Award, Target } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const stats = [
  { icon: Users, value: '150+', label: 'Happy Clients' },
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Target, value: '99%', label: 'Success Rate' },
];

const features = [
  'Customized solutions tailored to your needs',
  'Expert team with diverse technical skills',
  'Agile development methodology',
  '24/7 dedicated support & maintenance',
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-dark-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team working"
                  className="rounded-2xl shadow-premium w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-brown flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-muted text-sm">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
              We Build Digital Solutions That{' '}
              <span className="text-gradient">Drive Success</span>
            </h2>
            <p className="text-muted mb-6 text-lg">
              Ace Soft Solution is a premier IT services company specializing in creating
              innovative digital experiences. We combine cutting-edge technology with creative
              excellence to deliver solutions that transform businesses.
            </p>
            <p className="text-muted mb-8">
              Our team of experts brings together diverse skills in web development, mobile apps,
              AI solutions, and digital marketing to provide comprehensive services that meet
              your unique business needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/about" className="btn-primary flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-muted text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
