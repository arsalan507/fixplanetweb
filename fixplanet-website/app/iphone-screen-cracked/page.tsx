import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Shield, Clock, CheckCircle2, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ServiceSchema } from '@/components/ui/Schema';

export const metadata: Metadata = {
  title: 'iPhone Screen Cracked in Bangalore? Same-Day Replacement | FIXplanet',
  description: 'Cracked iPhone screen? Get same-day doorstep replacement in Bangalore. OEM-grade screens, 12-month warranty, transparent pricing. Serving Koramangala, Indiranagar & Whitefield.',
  keywords: ['iPhone screen cracked Bangalore', 'iPhone screen replacement', 'broken iPhone screen', 'cracked iPhone display', 'iPhone glass repair'],
};

export default function iPhoneScreenCrackedPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';

  return (
    <>
      <ServiceSchema
        serviceType="iPhone Screen Replacement"
        description="Professional iPhone screen replacement service in Bangalore with same-day doorstep service"
        priceRange="₹3,500 - ₹12,000"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              iPhone Screen Cracked? Professional Replacement at Your Doorstep
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Same-day screen replacement across Bangalore. Watch us work. 12-month warranty.
              Pay only when you&apos;re satisfied.
            </p>

            {/* Hero CTA Form */}
            <div className="grid md:grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <input
                type="tel"
                placeholder="Your phone number"
                className="px-4 py-3 rounded-lg text-navy-primary"
              />
              <input
                type="text"
                placeholder="Your Bangalore location"
                className="px-4 py-3 rounded-lg text-navy-primary"
              />
              <Button href="/contact" size="lg" fullWidth>
                Get Free Quote Now
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                15-min response
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                12-month warranty
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                OEM-grade screens
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-6">
              Signs Your iPhone Screen Needs Replacement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Visible cracks or shattered glass',
                'Display lines or discoloration',
                'Touch not responding in certain areas',
                'Screen completely black but phone is on',
                'Ghost touches or erratic behavior',
                'LCD bleeding or dead pixels',
              ].map((sign) => (
                <div key={sign} className="flex items-start">
                  <CheckCircle2 className="text-teal-accent mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-dark">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Our Screen Replacement Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Book Appointment',
                  description: 'Call, WhatsApp, or book online. Get instant price estimate for your iPhone model.',
                },
                {
                  step: 2,
                  title: 'We Come to You',
                  description: 'Our specialist arrives at your Bangalore location with OEM-grade screen and tools.',
                },
                {
                  step: 3,
                  title: 'Professional Replacement',
                  description: 'Watch as we carefully replace your screen. Usually takes 1-2 hours.',
                },
                {
                  step: 4,
                  title: 'Test & Warranty',
                  description: 'Test all functions together. Get 12-month warranty document. Pay when satisfied.',
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

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Transparent Pricing by iPhone Model
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { model: 'iPhone 15 Pro Max', price: '₹10,000 - ₹12,000' },
                { model: 'iPhone 15 Pro', price: '₹9,000 - ₹11,000' },
                { model: 'iPhone 15', price: '₹7,000 - ₹9,000' },
                { model: 'iPhone 14 Pro Max', price: '₹8,000 - ₹10,000' },
                { model: 'iPhone 14 Pro', price: '₹7,500 - ₹9,500' },
                { model: 'iPhone 14', price: '₹6,000 - ₹8,000' },
                { model: 'iPhone 13 Series', price: '₹5,000 - ₹7,000' },
                { model: 'iPhone 12 Series', price: '₹4,000 - ₹6,000' },
              ].map((item) => (
                <Card key={item.model} padding="md" className="flex justify-between items-center">
                  <span className="font-medium text-navy-primary">{item.model}</span>
                  <span className="font-semibold text-teal-accent">{item.price}</span>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button href="/pricing" variant="secondary">
                Use Pricing Calculator for Exact Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Why Choose FIXplanet for Screen Replacement?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card padding="lg">
                <Shield className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Premium Quality Screens</h3>
                <p className="text-gray-dark">
                  OEM-grade displays with same resolution, brightness, and touch sensitivity as original.
                  No cheap aftermarket screens.
                </p>
              </Card>

              <Card padding="lg">
                <Clock className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Same-Day Service</h3>
                <p className="text-gray-dark">
                  Most screen replacements completed within 1-2 hours at your location. No waiting days
                  like at service centers.
                </p>
              </Card>

              <Card padding="lg">
                <Star className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">12-Month Warranty</h3>
                <p className="text-gray-dark">
                  Industry-leading warranty on both screen and installation. Free replacement if issues
                  occur within warranty.
                </p>
              </Card>

              <Card padding="lg">
                <CheckCircle2 className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Complete Transparency</h3>
                <p className="text-gray-dark">
                  Watch the entire replacement process. See the quality of parts. Test everything before
                  payment.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Sneha Reddy',
                  location: 'Koramangala',
                  text: 'Dropped my iPhone 14 Pro. Screen completely shattered. FIXplanet came to my office same day, replaced in 90 minutes. Screen quality is perfect, looks brand new!',
                  rating: 5,
                },
                {
                  name: 'Karthik Nair',
                  location: 'Whitefield',
                  text: 'Apple Store wanted ₹18,000 for iPhone 13 screen. FIXplanet did it for ₹6,500 at my home with better warranty. 6 months later, working flawlessly.',
                  rating: 5,
                },
              ].map((testimonial) => (
                <Card key={testimonial.name} padding="lg">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-dark mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="font-semibold text-navy-primary">{testimonial.name}</div>
                  <div className="text-sm text-teal-accent">{testimonial.location}</div>
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
            Get Your iPhone Screen Replaced Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Same-day service available across Bangalore. 15-minute response guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book Free Inspection
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
