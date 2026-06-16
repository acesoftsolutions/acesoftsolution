'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description:
      'Started with a vision to help businesses embrace digital transformation.',
  },
  {
    year: '2017',
    title: '100+ Projects Delivered',
    description:
      'Successfully delivered solutions across multiple industries.',
  },
  {
    year: '2020',
    title: 'Enterprise Expansion',
    description:
      'Expanded services to enterprise software and ERP systems.',
  },
  {
    year: '2023',
    title: 'AI Solutions Launch',
    description:
      'Introduced AI automation and intelligent business solutions.',
  },
  {
    year: '2025',
    title: 'Global Growth',
    description:
      'Serving clients across multiple countries and industries.',
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
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
              Our Journey
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
              A Decade Of
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
                Innovation & Growth
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative mt-20">
          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-[#0E4DB7]
              via-[#3CC8F5]
              to-[#12C7B5]
              md:left-1/2
            "
          />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <AnimatedSection
                key={item.year}
                delay={index * 0.08}
              >
                <div
                  className={`
                    relative
                    flex
                    ${
                      index % 2 === 0
                        ? 'md:justify-start'
                        : 'md:justify-end'
                    }
                  `}
                >
                  <div
                    className="
                      ml-12
                      w-full
                      md:ml-0
                      md:w-[45%]
                    "
                  >
                    <div
                      className="
                        rounded-[28px]
                        bg-white
                        p-8
                        shadow-sm
                        ring-1
                        ring-slate-200
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-bold
                          text-cyan-600
                        "
                      >
                        {item.year}
                      </span>

                      <h3
                        className="
                          mt-2
                          text-2xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-slate-600
                          leading-relaxed
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      absolute
                      left-4
                      top-8
                      h-4
                      w-4
                      rounded-full
                      bg-cyan-500
                      ring-4
                      ring-white
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}