import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Water Damaged? Emergency Device Recovery Service | FIXplanet',
  description: 'iPhone water damage recovery in Bangalore. Professional liquid damage restoration, data recovery, same-day service. Call +91 8105955009',
  keywords: ['iPhone water damaged', 'iPhone liquid damage', 'iPhone wet', 'water damage recovery Bangalore', 'iPhone data recovery'],
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
