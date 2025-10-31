import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Back Glass Broken? We Replace It Perfectly | FIXplanet',
  description: 'Professional iPhone back glass replacement at your doorstep in Bangalore. Premium quality parts, 12-month warranty, same-day service. Call +91 8105955009',
  keywords: ['iPhone back glass broken', 'iPhone back glass replacement', 'iPhone rear glass damaged', 'back glass replacement Bangalore', 'doorstep iPhone service'],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
