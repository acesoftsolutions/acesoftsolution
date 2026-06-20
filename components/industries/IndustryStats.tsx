'use client';

import AnimatedSection from '@/components/shared/AnimatedSection';
import Counter from '@/components/shared/Counter';

const stats = [
  {
    value: 100,
    suffix: '+',
    label: 'Projects Delivered',
    description:
      'Successfully completed across multiple industries and business domains.',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Global Clients',
    description:
      'Trusted by startups, SMEs, and enterprise organizations worldwide.',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Industries Served',
    description:
      'Deep industry expertise across healthcare, fintech, retail, logistics, and more.',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    description:
      'Long-term partnerships built on quality delivery and business value.',
  },
];

export default function IndustryStats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <span
              className="
                inline-flex
                items-center
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
              Proven Results
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
              Delivering Measurable
              <span className="block text-blue-600">
                Business Impact
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Our commitment to innovation,
              quality engineering, and customer
              success has helped organizations
              achieve measurable growth and
              long-term digital transformation.
            </p>
          </div>

          {/* Stats Grid */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <h3
                  className="
                    text-5xl
                    font-bold
                    tracking-tight
                    text-slate-900
                  "
                >
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                <h4
                  className="
                    mt-4
                    text-lg
                    font-semibold
                    text-slate-900
                  "
                >
                  {stat.label}
                </h4>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Bar */}

          <div
            className="
              mt-12
              rounded-[28px]
              border
              border-slate-200
              bg-slate-50
              p-6
              text-center
            "
          >
            <p
              className="
                text-base
                leading-relaxed
                text-slate-600
              "
            >
              Helping businesses across industries
              accelerate innovation, streamline
              operations, and build scalable digital
              products with confidence.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}