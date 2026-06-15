'use client';

import {
  Quote,
  Star,
} from 'lucide-react';

import { motion } from 'framer-motion';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const featured = testimonials[0];
  const others = testimonials.slice(1, 5);

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <AnimatedSection>

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-white/[0.03]
                px-5
                py-2
                text-sm
                text-cyan-300
              "
            >
              Client Testimonials
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
              What Our

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Clients Say
              </span>

            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                text-white/60
              "
            >
              Trusted by startups, SMEs and
              enterprises worldwide.
            </p>

          </div>

        </AnimatedSection>

        {/* Testimonials Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Left Column */}

          <div className="space-y-6">

            {others.slice(0, 2).map(
              (item, index) => (
                <motion.div
                  key={item._id}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-cyan-500/10
                    bg-[#0B1220]
                    p-6
                  "
                >

                  <Quote className="h-8 w-8 text-cyan-400/40" />

                  <p className="mt-4 text-white/70">
                    {item.content}
                  </p>

                  <div className="mt-5 flex gap-1">

                    {Array.from({
                      length: item.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="
                          h-4
                          w-4
                          fill-cyan-400
                          text-cyan-400
                        "
                      />
                    ))}

                  </div>

                  <div className="mt-6 flex items-center gap-3">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-12
                        w-12
                        rounded-full
                        object-cover
                      "
                    />

                    <div>

                      <h4 className="font-semibold text-white">
                        {item.name}
                      </h4>

                      <p className="text-sm text-white/50">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </div>

          {/* Featured Testimonial */}

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="
              rounded-[36px]
              border
              border-cyan-500/20
              bg-gradient-to-br
              from-[#0E4DB7]/15
              via-[#3CC8F5]/10
              to-[#12C7B5]/15
              p-10
            "
          >

            <Quote className="h-14 w-14 text-cyan-300" />

            <p
              className="
                mt-8
                text-xl
                leading-relaxed
                text-white
              "
            >
              "{featured.content}"
            </p>

            <div className="mt-8 flex gap-1">

              {Array.from({
                length: featured.rating,
              }).map((_, i) => (
                <Star
                  key={i}
                  className="
                    h-5
                    w-5
                    fill-cyan-400
                    text-cyan-400
                  "
                />
              ))}

            </div>

            <div className="mt-10 flex items-center gap-4">

              <img
                src={featured.image}
                alt={featured.name}
                className="
                  h-16
                  w-16
                  rounded-full
                  object-cover
                  ring-2
                  ring-cyan-400/30
                "
              />

              <div>

                <h4 className="text-lg font-bold text-white">
                  {featured.name}
                </h4>

                <p className="text-white/60">
                  {featured.position}
                </p>

                <p className="text-cyan-300">
                  {featured.company}
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Column */}

          <div className="space-y-6">

            {others.slice(2, 4).map(
              (item) => (
                <motion.div
                  key={item._id}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-cyan-500/10
                    bg-[#0B1220]
                    p-6
                  "
                >

                  <Quote className="h-8 w-8 text-cyan-400/40" />

                  <p className="mt-4 text-white/70">
                    {item.content}
                  </p>

                  <div className="mt-5 flex gap-1">

                    {Array.from({
                      length: item.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="
                          h-4
                          w-4
                          fill-cyan-400
                          text-cyan-400
                        "
                      />
                    ))}

                  </div>

                  <div className="mt-6 flex items-center gap-3">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-12
                        w-12
                        rounded-full
                        object-cover
                      "
                    />

                    <div>

                      <h4 className="font-semibold text-white">
                        {item.name}
                      </h4>

                      <p className="text-sm text-white/50">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>


      </div>

    </section>
  );
}