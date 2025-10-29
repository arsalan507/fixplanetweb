import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Water Damaged? Emergency Device Recovery Service | FIXplanet',
  description: 'iPhone water damage recovery in Bangalore. Professional liquid damage restoration, data recovery, same-day service. Call +91 9880740443',
  keywords: ['iPhone water damaged', 'iPhone liquid damage', 'iPhone wet', 'water damage recovery Bangalore', 'iPhone data recovery'],
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
