export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: October 2024</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
            <p>We collect information you provide when you fill our form including: name, phone number, and device type.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact you regarding your service request</li>
              <li>Provide screen replacement services</li>
              <li>Send service confirmations and updates</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Information Sharing</h2>
            <p>We do not sell your personal information. We may share information only when required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p>For privacy questions, email: hello@fixplanet.in or call +91 8105955009</p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="text-primary hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
