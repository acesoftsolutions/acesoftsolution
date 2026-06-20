'use client';

import {
Code2,
Server,
Cloud,
ShieldCheck,
Brain,
Layers3,
Sparkles,
ArrowRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface IndustryTechnologyProps {
industry: any;
}

const architectureLayers = [
{
title: 'Frontend Experience',
description:
'Responsive web and mobile interfaces designed for modern user experiences.',
icon: Code2,
},
{
title: 'Backend Services',
description:
'Robust APIs, business logic, and enterprise integrations.',
icon: Server,
},
{
title: 'Cloud Infrastructure',
description:
'Scalable deployment, monitoring, and cloud-native operations.',
icon: Cloud,
},
{
title: 'Security & Compliance',
description:
'Enterprise-grade protection, governance, and regulatory compliance.',
icon: ShieldCheck,
},
];

export default function IndustryTechnology({
industry,
}: IndustryTechnologyProps) {
return ( <section className="relative overflow-hidden bg-white py-12 lg:py-16"> <div className="mx-auto max-w-7xl px-6 lg:px-8"> <AnimatedSection>
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
          Technology Ecosystem
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
          Engineering Excellence for
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
          We leverage modern technologies,
          cloud platforms, AI capabilities,
          and enterprise architecture
          practices to build scalable,
          secure, and future-ready digital
          solutions.
        </p>
      </div>

      {/* Architecture Layers */}

      <div className="mt-12">
        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-gradient-to-br
            from-slate-50
            via-white
            to-blue-50
          "
        >
          <div
            className="
              border-b
              border-slate-200
              p-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-blue-100
              "
            >
              <Layers3 className="h-10 w-10 text-blue-600" />
            </div>

            <h3
              className="
                mt-6
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Technology Architecture
            </h3>

            <p
              className="
                mt-3
                text-slate-600
              "
            >
              A modern engineering ecosystem
              designed for scalability,
              performance, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {architectureLayers.map(
              (layer) => {
                const Icon = layer.icon;

                return (
                  <div
                    key={layer.title}
                    className="
                      border-t
                      border-slate-200
                      p-8
                      xl:border-l
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
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {layer.title}
                    </h4>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {layer.description}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Technology Stack */}

      <div className="mt-12">
        <div className="text-center">
          <h3
            className="
              text-3xl
              font-bold
              text-slate-900
            "
          >
            Technology Stack
          </h3>

          <p className="mt-4 text-slate-600">
            Technologies powering modern
            digital products and enterprise
            platforms.
          </p>
        </div>

        <div
          className="
            mt-10
            rounded-[36px]
            border
            border-slate-200
            bg-slate-50
            p-8
          "
        >
          <div className="flex flex-wrap gap-4">
            {industry.technologies.map(
              (tech: string) => (
                <div
                  key={tech}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:border-blue-300
                    hover:text-blue-600
                  "
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>

     
    </AnimatedSection>
  </div>
</section>


);
}
