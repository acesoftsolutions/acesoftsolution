'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search, Eye, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { services } from '@/data/services';

export default function AdminServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-poppins text-3xl font-bold text-white">Services</h1>
            <p className="text-muted mt-1">Manage your service offerings</p>
          </div>
          <Button className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Service
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl">
          <div className="p-6 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-muted font-medium">Service</th>
                  <th className="text-left p-4 text-muted font-medium">Slug</th>
                  <th className="text-left p-4 text-muted font-medium">Status</th>
                  <th className="text-left p-4 text-muted font-medium">Order</th>
                  <th className="text-right p-4 text-muted font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <motion.tr
                    key={service._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-brown flex items-center justify-center">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{service.title}</p>
                          <p className="text-muted text-sm">{service.shortDescription.substring(0, 40)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <code className="px-2 py-1 rounded bg-white/10 text-muted text-sm">
                        {service.slug}
                      </code>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        service.isActive
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {service.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-muted">{service.order}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-white/10 text-muted hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/10 text-muted hover:text-accent transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/10 text-muted hover:text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
