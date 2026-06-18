'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { getPortfolioBySlug } from '@/data/portfolios';
import { services } from '@/data/services';

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return (
      <>
 
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-accent hover:underline">
            View All Projects
          </Link>
        </div>

      </>
    );
  }

  const service = services.find(s => s._id === portfolio.serviceId);

  return (
    <>
      <ScrollProgress />


      <main>
        <section className="pt-32 pb-12 bg-dark">
          <div className="container-custom">
            <AnimatedSection>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-muted hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-accent text-sm font-medium">
                  {portfolio.category}
                </span>
                <div className="flex items-center gap-2 text-muted">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(portfolio.completedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                </div>
              </div>

              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {portfolio.title}
              </h1>

              <p className="text-muted text-xl max-w-3xl">
                {portfolio.shortDescription}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-12 bg-dark">
          <div className="container-custom">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="font-poppins text-2xl font-bold text-white mb-6">
                    Project Overview
                  </h2>
                  <p className="text-muted text-lg mb-8">
                    {portfolio.description}
                  </p>

                  <h3 className="font-poppins text-xl font-bold text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {portfolio.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 glass rounded-xl p-4"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-white">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {portfolio.images.length > 1 && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {portfolio.images.slice(1).map((img, index) => (
                        <motion.img
                          key={index}
                          src={img}
                          alt={`${portfolio.title} screenshot ${index + 2}`}
                          className="w-full rounded-xl"
                          whileHover={{ scale: 1.02 }}
                        />
                      ))}
                    </div>
                  )}
                </AnimatedSection>
              </div>

              <div>
                <AnimatedSection delay={0.2}>
                  <div className="glass rounded-2xl p-6 sticky top-32">
                    <h3 className="font-poppins font-semibold text-white text-lg mb-6">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-muted text-sm mb-1">Client</p>
                        <p className="text-white font-medium">{portfolio.client}</p>
                      </div>
                      <div>
                        <p className="text-muted text-sm mb-1">Industry</p>
                        <p className="text-white font-medium">{portfolio.industry}</p>
                      </div>
                      {service && (
                        <div>
                          <p className="text-muted text-sm mb-1">Service</p>
                          <Link href={`/services/${service.slug}`} className="text-accent hover:underline font-medium">
                            {service.title}
                          </Link>
                        </div>
                      )}
                      <div>
                        <p className="text-muted text-sm mb-1">Technologies</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {portfolio.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg bg-white/5 text-muted text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <Link
                        href="/contact"
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        Start Similar Project
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}
