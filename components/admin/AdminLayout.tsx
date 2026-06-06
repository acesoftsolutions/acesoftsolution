'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Globe,
  Briefcase,
  FileText,
  Users,
  Mail,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
  Search,
  Menu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Services', href: '/admin/services', icon: Globe },
  { name: 'Portfolio', href: '/admin/portfolio', icon: Briefcase },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Contacts', href: '/admin/contacts', icon: Mail },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-dark">
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass rounded-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 280 }}
        className={cn(
          'fixed left-0 top-0 h-screen glass z-40 hidden lg:block',
          'transition-all duration-300'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-brown flex items-center justify-center">
                    <span className="font-poppins font-bold text-white text-xl">A</span>
                  </div>
                  <div>
                    <span className="font-poppins font-semibold text-white">Ace Soft</span>
                    <p className="text-xs text-muted">Admin Panel</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {collapsed ? (
                <ChevronRight className="w-5 h-5 text-white" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                              (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                      isActive
                        ? 'bg-gradient-brown text-white shadow-glow'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    )}
                  >
                    <item.icon className={cn('w-5 h-5 shrink-0')} />
                    <AnimatePresence mode="wait">
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className="font-medium whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Link href="/">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <LogOut className="w-5 h-5 shrink-0" />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-medium"
                    >
                      Back to Site
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-screen w-72 glass z-40 lg:hidden"
            >
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-brown flex items-center justify-center">
                    <span className="font-poppins font-bold text-white text-xl">A</span>
                  </div>
                  <div>
                    <span className="font-poppins font-semibold text-white">Ace Soft</span>
                    <p className="text-xs text-muted">Admin Panel</p>
                  </div>
                </div>
              </div>
              <nav className="p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)}>
                      <div
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                          isActive
                            ? 'bg-gradient-brown text-white'
                            : 'text-muted hover:text-white hover:bg-white/5'
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main
        className={cn(
          'transition-all duration-300 min-h-screen',
          collapsed ? 'lg:ml-20' : 'lg:ml-[280px]'
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-20 glass border-b border-white/10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="relative lg:block hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Search..."
                className="input-field pl-10 w-64"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
                <Bell className="w-5 h-5 text-muted" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brown flex items-center justify-center">
                  <span className="font-semibold text-white">A</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-white font-medium text-sm">Admin User</p>
                  <p className="text-muted text-xs">admin@acesoft.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
