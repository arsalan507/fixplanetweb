'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

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

// Device issues data
const deviceIssues = {
  iPhone: [
    'Original screen', 'Premium screen', 'Touch & glass',
    'Battery', 'Charging port', 'Ear speaker', 'Loud speaker',
    'Backglass', 'Others'
  ],
  MacBook: [
    'Screen', 'Battery', 'Keyboard', 'Liquid damage',
    'Not powering on', 'Others'
  ],
  iPad: [
    'Touch & glass', 'Screen', 'Battery', 'Charging port', 'Others'
  ],
  iWatch: [
    'Screen', 'Touch & glass', 'Battery', 'Others'
  ]
};

export default function Home() {
  const [formStep, setFormStep] = useState(1); // 1: device selection, 2: contact info, 3: thank you
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  // Form data
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactPhone = "+91 9880740443";
  const whatsapp = "919880740443";

  const handleDeviceChange = (device: string) => {
    setSelectedDevice(device);
    setSelectedModel(''); // Reset model when device changes
    setSelectedIssue(''); // Reset issue when device changes
  };

  const handleStepOne = () => {
    if (selectedDevice && selectedModel && selectedIssue) {
      setIsFlipping(true);
      setTimeout(() => {
        setFormStep(2);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleFinalSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      device: selectedDevice,
      model: selectedModel,
      issue: selectedIssue,
      name,
      phone,
      source: 'Google Ads Landing Page',
    };

    // Log form submission (in production, send to your backend)
    console.log('Form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsFlipping(true);
    setTimeout(() => {
      setFormStep(3);
      setIsFlipping(false);
    }, 600);
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

      <style jsx>{`
        @keyframes flipOut {
          from {
            transform: rotateY(0deg);
            opacity: 1;
          }
          to {
            transform: rotateY(90deg);
            opacity: 0;
          }
        }

        @keyframes flipIn {
          from {
            transform: rotateY(-90deg);
            opacity: 0;
          }
          to {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .flip-out {
          animation: flipOut 0.6s ease-in-out;
        }

        .flip-in {
          animation: flipIn 0.6s ease-in-out;
        }
      `}</style>

      {/* MOBILE VERSION */}
      <div className="block lg:hidden">
        {/* Hero Image - Mobile */}
        <div className="px-4 pt-6 pb-4">
          <Image
            src="/images/hero-mobile.svg"
            alt="Device Repair Service in Bangalore"
            width={280}
            height={210}
            className="mx-auto w-full max-w-sm"
            priority
          />
        </div>

        {/* Form - Mobile */}
        <div className="px-4 pb-8">
          <div id="quote-form" className={`bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-primary ${isFlipping ? 'flip-out' : 'flip-in'}`}>
            {formStep === 1 && (
              <>
                <h3 className="text-xl font-bold text-secondary mb-2">Get Your Device Fixed Today</h3>
                <p className="text-gray-600 mb-6 text-sm">Select your device details below</p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="device-mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                      Device Type *
                    </label>
                    <select
                      id="device-mobile"
                      value={selectedDevice}
                      onChange={(e) => handleDeviceChange(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none bg-white"
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
                      <label htmlFor="model-mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                        Model *
                      </label>
                      <select
                        id="model-mobile"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none bg-white"
                      >
                        <option value="">Select model</option>
                        {deviceModels[selectedDevice as keyof typeof deviceModels]?.map((model) => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {selectedDevice && selectedModel && (
                    <div>
                      <label htmlFor="issue-mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                        Issue *
                      </label>
                      <select
                        id="issue-mobile"
                        value={selectedIssue}
                        onChange={(e) => setSelectedIssue(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none bg-white"
                      >
                        <option value="">Select issue</option>
                        {deviceIssues[selectedDevice as keyof typeof deviceIssues]?.map((issue) => (
                          <option key={issue} value={issue}>{issue}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button
                    onClick={handleStepOne}
                    disabled={!selectedDevice || !selectedModel || !selectedIssue}
                    className="w-full bg-accent text-white py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </>
            )}

            {formStep === 2 && (
              <>
                <h3 className="text-xl font-bold text-secondary mb-2">Almost There!</h3>
                <p className="text-gray-600 mb-6 text-sm">Enter your contact details</p>

                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name-mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name-mobile"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone-mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone-mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms</a>
                  </p>
                </form>
              </>
            )}

            {formStep === 3 && (
              <div className="text-center py-8">
                <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">We received your request successfully</p>
                <p className="text-sm text-gray-500">Our team will call you as soon as possible</p>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800">
                    Need immediate assistance?
                  </p>
                  <a href={`tel:${contactPhone}`} className="text-blue-600 font-bold text-lg">
                    Call {contactPhone}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content - Mobile */}
        <div className="px-4 pb-8">
          <h2 className="text-3xl font-bold text-secondary leading-tight mb-6">
            Device Issues?<br />
            <span className="text-primary">We Fix It Today</span>
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-base"><strong>Doorstep Service</strong> - We come to you in 60 minutes</p>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-base"><strong>Premium Quality Parts</strong> - Original quality guaranteed</p>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-base"><strong>12-Month Warranty</strong> - Complete peace of mind</p>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-base"><strong>Same-Day Service</strong> - Fast repair in Bangalore</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-sm font-semibold text-yellow-800">
              🔥 Limited Time: <span className="underline">Free diagnosis worth ₹500</span> with every repair
            </p>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span><strong>4.9/5</strong> from 1,000+ happy customers</span>
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
                Device Issues?<br />
                <span className="text-primary">We Fix It Today</span>
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="font-semibold text-yellow-800">
                  🔥 Limited Time: <span className="underline">Free diagnosis worth ₹500</span> with every repair
                </p>
              </div>

              {/* Hero Image - Desktop */}
              <div className="mb-8">
                <Image
                  src="/images/hero-mobile.svg"
                  alt="Device Repair Service in Bangalore"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-xl"
                  priority
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
                  <h3 className="font-bold text-lg mb-2">60 Minute Service</h3>
                  <p className="text-gray-600 text-sm">Doorstep service across Bangalore</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">12-Month Warranty</h3>
                  <p className="text-gray-600 text-sm">Industry-leading protection</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Premium Quality Parts</h3>
                  <p className="text-gray-600 text-sm">Original quality parts</p>
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
              <div id="quote-form" className={`bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-primary ${isFlipping ? 'flip-out' : 'flip-in'}`}>
                {formStep === 1 && (
                  <>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Get Your Device Fixed Today</h3>
                    <p className="text-gray-600 mb-6">Select your device details below</p>

                    <div className="space-y-5">
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

                      {selectedDevice && selectedModel && (
                        <div>
                          <label htmlFor="issue" className="block text-sm font-semibold text-gray-700 mb-2">
                            Issue *
                          </label>
                          <select
                            id="issue"
                            value={selectedIssue}
                            onChange={(e) => setSelectedIssue(e.target.value)}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-lg bg-white"
                          >
                            <option value="">Select issue</option>
                            {deviceIssues[selectedDevice as keyof typeof deviceIssues]?.map((issue) => (
                              <option key={issue} value={issue}>{issue}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <button
                        onClick={handleStepOne}
                        disabled={!selectedDevice || !selectedModel || !selectedIssue}
                        className="w-full bg-accent text-white py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Get Free Quote →
                      </button>
                    </div>
                  </>
                )}

                {formStep === 2 && (
                  <>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Almost There!</h3>
                    <p className="text-gray-600 mb-6">Enter your contact details</p>

                    <form onSubmit={handleFinalSubmit} className="space-y-5">
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

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-white py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you agree to our <a href="/privacy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms</a>
                      </p>
                    </form>
                  </>
                )}

                {formStep === 3 && (
                  <div className="text-center py-8">
                    <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">We received your request successfully</p>
                    <p className="text-sm text-gray-500">Our team will call you as soon as possible</p>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm font-semibold text-blue-800">
                        Need immediate assistance?
                      </p>
                      <a href={`tel:${contactPhone}`} className="text-blue-600 font-bold text-lg">
                        Call {contactPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">1,000+</div>
              <div className="text-sm opacity-90">Devices Fixed</div>
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

      {/* Get Quote CTA Section - Before Footer */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Fill the form above and we'll call you as soon as possible
          </p>
          <button
            onClick={scrollToForm}
            className="bg-accent text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-orange-600 transition shadow-2xl"
          >
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="font-bold text-lg">FIXplanet</p>
              <p className="text-sm opacity-75">Professional Device Repair in Bangalore</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-primary transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
          <div className="text-center text-xs opacity-75 mt-6">
            <p>© 2025 FIXplanet. All rights reserved.</p>
            <p className="mt-2">FIXplanet is an independent service provider. Not affiliated with Apple Inc.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={`https://wa.me/${whatsapp}?text=Hi%20FIXplanet!%20I%20need%20help%20with%20my%20device`}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 lg:hidden"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
