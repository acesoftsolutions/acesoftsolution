'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
ArrowRight,
ExternalLink,
TrendingUp,
Users,
Rocket,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';
import { portfolios } from '@/data/portfolios';

export default function PortfolioShowcase() {
const featuredProjects = [
...portfolios.slice(0, 3),


{
  _id: 'dummy-1',
  slug: 'smart-manufacturing-erp',
  title: 'Smart Manufacturing ERP',
  category: 'ERP Solution',
  image:
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600',
  shortDescription:
    'A complete ERP ecosystem designed for manufacturing companies to manage production, inventory, procurement, finance, and workforce operations from a unified platform.',

  technologies: [
    'React',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Power BI',
  ],

  result: '45% Faster Operations',
},

{
  _id: 'dummy-2',
  slug: 'ai-support-platform',
  title: 'AI Customer Support Platform',
  category: 'AI Automation',
  image:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600',

  shortDescription:
    'AI-powered customer service ecosystem with intelligent chat automation, ticket prioritization, sentiment analysis, and knowledge base integration.',

  technologies: [
    'Next.js',
    'OpenAI',
    'LangChain',
    'Pinecone',
    'Node.js',
    'MongoDB',
  ],

  result: '60% Support Cost Reduction',
},


];

return ( <section className="bg-white py-24 lg:py-32"> <div className="mx-auto max-w-7xl px-5 lg:px-8">
{/* Header */}

    <AnimatedSection>
      <div className="mx-auto max-w-4xl text-center">
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
            text-blue-700
          "
        >
          Featured Portfolio
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            text-slate-900
            md:text-5xl
            xl:text-6xl
          "
        >
          Real Projects.
          <span
            className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
          >
            Real Business Impact.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
        >
          Explore how we help businesses
          accelerate growth through enterprise
          software, AI automation, ERP solutions,
          cloud technologies and digital
          transformation initiatives.
        </p>
      </div>
    </AnimatedSection>

    {/* Portfolio Projects */}

    <div className="mt-24 space-y-32">
      {featuredProjects.map((project, index) => (
        <AnimatedSection
          key={project._id}
          delay={index * 0.08}
        >
          <div
            className={`
              grid
              items-center
              gap-12
              lg:grid-cols-2
              ${
                index % 2 !== 0
                  ? 'lg:[&>*:first-child]:order-2'
                  : ''
              }
            `}
          >
            {/* Content */}

            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                  "
                >
                  {project.category}
                </span>

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-4
                    py-2
                    text-sm
                    text-slate-600
                  "
                >
                  Case Study
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-3xl
                  font-bold
                  leading-tight
                  text-slate-900
                  md:text-5xl
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                {project.shortDescription}
              </p>

              {/* Result */}

              {'result' in project && (
                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-green-200
                    bg-green-50
                    px-5
                    py-4
                  "
                >
                  <TrendingUp className="h-5 w-5 text-green-600" />

                  <span className="font-semibold text-green-700">
                    {project.result}
                  </span>
                </div>
              )}

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies
                  ?.slice(0, 6)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2
                        text-sm
                        text-slate-600
                      "
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              {/* CTA */}

              <Link
                href={`/portfolio/${project.slug}`}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-blue-700
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                View Case Study

                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Image */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                relative
              "
            >
              {/* Floating Metrics */}

              <div
                className="
                  absolute
                  -left-4
                  top-8
                  z-20
                  hidden
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-xl
                  lg:block
                "
              >
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />

                  <div>
                    <div className="font-bold text-slate-900">
                      Enterprise
                    </div>

                    <div className="text-xs text-slate-500">
                      Scalable Solution
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  absolute
                  -bottom-4
                  right-6
                  z-20
                  hidden
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-xl
                  lg:block
                "
              >
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-green-600" />

                  <div>
                    <div className="font-bold text-slate-900">
                      High Growth
                    </div>

                    <div className="text-xs text-slate-500">
                      Business Impact
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                "
              >
                <div className="relative aspect-[16/10]">
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
                      bg-white
                      shadow-lg
                    "
                  >
                    <ExternalLink className="h-5 w-5 text-slate-700" />
                  </div>

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/20
                      to-transparent
                      p-6
                    "
                  >
                    <div className="text-white">
                      <div className="text-sm opacity-80">
                        Featured Project
                      </div>

                      <div className="mt-1 text-xl font-bold">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      ))}
    </div>

  </div>
</section>


);
}
