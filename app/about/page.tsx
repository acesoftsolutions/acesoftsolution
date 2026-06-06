'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Trophy,
  Clock,
  Shield,
  Lightbulb
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: '15+ years of experience in technology leadership.'
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Expert in cloud architecture and AI solutions.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Development',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Full-stack development expert with 10+ years experience.'
  },
  {
    name: 'Emily Davis',
    role: 'Design Director',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Award-winning UI/UX designer.'
  },
];

const values = [
  { icon: Target, title: 'Excellence', description: 'We strive for excellence in every project we deliver.' },
  { icon: Heart, title: 'Passion', description: 'We are passionate about technology and innovation.' },
  { icon: Shield, title: 'Integrity', description: 'We maintain the highest ethical standards in all our dealings.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and creative solutions.' },
];

const stats = [
  { icon: Users, value: '150+', label: 'Happy Clients' },
  { icon: Trophy, value: '500+', label: 'Projects Delivered' },
  { icon: Award, value: '50+', label: 'Team Members' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
];

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Businesses Since <span className="text-gradient">2014</span>
              </h1>
              <p className="text-muted text-lg">
                Ace Soft Solution is a premier IT services company dedicated to helping
                businesses thrive in the digital age through innovative technology solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Our Mission"
                  className="rounded-2xl shadow-premium w-full"
                />
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-poppins text-2xl font-bold text-white mb-3">Our Mission</h2>
                    <p className="text-muted">
                      To empower businesses with cutting-edge technology solutions that drive growth,
                      enhance efficiency, and create lasting competitive advantages in the digital economy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-poppins text-2xl font-bold text-white mb-3">Our Vision</h2>
                    <p className="text-muted">
                      To be the most trusted technology partner for businesses worldwide, known for
                      innovation, excellence, and transformative digital solutions that shape the future.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="section-padding bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Values
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white">
                What Drives <span className="text-gradient">Us Forward</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-brown mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-white text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-brown">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <stat.icon className="w-12 h-12 text-white/80 mx-auto mb-4" />
                    <p className="font-poppins text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-white/80">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Team
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white">
                Meet the <span className="text-gradient">Leadership</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="glass rounded-2xl overflow-hidden group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-poppins font-semibold text-white text-lg">
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm mb-2">{member.role}</p>
                      <p className="text-muted text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
