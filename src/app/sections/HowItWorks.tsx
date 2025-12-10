"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const steps = [
  { title: 'Add Customers', desc: 'Add customer names, addresses, and daily quantities in minutes.' },
  { title: 'Track Daily Delivery', desc: 'Mark delivered, paused, or missed deliveries each day with a simple tap.' },
  { title: 'Bill Auto-Generated', desc: 'Monthly bills are calculated automatically based on your delivery entries.' },
  { title: 'Download PDF & Collect Payments', desc: 'Share PDF invoices via WhatsApp and track payments easily.' }
]

export default function HowItWorks(){
  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">How It Works</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Simple 4-step process to digitize your milk business</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.1}} className="bg-white/70 p-6 rounded-2xl shadow hover:shadow-md">
            <div className="h-12 w-12 rounded-full bg-primary/90 text-white flex items-center justify-center font-bold">{i+1}</div>
            <h3 className="font-semibold mt-4">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
