"use client";

import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Building2,
  ShoppingBag,
  Factory,
  Truck,
  Laptop,
  ArrowUpRight,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare Technology",
    description:
      "Patient portals, healthcare management systems, telemedicine platforms, EHR integration, and HIPAA-compliant digital health solutions.",
  },
  {
    icon: Landmark,
    title: "Finance & FinTech",
    description:
      "FinTech platforms, investment dashboards, real-time reporting systems, secure financial applications, and PCI-DSS compliant payment solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "Learning management systems (LMS), e-learning platforms, virtual classrooms, student engagement tools, and AI-powered adaptive learning solutions.",
  },
  {
    icon: Building2,
    title: "Real Estate & PropTech",
    description:
      "Property listing portals, real estate CRM systems, 3D virtual tours, AI-powered lead management, and PropTech platforms for agents and developers.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail Tech",
    description:
      "Custom online marketplaces, headless e-commerce platforms, inventory management systems, payment gateway integration, and omnichannel retail solutions.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    description:
      "Custom ERP systems, smart workflow automation, real-time inventory tracking, predictive maintenance, and Industry 4.0 operational efficiency solutions.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Fleet management systems, real-time shipment tracking, last-mile delivery automation, supply chain visibility, and AI-powered logistics optimization.",
  },
  {
    icon: Laptop,
    title: "SaaS & Tech Startups",
    description:
      "Scalable SaaS platform development, rapid MVP builds, product engineering, go-to-market strategy, and full-cycle startup growth solutions.",
  },
];
export default function IndustriesSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
              Tailored Digital Solutions Across Every Industry We Serve
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Every industry has unique challenges and specific digital needs.
              We build industry-tailored solutions that improve operational
              efficiency, elevate customer experiences, and accelerate growth.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="
                    group
                    bg-white
                    border
                    border-slate-200
                    rounded-[28px]
                    p-8
                    hover:border-blue-200
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600">
            <div className="px-10 py-14 md:px-16">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                {/* Left Content */}
                <div>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">
                    Proven Industry-Specific Expertise
                  </h3>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
                    We combine deep technical expertise with domain-specific
                    industry insights to build digital solutions that solve real
                    business challenges, reduce operational costs, improve
                    efficiency, and accelerate long-term business growth.
                  </p>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-md">
                    <h4 className="text-4xl font-bold text-white">12+</h4>

                    <p className="mt-3 text-base leading-relaxed text-white/80">
                      Industry Verticals
                      <br />
                      Served
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-md">
                    <h4 className="text-4xl font-bold text-white">250+</h4>

                    <p className="mt-3 text-base leading-relaxed text-white/80">
                      Projects
                      <br />
                      Successfully Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
