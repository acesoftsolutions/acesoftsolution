import type { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/thank-you',
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}