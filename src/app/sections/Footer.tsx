import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-100 mt-12 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">M</div>
              <span className="font-heading text-xl">MilkMint</span>
            </div>
            <p className="text-sm text-gray-600">Smart milk delivery & billing app for vendors and societies</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/about" className="text-gray-600 hover:text-primary">About</a>
              <a href="/plans" className="text-gray-600 hover:text-primary">Plans</a>
              <a href="/download" className="text-gray-600 hover:text-primary">Download</a>
              <a href="/contact" className="text-gray-600 hover:text-primary">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-primary">Terms of Service</a>
              <a href="/refund-policy" className="text-gray-600 hover:text-primary">Refund Policy</a>
              <a href="/shipping-policy" className="text-gray-600 hover:text-primary">Shipping Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center text-sm text-gray-600">
          © 2025 MilkMint. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
