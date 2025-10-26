import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Shield, Star, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Apple Device Services in Bangalore | iPhone, MacBook, iPad Care',
  description: 'Complete Apple device care in Bangalore. iPhone screen replacement, MacBook battery, iPad repair, Apple Watch service. OEM-grade parts, 12-month warranty, same-day doorstep service.',
  keywords: ['iPhone repair services Bangalore', 'MacBook services', 'iPad repair', 'Apple Watch repair', 'screen replacement', 'battery replacement'],
};

interface Service {
  name: string;
  description: string;
  priceRange: string;
  turnaround: string;
  warranty: string;
}

interface DeviceServices {
  id: string;
  name: string;
  models: string[];
  services: Service[];
}

const devices: DeviceServices[] = [
  {
    id: 'iphone',
    name: 'iPhone',
    models: [
      'iPhone 15 Pro Max / Pro / Plus / Standard',
      'iPhone 14 Pro Max / Pro / Plus / Standard',
      'iPhone 13 Pro Max / Pro / Mini / Standard',
      'iPhone 12 Pro Max / Pro / Mini / Standard',
      'iPhone 11 Pro Max / Pro / Standard',
      'iPhone SE (2nd & 3rd Gen)',
    ],
    services: [
      {
        name: 'Screen Replacement',
        description: 'Cracked or damaged display? We replace with OEM-grade screens',
        priceRange: '₹3,500 - ₹12,000',
        turnaround: '1-2 hours',
        warranty: '12 months',
      },
      {
        name: 'Battery Replacement',
        description: 'Battery draining fast? Restore full-day battery life',
        priceRange: '₹2,500 - ₹5,500',
        turnaround: '45-60 minutes',
        warranty: '12 months',
      },
      {
        name: 'Back Glass Replacement',
        description: 'Shattered back panel? Professional restoration available',
        priceRange: '₹4,500 - ₹9,000',
        turnaround: '2-3 hours',
        warranty: '6 months',
      },
      {
        name: 'Water Damage Recovery',
        description: 'Device won\'t turn on after water exposure? Emergency service available',
        priceRange: '₹3,000 - ₹15,000',
        turnaround: '24-48 hours',
        warranty: '3 months',
      },
      {
        name: 'Charging Port Replacement',
        description: 'Loose or broken charging port? We restore full connectivity',
        priceRange: '₹2,000 - ₹4,000',
        turnaround: '1-2 hours',
        warranty: '6 months',
      },
      {
        name: 'Camera Issues',
        description: 'Blurry, shaking, or black screen? Camera module replacement available',
        priceRange: '₹3,500 - ₹8,000',
        turnaround: '2-3 hours',
        warranty: '6 months',
      },
    ],
  },
  {
    id: 'macbook',
    name: 'MacBook',
    models: [
      'MacBook Pro (M3, M2, M1, Intel 2018-2024)',
      'MacBook Air (M2, M1, Intel 2018-2024)',
      'MacBook 12" (2015-2017)',
    ],
    services: [
      {
        name: 'Display Replacement',
        description: 'Cracked screen or display issues? Full retina display replacement',
        priceRange: '₹12,000 - ₹45,000',
        turnaround: 'Same day to 48 hours',
        warranty: '12 months',
      },
      {
        name: 'Battery Replacement',
        description: 'MacBook won\'t hold charge? Restore battery to 100% health',
        priceRange: '₹8,500 - ₹18,000',
        turnaround: '2-4 hours',
        warranty: '12 months',
      },
      {
        name: 'Keyboard Replacement',
        description: 'Sticky keys or non-responsive keyboard? Complete keyboard assembly replacement',
        priceRange: '₹8,000 - ₹22,000',
        turnaround: '24-48 hours',
        warranty: '6 months',
      },
      {
        name: 'Logic Board Repair',
        description: 'MacBook won\'t turn on? Liquid damage? Component-level motherboard repair',
        priceRange: '₹8,000 - ₹40,000',
        turnaround: '3-7 days',
        warranty: '3-6 months',
      },
      {
        name: 'Trackpad Replacement',
        description: 'Non-responsive or clicking issues? Trackpad replacement available',
        priceRange: '₹5,000 - ₹12,000',
        turnaround: '24 hours',
        warranty: '6 months',
      },
      {
        name: 'SSD/RAM Upgrade',
        description: 'Boost performance with storage and memory upgrades',
        priceRange: 'Variable',
        turnaround: '2-4 hours',
        warranty: '12 months',
      },
    ],
  },
  {
    id: 'ipad',
    name: 'iPad',
    models: [
      'iPad Pro (12.9", 11", all generations)',
      'iPad Air (all generations)',
      'iPad Mini (all generations)',
      'iPad (9th, 10th Gen)',
    ],
    services: [
      {
        name: 'Screen Replacement',
        description: 'Cracked or shattered iPad screen? Professional glass and digitizer replacement',
        priceRange: '₹6,000 - ₹25,000',
        turnaround: '24-48 hours',
        warranty: '12 months',
      },
      {
        name: 'Battery Replacement',
        description: 'iPad not holding charge? Battery swelling? Professional battery service',
        priceRange: '₹4,500 - ₹9,000',
        turnaround: '2-4 hours',
        warranty: '12 months',
      },
      {
        name: 'Charging Port Repair',
        description: 'iPad not charging? Loose connection? Port replacement available',
        priceRange: '₹2,500 - ₹5,000',
        turnaround: '2-3 hours',
        warranty: '6 months',
      },
      {
        name: 'Digitizer Issues',
        description: 'Touch not responding? Ghost touches? Digitizer replacement',
        priceRange: '₹5,000 - ₹15,000',
        turnaround: '24 hours',
        warranty: '6 months',
      },
    ],
  },
  {
    id: 'watch',
    name: 'Apple Watch',
    models: [
      'Apple Watch Series 9, 8, 7, 6, 5',
      'Apple Watch Ultra',
      'Apple Watch SE (1st & 2nd Gen)',
    ],
    services: [
      {
        name: 'Screen Replacement',
        description: 'Cracked Apple Watch screen? Precision glass replacement',
        priceRange: '₹3,500 - ₹12,000',
        turnaround: '2-4 hours',
        warranty: '6 months',
      },
      {
        name: 'Battery Replacement',
        description: 'Watch dying quickly? Battery service for all models',
        priceRange: '₹2,500 - ₹6,000',
        turnaround: '2-3 hours',
        warranty: '6 months',
      },
      {
        name: 'Crown Repair',
        description: 'Digital crown stuck or not responding? Expert repair service',
        priceRange: '₹2,000 - ₹5,000',
        turnaround: '24 hours',
        warranty: '3 months',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Services
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Complete Apple Device Care Solutions in Bangalore
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            From screen replacement to logic board recovery—we restore every Apple device to perfect condition.
          </p>
        </div>
      </section>

      {/* Device Services Sections */}
      {devices.map((device, index) => (
        <section
          key={device.id}
          id={device.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-light'}`}
        >
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
                {device.name} Services
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-dark font-medium">Models Supported:</span>
                {device.models.map((model) => (
                  <span
                    key={model}
                    className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-sm"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {device.services.map((service) => (
                <Card key={service.name} hover padding="lg">
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-dark mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2 text-sm border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-dark">Price Range:</span>
                      <span className="font-semibold text-navy-primary">{service.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-dark">Turnaround:</span>
                      <span className="font-medium">{service.turnaround}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-dark">Warranty:</span>
                      <span className="font-medium text-teal-accent">{service.warranty}</span>
                    </div>
                  </div>
                  <Button href="/pricing" variant="secondary" size="sm" className="mt-4" fullWidth>
                    Get Exact Quote
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Service Tiers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Choose Your Service Level
            </h2>
            <p className="text-lg text-gray-dark">
              Flexible options to match your timeline and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover padding="lg" className="relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-primary mb-2">Standard Service</h3>
                <div className="text-gray-dark">Base pricing</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Doorstep service in 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>OEM-grade parts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>6-12 month warranty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Free diagnostics</span>
                </li>
              </ul>
              <div className="text-center text-sm text-teal-accent font-medium">Best for most customers</div>
            </Card>

            <Card hover padding="lg" className="relative border-2 border-teal-accent">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-primary mb-2">Premium Service</h3>
                <div className="text-teal-accent font-semibold">+30%</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span className="font-medium">Everything in Standard, plus:</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Same-day or 4-hour service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Priority technician</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Extended 12-18 month warranty</span>
                </li>
              </ul>
              <div className="text-center text-sm text-teal-accent font-medium">Best for professionals</div>
            </Card>

            <Card hover padding="lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-primary mb-2">Elite Service</h3>
                <div className="text-navy-primary font-semibold">+60%</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span className="font-medium">Everything in Premium, plus:</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>24/7 emergency service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>2-hour guaranteed response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Premium loaner devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-teal-accent mr-2 flex-shrink-0 mt-1" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <div className="text-center text-sm text-teal-accent font-medium">Best for executives</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get instant pricing for your device. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" size="lg">
              Get Instant Quote
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
