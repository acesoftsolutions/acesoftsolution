'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Layers3,
} from 'lucide-react';

const caseStudies = [
  {
    title: 'Enterprise CRM Platform',
    category: 'Business Management',
    description:
      'A custom CRM platform designed to streamline customer interactions, automate workflows, and improve sales performance for growing enterprises.',

    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'AWS',
    ],

    results: [
      {
        icon: TrendingUp,
        value: '45%',
        label: 'Productivity Increase',
      },
      {
        icon: Users,
        value: '15K+',
        label: 'Active Users',
      },
    ],

    image:
      '/Case-Study/enterprise-crm.png',
  },

  {
    title: 'Healthcare Management System',
    category: 'Healthcare',
    description:
      'A secure healthcare platform enabling appointment scheduling, patient records management, and seamless communication between doctors and patients.',

    technologies: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],

    results: [
      {
        icon: TrendingUp,
        value: '60%',
        label: 'Process Efficiency',
      },
      {
        icon: Users,
        value: '25K+',
        label: 'Patient Records',
      },
    ],

    image:
      '/Case-Study/healthcare-management.png',
  },

  {
    title: 'E-Commerce Marketplace',
    category: 'Retail & Commerce',
    description:
      'A scalable online marketplace featuring secure payments, inventory management, real-time analytics, and multi-vendor capabilities.',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Stripe',
      'AWS',
    ],

    results: [
      {
        icon: TrendingUp,
        value: '120%',
        label: 'Revenue Growth',
      },
      {
        icon: Users,
        value: '50K+',
        label: 'Monthly Users',
      },
    ],

    image:
      '/Case-Study/ecommerce-marketplace.png',
  },
];

const featuredProject = caseStudies[0];
const otherProjects = caseStudies.slice(1);

export default function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-14">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[200px]" />
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
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
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
            Client Success Stories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Real Projects.
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
              Real Business Impact.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
       As a leading software development company, Ace Soft Solution turns ideas into scalable products that drive measurable growth.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            group
            relative
            mt-20
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200
            bg-white/80
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="
                  h-full
                  min-h-[420px]
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
                  inset-0
                  bg-gradient-to-t
                  from-slate-900/60
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  left-6
                  top-6
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
                Featured Case Study
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-gradient-to-r
                  from-blue-50
                  to-cyan-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-700
                "
              >
                {featuredProject.category}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featuredProject.results.map((result) => {
                  const Icon = result.icon;

                  return (
                    <div
                      key={result.label}
                      className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-gradient-to-br
                        from-white
                        to-slate-50
                        p-6
                      "
                    >
                      <Icon className="h-7 w-7 text-cyan-600" />

                      <h4 className="mt-4 text-4xl font-bold text-slate-900">
                        {result.value}
                      </h4>

                      <p className="mt-1 text-slate-600">
                        {result.label}
                      </p>
                    </div>
                  );
                })}
              </div>
                            <button
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
                "
              >
                View Case Study

                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white/80
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(37,99,235,0.12)]
              "
            >
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-900/70
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-600
                      via-cyan-500
                      to-violet-500
                    "
                  >
                    <Layers3 className="h-6 w-6 text-white" />
                  </div>

                  <span className="text-sm font-semibold text-blue-600">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-700
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {project.results.map((result) => {
                    const Icon = result.icon;

                    return (
                      <div
                        key={result.label}
                        className="
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-50
                          p-4
                        "
                      >
                        <Icon className="h-5 w-5 text-cyan-600" />

                        <h4 className="mt-2 text-2xl font-bold text-slate-900">
                          {result.value}
                        </h4>

                        <p className="text-sm text-slate-600">
                          {result.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-600
                    transition-colors
                    hover:text-cyan-600
                  "
                >
                  Explore Project

                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

    
      </div>
    </section>
  );
}