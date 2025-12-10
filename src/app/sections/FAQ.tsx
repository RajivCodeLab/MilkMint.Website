"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const faqs = [
  {
    q: 'Is MilkMint free for early users?',
    a: 'Yes! Early access users get completely free usage during the beta testing period, plus lifetime discounts when we launch.'
  },
  {
    q: 'Does it work on any Android phone?',
    a: 'Yes, MilkMint works on any Android phone running Android 5.0 or higher. No fancy smartphone needed.'
  },
  {
    q: 'Do customers need the app?',
    a: 'No. Only vendors need the app. Customers receive bills via WhatsApp as PDF invoices.'
  },
  {
    q: 'Can vendors add delivery boys?',
    a: 'Yes! You can add multiple delivery persons and assign customers to them for better route management.'
  },
  {
    q: 'What if I need help setting up?',
    a: 'Early access users get priority onboarding with personalized setup help via WhatsApp or call.'
  }
]

export default function FAQ(){
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12">Got questions? We've got answers.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{opacity:0, y:8}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.4, delay: idx*0.05}}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                <span className="text-2xl text-primary flex-shrink-0">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
