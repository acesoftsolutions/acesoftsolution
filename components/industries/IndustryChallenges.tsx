'use client';

import {
  ShieldCheck,
  Cpu,
  Workflow,
  Gauge,
  Users,
  Database,
  ArrowRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const challenges = [
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description:
      'Modernizing legacy systems and processes to improve efficiency and innovation.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description:
      'Automating repetitive workflows to increase productivity and reduce costs.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description:
      'Creating centralized systems that provide visibility and actionable insights.',
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description:
      'Building digital experiences that improve customer engagement and retention.',
  },
  {
    icon: Gauge,
    title: 'Scalability',
    description:
      'Designing systems that support sustainable business growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    description:
      'Protecting business data while meeting compliance requirements.',
  },
];

export default function IndustryChallenges() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left Side */}

            <div className="lg:col-span-5">
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
                Industry Challenges
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-bold
                  leading-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                Solving Complex
                <span className="block text-blue-600">
                  Business Challenges
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
              Every industry faces unique operational, technological, and customer-related challenges. Our software development expertise helps organizations overcome obstacles, modernize systems, and achieve sustainable growth.
              </p>

              <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  What We Deliver
                </h3>

                <div className="mt-5 space-y-4">
                  {[
                    'Faster Operations',
                    'Better Customer Experiences',
                    'Improved Data Visibility',
                    'Scalable Infrastructure',
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          text-blue-600
                        "
                      />

                      <span className="text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="lg:col-span-7">
              <div className="space-y-5">
                {challenges.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        flex
                        gap-5
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                        transition-all
                        duration-300
                        hover:border-blue-200
                        hover:shadow-lg
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-blue-50
                          transition-all
                          duration-300
                          group-hover:bg-blue-100
                        "
                      >
                        <Icon
                          className="
                            h-7
                            w-7
                            text-blue-600
                          "
                        />
                      </div>

                      <div>
                        <h3
                          className="
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
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}