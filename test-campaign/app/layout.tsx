import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Screen Cracked? Same-Day Replacement in Bangalore | FIXplanet',
  description: 'Cracked iPhone screen? We replace it at your doorstep within 2 hours. Premium OEM screens, 12-month warranty. Serving Koramangala, Indiranagar, Whitefield. Call +91 8105955009',
  keywords: ['iPhone screen cracked', 'iPhone screen broken', 'iPhone display damaged', 'screen replacement Bangalore', 'doorstep iPhone service'],
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17693415239"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17693415239');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
