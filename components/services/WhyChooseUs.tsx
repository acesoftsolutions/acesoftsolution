'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Layers3,
  Rocket,
  Users,
  Clock3,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Enterprise Quality',
    description:
      'Every solution is built using scalable architecture, security-first development practices, and industry standards.',
    size: 'large',
  },

  {
    icon: Layers3,
    title: 'Modern Technologies',
    description:
      'Leveraging the latest frameworks, cloud platforms, and development tools for future-ready solutions.',
    size: 'small',
  },

  {
    icon: Rocket,
    title: 'Fast Delivery',
    description:
      'Agile workflows and streamlined processes ensure rapid project execution without sacrificing quality.',
    size: 'small',
  },

  {
    icon: Users,
    title: 'Dedicated Team',
    description:
      'A collaborative team committed to understanding your goals and delivering long-term success.',
    size: 'small',
  },

  {
    icon: Clock3,
    title: 'Ongoing Support',
    description:
      'Continuous monitoring, maintenance, updates, and optimization after launch.',
    size: 'small',
  },

  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description:
      'Every solution is aligned with measurable business objectives and sustainable growth.',
    size: 'large',
  },
];



export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-16">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <AnimatedSection>
          {/* Header */}

          <div className="mx-auto max-w-4xl text-center">
            <div
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
                font-medium
                text-blue-700
              "
            >
              <Sparkles size={16} />
              Why Choose Ace Soft Solution
            </div>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                xl:text-6xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              A Strategic Technology Partner
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
              >
                For Ambitious Businesses
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              We combine engineering excellence,
              modern technologies, and business
              strategy to deliver digital solutions
              that create measurable impact and
              sustainable growth.
            </p>
          </div>

        

          {/* Bento Grid */}

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
                        {/* Enterprise Quality */}

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
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-7
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>

                <div>
                  <span className="text-sm font-medium text-blue-600">
                    01
                  </span>

                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    Enterprise Quality
                  </h3>

                  <p className="mt-5 max-w-xl text-slate-600 leading-relaxed">
                    Every solution is engineered with
                    enterprise-grade architecture, security
                    standards, scalability, and performance
                    optimization to support long-term growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Modern Technologies */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-5
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-violet-600 to-purple-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
                <Layers3 className="h-7 w-7 text-violet-600" />
              </div>

              <span className="mt-6 block text-sm font-medium text-violet-600">
                02
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Modern Technologies
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Leveraging the latest frameworks,
                cloud platforms, AI tools, and
                development practices.
              </p>
            </motion.div>

            {/* Fast Delivery */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-4
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-600 to-blue-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                <Rocket className="h-7 w-7 text-cyan-600" />
              </div>

              <span className="mt-6 block text-sm font-medium text-cyan-600">
                03
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Fast Delivery
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Agile execution and efficient workflows
                help accelerate project delivery.
              </p>
            </motion.div>

            {/* Dedicated Team */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-4
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-green-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Users className="h-7 w-7 text-emerald-600" />
              </div>

              <span className="mt-6 block text-sm font-medium text-emerald-600">
                04
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Dedicated Team
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Designers, developers, and strategists
                working together toward your goals.
              </p>
            </motion.div>

            {/* Ongoing Support */}

            <motion.div
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-4
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
                <Clock3 className="h-7 w-7 text-orange-600" />
              </div>

              <span className="mt-6 block text-sm font-medium text-orange-600">
                05
              </span>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Ongoing Support
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Continuous updates, maintenance,
                monitoring, and optimization.
              </p>
            </motion.div>

            {/* Growth Focused */}

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
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-200
                bg-white
                p-8
                lg:col-span-12
                shadow-[0_15px_40px_rgba(0,0,0,0.05)]
              "
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 to-violet-600">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <span className="text-sm font-medium text-rose-600">
                      06
                    </span>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      Business Growth Focused
                    </h3>

                    <p className="mt-5 max-w-3xl text-slate-600 leading-relaxed">
                      Every solution is strategically aligned
                      with measurable business outcomes,
                      helping improve operational efficiency,
                      customer engagement, and revenue growth.
                    </p>
                  </div>
                </div>
                                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {[
                    'Business Strategy',
                    'Scalable Architecture',
                    'Digital Innovation',
                    'Growth Optimization',
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium CTA Section */}

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
              duration: 0.6,
            }}
            className="mt-20"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-slate-200
                bg-gradient-to-br
                from-slate-900
                via-slate-800
                to-slate-900
                p-10
                lg:p-14
              "
            >
              {/* Glow Effects */}

              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

              <div className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-2
                      text-sm
                      font-medium
                      text-cyan-300
                      backdrop-blur-xl
                    "
                  >
                    Let's Build Something Great
                  </span>

                  <h3
                    className="
                      mt-6
                      text-4xl
                      md:text-5xl
                      font-bold
                      text-white
                    "
                  >
                    More Than A Development Company
                  </h3>

                  <p
                    className="
                      mt-6
                      text-lg
                      leading-relaxed
                      text-slate-300
                    "
                  >
                    We work as an extension of your team,
                    helping transform ideas into scalable
                    digital products that create long-term
                    business value, innovation, and growth.
                  </p>

                  <div
                    className="
                      mt-10
                      flex
                      flex-wrap
                      justify-center
                      gap-4
                    "
                  >
                    <button
                      className="
                        rounded-2xl
                        bg-white
                        px-8
                        py-4
                        font-semibold
                        text-slate-900
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      Start Your Project
                    </button>

                    <button
                      className="
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/5
                        px-8
                        py-4
                        font-semibold
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:bg-white/10
                      "
                    >
                      Schedule Consultation
                    </button>
                  </div>

                  {/* Trust Row */}

                  <div
                    className="
                      mt-12
                      grid
                      gap-6
                      sm:grid-cols-3
                    "
                  >
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        50+
                      </h4>

                      <p className="mt-1 text-slate-400">
                        Projects Delivered
                      </p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        98%
                      </h4>

                      <p className="mt-1 text-slate-400">
                        Client Satisfaction
                      </p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        24/7
                      </h4>

                      <p className="mt-1 text-slate-400">
                        Technical Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}