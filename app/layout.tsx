import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ace Soft Solution - Transforming Businesses Through Technology',
  description: 'Premium IT services company offering web development, mobile apps, SEO, digital marketing, UI/UX design, ERP software, AI solutions, and e-commerce development.',
  keywords: ['IT services', 'web development', 'mobile app development', 'SEO', 'digital marketing', 'UI/UX design'],
  authors: [{ name: 'Ace Soft Solution' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acesoftsolutions.com',
    title: 'Ace Soft Solution - Transforming Businesses Through Technology',
    description: 'Premium IT services company offering web development, mobile apps, SEO, digital marketing, UI/UX design, ERP software, AI solutions, and e-commerce development.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Ace Soft Solution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ace Soft Solution - Transforming Businesses Through Technology',
    description: 'Premium IT services company offering web development, mobile apps, SEO, digital marketing, UI/UX design, ERP software, AI solutions, and e-commerce development.',
    images: ['https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-dark text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
