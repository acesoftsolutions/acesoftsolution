"use client";

import {
  Clock3,
  ShieldCheck,
  TrendingUp,
  Users,
  Layers3,
  Headphones,
  CheckCircle2,
} from "lucide-react";

import Counter from "@/components/shared/Counter";

const benefits = [
  {
    icon: Clock3,
    title: "Faster Project Delivery",
    description:
      "Structured workflows and agile execution help us deliver projects efficiently without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every deliverable undergoes rigorous testing to ensure reliability, security, and performance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Future-ready architectures designed for long-term business growth.",
  },
  {
    icon: Users,
    title: "Transparent Collaboration",
    description:
      "Continuous communication and visibility throughout the project lifecycle.",
  },
  {
    icon: Layers3,
    title: "Modern Technology Stack",
    description:
      "Using proven technologies to build secure and maintainable solutions.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Dedicated support and optimization beyond launch.",
  },
];

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technology Experts",
  },
  {
    value: 10,
    suffix: "+",
    label: "Industries Served",
  },
];
export default function ProcessBenefits() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Content */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Why Clients Trust Us
            </div>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Built For Reliability,
              <span className="block text-cyan-600">Performance & Growth</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We follow a structured delivery framework that combines strategy,
              technology, quality assurance, and long-term support to ensure
              every project delivers measurable business value.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Reduced project risks",
                "Faster development cycles",
                "Scalable architecture decisions",
                "Long-term technology support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-600" />

                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 lg:p-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Proven Results
                </h3>

                <p className="mt-2 text-slate-600">
                  Trusted by businesses across industries to deliver reliable
                  and scalable digital solutions.
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 lg:flex">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group border-b border-slate-200 pb-6 last:border-none"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold text-cyan-600">
                        <Counter end={stat.value} suffix={stat.suffix} />
                      </div>

                      <div className="mt-1 text-slate-600">{stat.label}</div>
                    </div>

                    <div className="h-2 w-2 rounded-full bg-cyan-500 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-600 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            More Than A Development Team
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-cyan-50">
            We become a long-term technology partner focused on helping your
            business innovate, scale, and achieve sustainable growth through
            modern digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
