import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.acesoftsolution.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}