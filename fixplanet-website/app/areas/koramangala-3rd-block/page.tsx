import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Clock, Phone, Star, CheckCircle2, Shield, Award, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { getAreaBySlug } from '@/data/bangalore-areas';

const SLUG = 'koramangala-3rd-block';

export async function generateMetadata(): Promise<Metadata> {
  const area = getAreaBySlug(SLUG);

  if (!area) {
    return {
      title: 'Area Not Found | FIXplanet',
    };
  }

  return {
    title: `Expert Apple Repair in ${area.name}, Bangalore - 2-Hour Service | FIXplanet`,
    description: area.metaDescription,
    keywords: [
      `Apple repair ${area.name}`,
      `iPhone screen replacement ${area.name}`,
      `MacBook repair ${area.name}`,
      `iPad service ${area.name}`,
      `Apple Watch repair ${area.name}`,
      `doorstep Apple service ${area.name}`,
      `${area.name} Apple care`,
      `same day iPhone repair ${area.name}`,
    ],
    openGraph: {
      title: `Expert Apple Repair in ${area.name} | FIXplanet`,
      description: area.metaDescription,
      type: 'website',
      locale: 'en_IN',
    },
  };
}

export default function AreaPage() {
  const area = getAreaBySlug(SLUG);
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-8105955009';

  if (!area) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section - FIXplanet Brand Colors */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            {' '}/{' '}
            <Link href="/bangalore-locations" className="hover:text-white">Service Areas</Link>
            {' '}/{' '}
            <span className="text-white">{area.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Expert Apple Repair in {area.name}, Bangalore
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Professional doorstep service for iPhone, MacBook, iPad & Apple Watch.
                Same-day repairs with 12-month warranty.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="text-teal-accent mb-2" size={24} />
                  <div className="text-2xl font-bold">{area.responseTime}</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="text-teal-accent mb-2" size={24} />
                  <div className="text-2xl font-bold">12-Month</div>
                  <div className="text-sm text-gray-300">Warranty</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/pricing" size="lg">
                  Get Instant Quote
                </Button>
                <Button href={`tel:${phone}`} variant="ghost" size="lg" className="bg-white/10">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Area Info Card */}
            <Card padding="lg" className="bg-white">
              <div className="flex items-start mb-4">
                <MapPin className="text-teal-accent mr-3 flex-shrink-0" size={28} />
                <div>
                  <h2 className="text-2xl font-bold text-navy-primary mb-2">
                    We Come to Your Location in {area.name}
                  </h2>
                  <p className="text-gray-dark mb-4">{area.description}</p>
                </div>
              </div>

              {/* Landmarks */}
              {area.landmarks.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-navy-primary mb-2">Popular Landmarks:</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark) => (
                      <span key={landmark} className="text-sm bg-gray-light px-3 py-1 rounded-full text-gray-dark">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby Areas */}
              {area.nearbyAreas.length > 0 && (
                <div>
                  <h3 className="font-semibold text-navy-primary mb-2">We Also Serve Nearby:</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.nearbyAreas.map((nearby) => (
                      <span key={nearby} className="text-sm text-teal-accent">
                        {nearby}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Services for This Area */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Apple Device Services in {area.name}
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              Comprehensive Apple device care brought to your doorstep. All repairs come with genuine parts and a 12-month warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* iPhone Services */}
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-4">iPhone Services</h3>
              <ul className="space-y-2">
                {[
                  'Screen/Display Replacement',
                  'Battery Replacement',
                  'Back Glass Repair',
                  'Camera Repair',
                  'Charging Port Fix',
                  'Water Damage Recovery',
                ].map((service) => (
                  <li key={service} className="flex items-start text-gray-dark">
                    <CheckCircle2 size={18} className="text-teal-accent mr-2 flex-shrink-0 mt-0.5" />
                    {service}
                  </li>
                ))}
              </ul>
            </Card>

            {/* MacBook Services */}
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-4">MacBook Services</h3>
              <ul className="space-y-2">
                {[
                  'Display Replacement',
                  'Battery Service',
                  'Keyboard Replacement',
                  'Logic Board Repair',
                  'Data Recovery',
                  'Performance Upgrades',
                ].map((service) => (
                  <li key={service} className="flex items-start text-gray-dark">
                    <CheckCircle2 size={18} className="text-teal-accent mr-2 flex-shrink-0 mt-0.5" />
                    {service}
                  </li>
                ))}
              </ul>
            </Card>

            {/* iPad & Apple Watch */}
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-4">iPad & Apple Watch</h3>
              <ul className="space-y-2">
                {[
                  'iPad Screen Replacement',
                  'iPad Battery Service',
                  'Apple Watch Screen Repair',
                  'Apple Watch Battery',
                  'Digitizer Replacement',
                  'Software Issues',
                ].map((service) => (
                  <li key={service} className="flex items-start text-gray-dark">
                    <CheckCircle2 size={18} className="text-teal-accent mr-2 flex-shrink-0 mt-0.5" />
                    {service}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose FIXplanet */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Why {area.name} Residents Choose FIXplanet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card padding="lg" className="text-center">
              <Zap className="text-teal-accent mx-auto mb-4" size={40} />
              <h3 className="font-bold text-navy-primary mb-2">Same-Day Service</h3>
              <p className="text-gray-dark text-sm">
                Most repairs completed within 60-90 minutes at your location
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <Shield className="text-teal-accent mx-auto mb-4" size={40} />
              <h3 className="font-bold text-navy-primary mb-2">12-Month Warranty</h3>
              <p className="text-gray-dark text-sm">
                Industry-leading warranty on all parts and labor
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <Star className="text-teal-accent mx-auto mb-4" size={40} />
              <h3 className="font-bold text-navy-primary mb-2">4.9★ Rating</h3>
              <p className="text-gray-dark text-sm">
                Trusted by 1,000+ customers across Bangalore
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <Award className="text-teal-accent mx-auto mb-4" size={40} />
              <h3 className="font-bold text-navy-primary mb-2">Expert Technicians</h3>
              <p className="text-gray-dark text-sm">
                Certified professionals with 5+ years experience
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              How Doorstep Service Works in {area.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Book Service', desc: 'Call or book online with your device details' },
              { step: '2', title: 'We Arrive', desc: `Expert reaches your ${area.name} location in ${area.responseTime}` },
              { step: '3', title: 'Watch Us Work', desc: 'Transparent repairs completed at your place' },
              { step: '4', title: 'Pay & Relax', desc: 'Pay only after you\'re satisfied with the service' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-teal-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy-primary mb-2">{item.title}</h3>
                <p className="text-gray-dark text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-primary to-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Your Apple Device Fixed in {area.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call now for same-day doorstep service. Free diagnosis included!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/pricing" size="lg">
                Get Instant Quote
              </Button>
              <Button href={`tel:${phone}`} variant="ghost" size="lg" className="bg-white/10">
                <Phone className="mr-2" size={20} />
                Call {phone}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
