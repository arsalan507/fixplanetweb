import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleTagManager from './GoogleTagManager';
import ClickTracker from '@/components/analytics/ClickTracker';

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
        <link rel="alternate" type="application/rss+xml" title="FIXplanet Blog" href="/feed.xml" />
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
        <ClickTracker />
        <main className="min-h-screen pt-20 pb-20 md:pb-0">{children}</main>
        <Footer />
        {/* Sticky Mobile CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-primary border-t border-gray-700 shadow-lg">
          <div className="flex items-center justify-around py-2 px-2">
            <a
              href="tel:+918105955009"
              className="flex flex-col items-center gap-0.5 text-white text-xs font-medium py-1 px-3 rounded-lg hover:bg-teal-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Now
            </a>
            <a
              href="https://wa.me/918105955009?text=Hi%2C%20I%20need%20a%20repair%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-0.5 text-white text-xs font-medium py-1 px-3 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.936 1.395 5.618L.05 23.5l6.057-1.29A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.543-.48-5.035-1.327l-.36-.214-3.737.98.997-3.647-.235-.374A9.93 9.93 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp
            </a>
            <a
              href="/pricing"
              className="flex flex-col items-center gap-0.5 text-white text-xs font-medium py-1 px-3 rounded-lg hover:bg-teal-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Get Quote
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
