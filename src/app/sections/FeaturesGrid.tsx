"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const features = [
  { title: 'Track Daily Deliveries', desc: 'Mark deliveries in seconds. No more paper registers or mistakes.' },
  { title: 'Auto-Generate Monthly Bills', desc: 'Bills are created automatically based on daily entries. Zero manual work.' },
  { title: 'PDF Invoices', desc: 'Professional PDF bills ready to share with customers instantly.' },
  { title: 'Payment History', desc: 'Track who paid, when, and how much. Complete payment records.' },
  { title: 'Customer Management', desc: 'Store customer details, addresses, and subscription preferences in one place.' },
  { title: 'Delivery History', desc: 'View complete delivery records. Resolve disputes with data.' }
]

export default function FeaturesGrid(){
  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">The MilkMint Solution</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Everything you need to run your milk business professionally</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <motion.div key={f.title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay: idx*0.08}} className="bg-white/70 p-6 md:p-8 rounded-2xl shadow hover:shadow-md min-h-[160px]">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary mb-0 flex items-center justify-center flex-shrink-0">
                {f.title.includes('Track Daily') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}

                {f.title.includes('Auto-Generate') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#ffffff" strokeWidth="2"/>
                    <path d="M7 8h10M7 12h10M7 16h6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}

                {f.title.includes('PDF') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#ffffff" strokeWidth="2"/>
                    <path d="M14 2v6h6M10 13h4M10 17h4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}

                {f.title.includes('Payment History') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#ffffff" strokeWidth="2"/>
                    <path d="M2 10h20" stroke="#ffffff" strokeWidth="2"/>
                    <circle cx="7" cy="15" r="1" fill="#ffffff"/>
                  </svg>
                )}

                {f.title.includes('Customer Management') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="7" r="4" stroke="#ffffff" strokeWidth="2"/>
                    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 11h5M18.5 8.5v5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}

                {f.title.includes('Delivery History') && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="#ffffff" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="#ffffff" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="#ffffff" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="#ffffff" strokeWidth="2"/>
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-lg leading-snug h-12 md:h-14 overflow-hidden">{f.title}</h4>
                <p className="text-sm mt-3">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
