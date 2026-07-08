import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Ace Soft Solution',
    template: '%s | Ace Soft Solution',
  },
  description:
    'Leading software development company delivering innovative digital solutions.',
  keywords: ['software development', 'web development', 'AI solutions', 'mobile app'],
  authors: [{ name: 'Ace Soft Solution' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Ace Soft Solution',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}