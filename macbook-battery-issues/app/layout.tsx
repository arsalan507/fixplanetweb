import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MacBook Battery Issues? Expert Battery Replacement Service | FIXplanet',
  description: 'MacBook battery replacement in Bangalore. Premium batteries, doorstep service for offices, 12-month warranty. Call +91 8105955009',
  keywords: ['MacBook battery issues', 'MacBook battery not charging', 'MacBook battery replacement', 'battery replacement Bangalore', 'doorstep MacBook service'],
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
