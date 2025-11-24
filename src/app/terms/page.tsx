import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-2xl mx-auto px-6 bg-white/80 rounded-2xl shadow-md py-10">
          <h1 className="text-3xl font-heading mb-6">Terms and Conditions – MilkMint</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>Welcome to MilkMint. These Terms and Conditions govern your use of the MilkMint platform and services.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
            <p>By using MilkMint, you agree to these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Description of MilkMint services</h2>
            <p>MilkMint is a digital platform that connects users with local milk vendors for subscription management, delivery tracking, and payments. MilkMint does not produce, store, or deliver milk directly.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Vendor responsibilities</h2>
            <p>Vendors are solely responsible for the quality, delivery, and fulfillment of milk orders. MilkMint is not liable for vendor actions or delivery failures.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. User responsibilities</h2>
            <p>Users must provide accurate information, maintain their account security, and communicate directly with vendors for delivery or product issues.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">6. Payments and wallet usage</h2>
            <p>Payments made through MilkMint are processed securely. Users may maintain a wallet balance for subscription payments. MilkMint is not responsible for payment gateway issues.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">7. Refund policy summary</h2>
            <p>Refunds are subject to vendor policies. For more details, please see our <a href="/refunds" className="text-primary underline">Refund Policy</a>.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">8. Limitation of liability</h2>
            <p>MilkMint is not liable for any damages, losses, or issues arising from vendor services, delivery delays, or product quality. Our platform is provided "as is" without warranties.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">9. Termination of accounts</h2>
            <p>MilkMint reserves the right to suspend or terminate user accounts for violations of these terms or misuse of the platform.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
            <p>These Terms and Conditions are governed by the laws of India.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">11. Contact information</h2>
            <p>For questions or support, contact us at <a href="mailto:support@milkmint.app" className="text-primary underline">support@milkmint.app</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
