"use client";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Layers3,
  BriefcaseBusiness,
  CircleAlert,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

interface IndustryOverviewProps {
  industry: any;
}

export default function IndustryOverview({ industry }: IndustryOverviewProps) {
  const overview = industry.overview;

  const drivers = [
    {
      icon: Layers3,
      title: "Digital Transformation",
      description: "Modernizing systems, workflows, and customer experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description:
        "Meeting industry regulations while protecting critical data.",
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Automating processes and improving business performance.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Scalable Growth",
      description: "Building future-ready platforms that support expansion.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      {" "}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {" "}
        <AnimatedSection>
          {/* ========================= */}
          {/* INDUSTRY LANDSCAPE */}
          {/* ========================= */}

          <div className="mx-auto max-w-4xl text-center">
            <div
              className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-sm
            font-medium
            text-blue-700
          "
            >
              <Sparkles className="h-4 w-4" />
              Industry Landscape
            </div>

            <h2
              className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            md:text-5xl
            xl:text-6xl
          "
            >
              {overview.title}
            </h2>

            <p
              className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
            >
              {overview.description}
            </p>
          </div>

          {/* ========================= */}
          {/* INDUSTRY DRIVERS */}
          {/* ========================= */}

          <div className="mt-20">
            <div className="text-center">
              <h3
                className="
              text-3xl
              font-bold
              text-slate-900
            "
              >
                Key Industry Drivers
              </h3>

              <p className="mt-4 text-slate-600">
                Core factors shaping innovation and growth.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {drivers.map((driver) => {
                const Icon = driver.icon;

                return (
                  <div
                    key={driver.title}
                    className="
                  group
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-xl
                "
                  >
                    <div
                      className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                  "
                    >
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>

                    <h4
                      className="
                    mt-5
                    text-lg
                    font-bold
                    text-slate-900
                  "
                    >
                      {driver.title}
                    </h4>

                    <p
                      className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                    >
                      {driver.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================= */}
          {/* CHALLENGE VS SOLUTION */}
          {/* ========================= */}

          <div
            className="
          mt-24
          overflow-hidden
          rounded-[36px]
          border
          border-slate-200
        "
          >
            <div
              className="
            border-b
            border-slate-200
            bg-slate-50
            px-8
            py-6
          "
            >
              <h3
                className="
              text-3xl
              font-bold
              text-slate-900
            "
              >
                Challenge vs Solution
              </h3>
            </div>

            <div>
              {overview.challenges.map((challenge: string, index: number) => (
                <div
                  key={challenge}
                  className="
                  grid
                  border-b
                  border-slate-200
                  last:border-b-0
                  lg:grid-cols-2
                "
                >
                  <div className="p-8">
                    <div className="flex gap-4">
                      <CircleAlert
                        className="
                        mt-1
                        h-5
                        w-5
                        text-orange-500
                      "
                      />

                      <div>
                        <p
                          className="
                          text-sm
                          font-medium
                          text-orange-600
                        "
                        >
                          Challenge
                        </p>

                        <p
                          className="
                          mt-2
                          text-slate-700
                        "
                        >
                          {challenge}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                    bg-slate-50/50
                    p-8
                  "
                  >
                    <div className="flex gap-4">
                      <CheckCircle2
                        className="
                        mt-1
                        h-5
                        w-5
                        text-emerald-500
                      "
                      />

                      <div>
                        <p
                          className="
                          text-sm
                          font-medium
                          text-emerald-600
                        "
                        >
                          Our Solution
                        </p>

                        <p
                          className="
                          mt-2
                          text-slate-700
                        "
                        >
                          {overview.benefits[index % overview.benefits.length]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================= */}
          {/* BUSINESS OUTCOMES */}
          {/* ========================= */}

          <div className="mt-24">
            <div className="text-center">
              <h3
                className="
              text-3xl
              font-bold
              text-slate-900
            "
              >
                Business Outcomes
              </h3>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  value: "40%",
                  label: "Faster Operations",
                },
                {
                  value: "60%",
                  label: "Higher Efficiency",
                },
                {
                  value: "3x",
                  label: "Scalable Growth",
                },
                {
                  value: "99.9%",
                  label: "System Reliability",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                text-center
              "
                >
                  <div
                    className="
                  text-5xl
                  font-bold
                  text-slate-900
                "
                  >
                    {item.value}
                  </div>

                  <p
                    className="
                  mt-3
                  text-slate-600
                "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================= */}
          {/* TRANSFORMATION VISION */}
          {/* ========================= */}
          <div
            className="
    relative
    mt-24
    overflow-hidden
    rounded-[40px]
    bg-gradient-to-r
    from-blue-600
    via-blue-700
    to-cyan-600
    p-10
    lg:p-16
  "
          >
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3
                className="
        text-3xl
        font-bold
        text-white
        md:text-4xl
        lg:text-5xl
        leading-tight
      "
              >
                Transforming {industry.title}
                <br />
                Through Innovation
              </h3>

              <p
                className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-relaxed
        text-blue-100
      "
              >
                We help organizations modernize operations, improve customer
                experiences, and unlock new growth opportunities through
                technology, automation, cloud, and AI.
              </p>
            </div>

            {/* Decorative Glow */}
            <div
              className="
      absolute
      -right-20
      -top-20
      h-80
      w-80
      rounded-full
      bg-white/10
      blur-3xl
    "
            />

            <div
              className="
      absolute
      -left-20
      -bottom-20
      h-80
      w-80
      rounded-full
      bg-white/10
      blur-3xl
    "
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
