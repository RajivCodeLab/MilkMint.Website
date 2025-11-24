"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const features = [
  { title: 'Subscription Management', desc: 'Create, pause or cancel subscriptions with a few taps.' },
  { title: 'Vendor Communication', desc: 'Chat and coordinate directly with your local milk vendor.' },
  { title: 'Secure Payments', desc: 'Safe, reliable payment handling and receipts for every order.' },
  { title: 'Delivery Tracking', desc: 'See upcoming deliveries, history and payment status in one place.' }
]

export default function FeaturesGrid(){
  return (
    <section className="py-20">
      <h2 className="text-2xl font-heading mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {features.map((f, idx) => (
          <motion.div key={f.title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay: idx*0.08}} className="bg-white/70 p-6 md:p-8 rounded-2xl shadow hover:shadow-md min-h-[160px]">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/90 mb-0 flex items-center justify-center flex-shrink-0">
                {/** Inline SVG icons matching each feature */}
                {f.title.includes('Subscription') && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7h18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="#ffffff" strokeWidth="2" />
                    <path d="M8 15h.01" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15h.01" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 15h.01" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}

                {f.title.includes('Vendor') && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15a2 2 0 0 1-2 2H9l-4 3V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10z" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8h10M7 12h6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}

                {f.title.includes('Secure') && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l7 4v6c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 12.5l1.75 1.75L15 10" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}

                {f.title.includes('Delivery') && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7h13v10H3z" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11h3l2 2v4" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7.5" cy="18.5" r="1.5" fill="#ffffff"/>
                    <circle cx="18.5" cy="18.5" r="1.5" fill="#ffffff"/>
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
