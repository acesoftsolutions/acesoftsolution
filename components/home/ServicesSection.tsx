'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  Settings,
  Brain,
  ShoppingCart,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  Settings,
  Brain,
  ShoppingCart,
};

export default function ServicesSection() {
  const displayedServices = services.slice(0, 8);

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium opacity-30" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive IT Solutions for{' '}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            We offer a full suite of technology services designed to help your business
            thrive in the digital age.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <AnimatedSection key={service._id} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl p-6 h-full group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-brown/20 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                      <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-poppins font-semibold text-white text-lg mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
