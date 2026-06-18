'use client';

import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface TechStackProps {
  technologies: string[];
}

export default function TechStack({
  technologies,
}: TechStackProps) {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                Technology Architecture
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Built on a modern, scalable technology
                foundation.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg text-slate-600 leading-relaxed">
                We selected technologies focused on
                performance, maintainability, scalability,
                and long-term business growth.
              </p>
            </div>
          </div>

          {/* Architecture Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <Code2 className="w-8 h-8 text-blue-600 mb-6" />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Frontend
              </h3>

              <p className="text-slate-600">
                Modern user interfaces optimized for
                performance and user experience.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <Server className="w-8 h-8 text-cyan-600 mb-6" />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Backend
              </h3>

              <p className="text-slate-600">
                Secure and scalable application services
                supporting business operations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <Database className="w-8 h-8 text-violet-600 mb-6" />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Database
              </h3>

              <p className="text-slate-600">
                Reliable data architecture ensuring fast
                access and data integrity.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <Cloud className="w-8 h-8 text-emerald-600 mb-6" />

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Cloud & DevOps
              </h3>

              <p className="text-slate-600">
                Infrastructure designed for security,
                scalability, and continuous deployment.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-16">
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-blue-600" />

                <h3 className="text-2xl font-bold text-slate-900">
                  Technologies Used
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-200
                      text-slate-700
                      font-medium
                      hover:border-blue-300
                      hover:bg-blue-50
                      transition-all
                      duration-300
                    "
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-10 rounded-3xl bg-slate-900 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise-Ready Technology Stack
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
              Every technology was selected to support
              performance, scalability, security, and
              future growth. The resulting architecture
              provides a reliable foundation capable of
              evolving alongside business requirements.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}