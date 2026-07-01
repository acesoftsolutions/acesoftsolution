'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let startTime: number | null = null;

        const animate = (time: number) => {
          if (!startTime) startTime = time;

          const progress = Math.min(
            (time - startTime) / duration,
            1
          );

          setCount(Math.floor(progress * value));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}

      <span className="ml-1 text-[0.75em]">
        {suffix}
      </span>
    </span>
  );
}