'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Button from './Button';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const phone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '91XXXXXXXXXX';

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-20 w-48">
              <Image
                src="/images/logo-transparent.png"
                alt="FIXplanet Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-primary hover:text-teal-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${phone}`}
              className="flex items-center space-x-2 text-navy-primary hover:text-teal-accent transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">{phone}</span>
            </a>
            <Button href="/pricing" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href={`tel:${phone}`}
              className="p-2 text-navy-primary hover:text-teal-accent transition-colors"
              aria-label="Call us"
            >
              <Phone size={22} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy-primary hover:text-teal-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-medium">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy-primary hover:text-teal-accent transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-medium">
                <Button href="/pricing" size="md" fullWidth>
                  Get Instant Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>

    {/* Floating WhatsApp Button (Mobile) */}
    <a
      href={`https://wa.me/${whatsapp}?text=Hi%20FIXplanet,%20I%20need%20help%20with%20my%20device`}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 lg:hidden"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
    </>
  );
};

export default Navigation;
