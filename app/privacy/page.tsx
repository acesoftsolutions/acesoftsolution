import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}