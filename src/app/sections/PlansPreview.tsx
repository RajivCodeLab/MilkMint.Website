"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight } from '../utils/animations'

const plans = [
  { key: 'pro', name: 'Pro', monthly: '₹149 / mo', yearly: '₹1,788 / yr', note: 'Save 2 months' , perks: ['Manage subscriptions', 'Payment tracking', 'Vendor chat'] },
  { key: 'elite', name: 'Elite', monthly: '₹249 / mo', yearly: '₹2,988 / yr', note: 'Save 2 months', perks: ['Everything in Pro', 'Priority support', 'Advanced reporting'] }
]

export default function PlansPreview(){
  return (
    <section className="py-20">
      <h2 className="text-2xl font-heading mb-8">Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((p, i) => (
          <motion.div key={p.key} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.08}} className="bg-white p-6 rounded-2xl shadow hover:shadow-md flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="text-sm text-gray-500">{p.note}</div>
            </div>

            <div className="mt-4">
              <p className="text-2xl font-heading">{p.monthly}</p>
              <p className="text-sm text-gray-500">Billed monthly</p>
              <p className="mt-3 text-lg font-medium">{p.yearly} <span className="text-sm text-gray-500">/ billed yearly</span></p>
            </div>

            <ul className="mt-4 space-y-2 text-sm flex-1">
              {p.perks.map((perk)=> <li key={perk}>• {perk}</li>)}
            </ul>

            <div className="mt-6">
              <a href="/plans" className="block w-full text-center bg-primary text-white py-2 rounded-2xl">Choose {p.name}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
