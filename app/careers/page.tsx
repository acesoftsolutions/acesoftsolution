'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, DollarSign, Search, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

const jobs = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: { min: 120000, max: 180000, currency: 'USD' },
    description: 'We are looking for a senior full-stack developer to join our engineering team and help build innovative solutions for our clients.',
    requirements: ['5+ years of experience', 'Expert in React/Next.js and Node.js', 'Experience with cloud platforms', 'Strong problem-solving skills'],
    posted: '2024-03-01',
  },
  {
    id: '2',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'full-time',
    salary: { min: 90000, max: 130000, currency: 'USD' },
    description: 'Join our design team to create beautiful and intuitive user interfaces for our clients\' digital products.',
    requirements: ['3+ years of UI/UX experience', 'Expert in Figma', 'Strong portfolio', 'Experience with design systems'],
    posted: '2024-03-05',
  },
  {
    id: '3',
    title: 'Project Manager',
    department: 'Operations',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: { min: 100000, max: 140000, currency: 'USD' },
    description: 'Lead project teams to deliver high-quality digital solutions on time and within budget.',
    requirements: ['5+ years of project management', 'PMP certification preferred', 'Experience in software development', 'Excellent communication skills'],
    posted: '2024-03-10',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'full-time',
    salary: { min: 110000, max: 160000, currency: 'USD' },
    description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: ['4+ years of DevOps experience', 'Expert in AWS/GCP/Azure', 'Experience with Docker and Kubernetes', 'Infrastructure as Code'],
    posted: '2024-03-12',
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'San Francisco, CA',
    type: 'part-time',
    salary: { min: 40, max: 60, currency: 'USD/hr' },
    description: 'Drive our marketing initiatives and help grow our brand presence.',
    requirements: ['2+ years of digital marketing', 'SEO/SEM experience', 'Content marketing skills', 'Analytics proficiency'],
    posted: '2024-03-15',
  },
];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Careers
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-gradient">Team</span>
              </h1>
              <p className="text-muted text-lg">
                We&apos;re always looking for talented individuals to join our growing team.
                Explore our open positions and start your journey with us.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <motion.button
                    key={dept}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                      selectedDepartment === dept
                        ? 'bg-gradient-brown text-white shadow-glow'
                        : 'glass text-muted hover:text-white'
                    }`}
                  >
                    {dept}
                  </motion.button>
                ))}
              </div>

              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 w-full md:w-64"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <AnimatedSection key={job.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="glass rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-accent text-xs font-medium">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/10 text-muted text-xs">
                            {job.type.replace('-', ' ')}
                          </span>
                        </div>
                        <h3 className="font-poppins font-semibold text-white text-xl mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            <span>
                              {job.salary.currency === 'USD' ? '$' : job.salary.currency}
                              {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
                              {job.salary.currency === 'USD/hr' ? '/hr' : '/yr'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link href={`/careers/${job.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex items-center gap-2"
                        >
                          Apply Now
                          <ChevronRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted text-lg">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
