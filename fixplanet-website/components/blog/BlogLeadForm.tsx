'use client';

import { useState, FormEvent } from 'react';

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

interface BlogLeadFormProps {
  source?: string;
  title?: string;
  description?: string;
}

export default function BlogLeadForm({
  source = 'Blog Post',
  title = 'Get Your Free Quote',
  description = 'Fill in your details and we\'ll call you back within 15-30 minutes'
}: BlogLeadFormProps) {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form data
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleDeviceChange = (device: string) => {
    setSelectedDevice(device);
    setSelectedModel('');
    setSelectedIssue('');
  };

  const handleStepOne = () => {
    if (selectedDevice && selectedModel && selectedIssue) {
      setFormStep(2);
    }
  };

  const handleFinalSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name,
      phone,
      email: `${phone}@placeholder.com`, // Email field is required, using phone as placeholder
      deviceType: selectedDevice,
      deviceModel: selectedModel,
      issueDescription: selectedIssue,
      formSource: source,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try calling us directly at +91 8105955009');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-400 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
        <p className="text-gray-700 mb-4">
          We'll call you within 15-30 minutes to confirm your repair details.
        </p>
        <p className="text-sm text-gray-600">
          Check your phone for our call from +91 8105955009
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-teal-accent">
      <h3 className="text-2xl font-bold text-navy-primary mb-2">{title}</h3>
      <p className="text-gray-dark mb-6">{description}</p>

      {formStep === 1 && (
        <div className="space-y-4">
          <div>
            <label htmlFor="device" className="block text-sm font-semibold text-gray-700 mb-2">
              Device Type *
            </label>
            <select
              id="device"
              value={selectedDevice}
              onChange={(e) => handleDeviceChange(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-accent focus:outline-none bg-white"
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
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-accent focus:outline-none bg-white"
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
                What needs attention? *
              </label>
              <select
                id="issue"
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-accent focus:outline-none bg-white"
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
            className="w-full bg-teal-accent text-white py-3 rounded-lg text-lg font-bold hover:bg-teal-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        </div>
      )}

      {formStep === 2 && (
        <form onSubmit={handleFinalSubmit} className="space-y-4">
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-accent focus:outline-none"
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-accent focus:outline-none"
              placeholder="10-digit mobile number"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormStep(1)}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-teal-accent text-white py-3 rounded-lg text-lg font-bold hover:bg-teal-600 transition disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            We will call within 15–30 minutes to confirm details. Pay after completion.
          </p>

          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-teal-accent">Privacy Policy</a>
            {' '}and{' '}
            <a href="/terms" className="underline hover:text-teal-accent">Terms</a>
          </p>
        </form>
      )}
    </div>
  );
}
