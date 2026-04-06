import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, Clock, Calculator, Star, CheckCircle2, Zap, Eye, Award, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { LocalBusinessSchema } from '@/components/ui/Schema';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GuaranteeBox from '@/components/ui/GuaranteeBox';

export const metadata: Metadata = {
  title: 'iPhone Repair Bangalore — From ₹2,500 | 60-Min Doorstep | FIXplanet',
  description: 'iPhone screen replacement from ₹3,500. MacBook repair from ₹8,500. Same-day doorstep service across Bangalore. 12-month warranty on all repairs. Call +91 8105955009.',
  keywords: ['iPhone repair Bangalore', 'iPhone screen replacement Bangalore', 'MacBook repair Bangalore', 'doorstep phone repair', 'same day iPhone repair', 'Apple repair near me'],
  alternates: {
    canonical: 'https://www.fixplanet.in',
  },
};

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 8105955009';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '918105955009';

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-light py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Mobile Hero - Shows on mobile, hidden on desktop */}
              <div className="block md:hidden mb-6">
                <Image
                  src="/images/hero-mobile-opt.png"
                  alt="FIXplanet Apple Device Repair Service"
                  width={300}
                  height={200}
                  className="mx-auto"
                  priority
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              {/* Live Badge */}
              <div className="mb-4">
                <span className="badge badge-live text-sm">
                  Same-day slots available
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-primary mb-6 leading-tight">
                iPhone & MacBook Repair Bangalore — From ₹2,500
              </h1>
              {/* GEO Definition Paragraph — AI-citable brand description */}
              <p className="text-lg md:text-xl text-gray-dark mb-4 leading-relaxed">
                FIXplanet is a doorstep Apple device repair service in Bangalore that provides same-day iPhone, MacBook, iPad, and Apple Watch repairs at your home or office. Average response time is 30-60 minutes across 140+ Bangalore neighborhoods including Koramangala, Indiranagar, Whitefield, and HSR Layout.
              </p>
              {/* Grand Slam Offer Stack (Hormozi) */}
              <div className="bg-navy-primary/5 border border-navy-primary/10 rounded-xl p-4 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-primary">
                  <CheckCircle2 size={18} className="text-teal-accent flex-shrink-0" />
                  <span>If we can&apos;t fix it, you pay <strong className="text-teal-accent">₹0</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-primary">
                  <CheckCircle2 size={18} className="text-teal-accent flex-shrink-0" />
                  <span>Late arrival? <strong className="text-teal-accent">₹500 off</strong> — automatic, no questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-primary">
                  <CheckCircle2 size={18} className="text-teal-accent flex-shrink-0" />
                  <span>12-month warranty — breaks again? <strong className="text-teal-accent">Free re-repair + ₹500</strong></span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-primary">
                  <CheckCircle2 size={18} className="text-teal-accent flex-shrink-0" />
                  <span>Watch every step — pay <strong className="text-teal-accent">only when satisfied</strong></span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${whatsapp}?text=Hi!%20I%20need%20help%20with%20my%20device%20repair%20in%20Bangalore`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp animate-pulse-green inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white min-h-[52px]"
                >
                  <MessageCircle className="mr-2" size={22} />
                  WhatsApp Us Now
                </a>
                <Button href={`tel:${phone}`} variant="ghost" size="lg">
                  <Phone className="mr-2" size={20} />
                  Call: {phone}
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-desktop.jpg"
                alt="Professional Apple device care service in Bangalore"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-primary py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0} className="text-center">
              <div className="text-4xl font-bold text-white mb-1">1,000+</div>
              <div className="text-gray-400 text-sm">Devices Restored</div>
              <span className="badge badge-teal mt-2">Trusted</span>
            </ScrollReveal>
            <ScrollReveal delay={100} className="text-center">
              <div className="text-4xl font-bold text-white mb-1">5.0★</div>
              <div className="text-gray-400 text-sm">Google Rating</div>
              <span className="badge badge-gold mt-2">Verified</span>
            </ScrollReveal>
            <ScrollReveal delay={200} className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-1">12-Month</div>
              <div className="text-gray-400 text-sm">Warranty</div>
              <span className="badge badge-success mt-2">Industry Best</span>
            </ScrollReveal>
            <ScrollReveal delay={300} className="text-center">
              <div className="text-4xl font-bold text-teal-accent mb-1">30-60 Min</div>
              <div className="text-gray-400 text-sm">Response Time</div>
              <span className="badge badge-live mt-2">Live Tracking</span>
            </ScrollReveal>
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

      {/* Guarantee Section — BEFORE final CTA (Hormozi: stack guarantees, then ask) */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <GuaranteeBox />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Device Fixed Today — Or You Pay Nothing
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            1,000+ devices restored. 4.9★ Google rating. Average repair time: 90 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`https://wa.me/${whatsapp}?text=Hi!%20I%20need%20a%20repair%20quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white min-h-[52px]"
            >
              <MessageCircle className="mr-2" size={22} />
              WhatsApp for Instant Quote
            </a>
            <Button href="/pricing" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
              <Calculator className="mr-2" size={20} />
              Price Calculator
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
              <div className="text-sm">Fixed or Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-primary text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How much does iPhone screen replacement cost in Bangalore?',
                a: 'iPhone screen replacement at FIXplanet starts from ₹3,500 for iPhone 11 and goes up to ₹11,500 for iPhone 16 Pro Max. All prices include doorstep service, OEM-grade display, and 12-month warranty. This is 40-65% less than Apple Store pricing.',
              },
              {
                q: 'Do you provide doorstep iPhone repair in Bangalore?',
                a: 'Yes. FIXplanet provides same-day doorstep repair across 140+ Bangalore areas including Koramangala, Indiranagar, HSR Layout, Whitefield, Marathahalli, Electronic City, and Jayanagar. Our technician arrives at your home or office within 30-60 minutes with all required parts and tools.',
              },
              {
                q: 'What warranty do you offer on repairs?',
                a: 'Every FIXplanet repair comes with a 12-month warranty covering parts and workmanship. If the replacement part develops any defect within 12 months, we replace it free of charge. This is 4x longer than Apple\'s 90-day repair warranty.',
              },
              {
                q: 'How long does iPhone screen replacement take?',
                a: 'Most iPhone screen replacements are completed in 30-45 minutes at your location. Our technician carries pre-tested screens for all iPhone models, so there is no waiting for parts. You can watch the entire repair process.',
              },
              {
                q: 'Do I lose my data during repair?',
                a: 'No. Screen replacement, battery replacement, and back glass repair do not affect your data. All your photos, apps, and settings remain exactly as they are. We never ask for your Apple ID password.',
              },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-navy-primary">
                  {faq.q}
                  <span className="ml-4 text-teal-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="p-5 text-gray-dark leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* HowTo Schema — Google AIO specific */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Get Your iPhone or MacBook Repaired at Your Doorstep in Bangalore',
            description: 'Book a same-day doorstep Apple device repair in Bangalore with FIXplanet in 4 simple steps.',
            totalTime: 'PT3H',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'INR',
              value: '3500',
            },
            step: [
              { '@type': 'HowToStep', name: 'Book Appointment', text: 'Call +91 8105955009, WhatsApp, or use the online pricing calculator at fixplanet.in/pricing. Describe your device issue and preferred time slot.' },
              { '@type': 'HowToStep', name: 'Technician Arrives', text: 'A FIXplanet specialist arrives at your Bangalore location within 30-60 minutes with all necessary tools and OEM-grade parts.' },
              { '@type': 'HowToStep', name: 'Watch the Repair', text: 'The repair is done at your doorstep. Watch every step of the process. Ask questions. Approve before any work begins.' },
              { '@type': 'HowToStep', name: 'Pay When Satisfied', text: 'Test your device thoroughly. Pay only when you are 100% satisfied. Receive a 12-month warranty document immediately.' },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much does iPhone screen replacement cost in Bangalore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'iPhone screen replacement at FIXplanet starts from ₹3,500 for iPhone 11 and goes up to ₹11,500 for iPhone 16 Pro Max. All prices include doorstep service, OEM-grade display, and 12-month warranty.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide doorstep iPhone repair in Bangalore?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. FIXplanet provides same-day doorstep repair across 140+ Bangalore areas including Koramangala, Indiranagar, HSR Layout, Whitefield, Marathahalli, Electronic City, and Jayanagar.',
                },
              },
              {
                '@type': 'Question',
                name: 'What warranty do you offer on repairs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every FIXplanet repair comes with a 12-month warranty covering parts and workmanship. If the replacement part develops any defect within 12 months, we replace it free of charge.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does iPhone screen replacement take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most iPhone screen replacements are completed in 30-45 minutes at your location. Our technician carries pre-tested screens for all iPhone models.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I lose my data during repair?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Screen replacement, battery replacement, and back glass repair do not affect your data. All your photos, apps, and settings remain exactly as they are.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
