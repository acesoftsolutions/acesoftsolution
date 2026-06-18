'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
Brain,
Monitor,
Server,
Smartphone,
Database,
Cloud,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const categories = [
{
id: 'ai',
label: 'AI',
icon: Brain,
},
{
id: 'frontend',
label: 'Frontend',
icon: Monitor,
},
{
id: 'backend',
label: 'Backend',
icon: Server,
},
{
id: 'mobile',
label: 'Mobile',
icon: Smartphone,
},
{
id: 'database',
label: 'Database',
icon: Database,
},
{
id: 'cloud',
label: 'Cloud',
icon: Cloud,
},
];

const technologies = [
// AI
{
name: 'OpenAI GPT-4',
category: 'ai',
},
{
name: 'Claude AI',
category: 'ai',
},
{
name: 'LangChain',
category: 'ai',
},
{
name: 'Pinecone',
category: 'ai',
},
{
name: 'Hugging Face',
category: 'ai',
},
{
name: 'TensorFlow',
category: 'ai',
},
{
name: 'LlamaIndex',
category: 'ai',
},
{
name: 'Vector DB',
category: 'ai',
},

// Frontend
{
name: 'React',
category: 'frontend',
},
{
name: 'Next.js',
category: 'frontend',
},
{
name: 'TypeScript',
category: 'frontend',
},
{
name: 'Tailwind CSS',
category: 'frontend',
},
{
name: 'Redux',
category: 'frontend',
},
{
name: 'Framer Motion',
category: 'frontend',
},

// Backend
{
name: 'Node.js',
category: 'backend',
},
{
name: 'NestJS',
category: 'backend',
},
{
name: 'Python',
category: 'backend',
},
{
name: 'Express.js',
category: 'backend',
},
{
name: 'FastAPI',
category: 'backend',
},
{
name: 'GraphQL',
category: 'backend',
},

// Mobile
{
name: 'Flutter',
category: 'mobile',
},
{
name: 'React Native',
category: 'mobile',
},
{
name: 'Swift',
category: 'mobile',
},
{
name: 'Kotlin',
category: 'mobile',
},

// Database
{
name: 'MongoDB',
category: 'database',
},
{
name: 'PostgreSQL',
category: 'database',
},
{
name: 'MySQL',
category: 'database',
},
{
name: 'Redis',
category: 'database',
},

// Cloud
{
name: 'AWS',
category: 'cloud',
},
{
name: 'Azure',
category: 'cloud',
},
{
name: 'Docker',
category: 'cloud',
},
{
name: 'Kubernetes',
category: 'cloud',
},
{
name: 'CI/CD',
category: 'cloud',
},
{
name: 'Terraform',
category: 'cloud',
},
];

export default function TechStackSection() {
const [activeCategory, setActiveCategory] =
useState('ai');

const filteredTechnologies = useMemo(
() =>
technologies.filter(
(tech) =>
tech.category === activeCategory
),
[activeCategory]
);

return ( <section className="bg-[#F8FAFC] py-14 lg:py-12"> <div className="mx-auto max-w-7xl px-5 lg:px-8">
{/* Header */}

```
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
          Technology Ecosystem
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
          Built With
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
            Industry-Leading Technologies
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
          We leverage modern frameworks,
          enterprise-grade cloud platforms,
          AI technologies and scalable
          architectures to build future-ready
          digital products.
        </p>
      </div>
    </AnimatedSection>

    {/* Category Tabs */}

    <AnimatedSection>
      <div
        className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-3
          border-b
          border-slate-200
          pb-8
        "
      >
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              onClick={() =>
                setActiveCategory(
                  category.id
                )
              }
              className={`
                flex
                items-center
                gap-2
                rounded-xl
                px-5
                py-3
                font-medium
                transition-all
                duration-300

                ${
                  activeCategory ===
                  category.id
                    ? `
                      bg-blue-50
                      text-blue-700
                      border
                      border-blue-200
                    `
                    : `
                      bg-white
                      text-slate-600
                      border
                      border-slate-200
                      hover:border-blue-200
                      hover:text-blue-700
                    `
                }
              `}
            >
              <Icon className="h-4 w-4" />

              {category.label}
            </button>
          );
        })}
      </div>
    </AnimatedSection>

    {/* Technology Grid */}

    <div className="mt-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            grid
            grid-cols-2
            gap-5
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {filteredTechnologies.map(
            (tech, index) => (
              <AnimatedSection
                key={tech.name}
                delay={index * 0.03}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    flex
                    h-full
                    min-h-[150px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    text-center
                    shadow-sm
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-100
                      text-xl
                      font-bold
                      text-slate-700
                      transition-all
                      duration-300
                      group-hover:bg-blue-50
                      group-hover:text-blue-700
                    "
                  >
                    {tech.name
                      .split(' ')
                      .map(
                        (word) =>
                          word[0]
                      )
                      .slice(0, 2)
                      .join('')}
                  </div>

                  <h3
                    className="
                      mt-5
                      font-semibold
                      text-slate-900
                    "
                  >
                    {tech.name}
                  </h3>
                </motion.div>
              </AnimatedSection>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
</section>


);
}
