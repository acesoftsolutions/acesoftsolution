'use client';

import React from 'react';

import ScrollProgress from '@/components/shared/ScrollProgress';

import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FeaturedCaseStudy from '@/components/portfolio/FeaturedCaseStudy';
import ResultsSection from '@/components/portfolio/ResultsSection';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import PortfolioCTA from '@/components/portfolio/WorkCTA';

export default function PortfolioPage() {
return (
<> <ScrollProgress />


  <main className="overflow-hidden">
    {/* Hero */}
    <PortfolioHero />

    {/* Featured Project */}
    <FeaturedCaseStudy />

    {/* Business Results */}
    <ResultsSection />

    {/* Client Testimonials */}
    <TestimonialsSection />

    {/* Final CTA */}
    <PortfolioCTA />
  </main>
</>


);
}
