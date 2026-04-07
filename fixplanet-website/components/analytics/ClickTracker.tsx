'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Global click tracker for Call, WhatsApp, and key CTA buttons.
 * Listens on document and matches links by href pattern.
 * Fires GA4 events so clicks show up in Analytics > Events.
 */
export default function ClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a');
      if (!link || !window.gtag) return;

      const href = link.getAttribute('href') || '';

      // Phone call clicks
      if (href.startsWith('tel:')) {
        window.gtag('event', 'call_click', {
          event_category: 'engagement',
          event_label: href.replace('tel:', ''),
          link_url: href,
          page_location: window.location.href,
        });
      }

      // WhatsApp clicks
      if (href.includes('wa.me') || href.includes('whatsapp')) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: link.textContent?.trim().substring(0, 50) || 'WhatsApp',
          link_url: href,
          page_location: window.location.href,
        });
      }

      // Pricing calculator link
      if (href === '/pricing') {
        window.gtag('event', 'pricing_click', {
          event_category: 'engagement',
          event_label: link.textContent?.trim().substring(0, 50) || 'Pricing',
          page_location: window.location.href,
        });
      }

      // Contact/book form link
      if (href === '/contact') {
        window.gtag('event', 'contact_click', {
          event_category: 'engagement',
          event_label: link.textContent?.trim().substring(0, 50) || 'Contact',
          page_location: window.location.href,
        });
      }

      // Referral page
      if (href === '/refer') {
        window.gtag('event', 'referral_click', {
          event_category: 'engagement',
          event_label: 'Refer Page',
          page_location: window.location.href,
        });
      }

      // Care plan page
      if (href === '/care-plan') {
        window.gtag('event', 'careplan_click', {
          event_category: 'engagement',
          event_label: 'Care Plan Page',
          page_location: window.location.href,
        });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
