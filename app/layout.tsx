import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),

  title: {
    default: "Ace Soft Solution",
    template: "%s | Ace Soft Solution",
  },

  description:
    "Leading software development company delivering innovative digital solutions.",

  keywords: [
    "software development",
    "web development",
    "AI solutions",
    "mobile app",
  ],

  authors: [
    {
      name: "Ace Soft Solution",
    },
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ace Soft Solution",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NH652C97');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NH652C97"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <Navbar />

        {children}

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}