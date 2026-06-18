'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="rounded-[40px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="p-10 md:p-16 lg:p-20">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-cyan-400">
                  <Sparkles size={16} />
                  Let's Build Something Exceptional
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
                  Ready To Transform Your
                  Business With Technology?
                </h2>

                <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Partner with Ace Soft Solution to
                  create scalable digital products,
                  enterprise applications, and modern
                  customer experiences that drive
                  measurable business growth.
                </p>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
                  {[
                    'Enterprise Solutions',
                    'Dedicated Team',
                    'Long-Term Partnership',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-center gap-2 text-white"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-2xl
                      bg-white
                      px-8
                      py-4
                      text-slate-900
                      font-semibold
                      hover:bg-slate-100
                      transition-all
                    "
                  >
                    Schedule A Consultation

                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/15
                      px-8
                      py-4
                      text-white
                      hover:bg-white/5
                      transition-all
                    "
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}