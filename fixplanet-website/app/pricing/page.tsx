'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle2, Clock, Shield } from 'lucide-react';
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

  const calculateEstimate = () => {
    if (!device || !model || issues.length === 0 || !location) {
      alert('Please fill in all required fields');
      return;
    }

    // Simplified pricing logic
    let partsMin = 2000;
    let partsMax = 5000;
    let serviceBase = 500;

    if (device === 'iPhone') {
      partsMin = 3500;
      partsMax = 12000;
    } else if (device === 'MacBook') {
      partsMin = 8000;
      partsMax = 45000;
    } else if (device === 'iPad') {
      partsMin = 4500;
      partsMax = 25000;
    }

    // Multiply by number of issues
    partsMin *= issues.length;
    partsMax *= issues.length;

    const total = Math.floor((partsMin + partsMax) / 2 + serviceBase);

    setEstimate({
      device,
      model,
      issues,
      partsMin,
      partsMax,
      service: serviceBase,
      total,
      warranty: '6-12 months',
      turnaround: '24-48 hours',
    });
  };

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

                {/* Step 4: Location */}
                {issues.length > 0 && (
                  <Input
                    label="Step 4: Your Location in Bangalore"
                    placeholder="e.g., Koramangala, Indiranagar"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                )}

                {/* Calculate Button */}
                {location && (
                  <Button onClick={calculateEstimate} size="lg" fullWidth>
                    Calculate Estimate
                  </Button>
                )}
              </div>
            </Card>

            {/* Results */}
            {estimate && (
              <Card padding="lg" className="mt-8 bg-gradient-to-br from-teal-accent to-navy-primary text-white">
                <h3 className="text-2xl font-bold mb-6">Your Estimated Price</h3>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <div className="text-4xl font-bold mb-2">
                    ₹{estimate.partsMin.toLocaleString()} - ₹{estimate.partsMax.toLocaleString()}
                  </div>
                  <div className="text-lg opacity-90">Estimated Total</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Parts & Components:</span>
                    <span className="font-semibold">₹{estimate.partsMin.toLocaleString()} - ₹{estimate.partsMax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Fee:</span>
                    <span className="font-semibold">₹{estimate.service.toLocaleString()}</span>
                  </div>
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

                <Button href="/contact" size="lg" fullWidth className="!bg-white !text-navy-primary hover:!bg-gray-100">
                  Book This Service Now
                </Button>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
