import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone Repair Cost Bangalore 2026 — Instant Price Calculator',
  description: 'Check iPhone, MacBook, iPad repair prices instantly. iPhone screen from ₹3,500. Battery from ₹2,500. MacBook display from ₹12,000. No hidden charges. Same-day doorstep service.',
  alternates: {
    canonical: 'https://www.fixplanet.in/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
