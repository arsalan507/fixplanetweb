import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MacBook Screen Damaged? Professional Display Restoration | FIXplanet',
  description: 'Expert MacBook display replacement service in Bangalore. Original quality screens, doorstep service, 12-month warranty. Call +91 9880740443',
  keywords: ['MacBook screen damaged', 'MacBook screen cracked', 'MacBook display replacement', 'MacBook screen replacement Bangalore', 'doorstep MacBook service'],
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
