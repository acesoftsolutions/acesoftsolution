import { MetadataRoute } from "next";

import { services } from "@/data/services";
import { portfolios } from "@/data/portfolios";
import { industryDetails } from "@/data/industryDetails";

const BASE_URL = "https://acesoftsolution.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticPages = [
    "",
    "/about",
    "/services",
    "/technology",
    "/process",
    "/portfolio",
    "/industries",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/faq",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryPages = Object.values(industryDetails).map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const portfolioPages = portfolios.map((portfolio) => ({
    url: `${BASE_URL}/portfolio/${portfolio.slug}`,
    lastModified: new Date(portfolio.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...portfolioPages,
  ];
}