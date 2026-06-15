'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },

  { name: 'About', href: '/about' },

  {
    name: 'Services',
    href: '/services',

    children: [
      {
        name: 'Web Development',
        href: '/services/web-development',
      },
      {
        name: 'Mobile App Development',
        href: '/services/mobile-app-development',
      },
      {
        name: 'SEO Optimization',
        href: '/services/seo-optimization',
      },
      {
        name: 'Digital Marketing',
        href: '/services/digital-marketing',
      },
      {
        name: 'UI/UX Design',
        href: '/services/ui-ux-design',
      },
      {
        name: 'ERP Software',
        href: '/services/erp-software',
      },
      {
        name: 'AI Solutions',
        href: '/services/ai-solutions',
      },
      {
        name: 'E-Commerce',
        href: '/services/ecommerce-development',
      },
    ],
  },

  { name: 'Portfolio', href: '/portfolio' },

  { name: 'Blog', href: '/blog' },

  { name: 'Careers', href: '/careers' },

  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* TOP BAR */}

      <div className="hidden border-b border-cyan-500/10 bg-[#060b14]/90 backdrop-blur-xl md:block">

        <div className="container-custom flex items-center justify-between py-2 text-sm text-white/70">

          <div className="flex items-center gap-6">

            <a
              href="mailto:info@acesoftsolutions.com"
              className="flex items-center gap-2 transition-colors hover:text-cyan-300"
            >
              <Mail className="h-4 w-4 text-cyan-400" />

              <span>
                info@acesoftsolutions.com
              </span>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 transition-colors hover:text-cyan-300"
            >
              <Phone className="h-4 w-4 text-cyan-400" />

              <span>
                +1 (234) 567-890
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2">

            <Globe className="h-4 w-4 text-cyan-400" />

            <span>
              Mon - Fri: 9:00 AM - 6:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'top-2'
            : 'top-0 md:top-[44px]'
        )}
      >
        <div
          className={cn(
            'container-custom rounded-3xl border transition-all duration-500',
            scrolled
              ? 'border-cyan-500/10 bg-[#070b14]/90 shadow-[0_15px_60px_rgba(60,200,245,0.12)] backdrop-blur-3xl'
              : 'border-white/5 bg-[#070b14]/50 backdrop-blur-xl'
          )}
        >
          <nav className="flex h-20 items-center justify-between px-6">

            {/* LOGO */}

            <Link
              href="/"
              className="relative z-50"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/logo.png"
                  alt="Ace Soft Solution"
                  width={180}
                  height={70}
                  priority
                  className="
                    h-auto
                    w-[170px]
                    md:w-[150px]
                    lg:w-[160px]
                    object-contain
                    rounded-sm
                    drop-shadow-[0_0_25px_rgba(60,200,245,0.25)]
                  "
                />
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}

            <div className="hidden items-center gap-8 lg:flex">

              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    setActiveDropdown(link.name)
                  }
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex items-center gap-1 text-[15px] font-medium transition-all duration-300',

                      pathname === link.href ||
                        pathname.startsWith(
                          link.href + '/'
                        )
                        ? 'text-cyan-400'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.name}

                    {link.children && (
                      <ChevronDown className="h-4 w-4" />
                    )}

                    {(pathname === link.href ||
                      pathname.startsWith(
                        link.href + '/'
                      )) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="
                          absolute
                          -bottom-2
                          left-0
                          right-0
                          h-[2px]
                          rounded-full
                          bg-gradient-to-r
                          from-[#0E4DB7]
                          via-[#3CC8F5]
                          to-[#12C7B5]
                        "
                      />
                    )}
                  </Link>

                  {/* MEGA MENU */}

                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown ===
                        link.name && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            absolute
                            left-1/2
                            top-full
                            z-50
                            mt-6
                            w-[700px]
                            -translate-x-1/2
                            overflow-hidden
                            rounded-3xl
                            border
                            border-cyan-500/10
                            bg-[#0b1220]/95
                            shadow-[0_25px_80px_rgba(60,200,245,0.15)]
                            backdrop-blur-3xl
                          "
                        >
                          <div className="grid grid-cols-2 gap-3 p-6">

                            {link.children.map(
                              (child) => (
                                <Link
                                  key={child.name}
                                  href={
                                    child.href
                                  }
                                  className="
                                    group
                                    rounded-2xl
                                    border
                                    border-transparent
                                    bg-white/[0.02]
                                    p-5
                                    transition-all
                                    duration-300
                                    hover:border-cyan-500/20
                                    hover:bg-white/[0.04]
                                  "
                                >
                                  <div className="flex items-center justify-between">
                                                                        <div>
                                      <h4 className="font-semibold text-white">
                                        {child.name}
                                      </h4>

                                      <p className="mt-1 text-sm text-white/50">
                                        Professional business solutions
                                      </p>
                                    </div>

                                    <ArrowRight
                                      className="
                                        h-5
                                        w-5
                                        text-cyan-400
                                        opacity-0
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:opacity-100
                                      "
                                    />
                                  </div>
                                </Link>
                              )
                            )}
                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP CTA */}

            <div className="hidden lg:flex">

              <Link
                href="/contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_35px_rgba(60,200,245,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <span className="flex items-center gap-2">

                  Get Started

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>
            </div>

            {/* MOBILE BUTTON */}

            <button
              className="relative z-50 p-2 lg:hidden"
              onClick={() =>
                setIsOpen(!isOpen)
              }
            >
              {isOpen ? (
                <X className="h-7 w-7 text-white" />
              ) : (
                <Menu className="h-7 w-7 text-white" />
              )}
            </button>
          </nav>
        </div>

        {/* MOBILE MENU */}

        <AnimatePresence>

          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: '100vh',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                inset-0
                z-40
                overflow-y-auto
                bg-[#050913]/95
                backdrop-blur-3xl
                lg:hidden
              "
            >
              <div className="flex min-h-screen flex-col px-6 pb-10 pt-28">

                {navLinks.map(
                  (link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'block border-b border-white/10 py-5 text-lg font-medium',

                          pathname ===
                            link.href
                            ? 'text-cyan-400'
                            : 'text-white'
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="
                      block
                      rounded-xl
                      bg-gradient-to-r
                      from-[#0E4DB7]
                      via-[#3CC8F5]
                      to-[#12C7B5]
                      px-6
                      py-4
                      text-center
                      font-semibold
                      text-white
                    "
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}