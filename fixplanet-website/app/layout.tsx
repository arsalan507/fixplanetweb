import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleTagManager from './GoogleTagManager';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fixplanet.in'),
  title: {
    default: 'iPhone Repair Bangalore — From ₹2,500 | 60-Min Doorstep | FIXplanet',
    template: '%s | FIXplanet',
  },
  description: 'iPhone screen replacement from ₹3,500. MacBook repair from ₹8,500. Same-day doorstep service across Bangalore. 12-month warranty on all repairs. Call +91 8105955009.',
  keywords: ['iPhone repair Bangalore', 'iPhone screen replacement Bangalore', 'MacBook repair Bangalore', 'iPad repair Bangalore', 'Apple repair near me', 'doorstep phone repair Bangalore'],
  authors: [{ name: 'FIXplanet' }],
  creator: 'FIXplanet',
  publisher: 'FIXplanet',
  icons: {
    icon: '/images/logo-transparent.png',
    shortcut: '/images/logo-transparent.png',
    apple: '/images/logo-transparent.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fixplanet.in',
    title: 'iPhone Repair Bangalore — From ₹2,500 | Same-Day Doorstep | FIXplanet',
    description: 'iPhone screen replacement from ₹3,500. MacBook repair from ₹8,500. Same-day doorstep service. 12-month warranty. Call +91 8105955009.',
    siteName: 'FIXplanet',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FIXplanet - Apple Device Care Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Repair Bangalore — From ₹2,500 | Same-Day Doorstep | FIXplanet',
    description: 'iPhone screen from ₹3,500. MacBook from ₹8,500. Same-day doorstep service. 12-month warranty.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
    yandex: 'yandex-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAnalytics />
        <GoogleTagManager />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
