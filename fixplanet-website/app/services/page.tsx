import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Shield, Star, CheckCircle2, Eye, Award, Smartphone, Droplets, BatteryWarning, Zap, Camera, MessageCircle, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GuaranteeBox from '@/components/ui/GuaranteeBox';

export const metadata: Metadata = {
  title: 'iPhone, MacBook, iPad Repair Bangalore — Same-Day Doorstep Service',
  description: 'iPhone screen ₹3,500-₹12,000. MacBook display ₹12,000-₹45,000. iPad & Apple Watch repair. OEM parts, 12-month warranty, same-day doorstep service. Call +91 8105955009.',
  keywords: ['iPhone repair Bangalore', 'MacBook repair Bangalore', 'iPad repair Bangalore', 'Apple Watch repair Bangalore', 'iPhone screen replacement cost', 'MacBook battery replacement Bangalore'],
  alternates: {
    canonical: 'https://www.fixplanet.in/services',
  },
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
      'iPhone 5S',
      'SE 1st Gen',
      'SE 2020',
      'SE 3rd Gen',
      'iPhone 6',
      'iPhone 6s',
      'iPhone 7',
      'iPhone 7 Plus',
      'iPhone 8',
      'iPhone 8 Plus',
      'iPhone X',
      'iPhone XR',
      'iPhone XS',
      'iPhone XS Max',
      'iPhone 11',
      'iPhone 11 Pro',
      'iPhone 11 Pro Max',
      'iPhone 12',
      'iPhone 12 Mini',
      'iPhone 12 Pro',
      'iPhone 12 Pro Max',
      'iPhone 13',
      'iPhone 13 Mini',
      'iPhone 13 Pro',
      'iPhone 13 Pro Max',
      'iPhone 14',
      'iPhone 14 Plus',
      'iPhone 14 Pro',
      'iPhone 14 Pro Max',
      'iPhone 15',
      'iPhone 15 Plus',
      'iPhone 15 Pro',
      'iPhone 15 Pro Max',
      'iPhone 16',
      'iPhone 16 E',
      'iPhone 16 Plus',
      'iPhone 16 Pro',
      'iPhone 16 Pro Max',
      'iPhone 17',
      'iPhone 17 Air',
      'iPhone 17 Pro',
      'iPhone 17 Pro Max',
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
      'MacBook',
      'MacBook Air',
      'MacBook Pro',
      'Others',
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
      'iPad Standard',
      'iPad Air',
      'iPad Mini',
      'iPad Pro',
      'Others',
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
      'Series 1',
      'Series 2',
      'Series 3',
      'Series 4',
      'Series 5',
      'Series 6',
      'Series 7',
      'Series 8',
      'Series 9',
      'SE 1',
      'SE 2',
      'Ultra',
      'Ultra 2',
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

      {/* Featured Service: iPhone Screen Replacement */}
      <section className="bg-white py-16 border-b-4 border-teal-accent">
        <div className="container-custom">
          <ScrollReveal>
          <div className="bg-gradient-to-r from-teal-accent/10 to-navy-primary/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-teal-accent fill-teal-accent" />
              <span className="badge badge-gold">
                #1 Most Requested Service
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-4">
              iPhone Screen Replacement in Bangalore
            </h2>
            <p className="text-xl text-gray-dark mb-6 max-w-3xl">
              Cracked iPhone screen? Get same-day professional replacement at your doorstep. Watch us work. Pay only when satisfied. 12-month warranty included.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-primary">1-2 Hours</div>
                  <div className="text-sm text-gray-dark">At Your Location</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-primary">12 Months</div>
                  <div className="text-sm text-gray-dark">Full Warranty</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-primary">Watch Process</div>
                  <div className="text-sm text-gray-dark">Full Transparency</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-teal-accent flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-primary">OEM Quality</div>
                  <div className="text-sm text-gray-dark">Premium Screens</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services/iphone-screen-replacement-bangalore" size="lg">
                Learn More About Screen Replacement
              </Button>
              <Button href="/pricing" variant="ghost" size="lg">
                Get Instant Quote
              </Button>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Common Problems Grid — fixcare.in inspired */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-3">
              What&apos;s Wrong With Your Device?
            </h2>
            <p className="text-gray-dark text-lg">Select your issue — we fix all of these at your doorstep</p>
          </div>
          <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Smartphone, label: 'Cracked Screen', tag: 'From ₹3,500' },
              { icon: BatteryWarning, label: 'Battery Dying', tag: '45 min fix' },
              { icon: Droplets, label: 'Water Damage', tag: 'Emergency' },
              { icon: Zap, label: 'Won\'t Charge', tag: 'From ₹2,000' },
              { icon: Camera, label: 'Camera Blurry', tag: 'From ₹3,500' },
              { icon: Smartphone, label: 'Back Glass', tag: 'From ₹4,500' },
            ].map((problem) => (
              <a
                key={problem.label}
                href="https://wa.me/918105955009?text=Hi!%20My%20device%20has%20this%20issue"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 text-center shadow-card hover:shadow-card-hover transition-all card-3d group cursor-pointer"
              >
                <div className="w-14 h-14 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-accent/20 transition-colors">
                  <problem.icon className="text-teal-accent" size={26} />
                </div>
                <div className="font-semibold text-navy-primary text-sm mb-1">{problem.label}</div>
                <span className="badge badge-teal text-xs">{problem.tag}</span>
              </a>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Standard vs OEM Comparison — fixcare.in inspired */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-3">
              Standard vs Premium Parts — What&apos;s the Difference?
            </h2>
            <p className="text-gray-dark text-lg">Choose the right quality level for your budget</p>
          </div>
          <ScrollReveal>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-primary text-white">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold">Standard (OEM-Grade)</th>
                  <th className="p-4 font-semibold text-teal-accent">Premium (Original)</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { feature: 'Display Quality', standard: 'Matching specifications', premium: 'Identical to Apple original' },
                  { feature: 'True Tone', standard: 'Not supported', premium: 'Fully supported' },
                  { feature: 'Color Accuracy', standard: '95% match', premium: '100% match' },
                  { feature: 'Touch Sensitivity', standard: 'Excellent', premium: 'Identical to original' },
                  { feature: 'Price Range', standard: '₹3,500 - ₹7,000', premium: '₹6,000 - ₹12,000' },
                  { feature: 'Warranty', standard: '12 months', premium: '12 months' },
                  { feature: 'Best For', standard: 'Budget-conscious users', premium: 'Professionals & creatives' },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                    <td className="p-4 font-medium text-navy-primary">{row.feature}</td>
                    <td className="p-4 text-gray-dark">{row.standard}</td>
                    <td className="p-4 text-navy-primary font-medium">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-dark mt-4">
            Both options come with 12-month warranty and our Fixed-or-Free guarantee. Not sure which to choose?{' '}
            <a href="https://wa.me/918105955009?text=Hi!%20I%20need%20help%20choosing%20Standard%20vs%20Premium%20parts" target="_blank" rel="noopener noreferrer" className="text-teal-accent font-medium hover:underline">
              Ask us on WhatsApp
            </a>
          </p>
          </ScrollReveal>
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

            <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {device.services.map((service, serviceIndex) => (
                <Card key={service.name} hover padding="lg" className="card-3d">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-navy-primary">
                      {service.name}
                    </h3>
                    {service.name === 'Screen Replacement' && <span className="badge badge-gold">Most Popular</span>}
                    {service.name === 'Display Replacement' && <span className="badge badge-teal">High Ticket</span>}
                    {service.name === 'Battery Replacement' && <span className="badge badge-success">Quick Fix</span>}
                  </div>
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
            </ScrollReveal>
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

          <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hover padding="lg" className="relative card-3d">
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

            <Card hover padding="lg" className="relative border-2 border-teal-accent card-3d">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="badge badge-gold">Most Popular</span>
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

            <Card hover padding="lg" className="card-3d">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <GuaranteeBox />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Device Fixed Today — Or You Pay Nothing
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            WhatsApp us your device issue. Get exact pricing in 2 minutes. Same-day doorstep service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/918105955009?text=Hi!%20I%20need%20a%20repair%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white"
            >
              <MessageCircle className="mr-2" size={22} />
              WhatsApp for Instant Quote
            </a>
            <Button href="/pricing" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
              Price Calculator
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            Want worry-free coverage?{' '}
            <Link href="/care-plan" className="text-teal-accent hover:underline font-medium">
              Check our Annual Care Plan →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
