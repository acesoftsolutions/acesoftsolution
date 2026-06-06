'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { portfolios } from '@/data/portfolios';

const categories = ['All', 'Web App', 'Mobile App', 'E-Commerce', 'Enterprise'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPortfolios = portfolios.filter(portfolio => {
    const matchesCategory = activeCategory === 'All' || portfolio.category === activeCategory;
    const matchesSearch = portfolio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          portfolio.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Portfolio
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Projects That <span className="text-gradient">Define Us</span>
              </h1>
              <p className="text-muted text-lg">
                Explore our work and see how we&apos;ve helped businesses transform
                their digital presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-gradient-brown text-white shadow-glow'
                        : 'glass text-muted hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 w-full md:w-64"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolios.map((portfolio, index) => (
                <AnimatedSection key={portfolio._id} delay={index * 0.1}>
                  <Link href={`/portfolio/${portfolio.slug}`}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="glass rounded-2xl overflow-hidden group cursor-pointer"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={portfolio.image}
                          alt={portfolio.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-accent text-xs font-medium">
                            {portfolio.category}
                          </span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-poppins font-semibold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                          {portfolio.title}
                        </h3>
                        <p className="text-muted text-sm mb-4 line-clamp-2">
                          {portfolio.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-muted text-sm">{portfolio.client}</span>
                          <div className="flex flex-wrap gap-1">
                            {portfolio.technologies.slice(0, 2).map((tech) => (
                              <span
                                key={tech}
                                className="text-xs text-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {filteredPortfolios.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted text-lg">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
