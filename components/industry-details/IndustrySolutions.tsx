'use client';

import {
ArrowUpRight,
MonitorSmartphone,
Smartphone,
Database,
Brain,
Sparkles,
TrendingUp,
Layers3,
ShieldCheck,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface IndustrySolutionsProps {
industry: any;
}

const icons = [
MonitorSmartphone,
Smartphone,
Database,
Brain,
];

const capabilities = [
{
title: 'Digital Experience',
icon: MonitorSmartphone,
description:
'Modern web, mobile, and customer-facing platforms.',
},
{
title: 'Data & Analytics',
icon: Database,
description:
'Business intelligence, reporting, and insights.',
},
{
title: 'Cloud Infrastructure',
icon: Layers3,
description:
'Scalable cloud-native architecture and operations.',
},
{
title: 'AI & Automation',
icon: Brain,
description:
'Intelligent automation and AI-powered workflows.',
},
];

export default function IndustrySolutions({
industry,
}: IndustrySolutionsProps) {
return ( <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16"> <div className="mx-auto max-w-7xl px-6 lg:px-8"> <AnimatedSection>
{/* Header */}


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
          Industry Solutions
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
          Technology Solutions for
          <span className="block text-blue-600">
            {industry.title}
          </span>
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
          {industry.solutionsDescription ||
            'We design, develop, and scale digital solutions that help organizations improve operations, customer experiences, and long-term business growth.'}
        </p>
      </div>

      {/* Capability Architecture */}

      <div className="mt-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-7
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

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solution Portfolio */}

      <div className="mt-24">
        <div className="text-center">
          <h3
            className="
              text-3xl
              font-bold
              text-slate-900
            "
          >
            Solution Portfolio
          </h3>

          <p className="mt-4 text-slate-600">
            Purpose-built solutions designed for
            modern business challenges.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {industry.solutions.map(
            (
              solution: {
                title: string;
                description: string;
              },
              index: number
            ) => {
              const Icon =
                icons[index % icons.length];

              return (
                <div
                  key={solution.title}
                  className="
                    group
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    transition-all
                    duration-300
                    hover:border-blue-300
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-6
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-blue-50
                          font-bold
                          text-blue-600
                        "
                      >
                        {String(
                          index + 1
                        ).padStart(2, '0')}
                      </div>

                      <div>
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <Icon className="h-5 w-5 text-blue-600" />

                          <h4
                            className="
                              text-2xl
                              font-bold
                              text-slate-900
                            "
                          >
                            {solution.title}
                          </h4>
                        </div>

                        <p
                          className="
                            mt-4
                            max-w-3xl
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          {
                            solution.description
                          }
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="
                        h-6
                        w-6
                        text-slate-400
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-blue-600
                      "
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      
    </AnimatedSection>
  </div>
</section>


);
}
