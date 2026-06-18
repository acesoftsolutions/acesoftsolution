import TechnologyHero from "@/components/technologies/TechnologyHero";
import TechnologyAccordion from "@/components/technologies/TechnologyAccordion";
import ExpertiseSection from "@/components/technologies/ExpertiseSection";
import TechStackGrid from "@/components/technologies/TechStackGrid";
import TechnologyProcess from "@/components/technologies/TechnologyProcess";
import CaseStudiesSection from "@/components/technologies/CaseStudiesSection";
import CTASection from "@/components/technologies/CTASection";

export const metadata = {
  title: "Technologies | Ace Soft Solution",
  description:
    "Explore the technologies, frameworks, and tools used by Ace Soft Solution to build scalable web, mobile, and cloud applications.",
};

export default function TechnologiesPage() {
  return (
    <main className="overflow-hidden">
      <TechnologyHero />
      <TechnologyAccordion />
      <ExpertiseSection />
      <TechStackGrid />
      <TechnologyProcess />
      <CaseStudiesSection />
      <CTASection />
    </main>
  );
}