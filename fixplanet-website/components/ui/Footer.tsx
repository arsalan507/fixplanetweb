import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@fixplanet.in';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '91XXXXXXXXXX';

  return (
    <footer className="bg-navy-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">
              FIX<span className="text-teal-accent">planet</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Bangalore&apos;s trusted independent Apple care specialists. Premium device care at your doorstep.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-teal-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-teal-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-teal-accent transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-teal-accent transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-teal-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#iphone" className="text-gray-300 hover:text-teal-accent transition-colors">iPhone Care</Link></li>
              <li><Link href="/services#macbook" className="text-gray-300 hover:text-teal-accent transition-colors">MacBook Care</Link></li>
              <li><Link href="/services#ipad" className="text-gray-300 hover:text-teal-accent transition-colors">iPad Care</Link></li>
              <li><Link href="/services#watch" className="text-gray-300 hover:text-teal-accent transition-colors">Apple Watch Care</Link></li>
              <li><Link href="/bangalore-locations" className="text-gray-300 hover:text-teal-accent transition-colors">Service Areas</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-teal-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Koramangala</li>
              <li>Indiranagar</li>
              <li>Whitefield</li>
              <li>HSR Layout</li>
              <li>Marathahalli</li>
              <li><Link href="/bangalore-locations" className="text-teal-accent hover:underline">View All Areas →</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${phone}`} className="flex items-center space-x-2 text-gray-300 hover:text-teal-accent transition-colors">
                  <Phone size={16} />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${whatsapp}`} className="flex items-center space-x-2 text-gray-300 hover:text-teal-accent transition-colors">
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="flex items-center space-x-2 text-gray-300 hover:text-teal-accent transition-colors">
                  <Mail size={16} />
                  <span>{email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bangalore, Karnataka</span>
              </li>
              <li className="text-gray-300 pt-2">
                Mon-Sun: 9 AM - 9 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300 text-center md:text-left">
              © {currentYear} FIXplanet. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-teal-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-teal-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/warranty" className="text-gray-300 hover:text-teal-accent transition-colors">
                Warranty Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">
            <p>
              FIXplanet is an independent service provider specializing in Apple products. We are not affiliated with, authorized by, or endorsed by Apple Inc.
              iPhone, iPad, MacBook, Apple Watch, and all related marks are trademarks of Apple Inc., registered in the U.S. and other countries.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
