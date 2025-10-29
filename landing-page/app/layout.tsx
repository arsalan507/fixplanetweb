import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Screen Cracked? Same-Day Replacement in Bangalore | FIXplanet',
  description: 'Cracked iPhone screen? We replace it at your doorstep within 2 hours. Premium OEM screens, 12-month warranty. Serving Koramangala, Indiranagar, Whitefield. Call +91 9880740443',
  keywords: ['iPhone screen cracked', 'iPhone screen broken', 'iPhone display damaged', 'screen replacement Bangalore', 'doorstep iPhone service'],
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
