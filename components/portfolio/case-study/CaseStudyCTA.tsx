'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

export default function CaseStudyCTA() {
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
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Sparkles size={16} />
                Let's Build Something Exceptional
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Ready to transform your next idea into a
                scalable digital product?
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                Whether you're launching a new platform,
                modernizing legacy systems, or scaling an
                existing product, our team helps turn
                business challenges into measurable
                outcomes through strategy, design, and
                technology.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  'Enterprise-grade architecture',
                  'Scalable & future-ready solutions',
                  'Modern UI/UX experiences',
                  'Dedicated development team',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />

                    <span className="text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-[32px] p-10 text-white">
                <MessageSquare className="w-12 h-12 text-cyan-400 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  Start the Conversation
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Share your business goals, product
                  vision, or technical challenges. We'll
                  help you define the right solution and
                  roadmap.
                </p>

                <div className="mt-8 space-y-4">
                  <Link
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      w-full
                      rounded-2xl
                      bg-white
                      text-slate-900
                      px-6
                      py-4
                      font-semibold
                      hover:bg-slate-100
                      transition-all
                    "
                  >
                    Schedule a Consultation
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="
                      flex
                      items-center
                      justify-center
                      w-full
                      rounded-2xl
                      border
                      border-white/15
                      px-6
                      py-4
                      font-medium
                      text-white
                      hover:bg-white/5
                      transition-all
                    "
                  >
                    Explore More Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Statement */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <span>Strategy & Consulting</span>
              <span>•</span>
              <span>Product Design</span>
              <span>•</span>
              <span>Web & Mobile Development</span>
              <span>•</span>
              <span>Cloud & DevOps</span>
              <span>•</span>
              <span>Long-Term Partnership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}