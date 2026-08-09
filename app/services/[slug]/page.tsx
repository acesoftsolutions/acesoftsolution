import type { Metadata } from "next";
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

// ======================================================
// DYNAMIC SEO METADATA + CANONICAL
// ======================================================

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  const canonicalUrl = `https://acesoftsolution.com/services/${service.slug}`;

  return {
    title: service.title,
    description: service.shortDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: service.title,
      description: service.shortDescription,
      url: canonicalUrl,
      type: "website",
    },
  };
}

// ======================================================
// SERVICE PAGE
// ======================================================

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