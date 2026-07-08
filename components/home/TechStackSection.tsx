"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Monitor, Server, Smartphone, Database, Cloud } from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const categories = [
  { id: "ai", label: "AI & ML", icon: Brain, accent: "#7C3AED" },
  { id: "frontend", label: "Frontend", icon: Monitor, accent: "#0284C8" },
  { id: "backend", label: "Backend", icon: Server, accent: "#16A34A" },
  { id: "mobile", label: "Mobile", icon: Smartphone, accent: "#EA580C" },
  { id: "database", label: "Database", icon: Database, accent: "#DB2777" },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud, accent: "#0891B2" },
];

const technologies = [
  // AI & ML
  { name: "OpenAI GPT-4", category: "ai", slug: "openai", accent: "412991" },
  { name: "Claude AI", category: "ai", slug: "anthropic", accent: "191919" },
  { name: "LangChain", category: "ai", slug: "langchain", accent: "1C3C3C" },
  { name: "Pinecone", category: "ai", slug: "pinecone", accent: "0A0A0A" },
  { name: "Hugging Face", category: "ai", slug: "huggingface", accent: "FFD21E" },
  { name: "TensorFlow", category: "ai", slug: "tensorflow", accent: "FF6F00" },
  { name: "LlamaIndex", category: "ai", slug: "llamaindex", accent: "5C5CFF" },
  { name: "Vector DB", category: "ai", slug: "qdrant", accent: "DC244C" },

  // Frontend
  { name: "React", category: "frontend", slug: "react", accent: "61DAFB" },
  { name: "Next.js", category: "frontend", slug: "nextdotjs", accent: "000000" },
  { name: "TypeScript", category: "frontend", slug: "typescript", accent: "3178C6" },
  { name: "Tailwind CSS", category: "frontend", slug: "tailwindcss", accent: "06B6D4" },
  { name: "Redux", category: "frontend", slug: "redux", accent: "764ABC" },
  { name: "Framer Motion", category: "frontend", slug: "framer", accent: "0055FF" },

  // Backend
  { name: "Node.js", category: "backend", slug: "nodedotjs", accent: "5FA04E" },
  { name: "NestJS", category: "backend", slug: "nestjs", accent: "E0234E" },
  { name: "Python", category: "backend", slug: "python", accent: "3776AB" },
  { name: "Express.js", category: "backend", slug: "express", accent: "000000" },
  { name: "FastAPI", category: "backend", slug: "fastapi", accent: "009688" },
  { name: "GraphQL", category: "backend", slug: "graphql", accent: "E10098" },

  // Mobile
  { name: "Flutter", category: "mobile", slug: "flutter", accent: "02569B" },
  { name: "React Native", category: "mobile", slug: "react", accent: "61DAFB" },
  { name: "Swift", category: "mobile", slug: "swift", accent: "F05138" },
  { name: "Kotlin", category: "mobile", slug: "kotlin", accent: "7F52FF" },

  // Database
  { name: "MongoDB", category: "database", slug: "mongodb", accent: "47A248" },
  { name: "PostgreSQL", category: "database", slug: "postgresql", accent: "4169E1" },
  { name: "MySQL", category: "database", slug: "mysql", accent: "4479A1" },
  { name: "Redis", category: "database", slug: "redis", accent: "FF4438" },

  // Cloud & DevOps
  { name: "AWS", category: "cloud", slug: "amazonaws", accent: "232F3E" },
  { name: "Azure", category: "cloud", slug: "microsoftazure", accent: "0078D4" },
  { name: "Docker", category: "cloud", slug: "docker", accent: "2496ED" },
  { name: "Kubernetes", category: "cloud", slug: "kubernetes", accent: "326CE5" },
  { name: "GitHub Actions", category: "cloud", slug: "githubactions", accent: "2088FF" },
  { name: "Terraform", category: "cloud", slug: "terraform", accent: "7B42BC" },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("ai");

  const activeMeta = useMemo(
    () => categories.find((c) => c.id === activeCategory) ?? categories[0],
    [activeCategory]
  );

  const filteredTechnologies = useMemo(
    () => technologies.filter((tech) => tech.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-[0.08] blur-[120px] transition-colors duration-700"
          style={{ backgroundColor: activeMeta.accent }}
        />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
              Our Technology Ecosystem
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 md:text-4xl xl:text-5xl">
              Built With{" "}
              <span className="block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Industry-Leading Technologies
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              We leverage cutting-edge frameworks, enterprise-grade cloud platforms, 
              advanced AI technologies, and scalable architectures.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-slate-900"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tech-tab-bg"
                      className="absolute inset-0 rounded-2xl border"
                      style={{
                        backgroundColor: `${category.accent}14`,
                        borderColor: `${category.accent}40`,
                      }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <Icon
                    className="relative h-4 w-4"
                    style={{ color: isActive ? category.accent : undefined }}
                  />
                  <span className="relative">{category.label}</span>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              {filteredTechnologies.map((tech, index) => (
                <AnimatedSection key={tech.name} delay={index * 0.03}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative flex h-full min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-xl"
                  >
                    <div
                      className="pointer-events-none absolute -top-12 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                      style={{ backgroundColor: `#${tech.accent}` }}
                    />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 p-4 transition-all group-hover:scale-110 group-hover:bg-white group-hover:shadow">
                      <img
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.accent}`}
                        alt={tech.name}
                        loading="lazy"
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = document.createElement("div");
                          fallback.className = "text-4xl text-slate-400";
                          fallback.textContent = "⚡";
                          e.currentTarget.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>

                    <h3 className="relative mt-6 font-semibold text-slate-900 text-base">
                      {tech.name}
                    </h3>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}