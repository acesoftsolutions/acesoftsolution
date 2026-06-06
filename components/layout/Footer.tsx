'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'SEO Optimization', href: '/services/seo-optimization' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
  support: [
    { name: 'FAQs', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-brown flex items-center justify-center">
                <span className="font-poppins font-bold text-white text-2xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-white text-xl">Ace Soft</span>
                <span className="text-accent text-sm font-medium">Solution</span>
              </div>
            </Link>
            <p className="text-muted mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. We deliver cutting-edge digital experiences that drive growth and success.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@acesoftsolutions.com" className="flex items-center gap-3 text-muted hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@acesoftsolutions.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-3 text-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Tech Innovators Avenue, Suite 100<br />San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Newsletter</h4>
            <p className="text-muted mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field pr-12"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary hover:bg-primary-light transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>

            <div className="mt-6">
              <p className="text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white hover:text-accent hover:border-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ace Soft Solution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
