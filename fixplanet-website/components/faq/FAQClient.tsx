'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import { type FAQCategory } from '@/data/faq-data';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-medium rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-light transition-colors"
      >
        <span className="font-semibold text-navy-primary pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-teal-accent flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-teal-accent flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-dark leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FAQClientProps {
  faqData: FAQCategory[];
}

export default function FAQClient({ faqData }: FAQClientProps) {
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
                    <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
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
