"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  Settings,
  Brain,
  ShoppingCart,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { services } from "@/data/services";

export default function FeaturedServices() {
  const iconMap = {
    globe: Globe,
    smartphone: Smartphone,
    search: Search,
    trendingup: TrendingUp,
    palette: Palette,
    settings: Settings,
    brain: Brain,
    shoppingcart: ShoppingCart,
  };
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
              Helping organizations innovate, scale, and grow through modern
              technology solutions.
            </p>
          </div>

          {/* Services Grid */}

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || Globe;

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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/15
                  bg-white/[0.06]
                  backdrop-blur-xl
                  transition-colors
                  duration-500
                  hover:border-white/25
                "
                >
                  {/* Tinted Gradient Wash (always-on, brightens on hover) */}

                  <div
                    className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${service.gradient}
                    opacity-[0.14]
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.22]
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

                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    {/* Icon + Number Row */}

                    <div className="flex items-center justify-between">
                      <div
                        className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${service.gradient}
                        shadow-lg
                      `}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <span
                        className="
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-slate-400
                      "
                      >
                        {service.id}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                      mt-5
                      text-lg
                      font-bold
                      text-white
                    "
                    >
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                      mt-2
                      line-clamp-2
                      text-sm
                      leading-relaxed
                      text-slate-300
                    "
                    >
                      {service.shortDescription}
                    </p>

                    {/* Technology Preview (condensed) */}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/15
                            bg-white/10
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-slate-200
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Learn More */}

                    <Link
                      href={`/services/${service.slug}`}
                      className="
                      group/link
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-cyan-300
                    "
                    >
                      Learn More
                      <ArrowRight
                        size={16}
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

          {/* Bottom CTA */}
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
                  From web applications and mobile platforms to AI-powered
                  automation, we help businesses build scalable digital products
                  tailored to their unique goals.
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

                  
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}