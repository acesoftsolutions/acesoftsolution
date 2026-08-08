import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}