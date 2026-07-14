"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const servicesDropdown = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "AI & Machine Learning Solutions", href: "/services/ai-machine-learning-solutions" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "ERP Software Solutions", href: "/services/erp-software-solutions" },
  { name: "SEO & AI Search Optimization", href: "/services/seo-ai-search-optimization" },
  { name: "E-Commerce Development", href: "/services/e-commerce-development" },
];

const industriesDropdown = [
  { name: "Retail & eCommerce", href: "/industries/retail-ecommerce" },
  { name: "Transportation & Logistics", href: "/industries/logistics" },
  { name: "EdTech", href: "/industries/edtech" },
  { name: "Automotive", href: "/industries/automotive" },
  { name: "Travel & Hospitality", href: "/industries/travel" },
  { name: "On Demand", href: "/industries/on-demand" },
  { name: "Fintech", href: "/industries/fintech" },
  { name: "Enterprises", href: "/industries/enterprise" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Startups", href: "/industries/startups" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Government & Public Sector", href: "/industries/government" },
];

const companyDropdown = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "#" },
];

const navLinks = [
  { name: "Services", href: "/services", dropdown: servicesDropdown },
  { name: "Work", href: "/portfolio" },
  { name: "Technology", href: "/technology" },
  { name: "Industries", href: "/industries", dropdown: industriesDropdown },
  { name: "Process", href: "/process" },
  { name: "Company", href: "#", dropdown: companyDropdown },
  { name: "Insights", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Set<string>>(new Set());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLinkActive = (link: (typeof navLinks)[number]) => {
    const matchesOwnPath = pathname === link.href || pathname.startsWith(link.href + "/");
    const matchesDropdownItem =
      link.dropdown?.some(
        (item) => pathname === item.href || pathname.startsWith(item.href + "/")
      ) ?? false;

    return matchesOwnPath || matchesDropdownItem;
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ace Soft Solution"
              width={130}
              height={60}
              priority
              className="w-[110px] sm:w-[120px] lg:w-[130px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    if (link.dropdown) setActiveDropdown(link.name);
                  }}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 150);
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1 text-[15px] font-medium transition-colors duration-200",
                      active ? "text-[#0E4DB7]" : "text-gray-800 hover:text-[#0E4DB7]"
                    )}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    )}
                    {active && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#0E4DB7]"
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4"
                      >
                        <div className="w-80 bg-white border border-gray-200 shadow-xl rounded-xl py-6 px-6">
                          <div className="flex flex-col gap-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 px-4 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#0E4DB7] rounded-lg transition-all"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 xl:px-10 h-14 font-semibold text-gray-900 border-2 border-gray-900 bg-white shadow-[6px_6px_0px_#1f2937] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-5 py-8">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);
                  const isDropdownOpen = openMobileDropdowns.has(link.name);

                  return (
                    <div key={link.name} className="border-b border-gray-100 last:border-none">
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(link.name)}
                            className={cn(
                              "w-full flex items-center justify-between py-4 text-left text-base font-medium transition-colors",
                              active ? "text-[#0E4DB7]" : "text-gray-800"
                            )}
                          >
                            {link.name}
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform duration-300",
                                isDropdownOpen && "rotate-180"
                              )}
                            />
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-6 pb-4 flex flex-col gap-3">
                                  {link.dropdown.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenMobileDropdowns(new Set());
                                      }}
                                      className="text-sm text-gray-600 hover:text-[#0E4DB7] py-1 transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenMobileDropdowns(new Set());
                          }}
                          className={cn(
                            "block py-4 text-base font-medium transition-colors",
                            active ? "text-[#0E4DB7]" : "text-gray-800"
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {/* Mobile CTA */}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => {
                      setIsOpen(false);
                      setOpenMobileDropdowns(new Set());
                    }}
                    className="block w-full text-center py-4 border-2 border-gray-900 font-semibold text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}