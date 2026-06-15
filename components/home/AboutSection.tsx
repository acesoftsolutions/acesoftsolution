'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe,
  Target,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const features = [
  'Custom Software Development',
  'Enterprise ERP Solutions',
  'AI & Automation Integration',
  'Cloud Infrastructure Services',
  'Dedicated Support & Maintenance',
  'Agile Development Methodology',
];

const stats = [
  {
    value: '500+',
    label: 'Projects Delivered',
  },
  {
    value: '150+',
    label: 'Happy Clients',
  },
  {
    value: '98%',
    label: 'Success Rate',
  },
  {
    value: '8+',
    label: 'Countries Served',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}

        <AnimatedSection>

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-500/20
                bg-white/[0.03]
                px-5
                py-2
                text-sm
                font-medium
                text-cyan-300
              "
            >
              About ACE SOFT SOLUTION
            </span>

            <h2
              className="
                mt-6
                font-poppins
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-5xl
                xl:text-6xl
              "
            >
              Driving Innovation Through

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                Technology & Creativity
              </span>

            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-white/60
              "
            >
              We empower startups, SMEs and enterprises
              with innovative software solutions, AI
              automation, ERP systems and digital
              transformation services that accelerate
              business growth.
            </p>

          </div>

        </AnimatedSection>

        {/* Main Content */}

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
            items-stretch
          "
        >

          {/* Left Card */}

          <AnimatedSection direction="left">

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                h-full
                rounded-[32px]
                border
                border-cyan-500/10
                bg-[#0B1220]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/20
                hover:shadow-[0_25px_80px_rgba(60,200,245,0.12)]
              "
            >

              <h3 className="text-3xl font-bold text-white">
                Who We Are
              </h3>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-white/60
                "
              >
                ACE SOFT SOLUTION is a trusted
                technology partner helping businesses
                build scalable websites, mobile apps,
                ERP systems, AI-powered solutions and
                digital products that drive measurable
                growth.
              </p>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-white/60
                "
              >
                Our team combines innovation,
                technical expertise and business
                strategy to create future-ready
                solutions tailored to each client.
              </p>

              <div className="mt-8 space-y-4">

                {features.map((feature, index) => (

                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-cyan-500/10
                      bg-white/[0.03]
                      p-4
                    "
                  >

                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                    <span className="text-white">
                      {feature}
                    </span>

                  </motion.div>

                ))}

              </div>

              <Link
                href="/about"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(60,200,245,0.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Learn More About Us

                <ArrowRight className="h-5 w-5" />

              </Link>

            </motion.div>

          </AnimatedSection>

          {/* Right Card */}

          <AnimatedSection direction="right">

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                h-full
                rounded-[32px]
                border
                border-cyan-500/10
                bg-[#0B1220]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/20
                hover:shadow-[0_25px_80px_rgba(60,200,245,0.12)]
              "
            >

              <h3 className="text-3xl font-bold text-white">
                Why Businesses Trust Us
              </h3>

              {/* Stats Grid */}

              <div className="mt-8 grid grid-cols-2 gap-5">

                {stats.map((item) => (

                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border
                      border-cyan-500/10
                      bg-white/[0.03]
                      p-5
                      text-center
                    "
                  >

                    <h4 className="text-4xl font-bold text-white">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-white/60">
                      {item.label}
                    </p>

                  </div>

                ))}

              </div>

              {/* Experience Card */}

              <div
                className="
                  mt-8
                  rounded-3xl
                  border
                  border-cyan-500/10
                  bg-gradient-to-br
                  from-[#0E4DB7]/20
                  via-[#3CC8F5]/10
                  to-[#12C7B5]/20
                  p-8
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#0E4DB7]
                      via-[#3CC8F5]
                      to-[#12C7B5]
                    "
                  >
                    <Award className="h-8 w-8 text-white" />
                  </div>

                  <div>

                    <h4 className="text-3xl font-bold text-white">
                      10+ Years
                    </h4>

                    <p className="text-white/70">
                      Industry Experience
                    </p>

                  </div>

                </div>

                <p
                  className="
                    mt-5
                    leading-relaxed
                    text-white/70
                  "
                >
                  Delivering successful software,
                  ERP, AI and digital transformation
                  projects across multiple industries
                  worldwide.
                </p>

              </div>

              {/* Bottom Badge */}

              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-cyan-500/10
                  bg-white/[0.03]
                  p-5
                  text-center
                "
              >

                <h4 className="text-xl font-semibold text-white">
                  Your Long-Term Technology Partner
                </h4>

                <p className="mt-2 text-white/60">
                  From idea to deployment and beyond,
                  we help businesses scale through
                  innovative technology solutions.
                </p>

              </div>

            </motion.div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}