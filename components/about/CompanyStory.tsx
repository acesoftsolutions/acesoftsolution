'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CompanyStory() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
          "
        >
          {/* Image */}

          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Company Story"
                className="
                  w-full
                  rounded-[36px]
                  object-cover
                  shadow-xl
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  shadow-xl
                "
              >
                <h4
                  className="
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  Since 2014
                </h4>

                <p className="text-slate-500">
                  Delivering Innovation
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}

          <AnimatedSection direction="right">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-cyan-600
              "
            >
              Our Story
            </span>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                md:text-5xl
              "
            >
              Technology With
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
                Purpose & Impact
              </span>
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              ACE SOFT SOLUTION was founded with a
              simple mission — helping businesses
              leverage technology to grow faster,
              operate smarter and deliver better
              customer experiences.
            </p>

            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Over the years, we've partnered with
              startups, SMEs and enterprise
              organizations to build scalable web
              platforms, mobile applications, ERP
              systems and AI-powered solutions.
            </p>

            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Our focus is not just delivering
              software — it's creating measurable
              business outcomes through innovation,
              strategy and technology excellence.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}