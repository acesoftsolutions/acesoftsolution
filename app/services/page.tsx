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
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
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

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive IT Solutions for{' '}
                <span className="text-gradient">Modern Businesses</span>
              </h1>
              <p className="text-muted text-lg">
                From web development to AI solutions, we offer a full suite of services
                designed to transform your business and drive digital success.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Globe;
                return (
                  <AnimatedSection key={service._id} delay={index * 0.1}>
                    <Link href={`/services/${service.slug}`}>
                      <motion.div
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="glass rounded-2xl p-8 h-full group cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-xl bg-gradient-brown flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-poppins font-semibold text-white text-xl mb-4 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted mb-6 line-clamp-3">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-medium">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </motion.div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom <span className="text-gradient">Solution?</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8 text-lg">
                We understand that every business is unique. Let us create a tailored
                solution that perfectly fits your needs.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
