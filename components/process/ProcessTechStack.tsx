'use client';

import {
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  Workflow,
  ArrowRight,
} from 'lucide-react';

const stack = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Laravel', 'Python'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    items: ['AWS', 'Vercel', 'Cloudflare'],
  },
  {
    icon: Workflow,
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'GitHub'],
  },
];

export default function ProcessTechStack() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Technology Architecture
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            The Technology Behind
            <span className="block text-cyan-600">
              Every Successful Project
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We combine modern frameworks, cloud infrastructure, and scalable
            architectures to build reliable digital products.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20 rounded-[36px] border border-slate-200 bg-slate-50 p-8 lg:p-16">
          <div className="mx-auto max-w-4xl">
            {/* Cloud */}
            <div className="flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Cloud className="h-6 w-6 text-cyan-600" />
                  <span className="font-semibold text-slate-900">
                    Cloud Infrastructure
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto h-10 w-px bg-slate-300" />

            {/* Core Layer */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <MonitorSmartphone className="h-7 w-7 text-cyan-600" />

                <h3 className="mt-4 font-bold text-slate-900">
                  Frontend
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  User interfaces and experiences.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-cyan-200 bg-cyan-50 p-6 text-center">
                <h3 className="font-bold text-slate-900">
                  API & Business Logic
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Secure integrations and workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Server className="h-7 w-7 text-cyan-600" />

                <h3 className="mt-4 font-bold text-slate-900">
                  Backend
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Core systems and application logic.
                </p>
              </div>
            </div>

            <div className="mx-auto h-10 w-px bg-slate-300" />

            {/* Database */}
            <div className="flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-cyan-600" />

                  <span className="font-semibold text-slate-900">
                    Database Layer
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-auto h-10 w-px bg-slate-300" />

            {/* DevOps */}
            <div className="flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Workflow className="h-6 w-6 text-cyan-600" />

                  <span className="font-semibold text-slate-900">
                    DevOps & Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-cyan-600" />

                <h3 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-4 space-y-2">
                  {item.items.map((tech) => (
                    <div
                      key={tech}
                      className="text-sm text-slate-600"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 rounded-[32px] bg-slate-900 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Built For Long-Term Scalability
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            Every technology decision is made with performance,
            maintainability, security, and future growth in mind.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-400">
            Modern Architecture
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}