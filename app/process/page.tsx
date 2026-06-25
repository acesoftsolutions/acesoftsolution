import type { Metadata } from 'next';

import ScrollProgress from '@/components/shared/ScrollProgress';

import ProcessHero from '@/components/process/ProcessHero';
import ProcessOverview from '@/components/process/ProcessOverview';
import ProcessTimeline from '@/components/process/ProcessTimeline';
import ProcessBenefits from '@/components/process/ProcessBenefits';
import ProcessTechStack from '@/components/process/ProcessTechStack';
import ProcessCTA from '@/components/process/ProcessCTA';

export const metadata: Metadata = {
  title: 'Our Process | Ace Soft Solution',
  description:
    'Discover Ace Soft Solution’s proven development process. From discovery and planning to deployment and support, we deliver scalable digital solutions with transparency and quality.',
  keywords: [
    'software development process',
    'web development workflow',
    'IT consulting process',
    'digital product development',
    'custom software development',
    'Ace Soft Solution',
    'agile development company',
    'software development lifecycle',
  ],
  openGraph: {
    title: 'Our Process | Ace Soft Solution',
    description:
      'Explore our structured development process designed to deliver high-quality digital solutions efficiently and transparently.',
    url: 'https://acesoftsolution.com/process',
    siteName: 'Ace Soft Solution',
    type: 'website',
  },
  alternates: {
    canonical: 'https://acesoftsolution.com/process',
  },
};

export default function ProcessPage() {
  return (
    <>
      <ScrollProgress />

      <main className="overflow-hidden bg-slate-950">
        <ProcessHero />

        <ProcessOverview />

        <ProcessTimeline />

        <ProcessBenefits />

        <ProcessTechStack />

        <ProcessCTA />
      </main>
    </>
  );
}