'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle2, Clock, Shield, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';

interface PriceEstimate {
  device: string;
  model: string;
  issues: string[];
  partsMin: number;
  partsMax: number;
  service: number;
  total: number;
  warranty: string;
  turnaround: string;
}

export default function PricingPage() {
  const [device, setDevice] = useState('');
  const [model, setModel] = useState('');
  const [issues, setIssues] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [estimate, setEstimate] = useState<PriceEstimate | null>(null);

  const deviceModels: Record<string, string[]> = {
    'iPhone': [
      'iPhone 5S', 'SE 1st Gen', 'SE 2020', 'SE 3rd Gen',
      'iPhone 6', 'iPhone 6s', 'iPhone 7', 'iPhone 7 Plus',
      'iPhone 8', 'iPhone 8 Plus', 'iPhone X', 'iPhone XR',
      'iPhone XS', 'iPhone XS Max', 'iPhone 11', 'iPhone 11 Pro',
      'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 Mini',
      'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 13',
      'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
      'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro',
      'iPhone 14 Pro Max', 'iPhone 15', 'iPhone 15 Plus',
      'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 16',
      'iPhone 16 E', 'iPhone 16 Plus', 'iPhone 16 Pro',
      'iPhone 16 Pro Max', 'iPhone 17', 'iPhone 17 Air',
      'iPhone 17 Pro', 'iPhone 17 Pro Max'
    ],
    'MacBook': ['MacBook', 'MacBook Air', 'MacBook Pro', 'Others'],
    'iPad': ['iPad Standard', 'iPad Air', 'iPad Mini', 'iPad Pro', 'Others'],
    'iWatch': [
      'Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5',
      'Series 6', 'Series 7', 'Series 8', 'Series 9',
      'SE 1', 'SE 2', 'Ultra', 'Ultra 2'
    ]
  };

  const issueOptions: Record<string, string[]> = {
    'iPhone': [
      'Original screen', 'Premium screen', 'Touch & glass',
      'Battery', 'Charging port', 'Ear speaker', 'Loud speaker',
      'Backglass', 'Others'
    ],
    'MacBook': [
      'Screen', 'Battery', 'Keyboard', 'Liquid damage',
      'Not powering on', 'Others'
    ],
    'iPad': [
      'Touch & glass', 'Screen', 'Battery', 'Charging port', 'Others'
    ],
    'iWatch': [
      'Screen', 'Touch & glass', 'Battery', 'Others'
    ]
  };

  // Detailed per-issue pricing for more accurate estimates
  const issuePricing: Record<string, Record<string, { min: number; max: number; warranty: string; turnaround: string }>> = {
    'iPhone': {
      'Original screen': { min: 3500, max: 7000, warranty: '12 months', turnaround: '1-2 hours' },
      'Premium screen': { min: 6000, max: 12000, warranty: '12 months', turnaround: '1-2 hours' },
      'Touch & glass': { min: 2500, max: 5000, warranty: '6 months', turnaround: '1-2 hours' },
      'Battery': { min: 2500, max: 5500, warranty: '12 months', turnaround: '45-60 min' },
      'Charging port': { min: 2000, max: 4000, warranty: '6 months', turnaround: '1-2 hours' },
      'Ear speaker': { min: 1500, max: 3000, warranty: '6 months', turnaround: '1 hour' },
      'Loud speaker': { min: 1500, max: 3000, warranty: '6 months', turnaround: '1 hour' },
      'Backglass': { min: 4500, max: 9000, warranty: '6 months', turnaround: '2-3 hours' },
      'Others': { min: 2000, max: 8000, warranty: '3-6 months', turnaround: 'After diagnosis' },
    },
    'MacBook': {
      'Screen': { min: 12000, max: 45000, warranty: '12 months', turnaround: '24-48 hours' },
      'Battery': { min: 8500, max: 18000, warranty: '12 months', turnaround: '2-4 hours' },
      'Keyboard': { min: 8000, max: 22000, warranty: '6 months', turnaround: '24-48 hours' },
      'Liquid damage': { min: 5000, max: 25000, warranty: '3 months', turnaround: '3-7 days' },
      'Not powering on': { min: 5000, max: 40000, warranty: '3-6 months', turnaround: '3-7 days' },
      'Others': { min: 5000, max: 20000, warranty: '3-6 months', turnaround: 'After diagnosis' },
    },
    'iPad': {
      'Touch & glass': { min: 5000, max: 15000, warranty: '6 months', turnaround: '24 hours' },
      'Screen': { min: 6000, max: 25000, warranty: '12 months', turnaround: '24-48 hours' },
      'Battery': { min: 4500, max: 9000, warranty: '12 months', turnaround: '2-4 hours' },
      'Charging port': { min: 2500, max: 5000, warranty: '6 months', turnaround: '2-3 hours' },
      'Others': { min: 3000, max: 10000, warranty: '3-6 months', turnaround: 'After diagnosis' },
    },
    'iWatch': {
      'Screen': { min: 3500, max: 12000, warranty: '6 months', turnaround: '2-4 hours' },
      'Touch & glass': { min: 3000, max: 8000, warranty: '6 months', turnaround: '2-4 hours' },
      'Battery': { min: 2500, max: 6000, warranty: '6 months', turnaround: '2-3 hours' },
      'Others': { min: 2000, max: 5000, warranty: '3 months', turnaround: 'After diagnosis' },
    },
  };

  // Auto-calculate when issues change (no button needed — reduce friction)
  React.useEffect(() => {
    if (!device || !model || issues.length === 0) {
      setEstimate(null);
      return;
    }

    let totalMin = 0;
    let totalMax = 0;
    let bestWarranty = '3 months';
    let bestTurnaround = 'After diagnosis';
    const warrantyOrder = ['3 months', '3-6 months', '6 months', '12 months'];

    for (const issue of issues) {
      const pricing = issuePricing[device]?.[issue];
      if (pricing) {
        totalMin += pricing.min;
        totalMax += pricing.max;
        if (warrantyOrder.indexOf(pricing.warranty) > warrantyOrder.indexOf(bestWarranty)) {
          bestWarranty = pricing.warranty;
        }
        if (pricing.turnaround !== 'After diagnosis') {
          bestTurnaround = pricing.turnaround;
        }
      }
    }

    setEstimate({
      device,
      model,
      issues,
      partsMin: totalMin,
      partsMax: totalMax,
      service: 0,
      total: Math.floor((totalMin + totalMax) / 2),
      warranty: bestWarranty,
      turnaround: bestTurnaround,
    });
  }, [device, model, issues]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Pricing
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get Instant Pricing for Your Device
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Transparent pricing calculator. Know your costs upfront.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card padding="lg">
              <div className="flex items-center mb-6">
                <Calculator className="text-teal-accent mr-3" size={32} />
                <h2 className="text-2xl font-bold text-navy-primary">Pricing Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Step 1: Device Type */}
                <div>
                  <label className="block text-lg font-semibold text-navy-primary mb-3">
                    Step 1: Select Device Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['iPhone', 'MacBook', 'iPad', 'iWatch'].map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          setDevice(d);
                          setModel('');
                          setIssues([]);
                        }}
                        className={`p-4 rounded-lg border-2 font-medium transition-all ${
                          device === d
                            ? 'border-teal-accent bg-teal-accent/10 text-teal-accent'
                            : 'border-gray-medium hover:border-gray-dark text-navy-primary'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Model */}
                {device && (
                  <Select
                    label="Step 2: Select Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    options={[
                      { value: '', label: 'Choose model...' },
                      ...deviceModels[device].map((m) => ({ value: m, label: m })),
                    ]}
                  />
                )}

                {/* Step 3: Issues */}
                {device && model && (
                  <div>
                    <label className="block text-lg font-semibold text-navy-primary mb-3">
                      Step 3: Select Issues (can select multiple)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {issueOptions[device]?.map((issue) => (
                        <label
                          key={issue}
                          className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                            issues.includes(issue)
                              ? 'border-teal-accent bg-teal-accent/10'
                              : 'border-gray-medium hover:border-gray-dark'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={issues.includes(issue)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setIssues([...issues, issue]);
                              } else {
                                setIssues(issues.filter((i) => i !== issue));
                              }
                            }}
                            className="mr-3"
                          />
                          <span className="text-navy-primary">{issue}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </Card>

            {/* Results — auto-calculated, no button needed */}
            {estimate && (
              <Card padding="lg" className="mt-8 bg-gradient-to-br from-teal-accent to-navy-primary text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge badge-gold">Instant Estimate</span>
                  <span className="badge badge-live">Live Pricing</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Your Estimated Price</h3>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <div className="text-4xl font-bold mb-2">
                    ₹{estimate.partsMin.toLocaleString()} - ₹{estimate.partsMax.toLocaleString()}
                  </div>
                  <div className="text-lg opacity-90">Estimated total — includes parts, labor &amp; doorstep visit</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between pt-3 border-t border-white/20">
                    <span>Turnaround Time:</span>
                    <span className="font-semibold">{estimate.turnaround}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="font-semibold">{estimate.warranty}</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm">
                  <CheckCircle2 className="inline mr-2" size={16} />
                  This is an estimate. Final price confirmed after diagnosis.
                </div>

                <a
                  href={`https://wa.me/918105955009?text=${encodeURIComponent(`Hi FIXplanet! I need a repair quote:\n\nDevice: ${estimate.model}\nIssue: ${estimate.issues.join(', ')}\nEstimated: ₹${estimate.partsMin.toLocaleString()} - ₹${estimate.partsMax.toLocaleString()}\n\nPlease confirm exact pricing and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-4 text-lg transition-colors"
                >
                  WhatsApp — Confirm Exact Price
                </a>
                <p className="text-center text-sm text-white/70 mt-3">Or call +91 8105955009 for instant confirmation</p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Static Pricing Tables — visible to Google crawler */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12 p-4 bg-gray-light rounded-xl">
              <span className="badge badge-success flex items-center gap-1"><Shield size={14} /> Fixed or Free Guarantee</span>
              <span className="badge badge-gold flex items-center gap-1"><Star size={14} /> 12-Month Warranty</span>
              <span className="badge badge-teal">Free Diagnosis</span>
              <span className="badge badge-live">Same-Day Available</span>
            </div>

            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              iPhone Repair Prices in Bangalore (2026)
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-primary text-white">
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-left">Price Range</th>
                    <th className="p-4 text-left">Turnaround</th>
                    <th className="p-4 text-left">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">iPhone Screen Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹3,500 - ₹12,000</td>
                    <td className="p-4">1-2 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">iPhone Battery Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹2,500 - ₹5,500</td>
                    <td className="p-4">1-2 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">iPhone Back Glass Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹4,500 - ₹9,000</td>
                    <td className="p-4">2-3 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">Water Damage Recovery</td>
                    <td className="p-4 text-teal-accent font-semibold">₹3,000 - ₹15,000</td>
                    <td className="p-4">24-72 hours</td>
                    <td className="p-4">6 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">Charging Port Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹2,000 - ₹4,000</td>
                    <td className="p-4">1-2 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">Camera Repair</td>
                    <td className="p-4 text-teal-accent font-semibold">₹3,500 - ₹8,000</td>
                    <td className="p-4">2-4 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              MacBook Repair Prices in Bangalore (2026)
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-primary text-white">
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-left">Price Range</th>
                    <th className="p-4 text-left">Turnaround</th>
                    <th className="p-4 text-left">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">MacBook Display Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹12,000 - ₹45,000</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">MacBook Battery Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹8,500 - ₹18,000</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">Keyboard Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹8,000 - ₹22,000</td>
                    <td className="p-4">2-5 days</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">Logic Board Repair</td>
                    <td className="p-4 text-teal-accent font-semibold">₹8,000 - ₹40,000</td>
                    <td className="p-4">3-7 days</td>
                    <td className="p-4">6 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">Trackpad Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹5,000 - ₹12,000</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">SSD/RAM Upgrade</td>
                    <td className="p-4 text-teal-accent font-semibold">Variable</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              iPad & Apple Watch Repair Prices
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy-primary text-white">
                    <th className="p-4 text-left">Device & Service</th>
                    <th className="p-4 text-left">Price Range</th>
                    <th className="p-4 text-left">Turnaround</th>
                    <th className="p-4 text-left">Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">iPad Screen Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹5,000 - ₹15,000</td>
                    <td className="p-4">2-4 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">iPad Battery Replacement</td>
                    <td className="p-4 text-teal-accent font-semibold">₹4,000 - ₹8,000</td>
                    <td className="p-4">24 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium">
                    <td className="p-4 font-medium">Apple Watch Screen</td>
                    <td className="p-4 text-teal-accent font-semibold">₹3,000 - ₹8,000</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                  <tr className="border-b border-gray-medium bg-gray-light">
                    <td className="p-4 font-medium">Apple Watch Battery</td>
                    <td className="p-4 text-teal-accent font-semibold">₹2,500 - ₹5,000</td>
                    <td className="p-4">24-48 hours</td>
                    <td className="p-4">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center bg-gray-light rounded-lg p-8">
              <p className="text-gray-dark mb-4">
                Prices vary by exact model and condition. Use the calculator above for a specific estimate,
                or call us for an instant quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  Get Exact Quote
                </Button>
                <Button href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+91 8105955009'}`} variant="ghost" size="lg">
                  Call +91 8105955009
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
