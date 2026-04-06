import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, Users, ArrowRight, CheckCircle2, MessageCircle, Share2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Refer & Earn ₹500 — FIXplanet Referral Program',
  description: 'Refer a friend to FIXplanet and earn ₹500 off your next repair. Your friend gets ₹500 off too. No limits. Share via WhatsApp.',
  alternates: {
    canonical: 'https://www.fixplanet.in/refer',
  },
};

export default function ReferPage() {
  const whatsapp = '918105955009';
  const referralMessage = encodeURIComponent(
    "Hey! I used FIXplanet for my iPhone/MacBook repair — they come to your doorstep, fix it in front of you, and give 12-month warranty. Use my referral and you'll get ₹500 off. Book here: https://www.fixplanet.in/?ref=friend or WhatsApp them: https://wa.me/918105955009?text=Hi!%20I%20was%20referred%20by%20a%20friend"
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom text-center">
          <div className="mb-4">
            <span className="badge badge-gold text-base px-4 py-2">Earn ₹500 Per Referral</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Refer a Friend. Both Get ₹500 Off.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Know someone with a cracked screen or dying battery? Share FIXplanet with them.
            They get ₹500 off their first repair. You get ₹500 off your next one.
          </p>
          <a
            href={`https://wa.me/?text=${referralMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white"
          >
            <Share2 className="mr-2" size={22} />
            Share on WhatsApp Now
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-primary text-center mb-12">
            How It Works — 3 Simple Steps
          </h2>
          <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card padding="lg" className="text-center card-3d relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-teal-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</span>
              </div>
              <Share2 className="text-teal-accent mx-auto mb-4 mt-4" size={40} />
              <h3 className="text-xl font-bold text-navy-primary mb-2">Share the Link</h3>
              <p className="text-gray-dark">
                Tap the WhatsApp button above to share FIXplanet with a friend who needs a repair.
              </p>
            </Card>

            <Card padding="lg" className="text-center card-3d relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-teal-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</span>
              </div>
              <Users className="text-teal-accent mx-auto mb-4 mt-4" size={40} />
              <h3 className="text-xl font-bold text-navy-primary mb-2">Friend Books a Repair</h3>
              <p className="text-gray-dark">
                They mention your name when booking. They get <strong className="text-teal-accent">₹500 off</strong> their first repair.
              </p>
            </Card>

            <Card padding="lg" className="text-center card-3d relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-teal-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</span>
              </div>
              <Gift className="text-teal-accent mx-auto mb-4 mt-4" size={40} />
              <h3 className="text-xl font-bold text-navy-primary mb-2">You Earn ₹500</h3>
              <p className="text-gray-dark">
                After their repair is complete, you get <strong className="text-teal-accent">₹500 off</strong> your next service. No limit on referrals.
              </p>
            </Card>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Refer */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-primary text-center mb-8">
            Why Your Friends Will Thank You
          </h2>
          <div className="space-y-4">
            {[
              'If we can\'t fix it, they pay ₹0 — zero risk',
              'Same-day doorstep service — we come to their location',
              '12-month warranty — 4x longer than Apple Store',
              'Watch every step — full transparency, no secrets',
              'Plus ₹500 off their first repair with your referral',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-teal-accent flex-shrink-0 mt-0.5" size={22} />
                <span className="text-navy-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math Section — Hormozi "make it real" */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-primary mb-6">
            The Math: Refer 5 Friends = Free iPhone Screen Repair
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-teal-accent/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-accent">5</div>
              <div className="text-sm text-gray-dark mt-1">Friends Referred</div>
            </div>
            <div className="bg-teal-accent/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-accent">×₹500</div>
              <div className="text-sm text-gray-dark mt-1">Credit Each</div>
            </div>
            <div className="bg-navy-primary rounded-xl p-6">
              <div className="text-3xl font-bold text-white">₹2,500</div>
              <div className="text-sm text-gray-300 mt-1">Free Repair Value</div>
            </div>
          </div>
          <p className="text-gray-dark mb-8">
            That&apos;s enough to cover a full iPhone battery replacement. No limits — refer 10 friends and earn ₹5,000 in credits.
          </p>
          <a
            href={`https://wa.me/?text=${referralMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center font-medium rounded-lg px-8 py-4 text-lg text-white"
          >
            <MessageCircle className="mr-2" size={22} />
            Start Sharing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-light">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-primary mb-6 text-center">Referral FAQ</h2>
          <div className="space-y-3">
            {[
              { q: 'Is there a limit on referrals?', a: 'No. Refer as many friends as you want. Each successful referral earns you ₹500.' },
              { q: 'How does my friend claim the discount?', a: 'They just mention your name when booking via WhatsApp or call. We apply ₹500 off automatically.' },
              { q: 'When do I get my credit?', a: 'Your ₹500 credit activates after your friend\'s repair is completed and paid for.' },
              { q: 'Can I use multiple credits at once?', a: 'Yes. If you\'ve referred 3 friends, you can use ₹1,500 credit on a single repair.' },
              { q: 'Do credits expire?', a: 'Credits are valid for 12 months from the date of your friend\'s completed repair.' },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-navy-primary hover:bg-gray-50">
                  {faq.q}
                  <span className="ml-4 text-teal-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-4 pb-4 text-gray-dark">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
