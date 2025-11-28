import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, Clock, CheckCircle2, Star, Award, MapPin, Zap, Eye, Calculator, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'iPhone Screen Replacement in Bangalore - Same-Day Doorstep Service | FIXplanet',
  description: 'Professional iPhone screen replacement in Bangalore. 60-min same-day doorstep service. OEM & original screens, 12-month warranty, ₹3,500-₹12,000. Serving 172+ areas. Book now!',
  keywords: [
    'iPhone screen replacement Bangalore',
    'iPhone display repair Bangalore',
    'iPhone screen repair near me',
    'iPhone screen replacement cost Bangalore',
    'same day iPhone repair Bangalore',
    'doorstep iPhone screen replacement',
    'iPhone 15 screen replacement Bangalore',
    'iPhone 14 screen replacement Bangalore',
    'iPhone 13 screen replacement Bangalore',
    'iPhone screen repair Koramangala',
    'iPhone screen repair Whitefield',
    'iPhone screen repair HSR Layout',
    'original iPhone screen replacement',
    'OEM iPhone screen Bangalore'
  ],
  openGraph: {
    title: 'iPhone Screen Replacement in Bangalore - Same-Day Service | FIXplanet',
    description: '60-min doorstep service. OEM & original screens, 12-month warranty. Serving 172+ areas across Bangalore.',
    type: 'website',
    url: 'https://www.fixplanet.in/services/iphone-screen-replacement-bangalore',
    images: [
      {
        url: 'https://www.fixplanet.in/images/iphone-screen-replacement-og.jpg',
        width: 1200,
        height: 630,
        alt: 'iPhone Screen Replacement Service in Bangalore'
      }
    ]
  }
};

