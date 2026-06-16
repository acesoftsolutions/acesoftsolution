'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#3CC8F5]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#12C7B5]/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-5xl text-center">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-100
                bg-white
                px-5
                py-2
                text-sm
                font-semibold
                text-cyan-700
                shadow-sm
              "
            >
              About ACE SOFT SOLUTION
            </span>

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-slate-900
                md:text-7xl
                xl:text-[5.8rem]
              "
            >
              Building Digital
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Products That Scale
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Since 2014, we've helped startups,
              SMEs and enterprises transform ideas
              into scalable digital products through
              custom software development, AI
              automation, ERP solutions and modern
              cloud technologies.
            </p>
          </div>
        </AnimatedSection>

        {/* Trust Cards */}

        <AnimatedSection>
          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {[
              {
                value: '500+',
                label: 'Projects Delivered',
              },
              {
                value: '150+',
                label: 'Happy Clients',
              },
              {
                value: '10+',
                label: 'Years Experience',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[28px]
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  ring-1
                  ring-slate-200
                "
              >
                <h3
                  className="
                    text-4xl
                    font-black
                    bg-gradient-to-r
                    from-[#0E4DB7]
                    via-[#3CC8F5]
                    to-[#12C7B5]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}