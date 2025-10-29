'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Card from '@/components/ui/Card';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  deviceType: z.string().min(1, 'Please select a device type'),
  deviceModel: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formSource: 'contact-page',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Request submitted successfully! We\'ll contact you as soon as possible.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to submit request. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@fixplanet.in';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '91XXXXXXXXXX';

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Contact
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get Your Device Restored Today
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            60-minute response guarantee. Multiple ways to reach us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h2 className="text-2xl font-bold text-navy-primary mb-6">
                  Book Your Service Now
                </h2>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-success/10 text-success border border-success'
                        : 'bg-error/10 text-error border border-error'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      {...register('name')}
                      error={errors.name?.message}
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 9880740443"
                      {...register('phone')}
                      error={errors.phone?.message}
                      required
                    />
                  </div>

                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    error={errors.email?.message}
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Device Type"
                      {...register('deviceType')}
                      error={errors.deviceType?.message}
                      options={[
                        { value: '', label: 'Select device type' },
                        { value: 'iPhone', label: 'iPhone' },
                        { value: 'MacBook', label: 'MacBook' },
                        { value: 'iPad', label: 'iPad' },
                        { value: 'Apple Watch', label: 'Apple Watch' },
                        { value: 'Other', label: 'Other' },
                      ]}
                      required
                    />
                    <Input
                      label="Device Model"
                      placeholder="e.g., iPhone 14 Pro, MacBook Air M2"
                      {...register('deviceModel')}
                      error={errors.deviceModel?.message}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Get Free Quote
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-dark text-center">
                    We respect your privacy. Your information is secure and never shared.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <Card hover padding="lg">
                <Phone className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Call Us Now</h3>
                <a href={`tel:${phone}`} className="text-lg font-medium text-teal-accent hover:underline">
                  {phone}
                </a>
                <p className="text-sm text-gray-dark mt-2">Available 9 AM - 9 PM, 7 days</p>
              </Card>

              <Card hover padding="lg">
                <MessageCircle className="text-green-500 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Chat on WhatsApp</h3>
                <a
                  href={`https://wa.me/${whatsapp}?text=Hi%20FIXplanet,%20I%20need%20help%20with%20my%20device`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-green-500 hover:underline"
                >
                  Start Chat
                </a>
                <p className="text-sm text-gray-dark mt-2">Fastest response, share device photos</p>
              </Card>

              <Card hover padding="lg">
                <Mail className="text-teal-accent mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-navy-primary">Email Us</h3>
                <a href={`mailto:${email}`} className="text-lg font-medium text-teal-accent hover:underline break-all">
                  {email}
                </a>
                <p className="text-sm text-gray-dark mt-2">Response within 2 hours</p>
              </Card>

              <Card padding="lg" className="!bg-teal-accent text-white">
                <Clock className="text-white mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-white">Service Hours</h3>
                <p className="text-white/90">Monday - Sunday</p>
                <p className="text-xl font-bold text-white">9:00 AM - 9:00 PM</p>
                <p className="text-sm text-white/80 mt-2">Same-day service available</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy-primary mb-8 text-center">
            Areas We Serve in Bangalore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
              'BTM Layout',
              'Bannerghatta',
              'Yelahanka',
              'Hebbal',
              'Malleshwaram',
            ].map((area) => (
              <div
                key={area}
                className="bg-gray-light px-4 py-3 rounded-lg text-center font-medium text-navy-primary hover:bg-teal-accent/10 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/bangalore-locations" className="text-teal-accent hover:underline font-medium">
              View detailed service area map →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
