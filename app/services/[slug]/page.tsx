'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { services, getServiceBySlug } from '@/data/services';
import { portfolios } from '@/data/portfolios';

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

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/services" className="text-accent hover:underline">
            View All Services
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const IconComponent = iconMap[service.icon] || Globe;
  const relatedProjects = portfolios.filter(p => p.serviceId === service._id).slice(0, 3);
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-[80px]" />
          </div>

          <div className="container-custom relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-brown flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  Service
                </span>
              </div>

              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.title}
              </h1>

              <p className="text-muted text-xl max-w-3xl">
                {service.shortDescription}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <div className="glass rounded-2xl overflow-hidden mb-8">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                      Overview
                    </h2>
                    <p className="text-muted text-lg mb-8">
                      {service.description}
                    </p>

                    <h3 className="font-poppins text-xl font-bold text-white mb-4">
                      Key Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 glass rounded-xl p-4"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-white">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div>
                <AnimatedSection delay={0.2}>
                  <div className="glass rounded-2xl p-6 sticky top-32">
                    <h3 className="font-poppins font-semibold text-white text-lg mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-white/5 text-muted text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-poppins font-semibold text-white text-lg mb-4">
                      Need This Service?
                    </h3>
                    <Link
                      href="/contact"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Get a Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="section-padding bg-dark">
            <div className="container-custom">
              <AnimatedSection className="mb-12">
                <h2 className="font-poppins text-3xl font-bold text-white">
                  Related <span className="text-gradient">Projects</span>
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((project, index) => (
                  <AnimatedSection key={project._id} delay={index * 0.1}>
                    <Link href={`/portfolio/${project.slug}`}>
                      <motion.div
                        whileHover={{ y: -10 }}
                        className="glass rounded-2xl overflow-hidden group"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="p-6">
                          <h3 className="font-poppins font-semibold text-white group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted text-sm">{project.client}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <AnimatedSection className="mb-12">
              <h2 className="font-poppins text-3xl font-bold text-white">
                Other <span className="text-gradient">Services</span>
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((s, index) => {
                const OtherIcon = iconMap[s.icon] || Globe;
                return (
                  <AnimatedSection key={s._id} delay={index * 0.1}>
                    <Link href={`/services/${s.slug}`}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="glass rounded-xl p-4 group"
                      >
                        <OtherIcon className="w-6 h-6 text-primary mb-3" />
                        <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                          {s.title}
                        </h3>
                      </motion.div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
