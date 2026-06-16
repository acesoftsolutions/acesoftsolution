'use client';

import React from 'react';

import ScrollProgress from '@/components/shared/ScrollProgress';
import BackToTop from '@/components/shared/FloatingElements';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import ProcessSection from '@/components/home/ProcessSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import StatsSection from '@/components/home/StatsSection';
import TechStackSection from '@/components/home/TechStackSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <main className="overflow-hidden">
        <HeroSection />

        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>

      <BackToTop />
      <WhatsAppButton />
    </>
  );
}