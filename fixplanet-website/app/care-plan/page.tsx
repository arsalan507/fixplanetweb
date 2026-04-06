import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, X, Crown, Zap, MessageCircle, Phone } from 'lucide-react';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GuaranteeBox from '@/components/ui/GuaranteeBox';

export const metadata: Metadata = {
  title: 'Annual Care Plan — Priority Repairs, Extended Warranty | FIXplanet',
  description: 'FIXplanet Annual Care Plan: priority doorstep service, extended 18-month warranty, 2 free diagnostics, 15% off all repairs. From ₹2,999/year for iPhone.',
  alternates: {
    canonical: 'https://www.fixplanet.in/care-plan',
  },
};

const plans = [
  {
    name: 'iPhone Care',
    price: '2,999',
    period: '/year',
    icon: Zap,
    popular: false,
    features: [
      { text: '18-month warranty on all repairs', included: true },
      { text: '2 free diagnostics per year', included: true },
      { text: '15% off all repair services', included: true },
      { text: 'Priority scheduling (2-hour window)', included: true },
      { text: 'Free battery health check every 6 months', included: true },
      { text: 'WhatsApp priority support line', included: true },
      { text: 'MacBook coverage', included: false },
      { text: 'Multi-device coverage', included: false },
    ],
  },
  {
    name: 'Apple Ecosystem',
    price: '4,999',
    period: '/year',
    icon: Crown,
    popular: true,
    features: [
      { text: '18-month warranty on all repairs', included: true },
      { text: '4 free diagnostics per year', included: true },
      { text: '20% off all repair services', included: true },
      { text: 'Priority scheduling (1-hour window)', included: true },
      { text: 'Free battery health check every 6 months', included: true },
      { text: 'WhatsApp priority support line', included: true },
      { text: 'Covers iPhone + MacBook + iPad', included: true },
      { text: 'Free screen protector with every screen repair', included: true },
    ],
  },
  {
    name: 'Business',
    price: '9,999',
    period: '/year',
    icon: Shield,
    popular: false,
    features: [
      { text: '24-month warranty on all repairs', included: true },
      { text: 'Unlimited diagnostics', included: true },
      { text: '25% off all repair services', included: true },
      { text: 'Same-day priority (30-min response)', included: true },
      { text: 'Covers up to 5 devices (any Apple)', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Monthly device health reports', included: true },
      { text: 'Free accessories (screen protector + case)', included: true },
    ],
  },
];

export default function CarePlanPage() {
  const whatsapp = '918105955009';

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom text-center">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Annual Care Plan
          </nav>
          <span className="badge badge-gold text-base px-4 py-2 mb-4 inline-block">Save Up to 60% on Repairs</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Annual Care Plan — Never Worry About Repair Bills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One yearly payment. Priority service. Extended warranty. Discounts on every repair.
            Like AppleCare+ but for doorstep service — and half the price.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} padding="lg" className={`relative card-3d ${plan.popular ? 'border-2 border-teal-accent' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="badge badge-gold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <plan.icon className="text-teal-accent mx-auto mb-3" size={40} />
                  <h3 className="text-2xl font-bold text-navy-primary">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-navy-primary">₹{plan.price}</span>
                    <span className="text-gray-dark">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-dark mt-1">
                    That&apos;s just ₹{Math.round(parseInt(plan.price.replace(',', '')) / 12)}/month
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2">
                      {feature.included ? (
                        <CheckCircle2 size={18} className="text-teal-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-navy-primary' : 'text-gray-400'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi FIXplanet! I'm interested in the ${plan.name} Care Plan (₹${plan.price}/year). Please share more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-semibold rounded-lg px-6 py-3 transition-colors ${
                    plan.popular
                      ? 'bg-teal-accent hover:bg-teal-600 text-white'
                      : 'bg-navy-primary hover:bg-navy-dark text-white'
                  }`}
                >
                  Get {plan.name} Plan
                </a>
              </Card>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-navy-primary text-center mb-8">
            Why the Care Plan Pays for Itself
          </h2>
          <ScrollReveal>
          <div className="bg-navy-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-primary mb-4">Example: iPhone 15 Pro owner over 12 months</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span>Screen replacement (₹8,500)</span>
                <div className="text-right">
                  <span className="text-gray-400 line-through mr-2">₹8,500</span>
                  <span className="font-bold text-teal-accent">₹7,225</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span>Battery replacement (₹4,500)</span>
                <div className="text-right">
                  <span className="text-gray-400 line-through mr-2">₹4,500</span>
                  <span className="font-bold text-teal-accent">₹3,825</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span>2 diagnostic visits</span>
                <div className="text-right">
                  <span className="text-gray-400 line-through mr-2">₹1,000</span>
                  <span className="font-bold text-teal-accent">FREE</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span>Care Plan cost</span>
                <span className="font-bold text-navy-primary">-₹2,999</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-teal-accent/10 rounded-lg px-4 mt-4">
                <span className="font-bold text-navy-primary text-lg">Your total savings</span>
                <span className="font-bold text-teal-accent text-2xl">₹2,951</span>
              </div>
            </div>
            <p className="text-sm text-gray-dark text-center">
              Plus: 18-month warranty instead of 12, priority scheduling, and WhatsApp priority support.
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 bg-gray-light">
        <div className="container-custom max-w-4xl">
          <ScrollReveal>
            <GuaranteeBox />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About the Care Plan?</h2>
          <p className="text-gray-300 mb-8 text-lg">We&apos;ll help you choose the right plan for your devices</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hi! I want to know more about FIXplanet Care Plans.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white"
            >
              <MessageCircle className="mr-2" size={22} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+918105955009"
              className="inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white border-2 border-white hover:bg-white hover:text-navy-primary transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call +91 8105955009
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
