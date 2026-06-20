'use client';

import {
Search,
Lightbulb,
PenTool,
Code2,
ShieldCheck,
Rocket,
Sparkles,
TrendingUp,
CheckCircle2,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface IndustryProcessProps {
industry: any;
}

const processIcons = [
Search,
Lightbulb,
PenTool,
Code2,
ShieldCheck,
Rocket,
];

const principles = [
'Project Governance',
'Agile Delivery',
'Quality Assurance',
'Security & Compliance',
];

const outcomes = [
{
value: '95%',
label: 'On-Time Delivery',
},
{
value: '100+',
label: 'Projects Delivered',
},
{
value: '50+',
label: 'Global Clients',
},
{
value: '24/7',
label: 'Support Coverage',
},
];

export default function IndustryProcess({
industry,
}: IndustryProcessProps) {
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
          Delivery Framework
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
          A Structured Approach to
          <span className="block text-blue-600">
            Successful Delivery
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
          Our delivery framework combines
          strategy, design, engineering,
          quality assurance, and continuous
          improvement to ensure predictable
          outcomes and long-term success.
        </p>
      </div>

      {/* Process Framework */}

      <div className="mt-20">
        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-white
          "
        >
          <div
            className="
              border-b
              border-slate-200
              px-8
              py-6
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Execution Framework
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-6">
            {industry.process.map(
              (
                step: {
                  title: string;
                  description: string;
                },
                index: number
              ) => {
                const Icon =
                  processIcons[
                    index %
                      processIcons.length
                  ];

                return (
                  <div
                    key={step.title}
                    className="
                      group
                      border-b
                      border-slate-200
                      p-8
                      transition-all
                      duration-300
                      hover:bg-blue-50/50
                      md:border-r
                      xl:border-b-0
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
                        transition-all
                        duration-300
                        group-hover:bg-blue-100
                      "
                    >
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>

                    <div
                      className="
                        mt-5
                        text-sm
                        font-semibold
                        text-blue-600
                      "
                    >
                      STEP
                      {' '}
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </div>

                    <h4
                      className="
                        mt-2
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {step.title}
                    </h4>

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {
                        step.description
                      }
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>



    </AnimatedSection>
  </div>
</section>


);
}
