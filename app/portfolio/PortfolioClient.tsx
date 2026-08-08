'use client';

import React from 'react';

import ScrollProgress from '@/components/shared/ScrollProgress';

import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';
import ResultsSection from '@/components/portfolio/ResultsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PortfolioCTA from '@/components/portfolio/WorkCTA';

export default function PortfolioClient() {
  return (
    <>
      <ScrollProgress />

      {/* Portfolio Hero */}
      <PortfolioHero />

      {/* Featured Project */}
      <FeaturedCaseStudy />

      {/* Business Results */}
      <ResultsSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <PortfolioCTA />
    </>
  );
}