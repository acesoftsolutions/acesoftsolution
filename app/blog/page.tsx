'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Search, Tag } from 'lucide-react';

import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { blogs } from '@/data/blogs';

const categories = ['All', 'Technology', 'Development', 'Marketing', 'Design', 'Cloud', 'AI'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && blog.isPublished;
  });

  return (
    <>
      <ScrollProgress />
     

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Our Blog
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Insights & <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-muted text-lg">
                Stay updated with the latest trends, tips, and insights in technology
                and digital transformation.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-gradient-brown text-white shadow-glow'
                        : 'glass text-muted hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 w-full md:w-64"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <AnimatedSection key={blog._id} delay={index * 0.1}>
                  <Link href={`/blog/${blog.slug}`}>
                    <motion.article
                      whileHover={{ y: -10 }}
                      className="glass rounded-2xl overflow-hidden group cursor-pointer"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-accent text-xs font-medium">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-muted text-sm mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{blog.readTime} min read</span>
                          </div>
                        </div>

                        <h2 className="font-poppins font-semibold text-white text-lg mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {blog.title}
                        </h2>

                        <p className="text-muted text-sm mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center gap-3">
                          <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-white text-sm">{blog.author.name}</span>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>


    </>
  );
}
