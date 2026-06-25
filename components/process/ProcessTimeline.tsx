'use client';

import {
  Search,
  Target,
  Palette,
  Code2,
  ShieldCheck,
  Users,
  Rocket,
  LifeBuoy,
  CheckCircle2,
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description:
      'Understanding business objectives, challenges, users, and technical requirements.',
    deliverables: [
      'Requirement Gathering',
      'Business Analysis',
      'Stakeholder Discussions',
      'Scope Definition',
    ],
  },
  {
    number: '02',
    title: 'Strategy',
    icon: Target,
    description:
      'Creating a roadmap, selecting technologies, and planning milestones.',
    deliverables: [
      'Project Roadmap',
      'Technology Selection',
      'Timeline Planning',
      'Resource Allocation',
    ],
  },
  {
    number: '03',
    title: 'Design',
    icon: Palette,
    description:
      'Designing user experiences that are intuitive, engaging, and scalable.',
    deliverables: [
      'Wireframes',
      'Prototypes',
      'User Flows',
      'Design Approval',
    ],
  },
  {
    number: '04',
    title: 'Development',
    icon: Code2,
    description:
      'Building secure, scalable, and high-performance applications.',
    deliverables: [
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Database Design',
    ],
  },
  {
    number: '05',
    title: 'Testing',
    icon: ShieldCheck,
    description:
      'Ensuring reliability, performance, and security before launch.',
    deliverables: [
      'QA Testing',
      'Security Testing',
      'Performance Testing',
      'Bug Fixes',
    ],
  },
  {
    number: '06',
    title: 'Review',
    icon: Users,
    description:
      'Collaborative review cycles to validate business requirements.',
    deliverables: [
      'Demo Sessions',
      'Feedback Collection',
      'Revisions',
      'Final Approval',
    ],
  },
  {
    number: '07',
    title: 'Launch',
    icon: Rocket,
    description:
      'Deploying the solution and ensuring a smooth production rollout.',
    deliverables: [
      'Deployment',
      'Server Setup',
      'Domain Configuration',
      'Launch Monitoring',
    ],
  },
  {
    number: '08',
    title: 'Growth',
    icon: LifeBuoy,
    description:
      'Continuous support, optimization, and feature enhancements.',
    deliverables: [
      'Maintenance',
      'Monitoring',
      'Updates',
      'Enhancements',
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Development Roadmap
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            How We Transform Ideas
            <span className="block text-cyan-600">
              Into Digital Products
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A proven delivery framework designed to reduce risk,
            accelerate execution, and ensure long-term success.
          </p>
        </div>

        {/* Process Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-4xl font-bold text-slate-200">
                    {step.number}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 space-y-3">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-600" />

                      <span className="text-sm text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Framework */}
        <div className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                End-To-End Delivery Framework
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Every phase is connected through a structured workflow
                that prioritizes communication, quality, and measurable
                business outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'Discover',
                'Plan',
                'Design',
                'Build',
                'Test',
                'Review',
                'Launch',
                'Grow',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}