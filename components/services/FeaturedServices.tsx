'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { services } from '@/data/services';

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-12 lg:py-16">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-sm
                font-medium
                text-cyan-300
                backdrop-blur-xl
              "
            >
              <Sparkles size={16} />
              Featured Services
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
              Solutions Built For
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-violet-400
                  bg-clip-text
                  text-transparent
                "
              >
                Modern Businesses
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              Helping organizations innovate,
              scale, and grow through modern
              technology solutions.
            </p>
          </div>

          {/* Services Grid */}

          <div className="mt-20 grid gap-6 lg:grid-cols-3">
                      {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
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
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                {/* Gradient Glow */}

                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${service.gradient}
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-[0.08]
                  `}
                />

                {/* Top Gradient Bar */}

                <div
                  className={`
                    h-1
                    w-full
                    bg-gradient-to-r
                    ${service.gradient}
                  `}
                />

                <div className="relative z-10 p-8">
                  {/* Service Number */}

                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    {service.id}
                  </span>

                  {/* Icon */}

                  <div
                    className={`
                      mt-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      ${service.gradient}
                      shadow-lg
                    `}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {service.shortDescription}
                  </p>

                  {/* Technology Preview */}

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.technologies
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-slate-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Divider */}

                  <div className="my-8 h-px bg-white/10" />

                  {/* Features Preview */}

                  <div className="space-y-3">
                    {service.features
                      .slice(0, 3)
                      .map((feature) => (
                        <div
                          key={feature.title}
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <div
                            className="
                              h-2
                              w-2
                              rounded-full
                              bg-cyan-400
                            "
                          />

                          <span
                            className="
                              text-sm
                              text-slate-300
                            "
                          >
                            {feature.title}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Learn More */}

                  <Link
                    href={`/services/${service.slug}`}
                    className="
                      group/link
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-cyan-300
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Starts In Part 3 */}
                  <div className="mt-20">
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                lg:p-12
              "
            >
              {/* Background Glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-violet-500/5" />

              <div className="relative z-10 text-center">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-cyan-300
                  "
                >
                  <Sparkles size={14} />
                  End-to-End Expertise
                </span>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-bold
                    text-white
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  Need A Custom Solution?
                </h3>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-3xl
                    text-lg
                    leading-relaxed
                    text-slate-400
                  "
                >
                  From web applications and mobile
                  platforms to AI-powered automation,
                  we help businesses build scalable
                  digital products tailored to their
                  unique goals.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                      font-semibold
                      text-slate-900
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Start Your Project

                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/services"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-8
                      py-4
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white/10
                    "
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}