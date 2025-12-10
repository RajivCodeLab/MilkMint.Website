"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const testimonials = [
  {
    text: "I lose customers due to billing confusion—MilkMint solves it.",
    author: "Milk Vendor, Mumbai"
  },
  {
    text: "Delivery tracking + billing in one app is a game changer.",
    author: "Society Secretary, Pune"
  },
  {
    text: "No more disputes with customers. Everything is recorded automatically.",
    author: "Dairy Owner, Bangalore"
  }
]

export default function Testimonials(){
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">What Vendors Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Join hundreds of vendors who are already making the switch</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.author}
              initial={{opacity:0, y:12}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.45, delay: idx*0.08}}
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl shadow-sm"
            >
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-gray-700 mb-4 italic">{t.text}</p>
              <p className="text-sm text-gray-600 font-medium">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
