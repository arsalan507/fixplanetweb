import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fixplanet.in'),
  title: {
    default: 'FIXplanet - Premium Apple Device Care in Bangalore | Same-Day Service',
    template: '%s | FIXplanet Bangalore',
  },
  description: 'Bangalore\'s trusted independent Apple specialists. Same-day doorstep service for iPhone, MacBook, iPad & Apple Watch. 12-month warranty. Serving Koramangala, Indiranagar & Whitefield.',
  keywords: ['Apple repair Bangalore', 'iPhone screen replacement Bangalore', 'MacBook battery replacement', 'iPad repair Koramangala', 'Apple Watch repair Indiranagar', 'doorstep Apple service', 'same day iPhone repair'],
  authors: [{ name: 'FIXplanet' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fixplanet.in',
    title: 'FIXplanet - Premium Apple Device Care in Bangalore',
    description: 'Same-day doorstep Apple device care. 12-month warranty. Trusted by 1,000+ customers.',
    siteName: 'FIXplanet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIXplanet - Premium Apple Device Care in Bangalore',
    description: 'Same-day doorstep Apple device care. 12-month warranty.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
