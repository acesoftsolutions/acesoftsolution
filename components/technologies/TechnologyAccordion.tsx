'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Monitor,
  Server,
  Database,
  Cloud,
  Smartphone,
  Bot,
} from 'lucide-react';

const technologyCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    description:
      'Industry-leading frontend frameworks for building fast, interactive, responsive, and highly scalable user interfaces and experiences.',
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
    title: 'Backend Development',
    icon: Server,
    description:
      'Robust, enterprise-grade backend architectures and high-performance APIs engineered for speed, security, scalability, and reliability.',
    technologies: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST API',
      'GraphQL',
      'JWT Authentication',
      'Socket.io',
      'Microservices',
    ],
  },
  {
    title: 'Database Solutions & Management',
    icon: Database,
    description:
      'Secure, high-performance, and optimized database solutions engineered to power business-critical applications at any scale.',
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
    title: 'Cloud Infrastructure & DevOps',
    icon: Cloud,
    description:
      'Reliable, automated deployment pipelines and enterprise-grade cloud infrastructure built for modern, scalable, and resilient applications.',
    technologies: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Vercel',
      'Netlify',
      'CI/CD',
      'GitHub Actions',
    ],
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    description:
      'High-performance cross-platform and native mobile applications for iOS and Android, delivering seamless, intuitive user experiences.',
    technologies: [
      'React Native',
      'Flutter',
      'Android',
      'iOS',
      'Expo',
    ],
  },
  {
    title: 'AI & Intelligent Automation',
    icon: Bot,
    description:
      'Cutting-edge AI, machine learning, and intelligent automation solutions that streamline operations and accelerate measurable business growth through data-driven decision making.',
    technologies: [
      'OpenAI',
      'ChatGPT Integration',
      'AI Automation',
      'Machine Learning',
      'Data Processing',
      'Custom AI Solutions',
    ],
  },
];

export default function TechnologyAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-14">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
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
            Technology Expertise
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Technologies We Use To 

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
              Engineer Exceptional Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
           We combine industry-proven frameworks, enterprise cloud
              platforms, and cutting-edge development tools to deliver
              secure, scalable, and high-performance digital products
              that exceed client expectations

          </p>
        </div>

        <div className="mt-16 space-y-5">
            {technologyCategories.map((category, index) => {
  const Icon = category.icon;
  const isOpen = activeIndex === index;

  return (
    <motion.div
      key={index}
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
        y: -4,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="flex w-full items-center justify-between px-6 py-6 text-left lg:px-8"
      >
        <div className="flex items-center gap-5">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              text-white
              shadow-lg
              shadow-blue-500/20
            "
          >
            <Icon className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {category.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {category.technologies.length} Technologies
            </p>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
        >
          <ChevronDown className="h-6 w-6 text-blue-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >
            <div className="border-t border-slate-100 px-6 py-6 lg:px-8">
              <p className="mb-6 max-w-3xl text-slate-600">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: techIndex * 0.04,
                    }}
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
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
})}
        </div>
      </div>
    </section>
  );
}