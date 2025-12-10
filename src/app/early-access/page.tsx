import Header from '../components/Header'
import Footer from '../sections/Footer'

export const metadata = {
  title: 'Early Access - MilkMint',
  description: 'Join the MilkMint early access program and get lifetime benefits'
}

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="pt-6">
        <Header />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-heading mb-4 text-center">Join Early Access</h1>
          <p className="text-gray-600 text-center mb-8">
            Be among the first vendors to experience the future of milk delivery management
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
              <span className="text-2xl">🎁</span>
              <div>
                <h3 className="font-semibold mb-1">Free During Testing</h3>
                <p className="text-sm text-gray-600">Use all features completely free during beta</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold mb-1">Priority Support</h3>
                <p className="text-sm text-gray-600">Get personalized setup help via WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
              <span className="text-2xl">💎</span>
              <div>
                <h3 className="font-semibold mb-1">Lifetime Discount</h3>
                <p className="text-sm text-gray-600">Lock in special pricing forever</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl">
              <span className="text-2xl">💰</span>
              <div>
                <h3 className="font-semibold mb-1">Earn ₹200 Per Referral</h3>
                <p className="text-sm text-gray-600">Refer other vendors and earn rewards</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <a 
              href="https://wa.me/917899301122?text=Hi%2C%20I%20want%20to%20join%20MilkMint%20Early%20Access" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
            >
              Join via WhatsApp
            </a>
            
            <p className="text-sm text-gray-600">
              Or call us at{' '}
              <a href="tel:+917899301122" className="text-primary hover:underline font-medium">
                +91 7899301122
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
