import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/terms',
  },
};

export default function TermsAndConditionsPage() {
  return <TermsClient />;
}