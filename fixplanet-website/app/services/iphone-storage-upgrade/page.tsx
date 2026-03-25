import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Shield, Clock, CheckCircle2, HardDrive, Smartphone, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ServiceSchema, FAQPageSchema } from '@/components/ui/Schema';

export const metadata: Metadata = {
  title: 'iPhone Storage Upgrade Bangalore — Expand to 256GB/512GB/1TB | FIXplanet',
  description: 'Upgrade your iPhone storage in Bangalore. Expand from 64GB to 256GB, 512GB or 1TB. Same-day doorstep service. Prices from ₹8,000. 12-month warranty. Call +91 8105955009.',
  keywords: ['iphone storage upgrade bangalore', 'iphone memory upgrade', 'iphone 64gb to 256gb upgrade', 'iphone storage full solution bangalore'],
  alternates: {
    canonical: 'https://www.fixplanet.in/services/iphone-storage-upgrade',
  },
};

const faqs = [
  {
    question: 'Is iPhone storage upgrade safe?',
    answer: 'Yes, iPhone storage upgrades are completely safe when performed by experienced technicians. We use professional-grade NAND flash chips and precision micro-soldering equipment. Your data is preserved throughout the process, and every upgrade comes with a 12-month warranty.',
  },
  {
    question: 'Which iPhone models can be upgraded?',
    answer: 'We can upgrade storage on iPhone 6S and newer models, including iPhone 7, 8, X, XS, XR, 11, 12, 13, 14, 15, and 16 series. The exact upgrade options depend on your model. Contact us with your iPhone model for specific availability.',
  },
  {
    question: 'Will I lose my data during the upgrade?',
    answer: 'No, your data is preserved during the storage upgrade process. We perform a complete backup before starting, and all your photos, apps, messages, and settings remain intact after the upgrade is complete.',
  },
  {
    question: 'How long does the storage upgrade take?',
    answer: 'Most iPhone storage upgrades take 2-5 hours depending on the storage size and iPhone model. A 256GB upgrade typically takes 2-4 hours, while a 1TB upgrade may take 3-5 hours. We perform the upgrade at your doorstep so you can carry on with your day.',
  },
];

export default function IPhoneStorageUpgradePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-8105955009';

  return (
    <>
      <ServiceSchema
        serviceType="iPhone Storage Upgrade"
        description="Professional iPhone storage upgrade service in Bangalore. Expand your iPhone storage from 64GB to 256GB, 512GB or 1TB with same-day doorstep service."
        priceRange="₹8,000 - ₹25,000"
      />
      <FAQPageSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            {' / '}
            <Link href="/services" className="hover:text-white">Services</Link>
            {' / '}
            iPhone Storage Upgrade
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              iPhone Storage Full? Upgrade to 256GB, 512GB or 1TB at Your Doorstep
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Running out of space for photos, videos, and apps? No need to buy a new iPhone.
              We upgrade your existing iPhone&apos;s storage chip — at your location in Bangalore.
              12-month warranty included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="px-12">
                Get Free Quote
              </Button>
              <Button
                href={`tel:${phone}`}
                variant="ghost"
                size="lg"
                className="!text-white !border-white hover:!bg-white hover:!text-navy-primary"
              >
                <Phone className="mr-2" size={20} />
                Call Now
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
                Data preserved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-6">
              Why Upgrade Your iPhone Storage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <HardDrive className="text-teal-accent flex-shrink-0 mt-1" size={24} />,
                  title: 'Photos & videos eating up space',
                  description: 'Years of memories filling up your iPhone? An upgrade means you never have to delete precious photos again.',
                },
                {
                  icon: <Smartphone className="text-teal-accent flex-shrink-0 mt-1" size={24} />,
                  title: 'Apps constantly asking to offload',
                  description: 'Tired of the "Storage Almost Full" popup? Stop offloading apps and keep everything you need.',
                },
                {
                  icon: <Zap className="text-teal-accent flex-shrink-0 mt-1" size={24} />,
                  title: 'Can\'t update iOS due to low storage',
                  description: 'iOS updates need free space. Without updates, you miss security patches and new features.',
                },
                {
                  icon: <Clock className="text-teal-accent flex-shrink-0 mt-1" size={24} />,
                  title: '4K video recording needs more space',
                  description: 'One minute of 4K video takes 400MB. With 256GB or more, record without worrying about space.',
                },
              ].map((item) => (
                <Card key={item.title} padding="lg" className="flex gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-navy-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-dark">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              iPhone Storage Upgrade Pricing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-navy-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Upgrade Path</th>
                    <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { path: '64GB → 256GB', price: '₹8,000 - ₹12,000', time: '2-4 hours' },
                    { path: '128GB → 256GB', price: '₹8,000 - ₹12,000', time: '2-4 hours' },
                    { path: '128GB → 512GB', price: '₹12,000 - ₹18,000', time: '2-4 hours' },
                    { path: '256GB → 512GB', price: '₹12,000 - ₹18,000', time: '2-4 hours' },
                    { path: 'Any → 1TB', price: '₹18,000 - ₹25,000', time: '3-5 hours' },
                  ].map((row, index) => (
                    <tr
                      key={row.path}
                      className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
                    >
                      <td className="px-6 py-4 font-medium text-navy-primary">{row.path}</td>
                      <td className="px-6 py-4 font-semibold text-teal-accent">{row.price}</td>
                      <td className="px-6 py-4 text-gray-dark">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-dark mt-4 text-center">
              * Prices vary by iPhone model. Contact us for an exact quote for your device.
            </p>
            <div className="mt-6 text-center">
              <Button href="/pricing" variant="secondary">
                Use Pricing Calculator for Exact Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              How iPhone Storage Upgrade Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Book Appointment',
                  description: 'Call, WhatsApp, or book online. Tell us your iPhone model and desired storage.',
                },
                {
                  step: 2,
                  title: 'We Come to You',
                  description: 'Our specialist arrives at your Bangalore location with the storage chip and micro-soldering tools.',
                },
                {
                  step: 3,
                  title: 'Watch Us Work',
                  description: 'We back up your data, replace the NAND flash chip, and restore everything. Takes 2-5 hours.',
                },
                {
                  step: 4,
                  title: 'Test & Pay',
                  description: 'Verify your new storage capacity, check all data is intact. Pay only when satisfied. 12-month warranty.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-teal-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-navy-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-dark">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Why Choose FIXplanet for Storage Upgrades?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card padding="lg">
                <Shield className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Data Safety Guaranteed</h3>
                <p className="text-gray-dark">
                  Complete backup before upgrade. All your photos, messages, apps, and settings
                  are preserved. Zero data loss guarantee.
                </p>
              </Card>

              <Card padding="lg">
                <HardDrive className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Premium NAND Chips</h3>
                <p className="text-gray-dark">
                  We use high-quality NAND flash storage chips that match Apple&apos;s original
                  specifications for speed and reliability.
                </p>
              </Card>

              <Card padding="lg">
                <Clock className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Same-Day Doorstep Service</h3>
                <p className="text-gray-dark">
                  No need to visit a service center or leave your phone for days.
                  We come to your home or office across Bangalore.
                </p>
              </Card>

              <Card padding="lg">
                <CheckCircle2 className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">12-Month Warranty</h3>
                <p className="text-gray-dark">
                  Every storage upgrade comes with a full 12-month warranty on both the
                  storage chip and the installation work.
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
                <Card key={faq.question} padding="lg">
                  <h3 className="text-lg font-semibold text-navy-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-dark">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your iPhone Storage?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop deleting photos and apps. Upgrade to 256GB, 512GB, or 1TB today.
            Same-day doorstep service across Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Free Quote
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
