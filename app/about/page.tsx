import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import ValuesSection from '@/components/about/ValuesSection';
import JourneyTimeline from '@/components/about/JourneyTimeline';
import StatsSection from '@/components/about/StatsSection';
import TeamSection from '@/components/about/TeamSection';
import AboutCTA from '@/components/about/AboutCTA';

const siteUrl = 'https://acesoftsolution.vercel.app';
const pageUrl = `${siteUrl}/about`;
const companyName = 'Ace Soft Solution';
const foundingYear = '2016';

export const metadata: Metadata = {
  title: `About Us | Software Development Company Since ${foundingYear} | Ace Soft Solution`,
  description:
    'Ace Soft Solution is a software development company founded in 2016. 250+ projects, 150+ clients, 50+ experts in web, mobile, ERP, AI and cloud development.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'About Us | Ace Soft Solution',
    description:
      'Software development company since 2016. 250+ projects, 150+ clients worldwide.',
    url: pageUrl,
    siteName: companyName,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/about/team.jpg`,
        width: 800,
        height: 480,
        alt: 'Ace Soft Solution team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Ace Soft Solution',
    description:
      'Software development company since 2016. 250+ projects, 150+ clients worldwide.',
    images: [`${siteUrl}/images/about/team.jpg`],
  },
  keywords: [
    'Ace Soft Solution',
    'software development company',
    'software development company Ahmedabad',
    'custom software development',
    'web development',
    'mobile app development',
    'ERP development',
    'AI development',
    'cloud development',
  ],
};

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: companyName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  foundingDate: foundingYear,
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 50,
    unitText: 'experts',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  areaServed: ['India', 'USA', 'UAE', 'Canada', 'Australia', 'UK'],
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'ERP Development',
    'AI Development',
    'Cloud Development',
    'Custom Software Development',
  ],
  sameAs: [
    'https://www.linkedin.com/company/ace-soft-solution',
    'https://www.facebook.com/acesoftsolution',
    'https://www.instagram.com/acesoftsolution',
  ],
};

const aboutPageSchema = {
  '@type': 'AboutPage',
  '@id': `${pageUrl}/#aboutpage`,
  url: pageUrl,
  name: `About ${companyName}`,
  headline:
    'Ace Soft Solution - A Software Development Company Built on a Decade of Delivering Real Business Impact',
  description:
    'Ace Soft Solution is an Ahmedabad, India based software development company founded in 2016, delivering web, mobile, ERP, AI and cloud solutions for clients worldwide.',
  isPartOf: {
    '@id': `${siteUrl}/#website`,
  },
  about: {
    '@id': `${siteUrl}/#organization`,
  },
  mainEntity: {
    '@id': `${siteUrl}/#organization`,
  },
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: companyName,
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}/#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About Us',
      item: pageUrl,
    },
  ],
};

const teamSchema = [
  {
    '@type': 'Person',
    name: 'Aarav Sharma',
    jobTitle: 'Lead Software Engineer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Priya Patel',
    jobTitle: 'Project Manager',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Rohan Mehta',
    jobTitle: 'UI/UX Designer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Neha Shah',
    jobTitle: 'Mobile App Developer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Karan Desai',
    jobTitle: 'ERP Consultant',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Meera Joshi',
    jobTitle: 'Quality Assurance Engineer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Dev Trivedi',
    jobTitle: 'Cloud Engineer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Isha Nair',
    jobTitle: 'AI Solutions Engineer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Manan Kapoor',
    jobTitle: 'Frontend Developer',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
  {
    '@type': 'Person',
    name: 'Sneha Iyer',
    jobTitle: 'Business Analyst',
    worksFor: { '@id': `${siteUrl}/#organization` },
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    websiteSchema,
    organizationSchema,
    aboutPageSchema,
    breadcrumbSchema,
    ...teamSchema,
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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