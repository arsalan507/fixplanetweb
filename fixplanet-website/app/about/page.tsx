import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Eye, Zap, Award, Heart, CheckCircle2, Clock, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About FIXplanet - Bangalore\'s Trusted Apple Care Specialists',
  description: 'Learn about FIXplanet, Bangalore\'s independent Apple device care specialists. Founded by Apple users frustrated with week-long wait times. Now serving 1,000+ customers.',
  keywords: ['about FIXplanet', 'Apple repair Bangalore history', 'independent Apple service', 'Apple care specialists'],
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / About Us
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Bangalore&apos;s Trusted Independent Apple Care Specialists
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Built by Apple users, frustrated with week-long wait times and premium prices.
            Now serving 1,000+ customers across Bangalore.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-dark space-y-4">
                <p>
                  When our team&apos;s MacBook failed the day before a critical startup pitch, we faced an
                  impossible choice: Apple&apos;s week-long wait or a risky unknown repair shop. Neither option worked
                  for someone who needed their device tomorrow—not eventually.
                </p>
                <p>
                  That frustration sparked FIXplanet. We believed Bangalore&apos;s tech professionals deserved better:
                  authorized-quality service without the authorized wait. Same-day expertise at your doorstep.
                  Transparent pricing and genuine care for devices you depend on daily.
                </p>
                <p>
                  Today, we&apos;re the independent Apple care specialists trusted by 1,000+ Bangalore professionals
                  who refuse to compromise between quality and convenience. We bring premium service to you—because
                  your time and your devices deserve nothing less.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="FIXplanet team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Our core values guide every interaction and service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Transparency',
                description: 'No hidden fees, no surprises. You know exactly what we\'re doing and why. Watch us work at your location.',
              },
              {
                icon: Award,
                title: 'Expertise',
                description: '7+ years specializing exclusively in Apple devices. Component-level repair capability for complex issues.',
              },
              {
                icon: Zap,
                title: 'Speed',
                description: 'Your device downtime impacts your life. We work fast without compromising quality or safety.',
              },
              {
                icon: Shield,
                title: 'Quality',
                description: 'Premium OEM-grade components with industry-leading warranty. We stand behind our work.',
              },
              {
                icon: Heart,
                title: 'Trust',
                description: 'Ask questions. Verify our work. We have nothing to hide and everything to prove to you.',
              },
              {
                icon: Star,
                title: 'Excellence',
                description: 'Every device matters. Every customer matters. We aim for perfection in every service.',
              },
            ].map((value) => (
              <Card key={value.title} hover padding="lg" className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent/10 rounded-full mb-4">
                  <value.icon className="text-teal-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy-primary">{value.title}</h3>
                <p className="text-gray-dark">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Why FIXplanet vs. Others?
            </h2>
            <p className="text-lg text-gray-dark">
              See how we compare to other service providers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-primary text-white">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-teal-accent">FIXplanet</th>
                  <th className="p-4 font-semibold">Apple Store</th>
                  <th className="p-4 font-semibold">Other Services</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-medium">
                  <td className="p-4 font-medium">Response Time</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    15 minutes
                  </td>
                  <td className="p-4 text-gray-dark">N/A</td>
                  <td className="p-4 text-gray-dark">2-12 hours</td>
                </tr>
                <tr className="border-b border-gray-medium bg-gray-light">
                  <td className="p-4 font-medium">Same-Day Service</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    Yes
                  </td>
                  <td className="p-4 text-gray-dark">No (3-7 days)</td>
                  <td className="p-4 text-gray-dark">Sometimes</td>
                </tr>
                <tr className="border-b border-gray-medium">
                  <td className="p-4 font-medium">Doorstep Service</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    Standard
                  </td>
                  <td className="p-4 text-gray-dark">No</td>
                  <td className="p-4 text-gray-dark">Extra charge</td>
                </tr>
                <tr className="border-b border-gray-medium bg-gray-light">
                  <td className="p-4 font-medium">Warranty</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    12 months
                  </td>
                  <td className="p-4 text-gray-dark">90 days</td>
                  <td className="p-4 text-gray-dark">3-6 months</td>
                </tr>
                <tr className="border-b border-gray-medium">
                  <td className="p-4 font-medium">Transparent Pricing</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    Online quotes
                  </td>
                  <td className="p-4 text-gray-dark">In-store only</td>
                  <td className="p-4 text-gray-dark">Call for quote</td>
                </tr>
                <tr className="bg-gray-light">
                  <td className="p-4 font-medium">Component-Level Repair</td>
                  <td className="p-4">
                    <CheckCircle2 className="text-teal-accent inline mr-2" size={20} />
                    Yes
                  </td>
                  <td className="p-4 text-gray-dark">No (full replacement)</td>
                  <td className="p-4 text-gray-dark">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              A dedicated team of certified Apple device specialists with 7+ years of hands-on experience,
              committed to delivering premium doorstep repair across Bangalore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Expert Technicians',
                description: '10+ certified engineers with 5+ years average experience. Logic board specialists and component-level repair experts.',
              },
              {
                icon: Clock,
                title: 'Operations Team',
                description: 'Dedicated service coordinators ensuring 15-minute response times and seamless doorstep scheduling across 172+ areas.',
              },
              {
                icon: Heart,
                title: 'Customer Care',
                description: 'Post-service support team available via WhatsApp and phone. We follow up to ensure every repair meets our standards.',
              },
            ].map((item) => (
              <Card key={item.title} hover padding="lg" className="text-center">
                <div className="w-20 h-20 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-teal-accent" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-navy-primary mb-3">{item.title}</h3>
                <p className="text-gray-dark">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-8 text-center">
              Our Promise to You
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Every technician is background-checked and trained',
                'All work performed in your presence at your location',
                'Detailed diagnosis before we proceed with any work',
                'Money-back guarantee if you\'re not satisfied',
                '12-month warranty on all parts and workmanship',
                'Post-service support via WhatsApp and phone',
                'Zero pressure—you decide if repair makes sense for you',
                'Honest advice even if it means no sale for us',
              ].map((promise) => (
                <div key={promise} className="flex items-start">
                  <CheckCircle2 className="text-teal-accent mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-dark">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Service Area */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-teal-accent mb-2">1,000+</div>
              <div className="text-gray-300">Devices Restored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-accent mb-2">4.9/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-accent mb-2">172+</div>
              <div className="text-gray-300">Bangalore Areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-accent mb-2">95%</div>
              <div className="text-gray-300">Same-Day Service Rate</div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Experience the Difference?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/pricing" size="lg">
                Get Instant Quote
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
