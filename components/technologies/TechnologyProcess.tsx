'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
Search,
ClipboardList,
PenTool,
Code2,
ShieldCheck,
Rocket,
Headphones,
} from 'lucide-react';

const processSteps = [
{
id: '01',
title: 'Discovery',
description:
'Understanding business goals, requirements, target audience, and project scope.',
icon: Search,
},
{
id: '02',
title: 'Planning',
description:
'Creating project roadmap, technology selection, timelines, and architecture.',
icon: ClipboardList,
},
{
id: '03',
title: 'UI/UX Design',
description:
'Designing intuitive user experiences and modern interfaces that engage users.',
icon: PenTool,
},
{
id: '04',
title: 'Development',
description:
'Building scalable frontend and backend solutions using modern technologies.',
icon: Code2,
},
{
id: '05',
title: 'Testing',
description:
'Performing quality assurance, bug fixing, and performance optimization.',
icon: ShieldCheck,
},
{
id: '06',
title: 'Deployment',
description:
'Launching applications securely on production environments and cloud platforms.',
icon: Rocket,
},
{
id: '07',
title: 'Support',
description:
'Continuous maintenance, monitoring, updates, and technical support.',
icon: Headphones,
},
];

export default function TechnologyProcess() {
return ( <section className="relative overflow-hidden bg-[#f8fafc] py-14">
{/* Background Effects */} <div className="absolute inset-0 overflow-hidden"> <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" /> <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" /> </div>

```
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
        Development Process
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Our Proven
        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
          Development Workflow
        </span>
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        We follow a structured and transparent development process that
        ensures quality, efficiency, and successful project delivery.
      </p>
    </div>

    {/* Desktop Timeline */}
    <div className="relative mt-20 hidden lg:block">
      {/* Center Line */}
      <div className="absolute left-0 right-0 top-12 h-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500" />

      <div className="grid grid-cols-7 gap-6">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              className="group relative text-center"
            >
              {/* Circle */}
              <div
                className="
                  relative
                  z-10
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-white
                  bg-gradient-to-br
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  shadow-[0_15px_35px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                <Icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <span className="text-sm font-bold text-cyan-600">
                  {step.id}
                </span>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* Mobile Timeline */}
    <div className="relative mt-16 lg:hidden">
      <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-600 via-cyan-500 to-violet-500" />

      <div className="space-y-10">
        {processSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="relative flex gap-6"
            >
              {/* Icon Circle */}
              <div
                className="
                  relative
                  z-10
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-blue-600
                  via-cyan-500
                  to-violet-500
                  shadow-lg
                "
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              {/* Card */}
              <div
                className="
                  rounded-2xl
                  border
                  border-blue-100
                  bg-white
                  p-5
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-cyan-200
                  hover:shadow-xl
                "
              >
                <span className="text-sm font-bold text-cyan-600">
                  {step.id}
                </span>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

  </div>
</section>


);
}
