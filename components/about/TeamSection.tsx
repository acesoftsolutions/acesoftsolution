'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Palette,
  Network,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  BarChart3,
  Headphones,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

const teamMembers = [
  {
    name: 'Vivek Modh',
    role: 'Founder',
    icon: Brain,
    image:
      '/Team/Vivek.png',
    expertise: 'Company Vision',
    description:
      "Passionate about building innovative digital solutions and fostering long-term client relationships. Vivek leads the company's vision, growth strategy, and business innovation.",
  },
  {
    name: 'Pankaj Kumar',
    role: 'Co-Founder, CEO & Head of Digital Marketing',
    icon: BarChart3,
    image:
      '/Team/Pankaj.png',
    expertise: 'Digital Growth',
    description:
      "Drives business growth through data-driven marketing strategies, digital transformation, and customer acquisition while leading the company's overall operations.",
  },
  {
    name: 'Sweety Modh',
    role: 'Head of Finance',
    icon: Database,
    image:
      '/Team/Sweety.jpeg',
    expertise: 'Finance',
    description:
      'Oversees financial planning, budgeting, and business operations to ensure sustainable growth and financial excellence across the organization.',
  },
  {
    name: 'Sapna Sharma',
    role: 'Head of Human Resources',
    icon: Network,
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=900',
    expertise: 'People & Culture',
    description:
      'Dedicated to building a strong workplace culture by attracting top talent, supporting employee development, and strengthening team collaboration.',
  },
  {
    name: 'Vishal Kushwaha',
    role: 'Head of Sales & Marketing',
    icon: Headphones,
    image:
      '/Team/VIshal.jpeg',
    expertise: 'Sales Strategy',
    description:
      'Leads sales strategy and client engagement, helping businesses discover digital solutions that accelerate growth and maximize business opportunities.',
  },
  {
    name: 'Chirag Parihar',
    role: 'Head of Technical Operations',
    icon: Cloud,
    image:
      '/Team/chirag.png',
    expertise: 'Technical Delivery',
    description:
      'Manages project execution and technical delivery, ensuring every solution meets the highest standards of quality, performance, and scalability.',
  },
  {
    name: 'Vaibhav Kushwaha',
    role: 'Head of QA Engineer',
    icon: ShieldCheck,
    image:
      '/Team/Vaibhav.jpeg',
    expertise: 'Quality Assurance',
    description:
      'Ensures every application is thoroughly tested, secure, reliable, and delivers a seamless user experience before deployment.',
  },
  {
    name: 'Sourav Panchal',
    role: 'Senior Front-End Developer',
    icon: Code2,
    image:
      '/Team/sourav.png',
    expertise: 'Front-End Development',
    description:
      'Specializes in creating responsive, high-performance web interfaces with modern technologies that deliver exceptional user experiences.',
  },
  {
    name: 'Vijay Panchal',
    role: 'Senior UI/UX Designer',
    icon: Palette,
    image:
      '/Team/vijay.png',
    expertise: 'UI/UX Design',
    description:
      'Designs intuitive and visually engaging digital experiences that combine creativity with usability to enhance customer satisfaction.',
  },
  {
    name: 'Ajinkya Panwar',
    role: 'Senior Mobile App Developer',
    icon: Smartphone,
    image:
      '/Team/Ajinkay.png',
    expertise: 'Mobile Apps',
    description:
      'Builds robust, scalable, and user-friendly Android and iOS applications that help businesses connect with customers on every device.',
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:76px_76px] opacity-30" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-md border border-cyan-100 bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-cyan-700 shadow-sm">
              Our Team
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Meet the Experts Behind Every{' '}
              <span className="bg-gradient-to-r from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] bg-clip-text text-transparent">
                Successful Project
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Our multidisciplinary team of strategists, developers, designers,
              marketers, and business leaders works together to build innovative
              digital solutions that help businesses grow and succeed.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;

            return (
              <AnimatedSection key={member.name} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition duration-300 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100"
                >
                  <div className="relative aspect-[4/4.35] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 right-4 rounded-md border border-white/15 bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 backdrop-blur">
                      {member.expertise}
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5">
                    <div className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0E4DB7] via-[#3CC8F5] to-[#12C7B5] shadow-lg shadow-cyan-200 ring-4 ring-white">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <div className="pt-8">
                      <h3 className="text-xl font-black tracking-tight text-slate-950">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-sm font-semibold leading-6 text-cyan-700">
                        {member.role}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {member.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">
                        ACE SOFT SOLUTION
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}