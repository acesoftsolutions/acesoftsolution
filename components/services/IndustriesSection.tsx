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
    <div className="relative max-w-[1280px] mx-auto px-6">

  {/* Background Decoration */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-32 left-0 w-72 h-72 bg-cyan-200/30 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 blur-[140px] rounded-full" />
  </div>

  <AnimatedSection>

    {/* ================= HEADER ================= */}

    <div className="max-w-4xl mx-auto text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
        Industries We Serve
      </span>

      <h2 className="mt-7 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
        Tailored Digital Solutions
        <br />
        For Every Industry
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
        Every business has different operational challenges and growth goals.
        Our industry-focused software solutions are designed to improve
        efficiency, streamline workflows, enhance customer experiences, and
        accelerate digital transformation.
      </p>

    </div>

    {/* ================= GRID ================= */}

    <div className="grid gap-7 mt-20 md:grid-cols-2 xl:grid-cols-4">

      {industries.map((industry) => {

        const Icon = industry.icon;

        return (

          <div
            key={industry.title}
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-white
            p-8
            transition-all
            duration-500
            hover:-translate-y-3
            hover:rotate-[0.5deg]
            hover:border-cyan-200
            hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]
          "
          >

            {/* Top Gradient Line */}

            <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

            {/* Glow */}

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

            {/* Icon */}

            <div className="relative flex items-center justify-between">

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-gradient-to-br
                from-cyan-50
                to-blue-100
                shadow-inner
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
              >
                <Icon className="h-8 w-8 text-blue-600 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <ArrowUpRight
                className="
                h-5
                w-5
                text-slate-400
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-blue-600
              "
              />

            </div>

            {/* Content */}

            <h3 className="mt-9 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
              {industry.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              {industry.description}
            </p>

            {/* Learn More */}

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-500 group-hover:opacity-100">

              Learn More

              <ArrowUpRight className="h-4 w-4" />

            </div>

          </div>

        );

      })}

    </div>

    {/* ================= CTA ================= */}

    <div className="relative mt-24 overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]" />

      </div>

      <div className="relative px-10 py-16 md:px-16">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Trusted Across Multiple Industries
            </span>

            <h3 className="mt-6 text-4xl font-bold leading-tight text-white">
              Proven Industry
              <br />
              Expertise That Delivers
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              From startups to large enterprises, we combine deep technical
              expertise with industry knowledge to build scalable software,
              automate business processes, improve efficiency, and create
              measurable business growth.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/10
              p-8
              backdrop-blur-xl
              transition
              duration-500
              hover:-translate-y-2
              hover:bg-white/15
            "
            >

              <div className="text-5xl font-bold text-white">
                12+
              </div>

              <p className="mt-4 leading-7 text-white/80">
                Industry
                <br />
                Verticals Served
              </p>

            </div>

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/10
              p-8
              backdrop-blur-xl
              transition
              duration-500
              hover:-translate-y-2
              hover:bg-white/15
            "
            >

              <div className="text-5xl font-bold text-white">
                250+
              </div>

              <p className="mt-4 leading-7 text-white/80">
                Successful
                <br />
                Projects Delivered
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
