'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
} from 'lucide-react';

const highlights = [
  'Free Project Consultation',
  'Dedicated Development Team',
  'Transparent Communication',
  'Long-Term Technical Support',
];

export default function ProcessCTA() {
  return (
    <section className="bg-slate-950 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950">
          {/* Top Content */}
          <div className="px-8 py-16 text-center lg:px-16">
            <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Ready To Get Started?
            </div>

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Let's Build Something
              <span className="block text-cyan-400">
                Extraordinary Together
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Whether you're launching a new product, modernizing an existing
              platform, or scaling your business, our team is ready to help
              transform your vision into reality.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400"
              >
                Start Your Project

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/5"
              >
                <Calendar className="h-5 w-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="border-t border-white/10">
            <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/10 p-6 md:border-r md:border-b-0"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Strip */}
          <div className="border-t border-white/10 bg-white/[0.02]">
            <div className="grid gap-6 px-8 py-8 md:grid-cols-2 lg:px-16">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-slate-400">
                    Call Us
                  </div>

                  <div className="font-medium text-white">
                    +91 XXXXX XXXXX
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-sm text-slate-400">
                    Email Us
                  </div>

                  <div className="font-medium text-white">
                    hello@acesoftsolution.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}