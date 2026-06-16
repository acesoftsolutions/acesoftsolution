'use client';

import {
  Eye,
  Target,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function MissionVision() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-100
                bg-cyan-50
                px-5
                py-2
                text-sm
                font-semibold
                text-cyan-700
              "
            >
              Mission & Vision
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                text-slate-900
                md:text-5xl
              "
            >
              What Drives
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Everything We Do
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-2
          "
        >
          {/* Mission */}

          <AnimatedSection direction="left">
            <div
              className="
                h-full
                rounded-[36px]
                bg-white
                p-10
                shadow-sm
                ring-1
                ring-slate-200
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
                  bg-gradient-to-br
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                "
              >
                <Target className="h-8 w-8 text-white" />
              </div>

              <h3
                className="
                  mt-8
                  text-3xl
                  font-bold
                  text-slate-900
                "
              >
                Our Mission
              </h3>

              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                To empower businesses through
                innovative software, intelligent
                automation and scalable digital
                solutions that accelerate growth and
                create lasting competitive advantage.
              </p>
            </div>
          </AnimatedSection>

          {/* Vision */}

          <AnimatedSection direction="right">
            <div
              className="
                h-full
                rounded-[36px]
                bg-white
                p-10
                shadow-sm
                ring-1
                ring-slate-200
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
                  bg-gradient-to-br
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                "
              >
                <Eye className="h-8 w-8 text-white" />
              </div>

              <h3
                className="
                  mt-8
                  text-3xl
                  font-bold
                  text-slate-900
                "
              >
                Our Vision
              </h3>

              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                To become a globally trusted
                technology partner known for
                innovation, reliability and delivering
                transformative digital experiences
                that shape the future of business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}