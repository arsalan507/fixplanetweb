export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: October 2024</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-3">Services Provided</h2>
            <p>FIXplanet provides iPhone screen replacement services at customer locations in Bangalore.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Service Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services available in select Bangalore areas</li>
              <li>Pricing confirmed after device assessment</li>
              <li>12-month warranty on replaced screens</li>
              <li>Payment due upon service completion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Customer Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Backup all data before service</li>
              <li>Remove passwords and Find My iPhone</li>
              <li>Provide accurate device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Limitations</h2>
            <p>FIXplanet is not responsible for data loss during service. Warranty does not cover physical damage after service or liquid damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Disclaimer</h2>
            <p><strong>FIXplanet is an independent service provider</strong>. We are not affiliated with, authorized by, or endorsed by Apple Inc. iPhone is a trademark of Apple Inc.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <p>Questions? Email: hello@fixplanet.in or call +91 8105955009</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
