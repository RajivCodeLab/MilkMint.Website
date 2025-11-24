import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t bg-white/80">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-darktext">
        <nav className="flex flex-wrap gap-6">
          <a href="/">Home</a>
          <a href="/plans">Plans</a>
          <a href="/download">Download</a>
          <a href="/contact">Contact</a>
          <a href="/shipping-policy">Shipping Policy</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
        </nav>
        <div>
          Support: <a href="mailto:support@milkmint.com" className="underline">support@milkmint.com</a>
        </div>
      </div>
    </footer>
  )
}