import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t border-gray-100 mt-20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg">M</div>
              <span className="font-heading text-xl font-semibold">MilkMint</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">Smart milk delivery & billing app for vendors and societies</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="/about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="/plans" className="text-gray-600 hover:text-primary transition-colors">Plans</a>
              <a href="/download" className="text-gray-600 hover:text-primary transition-colors">Download</a>
              <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a>
              <a href="/refund-policy" className="text-gray-600 hover:text-primary transition-colors">Refund Policy</a>
              <a href="/shipping-policy" className="text-gray-600 hover:text-primary transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          © 2025 MilkMint. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
