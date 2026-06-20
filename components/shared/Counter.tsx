'use client';

import CountUp from 'react-countup';

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({
  end,
  suffix = '',
}: CounterProps) {
  return (
    <>
      <CountUp
        end={end}
        duration={2.5}
        enableScrollSpy
      />
      {suffix}
    </>
  );
}