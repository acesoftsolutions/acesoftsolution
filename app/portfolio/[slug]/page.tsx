import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies } from "@/data/portfolioData";

import CaseStudyHero from "@/components/portfolio/case-study/CaseStudyHero";
import ProjectOverview from "@/components/portfolio/case-study/ProjectOverview";
import ChallengeSolution from "@/components/portfolio/case-study/ChallengeSolution";
import ResultsMetrics from "@/components/portfolio/case-study/ResultsMetrics";
import TechStack from "@/components/portfolio/case-study/TechStack";
import ProjectGallery from "@/components/portfolio/case-study/ProjectGallery";
import ClientTestimonial from "@/components/portfolio/case-study/ClientTestimonial";
import NextProject from "@/components/portfolio/case-study/NextProject";
import CaseStudyCTA from "@/components/portfolio/case-study/CaseStudyCTA";

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

  const portfolio = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!portfolio) {
    return {};
  }

  const canonicalUrl =
    `https://acesoftsolution.com/portfolio/${portfolio.slug}`;

  return {
    title: portfolio.title,

    description: portfolio.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: portfolio.title,

      description: portfolio.description,

      url: canonicalUrl,

      type: "website",

      images: portfolio.image
        ? [
            {
              url: portfolio.image,
              alt: portfolio.title,
            },
          ]
        : undefined,
    },
  };
}

// ======================================================
// PORTFOLIO DETAIL PAGE
// ======================================================

export default async function PortfolioDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const portfolio = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!portfolio) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    caseStudies[
      (currentIndex + 1) % caseStudies.length
    ];

  return (
    <main className="bg-white overflow-hidden">
      <CaseStudyHero portfolio={portfolio} />

      <ProjectOverview portfolio={portfolio} />

      <ChallengeSolution portfolio={portfolio} />

      <ResultsMetrics portfolio={portfolio} />

      <TechStack
        technologies={portfolio.technologies}
      />

      <ProjectGallery
        title={portfolio.title}
        image={portfolio.image}
      />

      <ClientTestimonial />

      <NextProject project={nextProject} />

      <CaseStudyCTA />
    </main>
  );
}