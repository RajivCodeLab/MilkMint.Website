"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const problems = [
  { icon: '📝', text: 'Handwritten registers' },
  { icon: '❌', text: 'Missed deliveries' },
  { icon: '⚖️', text: 'Wrong quantities' },
  { icon: '💸', text: 'Confusing monthly bills' },
  { icon: '⏰', text: 'Payment delays' },
  { icon: '🤝', text: 'Customer disputes' }
]

export default function Problem(){
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">The Problems You Face Every Day</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Running a milk business shouldn't be this complicated. Here's what vendors struggle with:</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {problems.map((p, idx) => (
            <motion.div 
              key={p.text}
              initial={{opacity:0, y:12}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.45, delay: idx*0.08}}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md text-center"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <p className="font-medium text-sm">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
