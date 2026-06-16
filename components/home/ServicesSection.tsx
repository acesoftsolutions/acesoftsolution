'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  Settings,
  Brain,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { services } from '@/data/services';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  Settings,
  Brain,
  ShoppingCart,
};

export default function ServicesSection() {
  const displayedServices = services.slice(0, 8);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-poppins text-4xl font-bold leading-tight text-slate-900 md:text-5xl xl:text-6xl">
            Digital Solutions Designed
            <span className="block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              To Accelerate Growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            We help startups, enterprises, and growing businesses
            build scalable digital products through software
            development, AI automation, mobile applications,
            digital marketing, and cloud solutions.
          </p>
        </AnimatedSection>

        {/* Service Categories */}
        <AnimatedSection className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Web Development',
              'Mobile Apps',
              'ERP Solutions',
              'AI Automation',
              'Digital Marketing',
              'Cloud Services',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {displayedServices.map((service, index) => {
            const IconComponent =
              iconMap[service.icon] || Globe;

            return (
              <AnimatedSection
                key={service._id}
                delay={index * 0.08}
              >
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:border-blue-200
                      hover:shadow-xl
                    "
                  >
                    {/* Number */}
                    <span
                      className="
                        absolute
                        right-6
                        top-6
                        text-5xl
                        font-bold
                        text-slate-100
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div
                      className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        via-cyan-500
                        to-teal-500
                        shadow-lg
                        shadow-cyan-100
                      "
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-slate-900
                        transition-colors
                        duration-300
                        group-hover:text-blue-700
                      "
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        line-clamp-4
                        flex-grow
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {service.shortDescription}
                    </p>

                    {/* CTA */}
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-blue-700
                      "
                    >
                      Learn More

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

    
      </div>
    </section>
  );
}