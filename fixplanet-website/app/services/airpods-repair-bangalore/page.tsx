import React from 'react';
import type { Metadata } from 'next';
import { Phone, Shield, Clock, CheckCircle2, Star, Headphones, Battery, Bluetooth, Droplets, Volume2, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ServiceSchema, FAQPageSchema } from '@/components/ui/Schema';

export const metadata: Metadata = {
  title: 'AirPods Repair Bangalore — Fix Audio, Battery, Charging Case | FIXplanet',
  description: 'AirPods repair in Bangalore. Fix one-sided audio, dead battery, broken charging case. AirPods, AirPods Pro, AirPods Max supported. Doorstep service. Call +91 8105955009.',
  keywords: ['airpods repair bangalore', 'airpods not charging fix', 'airpods one side not working', 'airpods pro repair bangalore', 'earpods repair near me'],
  alternates: {
    canonical: 'https://www.fixplanet.in/services/airpods-repair-bangalore',
  },
};

const faqs = [
  {
    question: 'Can AirPods battery be replaced?',
    answer: 'Yes, we replace individual AirPod batteries. Over time, lithium-ion batteries degrade and hold less charge. We can replace the battery in each AirPod and the charging case to restore original battery life.',
  },
  {
    question: 'One AirPod is not working, can you fix just one?',
    answer: 'Yes, we diagnose and fix individual pods. Common causes include battery failure, speaker damage, or debris blocking the speaker grille. We will identify the issue and repair just the affected AirPod — no need to replace both.',
  },
  {
    question: 'My AirPods case won\'t charge, is it fixable?',
    answer: 'Yes, a non-charging case is usually caused by a faulty Lightning/USB-C port or a dead case battery. We repair or replace the charging port and battery so your case charges normally again.',
  },
  {
    question: 'Do you repair AirPods Pro and AirPods Max?',
    answer: 'Yes, we service all AirPods models — AirPods 1st, 2nd, and 3rd Gen, AirPods Pro 1st and 2nd Gen, and AirPods Max. Each model has different internals, and our technicians are trained on all of them.',
  },
];

export default function AirPodsRepairBangalorePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-8105955009';

  return (
    <>
      <ServiceSchema
        serviceType="AirPods Repair"
        description="Professional AirPods repair service in Bangalore. Fix audio issues, battery replacement, charging case repair for all AirPods models."
        priceRange="₹1,500 - ₹8,000"
      />
      <FAQPageSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AirPods Not Working? Expert Repair in Bangalore
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              One side dead, won&apos;t charge, poor battery life — we fix all AirPods issues.
              AirPods, AirPods Pro &amp; AirPods Max supported. Doorstep service across Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="px-12">
                Get Free Diagnosis
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
                All AirPods models
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                24-48 hour turnaround
              </span>
              <span className="flex items-center">
                <CheckCircle2 size={16} className="mr-1" />
                Warranty on repairs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              Common AirPods Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Volume2 className="text-teal-accent" size={28} />,
                  title: 'One AirPod Not Working',
                  description: 'Left or right AirPod stopped producing sound. Usually a speaker or battery issue we can fix.',
                },
                {
                  icon: <Zap className="text-teal-accent" size={28} />,
                  title: 'Won\'t Charge / Case Dead',
                  description: 'AirPods or charging case not charging. Faulty port, battery, or logic board — all repairable.',
                },
                {
                  icon: <Battery className="text-teal-accent" size={28} />,
                  title: 'Poor Battery Life',
                  description: 'AirPods draining in 1 hour instead of 4-5. Battery degradation is fixable with a replacement.',
                },
                {
                  icon: <Headphones className="text-teal-accent" size={28} />,
                  title: 'Audio Cutting Out / Crackling',
                  description: 'Intermittent audio, static, or crackling sounds. Could be speaker damage or debris buildup.',
                },
                {
                  icon: <Bluetooth className="text-teal-accent" size={28} />,
                  title: 'Bluetooth Connectivity Issues',
                  description: 'AirPods not pairing, disconnecting frequently, or connecting to wrong device.',
                },
                {
                  icon: <Droplets className="text-teal-accent" size={28} />,
                  title: 'Physical / Water Damage',
                  description: 'Dropped in water, sweat damage, or crushed case. We recover what others call unrepairable.',
                },
              ].map((issue) => (
                <Card key={issue.title} padding="lg">
                  <div className="mb-3">{issue.icon}</div>
                  <h3 className="text-lg font-semibold text-navy-primary mb-2">{issue.title}</h3>
                  <p className="text-sm text-gray-dark">{issue.description}</p>
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
              AirPods Repair Pricing
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-navy-primary text-white">
                    <th className="text-left py-4 px-6 font-semibold">Service</th>
                    <th className="text-left py-4 px-6 font-semibold">Price Range</th>
                    <th className="text-left py-4 px-6 font-semibold">Turnaround</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'AirPods Battery Replacement (per pod)', price: '₹1,500 - ₹3,000', turnaround: '24-48 hours' },
                    { service: 'Charging Case Repair', price: '₹2,000 - ₹4,000', turnaround: '24-48 hours' },
                    { service: 'AirPods Pro Battery', price: '₹2,000 - ₹3,500', turnaround: '24-48 hours' },
                    { service: 'AirPods Max Battery', price: '₹3,000 - ₹5,000', turnaround: '48-72 hours' },
                    { service: 'Audio / Speaker Fix', price: '₹1,500 - ₹3,000', turnaround: '24-48 hours' },
                    { service: 'Water Damage Recovery', price: '₹2,000 - ₹5,000', turnaround: '48-72 hours' },
                  ].map((row, index) => (
                    <tr key={row.service} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-4 px-6 text-navy-primary font-medium">{row.service}</td>
                      <td className="py-4 px-6 text-teal-accent font-semibold">{row.price}</td>
                      <td className="py-4 px-6 text-gray-dark">{row.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-dark mt-4 text-center">
              Final price confirmed after free diagnosis. No hidden charges.
            </p>
            <div className="mt-6 text-center">
              <Button href="/pricing" variant="secondary">
                Use Pricing Calculator for Exact Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Models Supported */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
              AirPods Models We Repair
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'AirPods',
                  models: ['AirPods 1st Gen (A1523)', 'AirPods 2nd Gen (A2032)', 'AirPods 3rd Gen (A2565)'],
                },
                {
                  title: 'AirPods Pro',
                  models: ['AirPods Pro 1st Gen (A2084)', 'AirPods Pro 2nd Gen (A2931)', 'USB-C & Lightning cases'],
                },
                {
                  title: 'AirPods Max',
                  models: ['AirPods Max (A2096)', 'All color variants', 'Lightning & USB-C models'],
                },
              ].map((category) => (
                <Card key={category.title} padding="lg" className="text-center">
                  <Headphones className="text-teal-accent mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.models.map((model) => (
                      <li key={model} className="flex items-center text-sm text-gray-dark">
                        <CheckCircle2 className="text-teal-accent mr-2 flex-shrink-0" size={16} />
                        {model}
                      </li>
                    ))}
                  </ul>
                </Card>
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
              Why Choose FIXplanet for AirPods Repair?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card padding="lg">
                <Shield className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Genuine-Quality Parts</h3>
                <p className="text-gray-dark">
                  We use premium replacement batteries and components that match Apple&apos;s original specifications.
                  No cheap knockoffs.
                </p>
              </Card>

              <Card padding="lg">
                <Clock className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">24-48 Hour Turnaround</h3>
                <p className="text-gray-dark">
                  Most AirPods repairs completed within 24-48 hours. Get your AirPods back fast — no
                  weeks-long waits like Apple service.
                </p>
              </Card>

              <Card padding="lg">
                <Star className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Warranty on All Repairs</h3>
                <p className="text-gray-dark">
                  Every AirPods repair comes with a warranty. If the same issue returns within the warranty
                  period, we fix it free.
                </p>
              </Card>

              <Card padding="lg">
                <CheckCircle2 className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Free Diagnosis</h3>
                <p className="text-gray-dark">
                  Not sure what&apos;s wrong? We diagnose your AirPods for free and give you an honest
                  assessment before any repair.
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
            Get Your AirPods Fixed Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Free diagnosis. Transparent pricing. Fast turnaround. Doorstep pickup available across Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Book Free Diagnosis
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
