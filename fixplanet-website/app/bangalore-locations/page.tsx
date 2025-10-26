import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle2, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Service Areas in Bangalore | FIXplanet Apple Device Care',
  description: 'FIXplanet serves all major Bangalore areas. Same-day doorstep Apple device service in Koramangala, Indiranagar, Whitefield, HSR Layout, and more. Check if we serve your area.',
  keywords: ['Apple repair Koramangala', 'iPhone repair Indiranagar', 'MacBook service Whitefield', 'Apple repair HSR Layout', 'Bangalore locations'],
};

interface ServiceArea {
  name: string;
  tier: 'primary' | 'standard' | 'available';
  responseTime: string;
  areas: string[];
  landmark?: string;
}

const serviceAreas: ServiceArea[] = [
  {
    name: 'Koramangala',
    tier: 'primary',
    responseTime: '30 minutes',
    areas: ['5th Block', '6th Block', '7th Block', '8th Block', 'Koramangala 1st Block'],
    landmark: 'Sony Signal, Forum Mall area',
  },
  {
    name: 'Indiranagar',
    tier: 'primary',
    responseTime: '30 minutes',
    areas: ['All sectors', '100 Feet Road', 'CMH Road', 'Old Airport Road'],
    landmark: 'Indiranagar Metro, CMH Road',
  },
  {
    name: 'Whitefield',
    tier: 'primary',
    responseTime: '45 minutes',
    areas: ['ITPL Main Road', 'Prestige Tech Park', 'Phoenix Marketcity area', 'Marathahalli Bridge'],
    landmark: 'ITPL, Phoenix Marketcity',
  },
  {
    name: 'HSR Layout',
    tier: 'standard',
    responseTime: '1 hour',
    areas: ['Sector 1-7', '27th Main Road', 'BDA Complex', 'Agara'],
  },
  {
    name: 'Marathahalli',
    tier: 'standard',
    responseTime: '1 hour',
    areas: ['Outer Ring Road', 'Marathahalli Bridge', 'Spice Garden'],
  },
  {
    name: 'Bellandur',
    tier: 'standard',
    responseTime: '1-2 hours',
    areas: ['Bellandur Gate', 'Devarabisanahalli', 'Kadubeesanahalli'],
  },
  {
    name: 'Electronic City',
    tier: 'standard',
    responseTime: '1-2 hours',
    areas: ['Phase 1', 'Phase 2', 'Neeladri Road'],
  },
  {
    name: 'JP Nagar',
    tier: 'standard',
    responseTime: '1 hour',
    areas: ['Phases 1-9', 'Puttenahalli', 'Sarakki'],
  },
  {
    name: 'Jayanagar',
    tier: 'standard',
    responseTime: '1 hour',
    areas: ['All blocks', 'Jayanagar Metro area'],
  },
  {
    name: 'Sarjapur Road',
    tier: 'standard',
    responseTime: '1-2 hours',
    areas: ['Wipro Circle', 'Carmelaram', 'Dommasandra Circle'],
  },
  {
    name: 'BTM Layout',
    tier: 'available',
    responseTime: '2-3 hours',
    areas: ['Stage 1', 'Stage 2'],
  },
  {
    name: 'Bannerghatta Road',
    tier: 'available',
    responseTime: '2-3 hours',
    areas: ['Arekere', 'Hulimavu', 'Gottigere'],
  },
];

export default function BangaloreLocationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Service Areas
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            We Serve Bangalore&apos;s Premium Neighborhoods
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Same-day doorstep Apple device care across Bangalore. Find out if we serve your area.
          </p>
        </div>
      </section>

      {/* Response Guarantee */}
      <section className="py-8 bg-teal-accent text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Clock size={32} />
            <div>
              <div className="text-2xl font-bold">15-Minute Response Guarantee</div>
              <div className="text-white/90">Across all service areas, every day from 9 AM - 9 PM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-primary mb-4">Our Service Areas</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-teal-accent rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Primary (30-45 min)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-navy-primary rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Standard (1-2 hours)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-dark rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Available (2-3 hours)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <Card
                  key={area.name}
                  padding="lg"
                  className={`border-l-4 ${
                    area.tier === 'primary'
                      ? 'border-teal-accent'
                      : area.tier === 'standard'
                      ? 'border-navy-primary'
                      : 'border-gray-dark'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy-primary mb-1">{area.name}</h3>
                      {area.landmark && (
                        <p className="text-sm text-gray-dark flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {area.landmark}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-teal-accent font-medium mb-2">
                      <Clock size={16} className="mr-1" />
                      Avg. Response: {area.responseTime}
                    </div>
                  </div>

                  <div className="space-y-1">
                    {area.areas.map((subArea) => (
                      <div key={subArea} className="text-sm text-gray-dark flex items-start">
                        <CheckCircle2 size={14} className="text-teal-accent mr-2 mt-0.5 flex-shrink-0" />
                        {subArea}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8">
              Area-Specific Service Information
            </h2>

            <div className="space-y-8">
              <Card padding="lg">
                <h3 className="text-2xl font-semibold text-navy-primary mb-3">
                  iPhone & MacBook Care in Koramangala
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Serving Koramangala&apos;s startup community with same-day Apple device service. From 5th Block to
                  8th Block, we reach you within 30 minutes. Popular with tech professionals who need their
                  devices back fast. Same-day screen replacement, battery service, and more.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-2xl font-semibold text-navy-primary mb-3">
                  Apple Device Service in Indiranagar
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Quick response across all Indiranagar sectors. From 100 Feet Road to Old Airport Road, we
                  provide doorstep Apple care. Perfect for busy professionals who can&apos;t spare time for
                  service center visits.
                </p>
              </Card>

              <Card padding="lg">
                <h3 className="text-2xl font-semibold text-navy-primary mb-3">
                  Whitefield Apple Care Specialists
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Serving Whitefield&apos;s IT corridor with professional Apple device care. From ITPL to Phoenix
                  Marketcity area, we bring expert service to your office or home. Popular among corporate
                  employees needing quick MacBook and iPhone services.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Not in service area */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-primary mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-lg text-gray-dark mb-8">
              We&apos;re expanding across Bangalore. Contact us to check if we can serve your location.
              For areas not listed, we may still be able to help with elite tier service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Check Your Location
              </Button>
              <Button
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX'}`}
                variant="ghost"
                size="lg"
              >
                <Phone className="mr-2" size={20} />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
