'use client';

import ScrollProgress from '@/components/shared/ScrollProgress';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import FeaturedServices from '@/components/services/FeaturedServices';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import IndustriesSection from '@/components/services/IndustriesSection';
import ProcessSection from '@/components/services/ProcessSection';
import TechnologyExpertise from '@/components/services/TechnologyExpertise';
import SuccessMetrics from '@/components/services/SuccessMetrics';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />

      <main className="overflow-hidden bg-white">
        <ServicesHero />

        <ServicesOverview />

        <FeaturedServices />

        <WhyChooseUs />

        <IndustriesSection />

        <ProcessSection />

        <TechnologyExpertise />

        <SuccessMetrics />

        <ServicesCTA />
      </main>
    </>
  );
}