'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'SEO Optimization', href: '/services/seo-optimization' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'ERP Software', href: '/services/erp-software' },
      { name: 'AI Solutions', href: '/services/ai-solutions' },
      { name: 'E-Commerce', href: '/services/ecommerce-development' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="hidden md:block bg-dark-light/50 border-b border-white/5">
        <div className="container-custom py-2 flex justify-between items-center text-sm text-muted">
          <div className="flex items-center gap-6">
            <a href="mailto:info@acesoftsolutions.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@acesoftsolutions.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </span>
          </div>
        </div>
      </div>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'top-0' : 'md:top-[44px]'
        )}
      >
        <div className={cn(
          'transition-all duration-500',
          scrolled ? 'glass shadow-premium' : 'bg-transparent'
        )}>
          <nav className="container-custom h-20 flex items-center justify-between">
            <Link href="/" className="relative z-50">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-brown flex items-center justify-center">
                  <span className="font-poppins font-bold text-white text-xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-semibold text-white text-lg leading-tight">Ace Soft</span>
                  <span className="text-accent text-xs font-medium">Solution</span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 font-inter font-medium transition-colors',
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'text-accent'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.name}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-4 w-64 glass rounded-xl overflow-hidden shadow-premium"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                'block px-4 py-3 text-sm transition-colors',
                                pathname === child.href
                                  ? 'bg-white/10 text-accent'
                                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
                Get Started
              </Link>
              <Link href="/(auth)/login" className="btn-secondary text-sm py-2.5 px-6">
                Login
              </Link>
            </div>

            <button
              className="lg:hidden relative z-50 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </nav>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark z-40 lg:hidden overflow-y-auto"
            >
              <motion.div className="pt-24 pb-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-4 text-lg font-inter font-medium border-b border-white/10',
                        pathname === link.href ? 'text-accent' : 'text-white'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-8 flex flex-col gap-4"
                >
                  <Link href="/contact" className="btn-primary text-center">
                    Get Started
                  </Link>
                  <Link href="/(auth)/login" className="btn-secondary text-center">
                    Login
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
