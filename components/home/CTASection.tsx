'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTASection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px] -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[120px] -translate-y-1/2"
        />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="glass rounded-3xl p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-brown mb-8"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient">Digital Presence?</span>
            </h2>

            <p className="text-muted max-w-2xl mx-auto mb-10 text-lg">
              Let&apos;s discuss how we can help your business grow with innovative
              technology solutions. Get a free consultation today!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary flex items-center gap-2">
                View Our Work
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
