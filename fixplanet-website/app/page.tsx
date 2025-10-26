import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, Clock, Calculator, Star, CheckCircle2, Zap, Eye, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { LocalBusinessSchema } from '@/components/ui/Schema';

export const metadata: Metadata = {
  title: 'FIXplanet - Premium Apple Device Care in Bangalore | Same-Day Service',
  description: 'Bangalore\'s trusted independent Apple specialists. Same-day doorstep service for iPhone, MacBook, iPad & Apple Watch. 12-month warranty. Serving Koramangala, Indiranagar & Whitefield.',
  keywords: ['Apple repair Bangalore', 'iPhone screen replacement', 'MacBook repair', 'doorstep service', 'same day repair'],
};

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-light py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-primary mb-6 leading-tight">
                Expert Apple Device Care—At Your Doorstep, Today
              </h1>
              <p className="text-lg md:text-xl text-gray-dark mb-8 leading-relaxed">
                Bangalore&apos;s trusted independent Apple specialists. Same-day service in Koramangala,
                Indiranagar & Whitefield. 12-month warranty. Watch us work at your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/pricing" size="lg">
                  Get Instant Quote
                </Button>
                <Button href={`tel:${phone}`} variant="ghost" size="lg">
                  <Phone className="mr-2" size={20} />
                  Call Now: {phone}
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
                alt="Professional Apple device care service in Bangalore"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-y border-gray-medium">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-2">1,000+</div>
              <div className="text-gray-dark">Devices Restored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-2">4.9★</div>
              <div className="text-gray-dark">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-2">12-Month</div>
              <div className="text-gray-dark">Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-2">Same-Day</div>
              <div className="text-gray-dark">Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Why Bangalore Chooses FIXplanet
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Premium service without the premium wait times
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hover padding="lg" className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent/10 rounded-full mb-4">
                <Clock className="text-teal-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Same-Day Doorstep Service</h3>
              <p className="text-gray-dark">
                Most services completed within 2-4 hours at your home or office. No wait times, no travel needed.
              </p>
            </Card>

            <Card hover padding="lg" className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent/10 rounded-full mb-4">
                <Calculator className="text-teal-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-dark">
                Instant online quotes. No hidden fees. Pay only after you&apos;re 100% satisfied with the work.
              </p>
            </Card>

            <Card hover padding="lg" className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent/10 rounded-full mb-4">
                <Shield className="text-teal-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">12-Month Warranty</h3>
              <p className="text-gray-dark">
                Industry-leading warranty on all parts and workmanship. Free replacement if issues recur.
              </p>
            </Card>

            <Card hover padding="lg" className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent/10 rounded-full mb-4">
                <Star className="text-teal-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Components</h3>
              <p className="text-gray-dark">
                OEM-grade components with same specifications as original. Watch the work happen at your location.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Devices We Serve
            </h2>
            <p className="text-lg text-gray-dark">
              Complete care for your entire Apple ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'iPhone',
                image: '/images/devices/iphone.png',
                services: ['Screen replacement', 'Battery service', 'Back glass', 'Water damage recovery'],
                link: '/services#iphone',
              },
              {
                title: 'MacBook',
                image: '/images/devices/macbook.webp',
                services: ['Display replacement', 'Battery', 'Keyboard', 'Logic board'],
                link: '/services#macbook',
              },
              {
                title: 'iPad',
                image: '/images/devices/ipad.jpg',
                services: ['Screen replacement', 'Battery', 'Digitizer', 'Charging port'],
                link: '/services#ipad',
              },
              {
                title: 'Apple Watch',
                image: '/images/devices/apple-watch.jpg',
                services: ['Screen replacement', 'Battery', 'Crown repair', 'Band replacement'],
                link: '/services#watch',
              },
            ].map((device) => (
              <Card key={device.title} hover padding="none" className="overflow-hidden group">
                <div className="relative h-48 bg-white">
                  <Image src={device.image} alt={device.title} fill className="object-contain p-4" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-primary mb-3">{device.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {device.services.map((service) => (
                      <li key={service} className="flex items-start text-gray-dark text-sm">
                        <CheckCircle2 size={16} className="text-teal-accent mr-2 mt-1 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={device.link}
                    className="inline-flex items-center text-teal-accent font-medium hover:underline"
                  >
                    View {device.title} Services →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              What Bangalore Says About Us
            </h2>
            <p className="text-lg text-gray-dark">
              Real stories from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Mehta',
                role: 'Founder, TechStartup',
                location: 'Koramangala',
                device: 'MacBook Pro M2',
                rating: 5,
                text: 'FIXplanet saved my startup\'s day. MacBook screen cracked hours before investor pitch. They came to my Koramangala office, replaced display in 90 minutes. Pitch went perfectly!',
              },
              {
                name: 'Priya Sharma',
                role: 'Marketing Manager',
                location: 'Indiranagar',
                device: 'iPhone 14 Pro',
                rating: 5,
                text: 'Dropped iPhone 14 Pro in Indiranagar Metro. Back glass shattered. FIXplanet came home same evening, fixed it perfectly. 6 months later, still flawless. Best service in Bangalore.',
              },
              {
                name: 'Arjun Patel',
                role: 'Software Engineer',
                location: 'Whitefield',
                device: 'MacBook Air M1',
                rating: 5,
                text: 'Apple Store quoted ₹28,000 for MacBook battery. FIXplanet did it for ₹12,500 at my Whitefield office with same quality parts and better warranty. Why go anywhere else?',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} padding="lg" className="relative">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-dark mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-navy-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-dark">{testimonial.role}</div>
                  <div className="text-sm text-teal-accent mt-1">
                    {testimonial.location} • {testimonial.device}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              From Problem to Perfect in 4 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: Clock,
                title: 'Book Appointment',
                description: 'Call, WhatsApp, or book online. Tell us your device issue and preferred time. Get instant price estimate.',
              },
              {
                step: 2,
                icon: Zap,
                title: 'We Come to You',
                description: 'Our specialist arrives at your Bangalore location with all necessary tools and premium parts.',
              },
              {
                step: 3,
                icon: Eye,
                title: 'Watch Us Work',
                description: 'Transparent service at your location. Watch every step. Ask questions. Approve before we proceed.',
              },
              {
                step: 4,
                icon: Award,
                title: 'Pay & Warranty',
                description: 'Check device thoroughly. Pay only when satisfied. Get 12-month warranty document immediately.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-accent text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <item.icon className="text-teal-accent mx-auto mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3 text-navy-primary">{item.title}</h3>
                <p className="text-gray-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              We Serve Bangalore&apos;s Premium Neighborhoods
            </h2>
            <p className="inline-flex items-center bg-teal-accent text-white px-6 py-3 rounded-full font-medium">
              <Clock size={20} className="mr-2" />
              15-Minute Response Guarantee Across All Areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              'Koramangala',
              'Indiranagar',
              'Whitefield',
              'HSR Layout',
              'Marathahalli',
              'Sarjapur Road',
              'Bellandur',
              'Electronic City',
              'JP Nagar',
              'Jayanagar',
            ].map((area) => (
              <div
                key={area}
                className="bg-white px-4 py-3 rounded-lg text-center font-medium text-navy-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 size={16} className="text-teal-accent inline mr-2" />
                {area}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button href="/bangalore-locations" variant="secondary">
              Check If We Serve Your Area
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Apple Device?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1,000+ satisfied customers across Bangalore. Same-day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/pricing" size="lg">
              Get Instant Quote
            </Button>
            <Button href={`tel:${phone}`} variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
              Call {phone}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/20 pt-8">
            <div className="flex flex-col items-center">
              <Shield className="text-teal-accent mb-2" size={32} />
              <div className="text-sm">12-Month Warranty</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="text-teal-accent mb-2" size={32} />
              <div className="text-sm">Same-Day Service</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="text-teal-accent mb-2" size={32} />
              <div className="text-sm">4.9★ Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-teal-accent mb-2" size={32} />
              <div className="text-sm">Bangalore&apos;s #1</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
