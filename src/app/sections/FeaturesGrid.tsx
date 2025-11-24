"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const features = [
  { title: 'Fresh Daily', desc: 'Direct from local farms' },
  { title: 'Flexible Plans', desc: 'Pause or change anytime' },
  { title: 'Sustainable', desc: 'Eco-friendly packaging' },
  { title: 'Trusted Farmers', desc: 'Handpicked partners' }
]

export default function FeaturesGrid(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-heading mb-6">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeInUp} className="bg-white/70 p-5 rounded-2xl shadow">
            <div className="h-10 w-10 rounded-full bg-accent/90 mb-3" />
            <h4 className="font-semibold">{f.title}</h4>
            <p className="text-sm mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