export default function iPhoneScreenReplacementBangalorePage() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91 8105955009';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '918105955009';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@fixplanet.in';

  return (
    <>
      {/* Schema Markup - Add to head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "iPhone Screen Replacement",
            "provider": {
              "@type": "LocalBusiness",
              "name": "FIXplanet",
              "image": "https://www.fixplanet.in/images/fixplanet-logo.png",
              "telephone": "+918105955009",
              "email": "hello@fixplanet.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Nexus Koramangala Mall, 22, Hosur Rd",
                "addressLocality": "Koramangala",
                "addressRegion": "Karnataka",
                "postalCode": "560030",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9352",
                "longitude": "77.6245"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "21:00"
              },
              "priceRange": "₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Bangalore"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "iPhone Screen Replacement Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone 15/16 Series Screen Replacement",
                    "description": "OEM-grade screen replacement for iPhone 15, 15 Plus, 15 Pro, 15 Pro Max, 16 series"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone 14 Series Screen Replacement",
                    "description": "Original quality screen replacement for iPhone 14, 14 Plus, 14 Pro, 14 Pro Max"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "₹3500-₹12000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> /
            <Link href="/services" className="hover:text-white ml-1"> Services</Link> /
            <span className="ml-1">iPhone Screen Replacement Bangalore</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                iPhone Screen Replacement in Bangalore – Same-Day Doorstep Service
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cracked iPhone screen? Get professional replacement at your doorstep in 60 minutes.
                OEM-grade screens, 12-month warranty, transparent pricing. Serving 172+ areas across Bangalore.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-accent mb-1">60 min</div>
                  <div className="text-sm text-gray-300">Same-Day Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-accent mb-1">12 mo</div>
                  <div className="text-sm text-gray-300">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-accent mb-1">18K+</div>
                  <div className="text-sm text-gray-300">Repairs Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-accent mb-1">4.9★</div>
                  <div className="text-sm text-gray-300">Google Rating</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/pricing" size="lg" className="!bg-teal-accent !text-navy-primary hover:!bg-teal-accent/90">
                  <Calculator className="mr-2" size={20} />
                  Get Instant Quote
                </Button>
                <Button href={`tel:${phone}`} variant="ghost" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  <Phone className="mr-2" size={20} />
                  Call: {phone}
                </Button>
                <Button href={`https://wa.me/${whatsapp}`} variant="ghost" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1621768216002-5ac171876625?w=800&h=600&fit=crop"
                alt="Professional iPhone screen replacement service in Bangalore by certified technicians"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="bg-white py-8 shadow-md sticky top-0 z-40">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-accent/10 to-navy-primary/10 p-6 rounded-lg border-2 border-teal-accent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="text-teal-accent" size={32} />
                <div>
                  <div className="font-bold text-navy-primary">Book Your Screen Replacement Now</div>
                  <div className="text-sm text-gray-dark">Technician at your doorstep in 60 minutes</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button href="/pricing" size="md">Get Quote</Button>
                <Button href={`tel:${phone}`} variant="ghost" size="md">Call Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-light">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg">
            <p className="text-lg text-gray-dark leading-relaxed">
              A cracked iPhone screen can disrupt your day, compromise your device's functionality, and potentially lead to further damage.
              At <strong>FIXplanet</strong>, we specialize in professional <strong>iPhone screen replacement in Bangalore</strong> with a unique
              doorstep service model that brings expert technicians directly to your location—whether you're at home, office, or a café.
            </p>
            <p className="text-lg text-gray-dark leading-relaxed mt-4">
              With over <strong>5+ years of experience</strong> and <strong>18,000+ successful repairs</strong>, our team of certified electronic engineers
              ensures your iPhone gets the care it deserves. We use only <strong>OEM-grade</strong> and <strong>original quality screens</strong>, backed by
              an industry-leading <strong>12-month warranty</strong> on all repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose FIXplanet Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Why Bangalore Trusts FIXplanet for iPhone Screen Replacement
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              We've redefined iPhone screen repair with transparent pricing, certified technicians, and unmatched convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* USP 1 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Zap className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">60-Minute Same-Day Service</h3>
                  <p className="text-gray-dark">
                    Our technicians reach your location within 60 minutes and complete most screen replacements on-site.
                    No waiting days at a repair shop—get back to using your iPhone the same day.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 2 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Eye className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">Watch Us Work – Transparent Process</h3>
                  <p className="text-gray-dark">
                    Unlike traditional shops where your phone disappears into a back room, our technicians work right
                    in front of you. See exactly what's being done to your device, ensuring complete transparency and peace of mind.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 3 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Shield className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">12-Month Warranty on All Screens</h3>
                  <p className="text-gray-dark">
                    Every screen replacement comes with a comprehensive 12-month warranty covering both parts and workmanship.
                    If any issues arise, we'll replace it free of charge—no questions asked.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 4 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Award className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">Certified Electronic Engineers</h3>
                  <p className="text-gray-dark">
                    Our 10+ technicians are certified electronic engineers with specialized training in Apple device repairs.
                    With 5+ years of experience and 18,000+ repairs, your iPhone is in expert hands.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 5 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Calculator className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">Transparent Pricing – No Hidden Charges</h3>
                  <p className="text-gray-dark">
                    What you see is what you pay. Get an instant quote through our pricing calculator or over the phone.
                    No hidden fees, no surprise charges—just honest, upfront pricing.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 6 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <CheckCircle2 className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">OEM-Grade & Original Quality Screens</h3>
                  <p className="text-gray-dark">
                    We offer multiple quality tiers—from premium OEM screens to original Apple-grade displays.
                    Choose the option that fits your budget without compromising on quality.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 7 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <MapPin className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">172+ Areas Covered Across Bangalore</h3>
                  <p className="text-gray-dark">
                    From Koramangala to Whitefield, HSR Layout to Electronic City—we serve every corner of Bangalore.
                    Free doorstep pickup and delivery with no distance charges.
                  </p>
                </div>
              </div>
            </Card>

            {/* USP 8 */}
            <Card>
              <div className="flex items-start gap-4">
                <div className="bg-teal-accent/10 p-3 rounded-lg">
                  <Star className="text-teal-accent" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-primary mb-2">Pay Only When Satisfied</h3>
                  <p className="text-gray-dark">
                    We complete the repair, show you the results, and collect payment only after you're 100% satisfied.
                    If you're not happy, we won't charge you—that's our promise.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-light" id="pricing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              iPhone Screen Replacement Cost in Bangalore
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              Transparent pricing for all iPhone models. Choose from OEM-grade or original quality screens.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card padding="lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-medium">
                      <th className="text-left py-4 px-4 font-bold text-navy-primary">iPhone Model</th>
                      <th className="text-center py-4 px-4 font-bold text-navy-primary">OEM Screen</th>
                      <th className="text-center py-4 px-4 font-bold text-navy-primary">Original Quality</th>
                      <th className="text-center py-4 px-4 font-bold text-navy-primary">Warranty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 16 Pro Max / 16 Pro</td>
                      <td className="py-4 px-4 text-center">₹10,500 - ₹12,000</td>
                      <td className="py-4 px-4 text-center">₹14,000 - ₹16,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 15 Pro Max / 15 Pro</td>
                      <td className="py-4 px-4 text-center">₹9,000 - ₹11,000</td>
                      <td className="py-4 px-4 text-center">₹12,000 - ₹14,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 15 / 15 Plus</td>
                      <td className="py-4 px-4 text-center">₹7,500 - ₹9,000</td>
                      <td className="py-4 px-4 text-center">₹10,000 - ₹11,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 14 Pro Max / 14 Pro</td>
                      <td className="py-4 px-4 text-center">₹8,000 - ₹10,000</td>
                      <td className="py-4 px-4 text-center">₹11,000 - ₹13,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 14 / 14 Plus</td>
                      <td className="py-4 px-4 text-center">₹6,500 - ₹8,000</td>
                      <td className="py-4 px-4 text-center">₹9,000 - ₹10,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 13 Pro Max / 13 Pro</td>
                      <td className="py-4 px-4 text-center">₹7,000 - ₹8,500</td>
                      <td className="py-4 px-4 text-center">₹9,500 - ₹11,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 13 / 13 Mini</td>
                      <td className="py-4 px-4 text-center">₹5,500 - ₹7,000</td>
                      <td className="py-4 px-4 text-center">₹8,000 - ₹9,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 12 Pro Max / 12 Pro</td>
                      <td className="py-4 px-4 text-center">₹6,000 - ₹7,500</td>
                      <td className="py-4 px-4 text-center">₹8,500 - ₹10,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 12 / 12 Mini</td>
                      <td className="py-4 px-4 text-center">₹4,500 - ₹6,000</td>
                      <td className="py-4 px-4 text-center">₹7,000 - ₹8,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 11 Pro Max / 11 Pro</td>
                      <td className="py-4 px-4 text-center">₹5,500 - ₹7,000</td>
                      <td className="py-4 px-4 text-center">₹8,000 - ₹9,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 11 / XR</td>
                      <td className="py-4 px-4 text-center">₹4,000 - ₹5,500</td>
                      <td className="py-4 px-4 text-center">₹6,500 - ₹8,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="border-b border-gray-medium hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone XS Max / XS / X</td>
                      <td className="py-4 px-4 text-center">₹4,500 - ₹6,000</td>
                      <td className="py-4 px-4 text-center">₹7,000 - ₹8,500</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                    <tr className="hover:bg-gray-light/50">
                      <td className="py-4 px-4 font-semibold">iPhone 8 Plus / 8 / 7 Plus / 7 / 6s / 6</td>
                      <td className="py-4 px-4 text-center">₹3,500 - ₹5,000</td>
                      <td className="py-4 px-4 text-center">₹5,500 - ₹7,000</td>
                      <td className="py-4 px-4 text-center">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-teal-accent/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <div className="text-sm text-gray-dark">
                    <strong>Note:</strong> Prices are estimates and may vary based on screen availability and specific damage.
                    Final quote provided after free diagnosis. All prices include service charges with no hidden fees.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button href="/pricing" size="lg">
                  Use Our Pricing Calculator for Exact Quote
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Screen Quality Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              OEM vs Original Quality Screens: What's the Difference?
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              We offer multiple screen quality options to fit your budget and requirements
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card padding="lg">
              <h3 className="text-2xl font-bold text-navy-primary mb-4">OEM-Grade Screens</h3>
              <p className="text-gray-dark mb-4">
                OEM (Original Equipment Manufacturer) screens are manufactured to the same specifications as original Apple screens,
                offering excellent quality at a more affordable price point.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>Same resolution and touch sensitivity as original</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>True Tone and 3D Touch support (on compatible models)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>12-month warranty coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>30-40% more affordable than original screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>Best for: Budget-conscious users, older iPhone models</span>
                </li>
              </ul>
            </Card>

            <Card padding="lg" className="border-2 border-teal-accent">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-navy-primary">Original Quality Screens</h3>
                <span className="bg-teal-accent text-white text-xs px-3 py-1 rounded-full">RECOMMENDED</span>
              </div>
              <p className="text-gray-dark mb-4">
                Original quality screens are sourced from Apple's authorized suppliers and offer the same quality,
                color accuracy, and performance as factory-installed screens.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>100% color accuracy and brightness matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>Full True Tone, HDR, and ProMotion support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>12-month warranty coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>Indistinguishable from factory screens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-teal-accent mt-1 flex-shrink-0" size={20} />
                  <span>Best for: Latest iPhone models, professional users, resale value preservation</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <Card padding="md" className="bg-navy-primary/5">
              <p className="text-center text-gray-dark">
                <strong>Not sure which to choose?</strong> Our technicians will inspect your iPhone and recommend
                the best option based on your model, usage, and budget during the free diagnosis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Our iPhone Screen Replacement Process
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              Simple, transparent, and completed at your doorstep—watch every step of the repair
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
            <Card padding="lg" className="text-center">
              <div className="bg-teal-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-teal-accent">1</div>
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-3">Book Service</h3>
              <p className="text-gray-dark text-sm">
                Call us at {phone} or use our online booking. Tell us your iPhone model and location.
              </p>
              <div className="mt-4 text-xs text-teal-accent font-semibold">~ 2 minutes</div>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="bg-teal-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-teal-accent">2</div>
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-3">Technician Arrives</h3>
              <p className="text-gray-dark text-sm">
                Our certified technician reaches your doorstep within 60 minutes with all necessary tools and parts.
              </p>
              <div className="mt-4 text-xs text-teal-accent font-semibold">~ 30-60 minutes</div>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="bg-teal-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-teal-accent">3</div>
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-3">On-Site Repair</h3>
              <p className="text-gray-dark text-sm">
                Watch as we carefully remove the damaged screen, test components, and install the new screen at your location.
              </p>
              <div className="mt-4 text-xs text-teal-accent font-semibold">~ 30-45 minutes</div>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="bg-teal-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-teal-accent">4</div>
              </div>
              <h3 className="text-xl font-bold text-navy-primary mb-3">Quality Check & Payment</h3>
              <p className="text-gray-dark text-sm">
                We test touch, display, Face ID, and all functions. Pay only when you're 100% satisfied with the repair.
              </p>
              <div className="mt-4 text-xs text-teal-accent font-semibold">~ 10 minutes</div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card padding="md" className="max-w-3xl mx-auto bg-teal-accent/10">
              <p className="text-lg font-semibold text-navy-primary">
                Total Time: 90-120 minutes from booking to completion
              </p>
              <p className="text-gray-dark mt-2">
                Most repairs completed the same day. No need to leave your iPhone at a shop for days!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Damage We Fix */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Types of iPhone Screen Damage We Fix
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              From minor cracks to complete display failure—we handle all types of iPhone screen issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">Cracked Glass / Shattered Screen</h3>
              <p className="text-sm text-gray-dark">
                Front glass cracks from drops, impacts, or pressure. Screen works but has visible cracks or spider-web patterns.
              </p>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">LCD / OLED Display Damage</h3>
              <p className="text-sm text-gray-dark">
                Black spots, colored lines, discoloration, flickering, or completely black screen despite phone being on.
              </p>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">Touch Not Working / Ghost Touch</h3>
              <p className="text-sm text-gray-dark">
                Unresponsive touch, delayed response, phantom touches, or specific areas not registering input.
              </p>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">Screen Bleeding / Backlight Issues</h3>
              <p className="text-sm text-gray-dark">
                Light leaking from edges, uneven brightness, backlight not turning on, or screen too dim/bright.
              </p>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">Green/Yellow/Purple Tint on Display</h3>
              <p className="text-sm text-gray-dark">
                Color tinting issues, incorrect color reproduction, or display showing abnormal hues.
              </p>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-navy-primary mb-2">Face ID Not Working After Screen Damage</h3>
              <p className="text-sm text-gray-dark">
                Face ID disabled or not functioning after screen damage. We ensure Face ID works post-replacement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-light" id="service-areas">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              iPhone Screen Replacement Service Areas in Bangalore
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              We serve 172+ locations across Bangalore with free doorstep pickup and delivery. No distance charges.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              {/* South Bangalore */}
              <div>
                <h3 className="font-bold text-navy-primary mb-3">South Bangalore</h3>
                <ul className="space-y-2 text-gray-dark">
                  <li><Link href="/areas/koramangala" className="hover:text-teal-accent">Koramangala</Link></li>
                  <li><Link href="/areas/hsr-layout" className="hover:text-teal-accent">HSR Layout</Link></li>
                  <li><Link href="/areas/btm-layout" className="hover:text-teal-accent">BTM Layout</Link></li>
                  <li><Link href="/areas/jayanagar" className="hover:text-teal-accent">Jayanagar</Link></li>
                  <li><Link href="/areas/jp-nagar" className="hover:text-teal-accent">JP Nagar</Link></li>
                  <li><Link href="/areas/banashankari" className="hover:text-teal-accent">Banashankari</Link></li>
                  <li><Link href="/areas/basavanagudi" className="hover:text-teal-accent">Basavanagudi</Link></li>
                  <li><Link href="/areas/wilson-garden" className="hover:text-teal-accent">Wilson Garden</Link></li>
                </ul>
              </div>

              {/* East Bangalore */}
              <div>
                <h3 className="font-bold text-navy-primary mb-3">East Bangalore</h3>
                <ul className="space-y-2 text-gray-dark">
                  <li><Link href="/areas/whitefield" className="hover:text-teal-accent">Whitefield</Link></li>
                  <li><Link href="/areas/marathahalli" className="hover:text-teal-accent">Marathahalli</Link></li>
                  <li><Link href="/areas/bellandur" className="hover:text-teal-accent">Bellandur</Link></li>
                  <li><Link href="/areas/electronic-city" className="hover:text-teal-accent">Electronic City</Link></li>
                  <li><Link href="/areas/indiranagar" className="hover:text-teal-accent">Indiranagar</Link></li>
                  <li><Link href="/areas/domlur" className="hover:text-teal-accent">Domlur</Link></li>
                  <li><Link href="/areas/hoodi" className="hover:text-teal-accent">Hoodi</Link></li>
                  <li><Link href="/areas/varthur" className="hover:text-teal-accent">Varthur</Link></li>
                </ul>
              </div>

              {/* North Bangalore */}
              <div>
                <h3 className="font-bold text-navy-primary mb-3">North Bangalore</h3>
                <ul className="space-y-2 text-gray-dark">
                  <li><Link href="/areas/hebbal" className="hover:text-teal-accent">Hebbal</Link></li>
                  <li><Link href="/areas/hennur" className="hover:text-teal-accent">Hennur</Link></li>
                  <li><Link href="/areas/hbr-layout" className="hover:text-teal-accent">HBR Layout</Link></li>
                  <li><Link href="/areas/kalyan-nagar" className="hover:text-teal-accent">Kalyan Nagar</Link></li>
                  <li><Link href="/areas/sahakara-nagar" className="hover:text-teal-accent">Sahakara Nagar</Link></li>
                  <li><Link href="/areas/horamavu" className="hover:text-teal-accent">Horamavu</Link></li>
                  <li><Link href="/areas/ramamurthy-nagar" className="hover:text-teal-accent">Ramamurthy Nagar</Link></li>
                  <li><Link href="/areas/kammanahalli" className="hover:text-teal-accent">Kammanahalli</Link></li>
                </ul>
              </div>

              {/* West Bangalore */}
              <div>
                <h3 className="font-bold text-navy-primary mb-3">West & Central Bangalore</h3>
                <ul className="space-y-2 text-gray-dark">
                  <li><Link href="/areas/rajajinagar" className="hover:text-teal-accent">Rajajinagar</Link></li>
                  <li><Link href="/areas/malleshwaram" className="hover:text-teal-accent">Malleshwaram</Link></li>
                  <li><Link href="/areas/yeshwanthpur" className="hover:text-teal-accent">Yeshwanthpur</Link></li>
                  <li><Link href="/areas/mg-road" className="hover:text-teal-accent">MG Road</Link></li>
                  <li><Link href="/areas/brigade-road" className="hover:text-teal-accent">Brigade Road</Link></li>
                  <li><Link href="/areas/basaveshwaranagar" className="hover:text-teal-accent">Basaveshwaranagar</Link></li>
                  <li><Link href="/areas/peenya" className="hover:text-teal-accent">Peenya</Link></li>
                  <li><Link href="/areas/kengeri" className="hover:text-teal-accent">Kengeri</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button href="/bangalore-locations" variant="ghost">
                View All 172+ Service Areas →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-dark max-w-3xl mx-auto">
              Everything you need to know about our iPhone screen replacement service
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                How long does iPhone screen replacement take?
              </h3>
              <p className="text-gray-dark">
                Most iPhone screen replacements are completed in 30-45 minutes at your doorstep. Including technician travel time,
                the entire process from booking to completion takes 90-120 minutes on average.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                Will Face ID work after screen replacement?
              </h3>
              <p className="text-gray-dark">
                Yes! Our technicians use proper techniques to ensure Face ID, True Tone, and all iPhone features work perfectly after
                screen replacement. We test every function before completing the repair.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                Do you offer same-day iPhone screen replacement in Bangalore?
              </h3>
              <p className="text-gray-dark">
                Absolutely! We offer same-day service across all 172+ areas in Bangalore. Our technicians can reach your location
                within 60 minutes and complete the repair on-site. Book before 7 PM for guaranteed same-day service.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                What is the warranty on iPhone screen replacement?
              </h3>
              <p className="text-gray-dark">
                All screen replacements come with a comprehensive 12-month warranty covering both parts and workmanship.
                If any issues arise with the replacement screen within 12 months, we'll replace it free of charge—no questions asked.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                How much does it cost to replace iPhone screen in Bangalore?
              </h3>
              <p className="text-gray-dark">
                iPhone screen replacement costs in Bangalore range from ₹3,500 for older models (iPhone 6/7/8) to ₹12,000 for the
                latest models (iPhone 15/16 Pro Max) using OEM screens. Original quality screens cost 30-40% more. Use our
                <Link href="/pricing" className="text-teal-accent hover:underline ml-1">pricing calculator</Link> for an exact quote.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                Is OEM screen better than original for iPhone?
              </h3>
              <p className="text-gray-dark">
                Original screens are manufactured by Apple's suppliers and offer 100% identical quality to factory screens.
                OEM screens are made to the same specifications but by third-party manufacturers, offering 90-95% of the same quality
                at a lower price. For latest iPhones (14/15/16 series), we recommend original quality screens. For older models,
                OEM screens provide excellent value.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                Do you charge extra for doorstep service?
              </h3>
              <p className="text-gray-dark">
                No hidden charges! Our pricing includes doorstep service across all 172+ areas in Bangalore.
                Whether you're in Koramangala or Electronic City, the price remains the same—no distance charges, no travel fees.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                What if my iPhone has other issues besides the screen?
              </h3>
              <p className="text-gray-dark">
                Our technicians perform a complete diagnosis before starting the screen replacement. If we find other issues
                (battery, charging port, etc.), we'll inform you and provide a quote. You decide whether to proceed with additional
                repairs. We never perform unauthorized work.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                Can I get my iPhone screen replaced at home, office, or café?
              </h3>
              <p className="text-gray-dark">
                Yes! We come to any location you prefer in Bangalore—home, office, café, gym, or even your parked car.
                Just provide a clean, well-lit space and a power outlet. The technician carries all necessary tools.
              </p>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                How do I book an iPhone screen replacement with FIXplanet?
              </h3>
              <p className="text-gray-dark">
                You can book in three ways: (1) Call us at <a href={`tel:${phone}`} className="text-teal-accent hover:underline">{phone}</a>,
                (2) WhatsApp us at <a href={`https://wa.me/${whatsapp}`} className="text-teal-accent hover:underline">+91 8105955009</a>,
                or (3) Use our <Link href="/pricing" className="text-teal-accent hover:underline">online booking form</Link>.
                Provide your iPhone model, location, and preferred time—we'll confirm within minutes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-primary to-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your iPhone Screen?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional doorstep service in 60 minutes. Book now or get an instant quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/pricing" size="lg" className="!bg-teal-accent !text-navy-primary hover:!bg-teal-accent/90">
              Get Instant Quote
            </Button>
            <Button href={`tel:${phone}`} variant="ghost" size="lg" className="!border-white !text-white hover:!bg-white/10">
              <Phone className="mr-2" size={20} />
              Call: {phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
