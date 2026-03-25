import type { Metadata } from 'next';
import { faqData, getAllFAQItems } from '@/data/faq-data';
import { FAQPageSchema, BreadcrumbSchema } from '@/components/ui/Schema';
import FAQClient from '@/components/faq/FAQClient';

export const metadata: Metadata = {
  title: 'iPhone Repair FAQ Bangalore \u2014 Costs, Warranty, Doorstep Service',
  description:
    'Common questions about iPhone, MacBook repair in Bangalore. Pricing from \u20B92,500, 12-month warranty, same-day doorstep service, OEM parts. All questions answered.',
  alternates: {
    canonical: 'https://www.fixplanet.in/faq',
  },
};

export default function FAQPage() {
  const allFaqs = getAllFAQItems();

  return (
    <>
      <FAQPageSchema faqs={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.fixplanet.in' },
          { name: 'FAQ', url: 'https://www.fixplanet.in/faq' },
        ]}
      />
      <FAQClient faqData={faqData} />
    </>
  );
}
