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
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <AnimatedSection className="text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-500/20
              bg-white/[0.03]
              px-5
              py-2
              text-sm
              font-medium
              text-cyan-300
            "
          >
            🚀 Digital Services
          </span>

          <h2
            className="
              mt-6
              font-poppins
              text-4xl
              font-bold
              text-white
              md:text-5xl
              xl:text-6xl
            "
          >
            Technology Solutions Built For

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
              Modern Businesses
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            From enterprise software development and AI
            automation to mobile applications and digital
            transformation, we deliver scalable solutions
            that accelerate business growth.
          </p>
        </AnimatedSection>

        {/* Service Tags */}

        <AnimatedSection className="mt-12">

          <div className="flex flex-wrap justify-center gap-4">

            {[
              'Web Development',
              'Mobile Apps',
              'ERP Software',
              'AI Solutions',
              'Digital Marketing',
              'Cloud Services',
            ].map((item) => (

              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-cyan-500/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-sm
                  text-white/70
                "
              >
                {item}
              </div>

            ))}

          </div>

        </AnimatedSection>

        {/* Services Grid */}

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {displayedServices.map(
            (service, index) => {
              const IconComponent =
                iconMap[service.icon] || Globe;

              return (
                <AnimatedSection
                  key={service._id}
                  delay={index * 0.08}
                >
                  <Link
                    href={`/services/${service.slug}`}
                  >
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        group
                        relative
                        h-full
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-cyan-500/10
                        bg-[#0B1220]
                        p-7
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-cyan-500/30
                        hover:shadow-[0_25px_80px_rgba(60,200,245,0.12)]
                      "
                    >

                      {/* Service Number */}

                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          text-5xl
                          font-bold
                          text-white/[0.04]
                        "
                      >
                        {String(
                          index + 1
                        ).padStart(2, '0')}
                      </div>

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
                          from-[#0E4DB7]
                          via-[#3CC8F5]
                          to-[#12C7B5]
                          shadow-[0_10px_30px_rgba(60,200,245,0.25)]
                        "
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      {/* Title */}

                      <h3
                        className="
                          text-xl
                          font-semibold
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-cyan-300
                        "
                      >
                        {service.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-4
                          line-clamp-4
                          leading-relaxed
                          text-white/60
                        "
                      >
                        {
                          service.shortDescription
                        }
                      </p>

                      {/* Link */}

                      <div
                        className="
                          mt-6
                          flex
                          items-center
                          gap-2
                          font-medium
                          text-cyan-300
                        "
                      >
                        Explore Service

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
            }
          )}

        </div>

        {/* CTA Section */}

        <AnimatedSection
          delay={0.5}
          className="mt-20"
        >

          <div
            className="
              rounded-[36px]
              border
              border-cyan-500/10
              bg-[#0B1220]
              p-10
              text-center
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-white
                md:text-4xl
              "
            >
              Need A Custom Software Solution?
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-white/60
              "
            >
              Let's discuss your business goals
              and create a scalable digital
              solution tailored to your needs.
            </p>

            <Link
              href="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-[#0E4DB7]
                via-[#3CC8F5]
                to-[#12C7B5]
                px-8
                py-4
                font-semibold
                text-white
                shadow-[0_15px_40px_rgba(60,200,245,0.25)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Get Free Consultation

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}