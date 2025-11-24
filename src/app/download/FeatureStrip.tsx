"use client"

import React from 'react'

const features = [
  { key: 'install', title: 'Simple Installation', desc: 'Install the app using APK or QR — quick & hassle-free.', icon: 'smartphone' },
  { key: 'secure', title: 'Secure & Private', desc: 'Your subscription data stays encrypted and safe.', icon: 'shield' },
  { key: 'vendor', title: 'Vendor Friendly', desc: 'Easily connect with your local milk supplier.', icon: 'check' }
]

function Icon({ name }: { name: string }){
  if(name === 'smartphone'){
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="#1D7F6B" strokeWidth="1.5"/>
        <circle cx="12" cy="18" r="0.8" fill="#1D7F6B" />
      </svg>
    )
  }

  if(name === 'shield'){
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l7 4v6c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" stroke="#1D7F6B" strokeWidth="1.5"/>
        <path d="M9.5 12.5l1.75 1.75L15 10" stroke="#1D7F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="#1D7F6B" strokeWidth="1.5"/>
      <path d="M9 12l2 2 4-4" stroke="#1D7F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function FeatureStrip(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {features.map(f => (
        <div key={f.key} className="rounded-xl bg-white shadow-sm p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1"><Icon name={f.icon} /></div>
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
