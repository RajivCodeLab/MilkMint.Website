"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const steps = [
  { title: 'Create a subscription', desc: 'Choose a plan, set quantity and delivery days, and add your vendor.' },
  { title: 'Vendor confirms', desc: 'Your vendor accepts the subscription and sets the delivery schedule.' },
  { title: 'Manage & track', desc: 'Pause, update, or cancel plans. Track deliveries, payments and history in-app.' }
]

export default function HowItWorks(){
  return (
    <section className="py-20">
      <h2 className="text-2xl font-heading mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
