'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { blogs, getBlogBySlug } from '@/data/blogs';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>

        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            View All Articles
          </Link>
        </div>

      </>
    );
  }

  const relatedPosts = blogs.filter(b => b._id !== blog._id && b.category === blog.category).slice(0, 3);

  return (
    <>
      <ScrollProgress />


      <main>
        <article>
          <header className="pt-32 pb-12 bg-dark">
            <div className="container-custom">
              <AnimatedSection>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-muted hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <div className="flex items-center gap-4 text-muted text-sm mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-accent">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime} min read</span>
                  </div>
                </div>

                <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
                  {blog.title}
                </h1>

                <div className="flex items-center gap-4">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{blog.author.name}</p>
                    <p className="text-muted text-sm">Author</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </header>

          <div className="bg-dark">
            <div className="container-custom">
              <AnimatedSection>
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full aspect-[21/9] object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="section-padding bg-dark-light">
            <div className="container-custom">
              <div className="grid lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <AnimatedSection>
                    <div
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-white/10">
                      <h3 className="font-poppins font-semibold text-white mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-lg bg-white/5 text-muted hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 p-6 glass rounded-2xl">
                      <h3 className="font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        Share This Article
                      </h3>
                      <div className="flex gap-3">
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 rounded-lg bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 rounded-lg bg-[#1DA1F2]/20 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 rounded-lg bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <aside>
                  <AnimatedSection delay={0.2}>
                    <div className="sticky top-32">
                      <div className="glass rounded-2xl p-6 mb-6">
                        <h3 className="font-poppins font-semibold text-white mb-4">About Author</h3>
                        <div className="flex items-center gap-4">
                          <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-white font-medium">{blog.author.name}</p>
                            <p className="text-muted text-sm">Tech Writer</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass rounded-2xl p-6">
                        <h3 className="font-poppins font-semibold text-white mb-4">Categories</h3>
                        <div className="space-y-2">
                          {['Technology', 'Development', 'Marketing', 'Design', 'AI'].map((cat) => (
                            <Link
                              key={cat}
                              href={`/blog?category=${cat}`}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <span className="text-muted group-hover:text-white">{cat}</span>
                              <span className="text-muted text-sm">
                                {blogs.filter(b => b.category === cat).length}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </aside>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="section-padding bg-dark">
            <div className="container-custom">
              <AnimatedSection className="mb-12">
                <h2 className="font-poppins text-2xl font-bold text-white">
                  Related <span className="text-gradient">Articles</span>
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <AnimatedSection key={post._id} delay={index * 0.1}>
                    <Link href={`/blog/${post.slug}`}>
                      <motion.article
                        whileHover={{ y: -10 }}
                        className="glass rounded-2xl overflow-hidden group cursor-pointer"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-muted text-sm mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <h3 className="font-poppins font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </div>
                      </motion.article>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </>
  );
}
