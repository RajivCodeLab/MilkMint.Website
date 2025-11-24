"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const steps = [
  { title: 'Choose a plan', desc: 'Flexible weekly or monthly subscriptions' },
  { title: 'We deliver fresh', desc: 'Farm-fresh milk delivered to your door' },
  { title: 'Enjoy & manage', desc: 'Pause or adjust your plan anytime' }
]

export default function HowItWorks(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-heading mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeInUp} className="bg-white/70 p-6 rounded-2xl shadow">
            <div className="h-12 w-12 rounded-full bg-primary/90 text-white flex items-center justify-center font-bold">{i+1}</div>
            <h3 className="font-semibold mt-4">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
