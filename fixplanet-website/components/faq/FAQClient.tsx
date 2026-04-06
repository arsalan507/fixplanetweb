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
    <div className={`rounded-xl overflow-hidden shadow-sm transition-all duration-200 ${isOpen ? 'shadow-card-hover' : 'border border-gray-medium hover:border-teal-accent/50'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isOpen ? 'bg-teal-accent/5' : 'bg-white hover:bg-gray-light/50'}`}
      >
        <span className="font-semibold text-navy-primary pr-4 text-base">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-teal-accent text-white' : 'bg-gray-light text-teal-accent'}`}>
          {isOpen ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-1 text-gray-dark leading-relaxed bg-teal-accent/5 border-t border-teal-accent/10">
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

      {/* Trust strip */}
      <section className="bg-navy-primary py-4 border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm">
            <span className="badge badge-success">Fixed or Free Guarantee</span>
            <span className="text-white/40 hidden md:block">|</span>
            <span className="badge badge-gold">12-Month Warranty</span>
            <span className="text-white/40 hidden md:block">|</span>
            <span className="badge badge-live">Same-Day Service</span>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqData.map((section, index) => (
              <div key={section.category} className={index > 0 ? 'mt-14' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge badge-teal">{section.category}</span>
                  <div className="flex-1 h-px bg-gray-medium"></div>
                  <span className="text-sm text-gray-dark">{section.faqs.length} questions</span>
                </div>
                <div className="space-y-3">
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
