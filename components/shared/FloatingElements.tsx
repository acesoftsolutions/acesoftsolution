'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackToTopProps {
  showBelow?: number;
}

export default function BackToTop({ showBelow = 300 }: BackToTopProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showBelow);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBelow]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-24 right-6 z-50',
        'w-12 h-12 rounded-full glass-border shadow-glow',
        'flex items-center justify-center',
        'text-white hover:text-accent transition-colors',
        'hover:scale-110 transition-transform'
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}
