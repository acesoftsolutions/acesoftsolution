"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";



// Lines "typed" into the console panel — kept short so the animation reads
// at a glance instead of asking the visitor to actually read code.
const codeLines = [
  { text: "$ deploy --env production", color: "text-cyan-300" },
  { text: "✓ Build compiled successfully", color: "text-emerald-400" },
  { text: "✓ AI pipeline initialized", color: "text-emerald-400" },
  { text: "✓ ERP services synced", color: "text-emerald-400" },
  { text: "→ 12 microservices online", color: "text-white/60" },
];

// Floating capability tags orbiting the console — ties motion to the
// actual service lines called out in the copy on the left.
const orbitTags = [
  { label: "AI / ML", style: "top-[6%] left-[-6%]" },
  { label: "Cloud", style: "top-[14%] right-[-8%]" },
  { label: "ERP", style: "bottom-[18%] left-[-8%]" },
  { label: "API", style: "bottom-[4%] right-[-4%]" },
];

const liveMetrics = [
  { label: "Uptime", value: "99.98%" },
  { label: "Requests / sec", value: "4,820" },
  { label: "Avg. response", value: "112ms" },
];

function ConsolePanel() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 500 : 550
      );
      return () => clearTimeout(timeout);
    }
    const metricsTimeout = setTimeout(() => setShowMetrics(true), 700);
    return () => clearTimeout(metricsTimeout);
  }, [visibleLines]);

  // Loop: after metrics have shown for a while, reset and replay.
  useEffect(() => {
    if (!showMetrics) return;
    const resetTimeout = setTimeout(() => {
      setShowMetrics(false);
      setVisibleLines(0);
    }, 4200);
    return () => clearTimeout(resetTimeout);
  }, [showMetrics]);

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        lg:rounded-[28px]
        border
        border-white/10
        bg-[#0b1120]
        p-5
        sm:p-7
        min-h-[360px]
        sm:min-h-[420px]
      "
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#0E4DB7]/20 blur-3xl" />

      {/* Window chrome */}
      <div className="relative z-10 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs font-medium text-white/40">
          acesoft-production — console
        </span>
      </div>

      {/* Code / log lines */}
      <div className="relative z-10 mt-6 font-mono text-[13px] sm:text-sm leading-relaxed">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={line.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={line.color}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < codeLines.length && (
          <motion.span
            className="inline-block h-4 w-2 bg-cyan-300/80 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          />
        )}
      </div>

      {/* Live metrics readout */}
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mt-8 grid grid-cols-3 gap-3"
          >
            {liveMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
              >
                <p className="text-[11px] uppercase tracking-wide text-white/40">
                  {m.label}
                </p>
                <p className="mt-1 text-base sm:text-lg font-semibold text-white">
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing network nodes in the background, suggesting live infra */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30"
        viewBox="0 0 400 300"
        fill="none"
      >
        <motion.line
          x1="40"
          y1="60"
          x2="180"
          y2="120"
          stroke="#3CC8F5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="180"
          y1="120"
          x2="320"
          y2="70"
          stroke="#12C7B5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.3,
          }}
        />
        <motion.line
          x1="180"
          y1="120"
          x2="220"
          y2="240"
          stroke="#0E4DB7"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.6,
          }}
        />
        {[
          [40, 60],
          [180, 120],
          [320, 70],
          [220, 240],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#3CC8F5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080c14] pt-28 md:pt-12 lg:pt-20 pb-16 md:pb-24">
      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}

            <div
              className="
               mb-6
inline-flex
items-center
rounded-full
border
border-cyan-500/20
bg-white/[0.03]
px-4
py-2
text-xs
sm:text-sm
font-medium
text-cyan-300
              "
            >
              Award-Winning Software Development Company
            </div>

            {/* Heading */}

            <h1
              className="
                text-4xl
sm:text-4xl
lg:text-5xl
xl:text-6xl
font-bold
leading-[1.1]
tracking-tight
text-white
              "
            >
              Custom Software Solutions
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Engineered to Scale
              </span>
            </h1>

            {/* Description */}

            <p
              className="
               mt-6
max-w-xl
text-base
sm:text-lg
leading-relaxed
text-white/70
              "
            >
              We empower startups, SMEs, and enterprises with custom software
              development, mobile apps, ERP systems, and AI-driven solutions
              designed to optimize workflows and accelerate scalable growth.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0E4DB7]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#0b3f97]
                "
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>

            
            </div>

         
          </motion.div>

          {/* RIGHT CONTENT — animated console replaces the static image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Orbiting capability tags */}
            {orbitTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                className={`absolute z-20 hidden sm:block ${tag.style}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b1120]/90
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-cyan-300
                    shadow-lg
                    shadow-black/40
                  "
                >
                  {tag.label}
                </span>
              </motion.div>
            ))}

            <ConsolePanel />

          </motion.div>
        </div>
      </div>
    </section>
  );
}