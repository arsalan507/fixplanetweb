import React from 'react';
import type { Metadata } from 'next';
import { Phone, Shield, Clock, CheckCircle2, Star, Watch, Eye, Wrench } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ServiceSchema, FAQPageSchema } from '@/components/ui/Schema';

export const metadata: Metadata = {
  title: 'Apple Watch Repair Bangalore — Screen, Battery, Crown Fix | FIXplanet',
  description:
    'Apple Watch repair in Bangalore. Screen replacement from ₹3,000, battery from ₹2,500. All series supported. Same-day doorstep service with 12-month warranty. Call +91 8105955009.',
  keywords: [
    'apple watch repair bangalore',
    'apple watch screen replacement',
    'apple watch battery replacement bangalore',
    'apple watch crown repair',
  ],
  alternates: {
    canonical: 'https://www.fixplanet.in/services/apple-watch-repair-bangalore',
  },
};

const faqs = [
  {
    question: 'Can you repair all Apple Watch models?',
    answer:
      'Yes, we repair all Apple Watch models from Series 1 through Ultra 2, including SE (1st and 2nd generation). Our technicians carry parts for all models.',
  },
  {
    question: 'How much does Apple Watch screen replacement cost?',
    answer:
      'Apple Watch screen replacement costs between ₹3,000 and ₹8,000 depending on the model and series. Contact us for an exact quote for your specific watch.',
  },
  {
    question: 'Is my Apple Watch waterproof after repair?',
    answer:
      'Yes, we ensure water resistance is maintained after every repair. We use proper sealing techniques and OEM-grade adhesives to restore the original water resistance rating.',
  },
  {
    question: 'Do you repair Apple Watch at home?',
    answer:
      'Yes, we provide same-day doorstep Apple Watch repair service across Bangalore. Our technician comes to your home or office with all required parts and tools.',
  },
];

export default function AppleWatchRepairBangalorePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';

  return (
    <>
      <ServiceSchema
        serviceType="Apple Watch Repair"
        description="Professional Apple Watch repair service in Bangalore with same-day doorstep service. Screen, battery, and crown repairs for all models."
        priceRange="₹2,500 - ₹8,000"
      />
      <FAQPageSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apple Watch Repair in Bangalore — All Series, Same-Day Doorstep
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cracked screen, dead battery, crown issues — we fix it all at your location.
              No need to leave your watch at a shop. Watch the repair happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="px-12">
                Get Free Quote Now
              </Button>
              <Button
                href={`tel:${phone}`}
                variant="ghost"
                size="lg"
                className="!text-white !border-white hover:!bg-white hover:!text-navy-primary"
              >
                <Phone className="mr-2" size={20} />
                Call {phone}
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                Same-day service
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                12-month warranty
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                All series supported
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Apple Watch Repair Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Watch className="text-teal-accent mb-3" size={32} />,
                  title: 'Screen Replacement',
                  price: '₹3,000 - ₹8,000',
                  time: '24-48 hours',
                  warranty: '12-month warranty',
                  description:
                    'Cracked, shattered, or unresponsive display replaced with OEM-grade screen. Touch sensitivity and clarity restored.',
                },
                {
                  icon: <Shield className="text-teal-accent mb-3" size={32} />,
                  title: 'Battery Replacement',
                  price: '₹2,500 - ₹5,000',
                  time: '24-48 hours',
                  warranty: '12-month warranty',
                  description:
                    'Watch dying before end of day? We replace with high-capacity battery to restore all-day performance.',
                },
                {
                  icon: <Wrench className="text-teal-accent mb-3" size={32} />,
                  title: 'Crown & Button Repair',
                  price: '₹2,000 - ₹4,000',
                  time: '24-48 hours',
                  warranty: '12-month warranty',
                  description:
                    'Stuck, unresponsive, or loose Digital Crown and side button fixed. Full functionality restored.',
                },
              ].map((service) => (
                <Card key={service.title} padding="lg" className="text-center">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-navy-primary">{service.title}</h3>
                  <p className="text-2xl font-bold text-teal-accent mb-2">{service.price}</p>
                  <div className="flex flex-col gap-1 text-sm text-gray-dark mb-3">
                    <span className="flex items-center justify-center">
                      <Clock size={14} className="mr-1" />
                      {service.time}
                    </span>
                    <span className="flex items-center justify-center">
                      <Shield size={14} className="mr-1" />
                      {service.warranty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-dark">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Models Supported */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Apple Watch Models We Repair
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Series 1',
                'Series 2',
                'Series 3',
                'Series 4',
                'Series 5',
                'Series 6',
                'Series 7',
                'Series 8',
                'Series 9',
                'SE (1st Gen)',
                'SE (2nd Gen)',
                'Ultra',
                'Ultra 2',
              ].map((model) => (
                <span
                  key={model}
                  className="bg-white border border-teal-accent text-navy-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {model}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-dark mt-6">
              Not sure which model you have? No problem — our technician will identify it on arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-6">
              Common Apple Watch Issues We Fix
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Cracked or shattered screen',
                'Battery not lasting a day',
                'Digital Crown stuck or unresponsive',
                'Water damage (even though "waterproof")',
                'Won\'t charge or power on',
                'Screen flickering or ghost touch',
              ].map((issue) => (
                <div key={issue} className="flex items-start">
                  <CheckCircle2 className="text-teal-accent mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-dark">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why FIXplanet */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Why FIXplanet for Apple Watch Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card padding="lg">
                <Clock className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Doorstep Service</h3>
                <p className="text-gray-dark">
                  No need to leave your watch at a shop and wait for days. Our technician comes to
                  your home or office across Bangalore.
                </p>
              </Card>

              <Card padding="lg">
                <Eye className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Watch the Repair</h3>
                <p className="text-gray-dark">
                  Complete transparency. Sit with our technician and watch the entire repair process.
                  No hidden steps or surprise charges.
                </p>
              </Card>

              <Card padding="lg">
                <Shield className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">12-Month Warranty</h3>
                <p className="text-gray-dark">
                  Industry-leading warranty on both parts and labour. Free replacement if any issues
                  occur within warranty period.
                </p>
              </Card>

              <Card padding="lg">
                <Star className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">OEM-Grade Parts</h3>
                <p className="text-gray-dark">
                  We use only premium OEM-grade parts that match original specifications. No cheap
                  aftermarket components that fail early.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-navy-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-dark">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Apple Watch Repaired Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Same-day doorstep service across Bangalore. All Apple Watch models supported.
            12-month warranty on every repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book Apple Watch Repair
            </Button>
            <Button
              href={`tel:${phone}`}
              variant="ghost"
              size="lg"
              className="!text-white !border-white hover:!bg-white hover:!text-navy-primary"
            >
              <Phone className="mr-2" size={20} />
              Call {phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
