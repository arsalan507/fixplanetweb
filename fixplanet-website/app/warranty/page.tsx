import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Warranty Policy | FIXplanet',
  description: 'FIXplanet warranty policy. Learn about our 12-month warranty coverage on Apple device repairs in Bangalore.',
};

export default function WarrantyPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Warranty Policy
          </nav>
          <h1 className="text-4xl font-bold text-white">Warranty Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: October 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Our Warranty Commitment</h2>
            <p>
              At FIXplanet, we stand behind the quality of our work. All repairs come with a comprehensive 12-month warranty on parts and workmanship, giving you peace of mind that your device is protected.
            </p>

            <h2>1. Warranty Coverage Period</h2>
            <ul>
              <li><strong>Standard Repairs:</strong> 12 months from date of service completion</li>
              <li><strong>Battery Replacements:</strong> 12 months on battery health and performance</li>
              <li><strong>Screen Replacements:</strong> 12 months on display and touch functionality</li>
              <li><strong>Other Components:</strong> 12 months on replaced parts and associated labor</li>
            </ul>
            <p>
              Warranty period begins on the date of service completion as stated on your invoice.
            </p>

            <h2>2. What is Covered</h2>
            <p>Our warranty covers:</p>
            <ul>
              <li>Defects in parts supplied by FIXplanet</li>
              <li>Workmanship errors during repair</li>
              <li>Malfunction of replaced components under normal use</li>
              <li>Issues directly related to the repair performed</li>
              <li>Free re-repair or replacement of defective parts</li>
              <li>Labor costs for warranty-covered repairs</li>
            </ul>

            <h2>3. What is NOT Covered</h2>
            <p>This warranty does not cover:</p>

            <h3>3.1 Physical Damage</h3>
            <ul>
              <li>Drops, impacts, or physical trauma after repair</li>
              <li>Cracked screens or damaged components from mishandling</li>
              <li>Crushing, bending, or any external force damage</li>
            </ul>

            <h3>3.2 Liquid Damage</h3>
            <ul>
              <li>Water damage, liquid spills, or moisture exposure</li>
              <li>Corrosion from liquid contact</li>
              <li>Damage from humidity or condensation</li>
            </ul>

            <h3>3.3 Unauthorized Modifications</h3>
            <ul>
              <li>Repairs or modifications by other service providers</li>
              <li>Tampering with repaired components</li>
              <li>Opening device or removing warranty seals</li>
              <li>Use of incompatible or unauthorized accessories</li>
            </ul>

            <h3>3.4 Software Issues</h3>
            <ul>
              <li>Software updates or iOS/macOS problems (unless directly caused by our repair)</li>
              <li>Data loss or corruption</li>
              <li>App compatibility issues</li>
              <li>iCloud, Apple ID, or activation lock issues</li>
              <li>Jailbreaking or software modifications</li>
            </ul>

            <h3>3.5 Normal Wear and Tear</h3>
            <ul>
              <li>Battery capacity degradation beyond normal expectations (battery health above 80% is considered normal)</li>
              <li>Cosmetic wear, scratches, or discoloration</li>
              <li>Minor screen imperfections that don&apos;t affect functionality</li>
            </ul>

            <h3>3.6 Pre-existing Conditions</h3>
            <ul>
              <li>Issues present before our repair but not disclosed</li>
              <li>Problems with components not serviced by FIXplanet</li>
              <li>Age-related device degradation unrelated to our work</li>
            </ul>

            <h3>3.7 Other Exclusions</h3>
            <ul>
              <li>Misuse, abuse, or negligence</li>
              <li>Use in extreme temperatures or environments</li>
              <li>Electrical surges or power issues</li>
              <li>Cosmetic modifications (skins, wraps, etc.)</li>
              <li>Lost, stolen, or abandoned devices</li>
            </ul>

            <h2>4. Warranty Validation Requirements</h2>
            <p>To claim warranty service, you must:</p>
            <ul>
              <li>Present original invoice or service receipt</li>
              <li>Provide device serial number matching our records</li>
              <li>Report issues within the warranty period</li>
              <li>Allow our technicians to inspect and diagnose the device</li>
              <li>Have not removed or damaged warranty seals (if applicable)</li>
            </ul>
            <p className="font-semibold">
              Keep your invoice safe! It is your proof of warranty coverage.
            </p>

            <h2>5. Warranty Claim Process</h2>
            <ol>
              <li><strong>Contact Us:</strong> Call +91 8660310638 or email hello@fixplanet.in</li>
              <li><strong>Describe the Issue:</strong> Explain the problem you&apos;re experiencing</li>
              <li><strong>Provide Proof:</strong> Share your invoice/receipt details</li>
              <li><strong>Schedule Inspection:</strong> Arrange doorstep inspection or drop-off</li>
              <li><strong>Diagnosis:</strong> Our technicians will assess if issue is warranty-covered</li>
              <li><strong>Resolution:</strong> If approved, we&apos;ll repair or replace at no charge</li>
            </ol>
            <p>
              Turnaround time: 24-48 hours for warranty repairs (subject to parts availability)
            </p>

            <h2>6. Warranty Limitations</h2>
            <ul>
              <li>One-time replacement per component within warranty period</li>
              <li>If same issue occurs multiple times, we may offer device credit or refund</li>
              <li>Warranty covers only the specific repair performed, not entire device</li>
              <li>Maximum liability limited to original repair cost</li>
              <li>No warranty on devices deemed beyond economic repair</li>
            </ul>

            <h2>7. Warranty Transfer</h2>
            <p>
              This warranty is non-transferable. It applies only to the original customer who paid for the service. If you sell or transfer your device, the warranty does not transfer to the new owner.
            </p>

            <h2>8. Geographic Limitations</h2>
            <p>
              This warranty is valid only in Bangalore, Karnataka, India. Warranty service is provided at our service locations or via doorstep service within our coverage areas. We cannot provide warranty service for devices taken outside Bangalore.
            </p>

            <h2>9. Battery Warranty Specifics</h2>
            <p>For battery replacements:</p>
            <ul>
              <li>Warranty covers battery health dropping below 80% within 12 months</li>
              <li>Normal capacity degradation to 80-85% is considered acceptable</li>
              <li>Must be used under normal conditions (standard charging cycles, Apple-certified chargers)</li>
              <li>Fast charging or third-party chargers may void battery warranty</li>
              <li>Maximum charge cycle count should not exceed 400 cycles in warranty period</li>
            </ul>

            <h2>10. Screen Warranty Specifics</h2>
            <p>For screen replacements:</p>
            <ul>
              <li>Warranty covers touch functionality, display quality, and Face ID/Touch ID (if applicable)</li>
              <li>Dead pixels (more than 3), lines, or discoloration are covered</li>
              <li>Minor backlight bleeding at edges may occur and is not considered a defect</li>
              <li>Screen protectors and cosmetic scratches are not covered</li>
              <li>Any physical damage to screen voids warranty immediately</li>
            </ul>

            <h2>11. Refund and Replacement Policy</h2>
            <p>
              If the same issue occurs three or more times within the warranty period despite our repair attempts:
            </p>
            <ul>
              <li>We may offer a full refund of the original repair cost, OR</li>
              <li>Provide credit toward a different service, OR</li>
              <li>Offer a replacement device (subject to availability and value)</li>
            </ul>
            <p>
              Refunds are processed within 7-10 business days via original payment method.
            </p>

            <h2>12. Dispute Resolution</h2>
            <p>
              If you disagree with our warranty claim decision:
            </p>
            <ol>
              <li>Request a second opinion from our senior technician</li>
              <li>Provide additional evidence or documentation</li>
              <li>Escalate to management for review</li>
              <li>Seek independent third-party assessment (cost shared equally)</li>
            </ol>
            <p>
              Our decision based on technical assessment is final. We reserve the right to refuse warranty claims that don&apos;t meet coverage criteria.
            </p>

            <h2>13. Warranty Modifications</h2>
            <p>
              FIXplanet reserves the right to modify warranty terms at any time. Changes apply to future repairs only. Existing warranties remain governed by terms in effect at time of original service.
            </p>

            <h2>14. Extended Warranty Options</h2>
            <p>
              For customers seeking additional protection beyond our standard 12-month warranty, we may offer extended warranty plans for select repairs. Contact us for availability and pricing.
            </p>

            <h2>15. Important Disclaimers</h2>
            <p className="font-semibold">
              This warranty is provided by FIXplanet and is separate from any manufacturer warranty. We are an independent service provider not affiliated with Apple Inc. Our warranty does not reinstate, extend, or affect any original manufacturer warranty.
            </p>
            <p className="font-semibold">
              TO THE EXTENT PERMITTED BY LAW, THIS WARRANTY IS YOUR EXCLUSIVE WARRANTY AND REPLACES ALL OTHER WARRANTIES, EXPRESS OR IMPLIED. FIXPLANET IS NOT LIABLE FOR CONSEQUENTIAL, INCIDENTAL, OR SPECIAL DAMAGES.
            </p>

            <h2>Contact Us for Warranty Claims</h2>
            <p>
              For warranty service or questions about coverage:
            </p>
            <ul>
              <li><strong>Phone:</strong> +91 8660310638 (Available 9 AM - 9 PM, 7 days)</li>
              <li><strong>Email:</strong> hello@fixplanet.in</li>
              <li><strong>WhatsApp:</strong> +91 8660310638</li>
              <li><strong>Service Areas:</strong> Koramangala, Indiranagar, Whitefield, HSR Layout, and nearby Bangalore locations</li>
            </ul>
            <p>
              When contacting us, please have your invoice number and device serial number ready for faster service.
            </p>

            <div className="bg-teal-accent/10 border-l-4 border-teal-accent p-6 my-8">
              <h3 className="text-xl font-bold text-navy-primary mt-0">Pro Tip: Protect Your Investment</h3>
              <ul className="mb-0">
                <li>Use a quality protective case and screen protector</li>
                <li>Avoid extreme temperatures and humid environments</li>
                <li>Use only Apple-certified or reputable third-party chargers</li>
                <li>Keep your device away from liquids</li>
                <li>Regular software updates help maintain device health</li>
                <li>Store your warranty invoice in a safe place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
