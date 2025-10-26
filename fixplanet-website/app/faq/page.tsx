'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    category: 'Service & Process',
    faqs: [
      {
        question: 'How quickly do you respond to service requests?',
        answer: 'We guarantee a response within 15 minutes of receiving your request. Most customers receive a call within 5-10 minutes during business hours (9 AM - 9 PM).',
      },
      {
        question: 'Do you provide doorstep service everywhere in Bangalore?',
        answer: 'We serve all major areas including Koramangala, Indiranagar, Whitefield, HSR Layout, Marathahalli, Bellandur, Electronic City, JP Nagar, and Jayanagar. Check our service area page for a complete list.',
      },
      {
        question: 'Can I watch you perform the service?',
        answer: 'Absolutely! We perform all services at your location in your presence. You can watch every step, ask questions, and ensure complete transparency.',
      },
      {
        question: 'How long does each type of service take?',
        answer: 'Most common services like screen or battery replacement take 1-3 hours. Complex repairs like logic board work may take 3-7 days. We provide accurate time estimates before starting.',
      },
      {
        question: 'Do I need to backup my device before service?',
        answer: 'Yes, we strongly recommend backing up your data before any service. While we take utmost care, backups ensure your data safety.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    faqs: [
      {
        question: 'How much do services cost?',
        answer: 'Prices vary by device model and issue. iPhone screen replacement ranges from ₹3,500-₹12,000. MacBook battery replacement ranges from ₹8,500-₹18,000. Use our pricing calculator for instant estimates.',
      },
      {
        question: 'Are there any hidden charges?',
        answer: 'Never. We provide upfront pricing with no hidden fees. The quote we give is the price you pay. If additional work is needed during service, we inform you before proceeding.',
      },
      {
        question: 'When do I need to pay?',
        answer: 'Payment is required only after you\'re completely satisfied with the work. We accept cash, UPI, cards, and bank transfers.',
      },
      {
        question: 'Do you offer EMI options?',
        answer: 'Currently, we don\'t offer direct EMI. However, you can use your credit card EMI facility if your bank provides it.',
      },
    ],
  },
  {
    category: 'Parts & Quality',
    faqs: [
      {
        question: 'Do you use genuine Apple parts?',
        answer: 'We use OEM-grade parts that meet or exceed Apple\'s specifications. These are not removed from other devices but are new components manufactured to Apple\'s standards.',
      },
      {
        question: 'What does "OEM-grade" mean?',
        answer: 'OEM (Original Equipment Manufacturer) grade means parts made by the same factories that supply to Apple, following identical specifications and quality standards.',
      },
      {
        question: 'Where do you source your components?',
        answer: 'We work with verified suppliers who provide genuine OEM-grade components. All parts come with manufacturer certifications and our own quality testing.',
      },
      {
        question: 'How do your parts compare to Apple\'s?',
        answer: 'Our OEM-grade parts have the same specifications, quality, and performance as Apple parts, but at significantly lower costs. They come with our 12-month warranty.',
      },
    ],
  },
  {
    category: 'Warranty & Guarantees',
    faqs: [
      {
        question: 'What warranty do you provide?',
        answer: 'We provide 12 months warranty on most services (6 months on some complex repairs). This covers both parts and workmanship.',
      },
      {
        question: 'What does the warranty cover?',
        answer: 'Our warranty covers defects in parts and workmanship. If the same issue recurs within the warranty period, we fix it free of charge.',
      },
      {
        question: 'What if the same issue happens again?',
        answer: 'Contact us immediately. If it\'s within warranty, we\'ll fix it at no charge. We stand behind our work completely.',
      },
      {
        question: 'Do you offer a money-back guarantee?',
        answer: 'Yes, if you\'re not satisfied with our work before payment, you don\'t pay. Customer satisfaction is our priority.',
      },
    ],
  },
  {
    category: 'Device Security',
    faqs: [
      {
        question: 'How do you protect my data during service?',
        answer: 'We don\'t access your data. Most repairs don\'t require unlocking your device. If needed, you unlock it yourself and monitor the work.',
      },
      {
        question: 'Are your technicians background-checked?',
        answer: 'Yes, all our technicians undergo background verification and are trained professionals with years of experience.',
      },
      {
        question: 'What if my device has sensitive work data?',
        answer: 'We understand data sensitivity. You can watch the entire process, and we sign NDAs for corporate clients if required.',
      },
    ],
  },
  {
    category: 'Apple Warranty',
    faqs: [
      {
        question: 'Will your service void my Apple warranty?',
        answer: 'If your device is still under Apple warranty, we recommend using Apple\'s service. For out-of-warranty devices, our service doesn\'t affect any future Apple services.',
      },
      {
        question: 'Should I go to Apple or FIXplanet?',
        answer: 'If under warranty: Apple. If out of warranty: FIXplanet offers faster service, lower costs, better warranty, and doorstep convenience.',
      },
    ],
  },
];

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-medium rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-light transition-colors"
      >
        <span className="font-semibold text-navy-primary pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="text-teal-accent flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-teal-accent flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-dark leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / FAQ
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Everything you need to know about our Apple device care services
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqData.map((section, index) => (
              <div key={section.category} className={index > 0 ? 'mt-12' : ''}>
                <h2 className="text-2xl font-bold text-navy-primary mb-6 pb-3 border-b-2 border-teal-accent inline-block">
                  {section.category}
                </h2>
                <div className="space-y-4 mt-6">
                  {section.faqs.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} faq={faq} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-dark mb-8">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX'}`}
                variant="ghost"
                size="lg"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
