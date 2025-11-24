import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 p-8 md:p-10 rounded-2xl shadow-md">
          <h1 className="text-3xl font-heading mb-6">Cancellation and Refund Policy – MilkMint</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
            <p>MilkMint is a subscription management app; it does not directly supply milk. All deliveries are managed by the selected vendor.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Cancellation</h2>
            <p>Users may cancel their subscription directly through the MilkMint app. Cancellations must be completed before the next billing cycle to avoid additional charges.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">3. Refunds</h2>
            <p>Refunds for missed deliveries are handled by the respective vendor. Wallet balance refunds (if applicable) will be processed after verification. Please allow 5–7 business days for processing.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Non-Refundable Items</h2>
            <p>Convenience fees or transaction fees are non-refundable.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">5. Contact for Refunds</h2>
            <p>For refund requests or questions, please contact <a href="mailto:support@milkmint.app" className="text-primary underline">support@milkmint.app</a>.</p>
          </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}