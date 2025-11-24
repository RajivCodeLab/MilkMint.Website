"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const features = [
  {
    title: 'Daily Milk Tracking',
    desc: 'See daily delivery logs and consumption history.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Smart Subscription Plans',
    desc: 'Auto-adjust deliveries based on usage and preferences.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15a7 7 0 10-14.8 0" />
      </svg>
    )
  },
  {
    title: 'Wallet & Payments',
    desc: 'Secure payments, receipts and wallet balance at a glance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a2 2 0 00-2-2h-2" />
      </svg>
    )
  },
  {
    title: 'Vendor Ratings',
    desc: 'Rate and review vendors to help the community.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.08 10.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.518-4.674z" />
      </svg>
    )
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

export default function Features(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-heading mb-6">Core Features</h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <motion.div key={f.title} variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">{f.icon}</div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
