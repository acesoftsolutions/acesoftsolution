import { industryDetails } from '@/data/industryDetails';

import IndustryHero from '@/components/industry-details/IndustryHero';
import IndustryOverview from '@/components/industry-details/IndustryOverview';
import IndustrySolutions from '@/components/industry-details/IndustrySolutions';
import IndustryTechnology from '@/components/industry-details/IndustryTechnology';
import IndustryProcess from '@/components/industry-details/IndustryProcess';
import IndustryFAQCTA from '@/components/industry-details/IndustryFAQCTA';

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry =
    industryDetails[
      params.slug as keyof typeof industryDetails
    ] || industryDetails.healthcare;

  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustrySolutions industry={industry} />
      <IndustryTechnology industry={industry} />
      <IndustryProcess industry={industry} />
      <IndustryFAQCTA industry={industry} />
    </>
  );
}