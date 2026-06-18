'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Building2,
  Clock3,
} from 'lucide-react';

interface Props {
  project: any;
}

export default function NextProject({
  project,
}: Props) {
  if (!project) return null;

  return (
    <section className="py-24 bg-[#fafafa] border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top */}
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-blue-600" />

          <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">
            Continue Exploring
          </span>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Ready for the next success story?
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Explore how we help organizations solve
              complex challenges through innovative
              digital solutions, modern technology, and
              strategic execution.
            </p>

            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-blue-600 font-medium"
              >
                View All Case Studies
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="bg-white border border-slate-200 rounded-[32px] p-10 hover:border-blue-200 transition-all duration-300">
                  {/* Label */}
                  <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    Next Case Study
                  </span>

                  {/* Title */}
                  <h3 className="mt-8 text-4xl md:text-5xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-8 mt-8">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-slate-400" />

                      <div>
                        <p className="text-xs text-slate-500 uppercase">
                          Industry
                        </p>

                        <p className="text-slate-900 font-medium">
                          {project.industry}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 className="w-5 h-5 text-slate-400" />

                      <div>
                        <p className="text-xs text-slate-500 uppercase">
                          Duration
                        </p>

                        <p className="text-slate-900 font-medium">
                          {project.duration}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex items-center gap-3 text-blue-600 font-semibold">
                    Explore Project

                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="text-center text-slate-500">
            Trusted by businesses across healthcare,
            finance, education, real estate, and
            enterprise technology sectors.
          </p>
        </div>
      </div>
    </section>
  );
}