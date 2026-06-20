import { notFound } from 'next/navigation';
import { services } from '@/data/services';

import ServiceHero from '@/components/service/ServiceHero';
import ServiceContent from '@/components/service/ServiceContent';
import ServiceCTA from '@/components/service/ServiceCTA';

export default async function ServicePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ServiceCTA />
    </>
  );
}