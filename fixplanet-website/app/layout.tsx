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
    default: 'FIXplanet - Premium Apple Device Care in Bangalore | Same-Day Service',
    template: '%s | FIXplanet Bangalore',
  },
  description: 'Bangalore\'s trusted independent Apple specialists. Same-day doorstep service for iPhone, MacBook, iPad & Apple Watch. 12-month warranty. Serving Koramangala, Indiranagar & Whitefield.',
  keywords: ['Apple device care Bangalore', 'iPhone screen replacement Bangalore', 'MacBook battery replacement', 'iPad screen Koramangala', 'Apple Watch Indiranagar', 'doorstep service', 'same day service'],
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
    title: 'FIXplanet - Premium Apple Device Care in Bangalore',
    description: 'Same-day doorstep Apple device care. 12-month warranty. Trusted by 1,000+ customers in Bangalore.',
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
    title: 'FIXplanet - Premium Apple Device Care in Bangalore',
    description: 'Same-day doorstep Apple device care. 12-month warranty.',
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
