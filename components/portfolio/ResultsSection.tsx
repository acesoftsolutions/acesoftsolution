'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
TrendingUp,
Users,
BriefcaseBusiness,
Trophy,
} from 'lucide-react';

const results = [
{
icon: BriefcaseBusiness,
value: '50+',
label: 'Projects Delivered',
description:
'Successfully launched digital products across multiple industries.',
},
{
icon: Users,
value: '100K+',
label: 'Users Impacted',
description:
'Applications serving thousands of active users globally.',
},
{
icon: TrendingUp,
value: '120%',
label: 'Average Growth',
description:
'Helping clients improve efficiency, engagement, and revenue.',
},
{
icon: Trophy,
value: '99%',
label: 'Client Satisfaction',
description:
'Long-term partnerships built through quality and trust.',
},
];

export default function ResultsSection() {
return ( <section className="relative overflow-hidden bg-white py-14 lg:py-12">
{/* Background Effects */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />


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
      className="mx-auto max-w-3xl text-center"
    >
      <span
        className="
          inline-flex
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
        Business Impact
      </span>

      <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
        Delivering
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
          Measurable Results
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Every project is focused on solving business
        challenges, driving growth, and creating
        long-term value for our clients.
      </p>
    </motion.div>

    {/* Stats Grid */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {results.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
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
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white/80
              p-8
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              transition-all
              duration-500
              hover:border-blue-100
              hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]
            "
          >
            {/* Gradient Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-blue-50
                via-cyan-50
                to-violet-50
              "
            />

            <div className="relative">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  text-white
                  shadow-lg
                "
              >
                <Icon className="h-8 w-8" />
              </div>

              <h3
                className="
                  mt-6
                  text-5xl
                  font-black
                  text-slate-900
                "
              >
                {item.value}
              </h3>

              <h4
                className="
                  mt-3
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                {item.label}
              </h4>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-slate-600
                "
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Bottom Banner */}
    <motion.div
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
        delay: 0.2,
      }}
      className="
        relative
        mt-20
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-blue-700
        via-cyan-600
        to-violet-600
        p-10
        text-center
        text-white
        shadow-[0_30px_80px_rgba(37,99,235,0.25)]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />

      <div className="relative">
        <h3 className="text-3xl font-black md:text-4xl">
          Trusted By Startups & Enterprises
        </h3>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-white/90">
          From SaaS platforms and enterprise systems
          to mobile apps and e-commerce solutions,
          Ace Soft Solution helps businesses transform
          ideas into successful digital products.
        </p>
      </div>
    </motion.div>
  </div>
</section>


);
}
