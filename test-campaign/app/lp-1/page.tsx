'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

// Device models data
const deviceModels = {
  iPhone: [
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
  MacBook: ['MacBook', 'MacBook Air', 'MacBook Pro', 'Others'],
  iPad: ['iPad Standard', 'iPad Air', 'iPad Mini', 'iPad Pro', 'Others'],
  iWatch: [
    'Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5',
    'Series 6', 'Series 7', 'Series 8', 'Series 9',
    'SE 1', 'SE 2', 'Ultra', 'Ultra 2'
  ]
};

// Device issues data - Problem-based
const deviceIssues = {
  iPhone: [
    'Screen/Display Cracked or Broken',
    'Won\'t Turn On / Dead Device',
    'Battery Draining Fast / Won\'t Charge',
    'Water Damaged / Liquid Spill',
    'Back Glass Shattered',
    'Camera Not Working',
    'Charging Port Issues',
    'Speaker Not Working',
    'Other Issue'
  ],
  MacBook: [
    'Screen/Display Cracked or Broken',
    'Won\'t Turn On / Dead Device',
    'Battery Issues / Won\'t Charge',
    'Keyboard Not Working',
    'Liquid Damage / Water Spill',
    'Trackpad Issues',
    'Other Issue'
  ],
  iPad: [
    'Screen/Display Cracked or Broken',
    'Won\'t Turn On / Dead Device',
    'Battery Draining Fast',
    'Charging Port Issues',
    'Other Issue'
  ],
  iWatch: [
    'Screen Cracked or Broken',
    'Won\'t Turn On / Dead Device',
    'Battery Draining Fast',
    'Other Issue'
  ]
};

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form data
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactPhone = "+91 8105955009";
  const whatsapp = "918105955009";

  const handleDeviceChange = (device: string) => {
    setSelectedDevice(device);
    setSelectedModel(''); // Reset model when device changes
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      device: selectedDevice,
      model: selectedModel,
      issue: 'General Service Request', // Default issue since we removed the field
      name,
      phone,
      source: 'LP-1 Landing Page',
      landingPage: window.location.href,
    };

    try {
      // Send to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your request. Please try calling us directly at ' + contactPhone);
    }
  };

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">FIXplanet</h1>
          <a
            href={`tel:${contactPhone}`}
            className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* MOBILE VERSION */}
      <div className="block lg:hidden">
        {/* Heading - Mobile - Optimized to show form above fold */}
        <div className="px-4 pt-3 pb-2">
          <h2 className="text-lg font-bold text-secondary leading-tight mb-2">
            Premium iPhone® & MacBook® Parts<br />
            <span className="text-primary">+ On-Site Installation Assistance — Bangalore Only</span>
          </h2>
        </div>

        {/* Hero Image - Mobile - Reduced size to show form above fold */}
        <div className="px-4 pb-2">
          <img
            src="/lp-1/images/hero-mobile.svg"
            alt="Device Component Installation in Bangalore"
            className="mx-auto w-full max-w-[180px]"
          />
        </div>

        {/* Form - Mobile */}
        <div className="px-4 pb-3">
          <div id="quote-form" className="bg-white rounded-2xl shadow-xl p-4 border-t-4 border-primary">
            <h3 className="text-lg font-bold text-secondary mb-1">Book Installation Visit</h3>
            <p className="text-gray-600 mb-4 text-xs">Quick form - get a call in 15-30 minutes</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name-mobile" className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name-mobile"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone-mobile" className="block text-xs font-semibold text-gray-700 mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="phone-mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-sm"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label htmlFor="device-mobile" className="block text-xs font-semibold text-gray-700 mb-1">
                  Device Type *
                </label>
                <select
                  id="device-mobile"
                  value={selectedDevice}
                  onChange={(e) => handleDeviceChange(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none bg-white text-sm"
                >
                  <option value="">Select device type</option>
                  <option value="iPhone">iPhone</option>
                  <option value="MacBook">MacBook</option>
                  <option value="iPad">iPad</option>
                  <option value="iWatch">iWatch</option>
                </select>
              </div>

              {selectedDevice && (
                <div>
                  <label htmlFor="model-mobile" className="block text-xs font-semibold text-gray-700 mb-1">
                    Model *
                  </label>
                  <select
                    id="model-mobile"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none bg-white text-sm"
                  >
                    <option value="">Select model</option>
                    {deviceModels[selectedDevice as keyof typeof deviceModels]?.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !selectedDevice || !selectedModel}
                className="w-full bg-accent text-white py-2.5 rounded-lg text-base font-bold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We will call within 15–30 minutes. Pay after installation.
              </p>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms</a>
              </p>
            </form>
          </div>
        </div>

        {/* Important Disclaimer - Mobile - Below Form */}
        <div className="px-4 pb-3">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <p className="text-xs text-gray-800 leading-relaxed">
              <strong>⚠️ Important:</strong> FIXplanet provides independent on-site component installation assistance using premium OEM-grade parts. We are not an Apple Authorized Service Provider (AASP). Using third-party components may affect the manufacturer's warranty.
            </p>
          </div>
        </div>

        {/* Content - Mobile */}
        <div className="px-4 pb-8">
          <div className="space-y-3 mb-6">
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-sm"><strong>Certified Technicians Come to You</strong> - On-site at your location within 60 minutes</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-sm"><strong>OEM-Grade Components</strong> - Premium quality parts with 12-month warranty</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-sm"><strong>Transparent Pricing</strong> - Inspect parts before installation</p>
            </div>
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-sm"><strong>Pay Only After Completion</strong> - Inspect work, then pay</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-gray-600 mt-4">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span><strong>4.9/5</strong> from 1,000+ installations across Bangalore</span>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE - Content & Image */}
            <div>
              <h2 className="text-5xl font-bold text-secondary leading-tight mb-6">
                Premium iPhone® & MacBook® Parts<br />
                <span className="text-primary">+ On-Site Installation Assistance</span>
              </h2>

              <p className="text-lg text-gray-700 mb-6">Bangalore Only</p>

              {/* Important Disclaimer - Desktop - Above the Fold */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong>⚠️ Important:</strong> FIXplanet provides independent on-site component installation assistance using premium OEM-grade parts. We are not an Apple Authorized Service Provider (AASP). Using third-party components may affect the manufacturer's warranty.
                </p>
              </div>

              {/* Hero Image - Desktop */}
              <div className="mb-8">
                <img
                  src="/lp-1/images/hero-mobile.svg"
                  alt="Device Component Installation in Bangalore"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">60 Minute Response</h3>
                  <p className="text-gray-600 text-sm">Certified technicians come to your location across Bangalore</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">12-Month Warranty</h3>
                  <p className="text-gray-600 text-sm">Industry-leading warranty on installed components</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">OEM-Grade Components</h3>
                  <p className="text-gray-600 text-sm">Premium quality parts</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">4.9★ Rating</h3>
                  <p className="text-gray-600 text-sm">1,000+ satisfied customers</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Form (Sticky) */}
            <div className="lg:sticky lg:top-24">
              <div id="quote-form" className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-secondary mb-2">Book Technician Visit</h3>
                <p className="text-gray-600 mb-6">Quick form - get a call in 15-30 minutes</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="device" className="block text-sm font-semibold text-gray-700 mb-2">
                      Device Type *
                    </label>
                    <select
                      id="device"
                      value={selectedDevice}
                      onChange={(e) => handleDeviceChange(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg bg-white"
                    >
                      <option value="">Select device type</option>
                      <option value="iPhone">iPhone</option>
                      <option value="MacBook">MacBook</option>
                      <option value="iPad">iPad</option>
                      <option value="iWatch">iWatch</option>
                    </select>
                  </div>

                  {selectedDevice && (
                    <div>
                      <label htmlFor="model" className="block text-sm font-semibold text-gray-700 mb-2">
                        Model *
                      </label>
                      <select
                        id="model"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg bg-white"
                      >
                        <option value="">Select model</option>
                        {deviceModels[selectedDevice as keyof typeof deviceModels]?.map((model) => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedDevice || !selectedModel}
                    className="w-full bg-accent text-white py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We will call within 15–30 minutes. Pay after installation.
                  </p>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Simple 3-step process
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Book a Visit</h3>
              <p className="text-gray-600">Use the form to request a technician visit</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Technician Arrives</h3>
              <p className="text-gray-600">Technician arrives, inspects the device and presents components</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Installation Complete</h3>
              <p className="text-gray-600">Technician completes installation; you inspect and then pay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm opacity-90">Installations Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">60 Minutes</div>
              <div className="text-sm opacity-90">Average Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12 Months</div>
              <div className="text-sm opacity-90">Warranty</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9 ★</div>
              <div className="text-sm opacity-90">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Customer Stories from Bangalore
          </h2>
          <p className="text-center text-gray-600 mb-12">
            See what customers say about our installation service
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "They installed a premium front display on my iPhone 14 at my office. Works perfectly after 6 months."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Priya Sharma</p>
                <p className="text-sm text-gray-600">Koramangala</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Technician came in 45 mins and installed a new display on my iPhone 15 Pro. Transparent and professional."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Rahul Mehta</p>
                <p className="text-sm text-gray-600">Indiranagar</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Screen cracked badly on my iPhone 13. Specialist showed me the parts before installing. It's been 8 months and the screen still looks brand new!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Anjali Reddy</p>
                <p className="text-sm text-gray-600">Whitefield</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "My MacBook Pro display was cracked. FIXplanet came to Marathahalli same day and installed a new screen. They were transparent about the process and the display quality is excellent."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Vikram Singh</p>
                <p className="text-sm text-gray-600">Marathahalli</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "iPhone 12 screen and back glass both shattered. FIXplanet installed both components at my location in Bellandur. The specialist was professional and explained everything. Device looks brand new now!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Meera Krishnan</p>
                <p className="text-sm text-gray-600">Bellandur</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Completely shattered my iPhone 14 Plus screen. Needed it urgently for work. FIXplanet reached JP Nagar in 50 minutes and completed installation in an hour. Screen quality is fantastic!"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-secondary">Arjun Patel</p>
                <p className="text-sm text-gray-600">JP Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Q: Are you Apple authorized?</h3>
              <p className="text-gray-700">No. We are an independent provider offering premium OEM-grade components and technician installation assistance. Manufacturer warranties may be affected.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Q: Do you offer a warranty?</h3>
              <p className="text-gray-700">Yes — 12-month warranty on installed components.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Q: How long does it take?</h3>
              <p className="text-gray-700">Typical response time is 60 minutes. Installation usually takes 30-90 minutes depending on the component.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Q: When do I pay?</h3>
              <p className="text-gray-700">Only after you inspect the completed work and are satisfied with the installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Guarantee Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Our Promise to You
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Your satisfaction and trust are our top priorities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Promise 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">12-Month Warranty</h3>
              <p className="text-sm text-gray-600">Industry-leading parts warranty on all installations</p>
            </div>

            {/* Promise 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">30-Day Satisfaction Guarantee</h3>
              <p className="text-sm text-gray-600">Not satisfied? We'll make it right</p>
            </div>

            {/* Promise 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Watch the Work Live</h3>
              <p className="text-sm text-gray-600">Complete transparency - see every step of the process</p>
            </div>

            {/* Promise 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Pay After Satisfaction</h3>
              <p className="text-sm text-gray-600">Only pay once you're completely satisfied</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-center text-secondary mb-6">Additional Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Free Assessment (₹500 value)</p>
                  <p className="text-sm text-gray-600">Complete device assessment at no cost</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Premium OEM-Grade Components</p>
                  <p className="text-sm text-gray-600">High-quality parts for lasting performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Same-Day Installation Available</p>
                  <p className="text-sm text-gray-600">Get your device back the same day</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Technicians Come To You Across Bangalore</p>
                  <p className="text-sm text-gray-600">At your preferred location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote CTA Section - Before Footer */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Component Installation?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Fill the form above and we'll call you within 15-30 minutes
          </p>
          <button
            onClick={scrollToForm}
            className="bg-accent text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-orange-600 transition shadow-2xl"
          >
            Book Visit Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 mb-8">
            <div>
              <p className="font-bold text-lg mb-2">FIXplanet</p>
              <p className="text-sm opacity-75">Premium Parts + Installation Assistance — Bangalore</p>
              <div className="mt-4 text-sm">
                <p className="opacity-75">📞 <a href={`tel:${contactPhone}`} className="hover:text-primary">{contactPhone}</a></p>
                <p className="opacity-75 mt-1">📧 <a href="mailto:hello@fixplanet.in" className="hover:text-primary">hello@fixplanet.in</a></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="/data-protection-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Privacy & Data Protection</a>
              <a href="/disclaimer.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Legal Disclaimer</a>
              <a href="/shipping-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Service Delivery Policy</a>
              <a href="/return-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Return & Refund Policy</a>
              <a href="/privacy" className="hover:text-primary transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>

          {/* Enhanced Disclaimers Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="bg-white/10 p-6 rounded-xl mb-6">
              <h3 className="font-bold text-lg mb-4">Important Disclaimers</h3>

              <div className="space-y-4 text-xs opacity-90">
                <div>
                  <p className="font-semibold mb-1">✓ Independent Component Installation Provider</p>
                  <p>FIXplanet is an independent device care specialist. We are not affiliated with, authorized by, sponsored by, or endorsed by Apple Inc. or any device manufacturer. We provide independent installation assistance using OEM-grade parts.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">✓ Quality Components</p>
                  <p>We use premium quality, OEM-grade components for all installations. These are high-quality aftermarket parts that meet or exceed original specifications. Original manufacturer parts are available upon request at additional cost.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">✓ Warranty Coverage</p>
                  <p>Our 12-month warranty covers the installed components only, not pre-existing device issues or future accidental damage. Warranty is void if device is serviced elsewhere or subjected to physical/liquid damage after our service.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">✓ Process Transparency</p>
                  <p>All work is performed at your location in Bangalore. You can watch the entire process and we explain each step clearly. We believe in complete transparency throughout.</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">✓ Manufacturer Warranty Impact</p>
                  <p>Using third-party component installation services may affect your device's manufacturer warranty. Please check your device warranty status before proceeding. We are happy to discuss this with you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs opacity-75 pt-6 border-t border-white/20">
            <p className="mb-2">© 2025 FIXplanet. All rights reserved.</p>
            <p className="mb-2">iPhone®, MacBook®, iPad®, and Apple Watch® are registered trademarks of Apple Inc.</p>
            <p>FIXplanet is an independent component installation provider and is not affiliated with, authorized by, or endorsed by Apple Inc.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
