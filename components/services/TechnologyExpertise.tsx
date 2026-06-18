'use client';

import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Layers3,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const techCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },

  {
    icon: Server,
    title: 'Backend Development',
    technologies: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'Microservices',
    ],
  },

  {
    icon: Database,
    title: 'Database Systems',
    technologies: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Database Optimization',
    ],
  },

  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: [
      'AWS',
      'Vercel',
      'Docker',
      'CI/CD',
      'Cloud Infrastructure',
    ],
  },
];

export default function TechnologyExpertise() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                Technology Expertise
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Built with Modern Technologies
                and Enterprise Architecture
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg text-slate-600 leading-relaxed">
                We leverage proven technologies,
                modern frameworks, and scalable
                architecture patterns to build secure,
                future-ready digital solutions.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="grid lg:grid-cols-2 gap-6 mt-16">
            {techCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="bg-white border border-slate-200 rounded-[32px] p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-xl
                          bg-slate-50
                          border
                          border-slate-200
                          text-slate-700
                          font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Architecture */}
          <div className="mt-16 rounded-[36px] bg-slate-900 overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <Layers3 className="w-10 h-10 text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  Scalable Architecture
                </h3>

                <p className="mt-4 text-slate-400">
                  Designed to support growth,
                  performance, and long-term
                  maintainability.
                </p>
              </div>

              <div className="p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  Enterprise Security
                </h3>

                <p className="mt-4 text-slate-400">
                  Following modern security standards,
                  authentication practices, and
                  infrastructure protection.
                </p>
              </div>

              <div className="p-10">
                <Cloud className="w-10 h-10 text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold text-white">
                  Cloud Ready
                </h3>

                <p className="mt-4 text-slate-400">
                  Optimized deployments and cloud
                  infrastructure built for reliability.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}