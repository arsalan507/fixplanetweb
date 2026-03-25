import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact FIXplanet Bangalore — Call +91 8105955009 | Free Diagnosis',
  description: 'Book doorstep Apple repair in Bangalore. Call +91 8105955009 or WhatsApp. 60-minute response, free diagnosis, 12-month warranty. Open 9 AM-9 PM daily.',
  alternates: {
    canonical: 'https://www.fixplanet.in/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
