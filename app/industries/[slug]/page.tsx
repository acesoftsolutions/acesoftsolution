import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { industryDetails } from "@/data/industryDetails";

import IndustryHero from "@/components/industry-details/IndustryHero";
import IndustryOverview from "@/components/industry-details/IndustryOverview";
import IndustrySolutions from "@/components/industry-details/IndustrySolutions";
import IndustryTechnology from "@/components/industry-details/IndustryTechnology";
import IndustryProcess from "@/components/industry-details/IndustryProcess";
import IndustryFAQCTA from "@/components/industry-details/IndustryFAQCTA";

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

  const industry =
    industryDetails[
      slug as keyof typeof industryDetails
    ];

  if (!industry) {
    return {};
  }

  const canonicalUrl =
    `https://acesoftsolution.com/industries/${industry.slug}`;

  return {
    title: industry.seo?.title || industry.title,

    description:
      industry.seo?.description || industry.description,

    keywords: industry.seo?.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: industry.seo?.title || industry.title,

      description:
        industry.seo?.description || industry.description,

      url: canonicalUrl,

      type: "website",
    },
  };
}

// ======================================================
// INDUSTRY PAGE
// ======================================================

export default async function IndustryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const industry =
    industryDetails[
      slug as keyof typeof industryDetails
    ];

  if (!industry) {
    notFound();
  }

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