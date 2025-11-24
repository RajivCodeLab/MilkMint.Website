import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ShippingPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 p-8 md:p-10 rounded-2xl shadow-md">
          <h1 className="text-3xl font-heading mb-4">Shipping Policy – MilkMint</h1>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>MilkMint is a digital platform that connects users with milk vendors.</li>
            <li>No physical shipping is done by MilkMint.</li>
            <li>Delivery of milk is managed entirely by the vendor chosen by the customer.</li>
            <li>Delivery times, delays, and quality of milk are the responsibility of the respective vendor.</li>
            <li>MilkMint only provides digital tracking and subscription management.</li>
          </ul>
          <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded">
            <span className="font-semibold text-accent">Disclaimer:</span> MilkMint is not liable for vendor delivery failures.
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}