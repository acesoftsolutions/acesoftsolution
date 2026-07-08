import { notFound } from "next/navigation";
import { services } from "@/data/services";

import ServiceHero from "@/components/service/ServiceHero";
import ServiceCTA from "@/components/service/ServiceCTA";

import {
  ServiceOverview,
  WhyChooseService,
  CoreCapabilities,
  TechnologyEcosystem,
  DeliveryProcess,
  BusinessBenefits,
  ServiceFAQ,
} from "@/components/service";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <ServiceHero service={service} />

      {/* Service Overview */}
      <ServiceOverview service={service} />

      {/* Why Choose This Service */}
      <WhyChooseService />

      {/* Core Capabilities */}
      <CoreCapabilities service={service} />

      {/* Technology Stack */}
      <TechnologyEcosystem service={service} />

      {/* Delivery Process */}
      <DeliveryProcess service={service} />

      {/* Business Benefits */}
      <BusinessBenefits service={service} />

      {/* FAQ */}
      <ServiceFAQ service={service} />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}