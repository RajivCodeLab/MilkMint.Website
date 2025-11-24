import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/60 p-8 rounded-2xl shadow">
            <h1 className="text-3xl font-heading mb-4">Privacy Policy</h1>

            <p className="mb-4">Last updated: November 24, 2025</p>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Introduction</h2>
              <p className="text-sm text-gray-700">MilkMint (“we”, “us”, or “our”) provides a platform that helps users manage daily milk subscriptions with their local vendors. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your information when you use our website and mobile application.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>Account Information:</strong> name, phone number, email address, and address you provide to create or manage subscriptions.</li>
                <li><strong>Subscription and Transaction Data:</strong> details of subscriptions you create (vendor, quantity, schedule), order history, and payment receipts.</li>
                <li><strong>Vendor Information:</strong> contact or business details you choose to share with vendors through the app.</li>
                <li><strong>Device & Usage Data:</strong> device identifiers, IP address, browser type, and analytics about how you use the site and app.</li>
                <li><strong>Payment Information:</strong> we do not store full payment card details on our servers. Payment processing is handled by third-party payment providers; we may retain transaction IDs and receipts for record-keeping.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
              <p className="text-sm text-gray-700">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>Provide, operate and improve our services and app experience.</li>
                <li>Manage subscriptions, notify vendors, and coordinate deliveries and scheduling.</li>
                <li>Process payments and provide receipts.</li>
                <li>Communicate with you about your account, updates, and support requests.</li>
                <li>Monitor usage patterns and detect fraud or abuse.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Sharing and Disclosure</h2>
              <p className="text-sm text-gray-700">We may share your information with:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li><strong>Your chosen vendors:</strong> so they can fulfill and manage your subscription and deliveries.</li>
                <li><strong>Payment processors:</strong> to complete payments. These providers have their own privacy and security policies.</li>
                <li><strong>Service providers:</strong> analytics, hosting, and customer support partners who assist us in operating the service.</li>
                <li><strong>Legal requests:</strong> when required by law or to protect rights, property, or safety.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Security</h2>
              <p className="text-sm text-gray-700">We take reasonable technical and organizational measures to protect your information. However, no method of transmission or storage is completely secure. Please take care with your account credentials.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
              <p className="text-sm text-gray-700">We retain your personal data as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. You can request deletion of your account and data — see the "Your Rights" section below.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
              <p className="text-sm text-gray-700">Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data, or to object to certain processing. To exercise these rights, contact us at the address below.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Children</h2>
              <p className="text-sm text-gray-700">Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have collected such data, contact us to request deletion.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Changes to this Policy</h2>
              <p className="text-sm text-gray-700">We may update this Privacy Policy occasionally. When we make material changes we will post a notice on our site or notify you directly where appropriate. Continued use after changes indicates acceptance of the revised policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p className="text-sm text-gray-700">If you have questions or requests about your personal data, please contact: <a href="mailto:support@milkmint.example" className="text-primary">support@milkmint.example</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
