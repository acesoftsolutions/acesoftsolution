'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  FolderOpen,
} from 'lucide-react';

const categories = [
  'All',
  'Web Application',
  'Mobile App',
  'E-Commerce',
  'Enterprise',
  'SaaS',
];

const portfolioProjects = [
  {
    id: 1,
    slug: 'enterprise-crm-platform',
    title: 'Enterprise CRM Platform',
    category: 'Enterprise',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
    description:
      'Modern enterprise CRM platform designed to streamline customer management and automate workflows.',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
    ],
  },

  {
    id: 2,
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System',
    category: 'Web Application',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600',
    description:
      'Secure healthcare platform for patient management, appointments, and medical records.',
    technologies: [
      'Next.js',
      'PostgreSQL',
      'AWS',
    ],
  },

  {
    id: 3,
    slug: 'ecommerce-marketplace',
    title: 'E-Commerce Marketplace',
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600',
    description:
      'Multi-vendor marketplace with payments, inventory management, and analytics.',
    technologies: [
      'React',
      'Node.js',
      'Stripe',
      'MongoDB',
    ],
  },

  {
    id: 4,
    slug: 'learning-management-system',
    title: 'Learning Management System',
    category: 'Web Application',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600',
    description:
      'Cloud-based learning platform with course management and assessments.',
    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
    ],
  },

  {
    id: 5,
    slug: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    category: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
    description:
      'Advanced analytics dashboard for financial reporting and business insights.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
    ],
  },

  {
    id: 6,
    slug: 'food-delivery-app',
    title: 'Food Delivery Mobile App',
    category: 'Mobile App',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600',
    description:
      'On-demand delivery application with real-time tracking and secure payments.',
    technologies: [
      'React Native',
      'Firebase',
      'Node.js',
    ],
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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
          className="text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            <FolderOpen className="h-4 w-4" />
            Project Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Explore Our

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              Digital Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            A collection of innovative web applications,
            enterprise platforms, SaaS products, and
            mobile solutions built for ambitious brands.
          </p>

          <div className="mt-6 text-sm font-medium text-slate-500">
            {filteredProjects.length} Projects Available
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                rounded-full
                px-5
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 text-white shadow-lg'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              mt-16
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
                        {filteredProjects.map(
              (project, index) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="block"
                >
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
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="
                      group
                      relative
                      h-full
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-slate-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-500
                      hover:border-blue-100
                      hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                    "
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          h-72
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      {/* Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-slate-950/80
                          via-slate-950/10
                          to-transparent
                        "
                      />

                      {/* Category */}
                      <div
                        className="
                          absolute
                          right-4
                          top-4
                          rounded-full
                          bg-white/90
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-blue-600
                          backdrop-blur-md
                        "
                      >
                        {project.category}
                      </div>

                      {/* Hover Icon */}
                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          opacity-0
                          transition-all
                          duration-500
                          group-hover:opacity-100
                        "
                      >
                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-blue-600
                            shadow-xl
                          "
                        >
                          <ArrowUpRight className="h-7 w-7" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex h-[320px] flex-col p-7">
                      <h3
                        className="
                          text-2xl
                          font-bold
                          text-slate-900
                          transition-colors
                          duration-300
                          group-hover:text-blue-600
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-slate-600">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="
                                rounded-full
                                border
                                border-slate-200
                                bg-slate-50
                                px-3
                                py-1.5
                                text-xs
                                font-medium
                                text-slate-700
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-8">
                        <div className="border-t border-slate-100 pt-6">
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <div>
                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-slate-500
                                "
                              >
                                Project Category
                              </p>

                              <h4
                                className="
                                  mt-1
                                  text-lg
                                  font-bold
                                  text-slate-900
                                "
                              >
                                {project.category}
                              </h4>
                            </div>

                            <div
                              className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                bg-gradient-to-r
                                from-blue-600
                                via-cyan-500
                                to-violet-500
                                text-white
                                shadow-lg
                                transition-transform
                                duration-300
                                group-hover:rotate-45
                              "
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </div>

                          <div
                            className="
                              mt-6
                              flex
                              items-center
                              gap-2
                              font-semibold
                              text-blue-600
                              transition-all
                              duration-300
                              group-hover:gap-3
                            "
                          >
                            View Project

                            <ArrowUpRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[32px]
                        bg-gradient-to-r
                        from-blue-500/5
                        via-cyan-500/5
                        to-violet-500/5
                        opacity-0
                        transition-opacity
                        duration-500
                        pointer-events-none
                        group-hover:opacity-100
                      "
                    />
                  </motion.div>
                </Link>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <div
              className="
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-slate-100
              "
            >
              <FolderOpen className="h-8 w-8 text-slate-400" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              No Projects Found
            </h3>

            <p className="mt-3 text-slate-500">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}