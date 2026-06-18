'use client';

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
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description:
      'Patient portals, healthcare management systems, telemedicine, and digital healthcare solutions.',
  },
  {
    icon: Landmark,
    title: 'Finance',
    description:
      'FinTech platforms, investment dashboards, reporting systems, and secure financial applications.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description:
      'Learning management systems, e-learning platforms, and student engagement solutions.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description:
      'Property portals, CRM systems, virtual tours, and lead management platforms.',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description:
      'Online marketplaces, retail platforms, inventory management, and digital commerce.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'ERP systems, workflow automation, inventory tracking, and operational efficiency solutions.',
  },
  {
    icon: Truck,
    title: 'Logistics',
    description:
      'Fleet management, shipment tracking, logistics automation, and supply chain visibility.',
  },
  {
    icon: Laptop,
    title: 'SaaS & Startups',
    description:
      'Scalable SaaS platforms, MVP development, product engineering, and growth solutions.',
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

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
              Delivering Solutions Across
              Diverse Industries
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Every industry has unique challenges.
              We create tailored digital solutions
              designed to improve efficiency,
              customer experiences, and business growth.
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
          <div className="mt-16 rounded-[36px] overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600">
            <div className="px-10 py-14 md:px-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Industry-Specific Expertise
                  </h3>

                  <p className="mt-5 text-white/80 text-lg">
                    We combine deep technical knowledge
                    with industry insights to create
                    solutions that solve real business
                    challenges and accelerate growth.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <h4 className="text-3xl font-bold text-white">
                      8+
                    </h4>

                    <p className="text-white/80 mt-2">
                      Industries Served
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                    <h4 className="text-3xl font-bold text-white">
                      50+
                    </h4>

                    <p className="text-white/80 mt-2">
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