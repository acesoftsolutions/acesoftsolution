import type { Metadata } from 'next';
import CookiePolicyClient from './CookiePolicyClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return <CookiePolicyClient />;
}