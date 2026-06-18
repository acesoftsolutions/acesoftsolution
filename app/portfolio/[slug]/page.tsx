"use client";

import { useParams } from "next/navigation";

import ScrollProgress from "@/components/shared/ScrollProgress";

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

export default function PortfolioDetailPage() {
  const params = useParams();

  const slug = params.slug as string;

  const portfolio = caseStudies.find((item) => item.slug === slug);

  if (!portfolio) {
    return null;
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === slug);

  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <ScrollProgress />

      <main className="bg-dark overflow-hidden">
        <CaseStudyHero portfolio={portfolio} />

        <ProjectOverview portfolio={portfolio} />

        <ChallengeSolution portfolio={portfolio} />

        <ResultsMetrics portfolio={portfolio} />

        <TechStack technologies={portfolio.technologies} />

        <ProjectGallery title={portfolio.title} image={portfolio.image} />

        <ClientTestimonial />

        <NextProject project={nextProject} />

        <CaseStudyCTA />
      </main>
    </>
  );
}
