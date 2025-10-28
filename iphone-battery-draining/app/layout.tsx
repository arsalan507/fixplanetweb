import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Battery Draining Fast? Same-Day Battery Replacement | FIXplanet',
  description: 'iPhone battery replacement service in Bangalore. Premium batteries, doorstep service, 12-month warranty, restore your battery life. Call +91 8660310638',
  keywords: ['iPhone battery draining fast', 'iPhone battery replacement', 'iPhone battery died', 'battery replacement Bangalore', 'doorstep iPhone service'],
  robots: {
    index: true,
    follow: true,
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
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
