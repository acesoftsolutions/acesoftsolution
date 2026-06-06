'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { portfolios } from '@/data/portfolios';

export default function PortfolioSection() {
  const displayedPortfolios = portfolios.slice(0, 3);

  return (
    <section className="section-padding bg-dark-light">
      <div className="container-custom">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-secondary flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPortfolios.map((project, index) => (
            <AnimatedSection key={project._id} delay={index * 0.1}>
              <Link href={`/portfolio/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-white/5 text-muted text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
