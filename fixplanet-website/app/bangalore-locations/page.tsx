import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { bangaloreAreas, getAreasByZone } from '@/data/bangalore-areas';

export const metadata: Metadata = {
  title: 'Service Areas in Bangalore | FIXplanet Apple Device Care',
  description: 'FIXplanet serves 140+ Bangalore areas. Same-day doorstep Apple device service across all major neighborhoods. Check if we serve your area.',
  keywords: ['Apple repair Bangalore', 'iPhone repair locations', 'MacBook service areas', 'Bangalore Apple care', 'doorstep service Bangalore'],
};

export default function BangaloreLocationsPage() {
  const centralAreas = getAreasByZone('Central');
  const southAreas = getAreasByZone('South');
  const eastAreas = getAreasByZone('East');
  const northAreas = getAreasByZone('North');
  const westAreas = getAreasByZone('West');

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Service Areas
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            We Serve 140+ Bangalore Locations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Same-day doorstep Apple device care across all major Bangalore neighborhoods. From Koramangala to Whitefield, we&apos;re at your service.
          </p>
        </div>
      </section>

      {/* Response Guarantee */}
      <section className="py-8 bg-teal-accent text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Clock size={32} />
            <div>
              <div className="text-2xl font-bold">Quick Response Across Bangalore</div>
              <div className="text-white/90">30-75 minute response time depending on location | 9 AM - 9 PM Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas by Zone */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-navy-primary mb-4">All Service Areas</h2>
              <p className="text-gray-dark">Click on any area to see detailed service information</p>
            </div>

            {/* Central Bangalore */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6 flex items-center">
                <MapPin className="mr-2 text-teal-accent" size={28} />
                Central Bangalore
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {centralAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group"
                  >
                    <Card padding="md" className="h-full hover:shadow-lg transition-shadow border-l-4 border-teal-accent">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-navy-primary group-hover:text-teal-accent transition-colors mb-1">
                            {area.name}
                          </h4>
                          <p className="text-xs text-gray-dark flex items-center">
                            <Clock size={12} className="mr-1" />
                            {area.responseTime}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* South Bangalore */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6 flex items-center">
                <MapPin className="mr-2 text-teal-accent" size={28} />
                South Bangalore
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {southAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group"
                  >
                    <Card padding="md" className="h-full hover:shadow-lg transition-shadow border-l-4 border-navy-primary">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-navy-primary group-hover:text-teal-accent transition-colors mb-1">
                            {area.name}
                          </h4>
                          <p className="text-xs text-gray-dark flex items-center">
                            <Clock size={12} className="mr-1" />
                            {area.responseTime}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* East Bangalore */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6 flex items-center">
                <MapPin className="mr-2 text-teal-accent" size={28} />
                East Bangalore (Whitefield Corridor)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eastAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group"
                  >
                    <Card padding="md" className="h-full hover:shadow-lg transition-shadow border-l-4 border-navy-primary">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-navy-primary group-hover:text-teal-accent transition-colors mb-1">
                            {area.name}
                          </h4>
                          <p className="text-xs text-gray-dark flex items-center">
                            <Clock size={12} className="mr-1" />
                            {area.responseTime}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* North Bangalore */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6 flex items-center">
                <MapPin className="mr-2 text-teal-accent" size={28} />
                North Bangalore
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {northAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group"
                  >
                    <Card padding="md" className="h-full hover:shadow-lg transition-shadow border-l-4 border-gray-dark">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-navy-primary group-hover:text-teal-accent transition-colors mb-1">
                            {area.name}
                          </h4>
                          <p className="text-xs text-gray-dark flex items-center">
                            <Clock size={12} className="mr-1" />
                            {area.responseTime}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* West Bangalore */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-primary mb-6 flex items-center">
                <MapPin className="mr-2 text-teal-accent" size={28} />
                West Bangalore
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {westAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group"
                  >
                    <Card padding="md" className="h-full hover:shadow-lg transition-shadow border-l-4 border-gray-dark">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-navy-primary group-hover:text-teal-accent transition-colors mb-1">
                            {area.name}
                          </h4>
                          <p className="text-xs text-gray-dark flex items-center">
                            <Clock size={12} className="mr-1" />
                            {area.responseTime}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
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
