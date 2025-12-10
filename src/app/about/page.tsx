import Header from '../components/Header'
import Footer from '../sections/Footer'

export const metadata = {
  title: 'About - MilkMint',
  description: 'Learn about MilkMint - Smart milk delivery & billing app for vendors and societies'
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-6">
        <Header />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-heading mb-6">About MilkMint</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            MilkMint is a smart milk delivery and billing app designed specifically for milk vendors, dairies, and housing societies across India.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We're on a mission to digitize India's traditional milk delivery system. Every day, thousands of milk vendors struggle with handwritten registers, billing confusion, and customer disputes. MilkMint eliminates these problems with a simple, intuitive mobile app.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why We Built MilkMint</h2>
          <p className="text-gray-700 mb-6">
            After talking to hundreds of milk vendors, we discovered they were losing 6-8 hours every month just managing registers and creating bills. Delivery mistakes and payment disputes were damaging their relationships with loyal customers. We knew technology could solve this.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Makes Us Different</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Built specifically for Indian milk vendors - not a generic delivery app</li>
            <li>Works on any Android phone - no expensive smartphone needed</li>
            <li>Simple enough for anyone to use - no technical knowledge required</li>
            <li>Customers don't need the app - bills sent via WhatsApp</li>
            <li>Affordable pricing designed for small businesses</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Join Us</h2>
          <p className="text-gray-700 mb-6">
            We're currently in early access and working closely with vendors to make MilkMint even better. Join us and be part of India's milk delivery revolution.
          </p>

          <div className="bg-primary/10 p-6 rounded-2xl mt-8">
            <p className="font-semibold mb-2">Ready to get started?</p>
            <a 
              href="https://wa.me/917899301122" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Contact us on WhatsApp →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
