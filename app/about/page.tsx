import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import ValuesSection from '@/components/about/ValuesSection';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import StatsSection from '@/components/about/StatsSection';
import TeamSection from '@/components/about/TeamSection';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <ValuesSection />
      <JourneyTimeline />
      <StatsSection />
      <TeamSection />
      <AboutCTA />
    </>
  );
}