'use client';

import { useEffect } from 'react';

export default function ThankYouPage() {
  const contactPhone = "+91 8105955009";
  const whatsapp = "918105955009";

  useEffect(() => {
    // Fire Google Ads conversion event when page loads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17693415239/9rQSCKe4jrwbEMeu8PRB',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }, []);

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

      {/* Thank You Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <svg
              className="w-24 h-24 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            We received your request successfully
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our specialist will contact you as soon as possible
          </p>

          {/* What Happens Next */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-secondary mb-4">What happens next?</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700"><strong>Step 1:</strong> Our specialist will call you within 15-30 minutes</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700"><strong>Step 2:</strong> We'll confirm your device details and location</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700"><strong>Step 3:</strong> We'll reach your location in 60 minutes</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700"><strong>Step 4:</strong> Your device will be restored with premium quality parts</p>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href={`tel:${contactPhone}`}
              className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call {contactPhone}</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=Hi, I just submitted a request for component replacement. I'd like to speak with someone.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 mb-4">
              Need immediate assistance? We're here to help!
            </p>
            <a
              href="/"
              className="inline-block text-primary hover:text-blue-700 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-3xl font-bold text-primary">60 Min</div>
            <div className="text-xs text-gray-600 mt-1">Response Time</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-3xl font-bold text-primary">12 Months</div>
            <div className="text-xs text-gray-600 mt-1">Warranty</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-3xl font-bold text-primary">1,000+</div>
            <div className="text-xs text-gray-600 mt-1">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-3xl font-bold text-primary">4.9 ★</div>
            <div className="text-xs text-gray-600 mt-1">Rating</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm opacity-75 mb-2">© 2025 FIXplanet. All rights reserved.</p>
          <p className="text-xs opacity-75">
            FIXplanet is an independent component replacement provider and is not affiliated with, authorized by, or endorsed by Apple Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
