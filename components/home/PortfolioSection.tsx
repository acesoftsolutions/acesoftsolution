'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { portfolios } from '@/data/portfolios';

export default function PortfolioShowcase() {
  const featuredProjects = portfolios.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

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
              Featured Portfolio
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
              Real Projects.

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
                Real Results.
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
              Discover how we've helped businesses
              transform their digital presence through
              innovative software, ERP and AI solutions.
            </p>

          </div>

        </AnimatedSection>

        {/* Projects */}

        <div className="mt-20 space-y-20">

          {featuredProjects.map(
            (project, index) => (
              <AnimatedSection
                key={project._id}
                delay={index * 0.1}
              >

                <div
                  className={`
                    grid
                    items-center
                    gap-10
                    lg:grid-cols-2
                    ${
                      index % 2 !== 0
                        ? 'lg:[&>*:first-child]:order-2'
                        : ''
                    }
                  `}
                >

                  {/* Image */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      group
                      overflow-hidden
                      rounded-[36px]
                      border
                      border-cyan-500/10
                      bg-[#0B1220]
                    "
                  >

                    <div className="relative aspect-[16/10] overflow-hidden">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-black/40
                          backdrop-blur-xl
                        "
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>

                    </div>

                  </motion.div>

                  {/* Content */}

                  <div>

                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-cyan-500/20
                        bg-cyan-500/10
                        px-4
                        py-2
                        text-sm
                        text-cyan-300
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-bold
                        text-white
                        md:text-4xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-lg
                        leading-relaxed
                        text-white/60
                      "
                    >
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}

                    <div className="mt-6 flex flex-wrap gap-3">

                      {project.technologies
                        .slice(0, 6)
                        .map((tech) => (
                          <span
                            key={tech}
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
                            {tech}
                          </span>
                        ))}

                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        font-semibold
                        text-cyan-300
                      "
                    >
                      View Case Study

                      <ArrowRight className="h-5 w-5" />
                    </Link>

                  </div>

                </div>

              </AnimatedSection>
            )
          )}

        </div>

        {/* Bottom CTA */}

        <AnimatedSection className="mt-24">

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
              "
            >
              Ready To Build Something Amazing?
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-white/60
              "
            >
              Let's discuss your next project and
              create a solution that drives measurable
              business growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Link
                href="/portfolio"
                className="
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-white/[0.03]
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                View All Projects
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                Start Your Project
              </Link>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}