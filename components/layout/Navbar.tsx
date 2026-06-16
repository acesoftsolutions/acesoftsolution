"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const servicesDropdown = [
  {
    name: "Web Development",
    href: "/services/web-development",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    name: "AI Solutions",
    href: "/services/ai-solutions",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    name: "ERP Software",
    href: "/services/erp-software",
  },
  {
    name: "SEO Optimization",
    href: "/services/seo-optimization",
  },
  {
    name: "E-Commerce Development",
    href: "/services/ecommerce-development",
  },
];

const industriesDropdown = [
  {
    name: "Retail & eCommerce",
    href: "/industries/retail-ecommerce",
  },
  {
    name: "Transportation & Logistics",
    href: "/industries/logistics",
  },
  {
    name: "EdTech",
    href: "/industries/edtech",
  },
  {
    name: "Automotive",
    href: "/industries/automotive",
  },
  {
    name: "Travel & Hospitality",
    href: "/industries/travel",
  },
  {
    name: "On Demand",
    href: "/industries/on-demand",
  },
  {
    name: "Fintech",
    href: "/industries/fintech",
  },
  {
    name: "Enterprises",
    href: "/industries/enterprise",
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    name: "Startups",
    href: "/industries/startups",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    name: "Government & Public Sector",
    href: "/industries/government",
  },
];

const navLinks = [
  {
    name: "Services",
    href: "/services",
    dropdown: servicesDropdown,
  },
  {
    name: "Work",
    href: "/portfolio",
  },
  {
    name: "Technology",
    href: "/technology",
  },
  {
    name: "Industries",
    href: "/industries",
    dropdown: industriesDropdown,
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "Company",
    href: "/about",
  },
  {
    name: "Insights",
    href: "/blog",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 relative">
      {" "}
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
              className="w-[110px]
sm:w-[120px]
lg:w-[130px]
h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }

                  if (link.dropdown) {
                    setActiveDropdown(link.name);
                  }
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

                    pathname === link.href ||
                      pathname.startsWith(link.href + "/")
                      ? "text-[#0E4DB7]"
                      : "text-gray-800 hover:text-[#0E4DB7]",
                  )}
                >
                  {link.name}

                  {link.dropdown && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        activeDropdown === link.name && "rotate-180",
                      )}
                    />
                  )}

                  {(pathname === link.href ||
                    pathname.startsWith(link.href + "/")) && (
                  <motion.span
  layoutId="navbar-indicator"
  className="
    absolute
    -bottom-2
    left-0
    h-[2px]
    w-full
    bg-[#0E4DB7]
  "
/>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="
            inline-flex
            items-center
            justify-center
            px-6 xl:px-10
            h-14
            font-semibold
            text-gray-900
            border-2
            border-gray-900
            bg-white
            shadow-[6px_6px_0px_#1f2937]
            transition-all
            duration-300
            hover:translate-x-[3px]
            hover:translate-y-[3px]
            hover:shadow-none
          "
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? (
              <X className="w-7 h-7 text-gray-900" />
            ) : (
              <Menu className="w-7 h-7 text-gray-900" />
            )}
          </button>
        </nav>
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                }, 150);
              }}
              className="
        absolute
        left-0
        right-0
        top-full
        bg-white
        border-t
        border-gray-200
        shadow-xl
        hidden
        lg:block
      "
            >
              <div className="max-w-[1280px] mx-auto px-5 py-12">
                <div className="grid grid-cols-2 gap-x-28 gap-y-2">
                  {navLinks
                    .find((item) => item.name === activeDropdown)
                    ?.dropdown?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="
                  py-5
                  border-b
                  border-gray-200
                  text-[18px]
                  font-medium
                  text-gray-700
                  hover:text-[#0E4DB7]
                "
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
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 py-6">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-4 text-base font-medium border-b border-gray-100",
                    pathname === link.href ? "text-[#0E4DB7]" : "text-gray-800",
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
              mt-6
              inline-flex
              justify-center
              items-center
              h-12
              border-2
              border-gray-900
              font-semibold
              text-gray-900
            "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
