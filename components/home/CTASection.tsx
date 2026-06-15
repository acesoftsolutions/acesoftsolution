'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTASection() {
return ( <section className="py-24 lg:py-32 bg-dark"> <div className="max-w-[1280px] mx-auto px-5 lg:px-8"> <AnimatedSection> <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 lg:p-20">

```
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-secondary mb-6">
            Let's Work Together
          </span>

          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready To Build Your
            <span className="block text-gradient">
              Next Digital Solution?
            </span>
          </h2>

          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed mb-10">
            From custom software and mobile applications to AI-powered
            solutions and enterprise platforms, we help businesses
            transform ideas into successful digital products.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">

            <span className="text-white text-sm md:text-base">
              Web Development
            </span>

            <span className="text-muted">•</span>

            <span className="text-white text-sm md:text-base">
              Mobile Apps
            </span>

            <span className="text-muted">•</span>

            <span className="text-white text-sm md:text-base">
              AI Solutions
            </span>

            <span className="text-muted">•</span>

            <span className="text-white text-sm md:text-base">
              ERP Software
            </span>

            <span className="text-muted">•</span>

            <span className="text-white text-sm md:text-base">
              Digital Marketing
            </span>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-white
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                "
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/portfolio"
                className="
                  inline-flex
                  items-center
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  font-semibold
                "
              >
                View Our Work
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  </div>
</section>


);
}
