import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/careers',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}