import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | FIXplanet',
  description: 'FIXplanet terms of service. Read our terms and conditions for Apple device care services in Bangalore.',
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Terms of Service
          </nav>
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-gray-300 mt-2">Last updated: October 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using FIXplanet&apos;s services, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>FIXplanet provides independent Apple device care services including:</p>
            <ul>
              <li>Device diagnostics and assessment</li>
              <li>Hardware repairs and component replacement</li>
              <li>Software troubleshooting (limited)</li>
              <li>Doorstep service in select Bangalore locations</li>
              <li>Pick-up and delivery services</li>
            </ul>
            <p className="font-semibold">
              Important: FIXplanet is an independent service provider and is not affiliated with, authorized by, endorsed by, or in any way officially connected with Apple Inc.
            </p>

            <h2>3. Service Areas</h2>
            <p>
              Our doorstep and pick-up services are available in select areas of Bangalore, including but not limited to Koramangala, Indiranagar, Whitefield, HSR Layout, Marathahalli, and nearby locations. Service availability and response times may vary based on location and technician availability.
            </p>

            <h2>4. Service Tiers and Timelines</h2>
            <ul>
              <li><strong>Standard Service (24-48 hours)</strong>: Base pricing with doorstep service</li>
              <li><strong>Premium Service (Same day)</strong>: 30% additional charge, 4-hour response time</li>
              <li><strong>Elite Service (2-4 hours)</strong>: 60% additional charge, 24/7 emergency service with loaner device option</li>
            </ul>
            <p>
              Timelines are estimates and may vary based on parts availability, complexity of repair, and unforeseen circumstances.
            </p>

            <h2>5. Pricing and Payment</h2>
            <ul>
              <li>All prices quoted are in Indian Rupees (INR)</li>
              <li>Diagnostic fee applies for assessment (waived if repair is proceeded with)</li>
              <li>Final pricing will be confirmed after device diagnosis</li>
              <li>Payment is due upon completion of service</li>
              <li>We accept cash, UPI, and digital payment methods</li>
              <li>Prices are subject to change without notice</li>
            </ul>

            <h2>6. Customer Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information about device issues and history</li>
              <li>Back up all data before service (we are not responsible for data loss)</li>
              <li>Remove all passwords, locks, and Find My Device features before service</li>
              <li>Remove all personal belongings from device cases/covers</li>
              <li>Be available at the specified address during doorstep service</li>
              <li>Pay for services rendered in a timely manner</li>
            </ul>

            <h2>7. Data Backup and Privacy</h2>
            <p>
              <strong>Critical:</strong> You are solely responsible for backing up your data before any service. FIXplanet is not responsible for any data loss during repair or service. We recommend using iCloud or iTunes backup before proceeding with any repair.
            </p>
            <p>
              While our technicians take precautions to protect your data, some repairs may require device reset or data wiping. We respect your privacy and do not access or copy your personal data.
            </p>

            <h2>8. Warranty Terms</h2>
            <p>
              FIXplanet provides a 12-month warranty on parts and workmanship for all repairs (unless otherwise specified). Please refer to our <Link href="/warranty" className="text-teal-accent hover:underline">Warranty Policy</Link> for complete details.
            </p>

            <h2>9. Limitations of Liability</h2>
            <p>FIXplanet shall not be liable for:</p>
            <ul>
              <li>Data loss or corruption during repair</li>
              <li>Pre-existing conditions not disclosed by the customer</li>
              <li>Damage caused by liquid, physical trauma, or unauthorized repairs</li>
              <li>Incompatibility issues with third-party accessories or software</li>
              <li>Delays due to parts unavailability or supply chain issues</li>
              <li>Consequential, indirect, or incidental damages</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2>10. Device Assessment and Cancellation</h2>
            <ul>
              <li>Diagnostic fee of ₹500 applies for device assessment</li>
              <li>Diagnostic fee is waived if you proceed with the recommended repair</li>
              <li>If repair is not feasible or economical, we will inform you before proceeding</li>
              <li>You have the right to decline service after diagnosis</li>
              <li>Diagnostic fees are non-refundable</li>
            </ul>

            <h2>11. Parts and Components</h2>
            <p>
              We use OEM-grade components that meet or exceed original specifications. While we strive to use the highest quality parts, we cannot guarantee Apple original parts for all repairs. Some repairs may use compatible parts that match OEM specifications.
            </p>

            <h2>12. Abandoned Devices</h2>
            <p>
              Devices not collected within 30 days of service completion will be considered abandoned. We reserve the right to dispose of abandoned devices after reasonable attempts to contact the owner. Storage fees may apply after 30 days.
            </p>

            <h2>13. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Provide false information about device ownership or history</li>
              <li>Request service for stolen or illegally obtained devices</li>
              <li>Abuse, threaten, or harass our staff or technicians</li>
              <li>Use our services for any illegal purpose</li>
              <li>Reverse engineer or misuse our service processes</li>
            </ul>

            <h2>14. Intellectual Property</h2>
            <p>
              All content on the FIXplanet website, including text, graphics, logos, and software, is the property of FIXplanet or its licensors and is protected by copyright and trademark laws. Apple, iPhone, iPad, MacBook, and Apple Watch are trademarks of Apple Inc.
            </p>

            <h2>15. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka, India.
            </p>

            <h2>16. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless FIXplanet, its employees, and technicians from any claims, damages, or expenses arising from your violation of these terms or misuse of our services.
            </p>

            <h2>17. Modifications to Terms</h2>
            <p>
              FIXplanet reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify customers of significant changes via email or website notice.
            </p>

            <h2>18. Force Majeure</h2>
            <p>
              FIXplanet shall not be liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, strikes, or supply chain disruptions.
            </p>

            <h2>19. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2>20. Entire Agreement</h2>
            <p>
              These Terms of Service, along with our Privacy Policy and Warranty Policy, constitute the entire agreement between you and FIXplanet regarding our services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: hello@fixplanet.in</li>
              <li>Phone: +91 9880740443</li>
              <li>Service Areas: Bangalore, Karnataka</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
