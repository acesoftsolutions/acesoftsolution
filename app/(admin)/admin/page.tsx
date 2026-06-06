'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  FileText,
  Mail,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Briefcase,
  Eye
} from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const stats = [
  {
    title: 'Total Revenue',
    value: '$124,500',
    change: '+12.5%',
    trending: 'up',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Total Projects',
    value: '156',
    change: '+8.2%',
    trending: 'up',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Active Users',
    value: '2,450',
    change: '+15.3%',
    trending: 'up',
    icon: Users,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Monthly Visitors',
    value: '45,230',
    change: '-2.4%',
    trending: 'down',
    icon: Eye,
    color: 'from-orange-500 to-orange-600'
  },
];

const recentProjects = [
  { name: 'FinanceFlow Banking App', client: 'FinanceFlow Inc.', status: 'In Progress', progress: 75 },
  { name: 'ShopMax E-Commerce', client: 'ShopMax Retail', status: 'Completed', progress: 100 },
  { name: 'MediCare Health Portal', client: 'MediCare Systems', status: 'In Progress', progress: 45 },
  { name: 'EduLearn Platform', client: 'EduLearn Academy', status: 'Review', progress: 90 },
];

const recentContacts = [
  { name: 'John Smith', email: 'john@company.com', subject: 'Web Development Inquiry', date: '2 hours ago' },
  { name: 'Sarah Johnson', email: 'sarah@startup.io', subject: 'Mobile App Quote', date: '5 hours ago' },
  { name: 'Mike Davis', email: 'mike@enterprise.com', subject: 'ERP Implementation', date: '1 day ago' },
  { name: 'Emily Brown', email: 'emily@agency.com', subject: 'Partnership Request', date: '2 days ago' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <div>
          <h1 className="font-poppins text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-muted mt-1">Welcome back! Here&apos;s what&apos;s happening with your business.</p>
        </div>
      </AnimatedSection>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trending === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trending === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-muted text-sm mb-1">{stat.title}</h3>
              <p className="font-poppins text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <AnimatedSection delay={0.3}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-semibold text-white text-lg">Recent Projects</h2>
              <button className="text-accent text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-lg text-xs ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted text-sm mb-3">{project.client}</p>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-brown rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Recent Contacts */}
        <AnimatedSection delay={0.4}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-poppins font-semibold text-white text-lg">Recent Contacts</h2>
              <button className="text-accent text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentContacts.map((contact, index) => (
                <motion.div
                  key={contact.email}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-brown flex items-center justify-center">
                      <span className="text-white font-semibold">{contact.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{contact.name}</h3>
                      <p className="text-muted text-sm">{contact.subject}</p>
                    </div>
                    <span className="text-muted text-xs">{contact.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Quick Stats */}
      <AnimatedSection delay={0.5}>
        <div className="glass rounded-2xl p-6">
          <h2 className="font-poppins font-semibold text-white text-lg mb-6">Performance Overview</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <p className="font-poppins text-3xl font-bold text-white">8</p>
              <p className="text-muted text-sm">Active Services</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <p className="font-poppins text-3xl font-bold text-white">24</p>
              <p className="text-muted text-sm">Blog Posts</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-purple-400" />
              </div>
              <p className="font-poppins text-3xl font-bold text-white">6</p>
              <p className="text-muted text-sm">Portfolio Items</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-orange-400" />
              </div>
              <p className="font-poppins text-3xl font-bold text-white">12</p>
              <p className="text-muted text-sm">New Leads</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
