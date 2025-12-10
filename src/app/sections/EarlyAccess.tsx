"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'
import Button from '../components/Button'

const perks = [
  { icon: '🎁', title: 'Free Usage During Testing', desc: 'Use all features completely free during the beta period' },
  { icon: '⚡', title: 'Priority Onboarding', desc: 'Get personalized setup help and dedicated support' },
  { icon: '💎', title: 'Lifetime Discount', desc: 'Lock in special early-bird pricing forever' },
  { icon: '💰', title: 'Earn ₹200 Per Referral', desc: 'Refer vendors and earn ₹200 for each successful signup' }
]

export default function EarlyAccess(){
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading mb-4">Join Early Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Be among the first vendors to experience the future of milk delivery management</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {perks.map((p, idx) => (
            <motion.div 
              key={p.title}
              initial={{opacity:0, y:12}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.45, delay: idx*0.08}}
              className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4"
            >
              <div className="text-3xl flex-shrink-0">{p.icon}</div>
              <div>
                <h4 className="font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{opacity:0, y:12}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
          className="text-center"
        >
          <Button onClick={()=>{window.location.href='/early-access'}}>Join Early Access</Button>
        </motion.div>
      </div>
    </section>
  )
}
