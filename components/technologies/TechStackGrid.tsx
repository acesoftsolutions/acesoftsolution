'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  Wrench,
} from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    icon: Monitor,
    description:
      'Industry-leading frontend technologies for building fast, responsive, and highly engaging user interfaces and experiences.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Material UI',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    description:
      'Enterprise-grade backend technologies for developing secure, scalable, and high-performance APIs and server-side applications.',
    technologies: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST API',
      'GraphQL',
      'Socket.io',
      'JWT Authentication',
      'Microservices',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    description:
      'Secure, optimized, and high-performance database technologies designed to power modern business applications at scale.',
    technologies: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Firebase',
      'Redis',
      'Supabase',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description:
      'Modern cloud infrastructure and DevOps solutions enabling automated deployments, scalability, and enterprise-grade reliability.',
    technologies: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Vercel',
      'Netlify',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    description:
      'Cross-platform and native mobile development technologies for delivering seamless iOS and Android experiences.',
    technologies: [
      'React Native',
      'Flutter',
      'Android',
      'iOS',
      'Expo',
    ],
  },
  {
    title: 'AI & Tools',
    icon: Wrench,
    description:
      'Advanced AI technologies and modern development tools that accelerate innovation, collaboration, automation, and software delivery.',
    technologies: [
      'OpenAI',
      'ChatGPT Integration',
      'AI Automation',
      'Machine Learning',
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'VS Code',
      'Jira',
      'Slack',
    ],
  },
];

export default function TechStackGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const current = techCategories[activeTab];
  const Icon = current.icon;

  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-14">
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-600
            "
          >
            Technology Stack
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            The Technologies Powering

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-teal-500
                bg-clip-text
                text-transparent
              "
            >
              Digital Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
           Industry-proven technologies and cutting-edge frameworks
              that power secure, scalable, and future-ready digital
              solutions.

          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {techCategories.map((category, index) => {
            const TabIcon = category.icon;

            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition-all
                  ${
                    activeTab === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200'
                  }
                `}
              >
                <TabIcon className="h-4 w-4" />
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Technology Content */}
                <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
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
              mt-12
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
            "
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Left */}
              <div className="lg:w-1/3">
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    text-white
                    shadow-lg
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  {current.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {current.description}
                </p>
              </div>

              {/* Right */}
              <div className="lg:w-2/3">
                <div className="flex flex-wrap gap-3">
                  {current.technologies.map((tech) => (
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
                        transition-all
                        duration-300
                        hover:border-blue-300
                        hover:bg-blue-50
                        hover:text-blue-700
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}