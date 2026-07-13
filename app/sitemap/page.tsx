import Link from "next/link";
import { Metadata } from "next";

import { services } from "@/data/services";
import { portfolios } from "@/data/portfolios";
import { industryDetails } from "@/data/industryDetails";

export const metadata: Metadata = {
  title: "HTML Sitemap | Ace Soft Solution",
  description:
    "Browse all pages available on the Ace Soft Solution website including services, industries, portfolio, company pages, and resources.",
  alternates: {
    canonical: "https://acesoftsolution.com/sitemap",
  },
};

const staticPages = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Technology", href: "/technology" },
  { title: "Industries", href: "/industries" },
  { title: "Process", href: "/process" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Cookie Policy", href: "/cookie-policy" },
];

export default function SitemapPage() {
  const industries = Object.values(industryDetails);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            HTML Sitemap
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Website Sitemap
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Browse every important page available on the Ace Soft Solution
            website including services, industries, portfolio, company
            information, legal pages and more.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Company Pages */}

          <Section title="Company Pages">
            {staticPages.map((page) => (
              <SitemapLink
                key={page.href}
                href={page.href}
                title={page.title}
              />
            ))}
          </Section>

          {/* Services */}

          <Section title="Services">
            {services.map((service) => (
              <SitemapLink
                key={service.slug}
                href={`/services/${service.slug}`}
                title={service.title}
              />
            ))}
          </Section>

          {/* Industries */}

          <Section title="Industries">
            {industries.map((industry) => (
              <SitemapLink
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                title={industry.title}
              />
            ))}
          </Section>

          {/* Portfolio */}

          <Section title="Case Studies">
            {portfolios.map((portfolio) => (
              <SitemapLink
                key={portfolio.slug}
                href={`/portfolio/${portfolio.slug}`}
                title={portfolio.title}
              />
            ))}
          </Section>

        </div>
      </section>
    </main>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}

type SitemapLinkProps = {
  href: string;
  title: string;
};

function SitemapLink({ href, title }: SitemapLinkProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-lg border border-transparent px-4 py-3 transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50"
    >
      <span className="font-medium text-slate-700 group-hover:text-cyan-700">
        {title}
      </span>

      <span className="text-cyan-600 transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}