import type { Metadata } from 'next';

import IndustriesHero from '@/components/industries/IndustriesHero';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import IndustryChallenges from '@/components/industries/IndustryChallenges';
import IndustrySolutions from '@/components/industries/IndustrySolutions';
import IndustryStats from '@/components/industries/IndustryStats';
import IndustryCTA from '@/components/industries/IndustryCTA';

export const metadata: Metadata = {
  title:
    'Industries We Serve | Ace Soft Solution',
  description:
    'Explore the industries we serve with custom software development, AI solutions, cloud applications, SaaS platforms, and digital transformation services.',
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      <IndustriesGrid />

      <IndustryChallenges />

      <IndustrySolutions />

      <IndustryStats />

      <IndustryCTA />
    </>
  );
}