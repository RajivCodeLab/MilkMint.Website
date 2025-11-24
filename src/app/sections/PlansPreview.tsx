"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight } from '../utils/animations'

const plans = [
  { name: 'Starter', price: '$5/wk', perks: ['2 bottles'] },
  { name: 'Family', price: '$12/wk', perks: ['6 bottles'] },
  { name: 'Pro', price: '$20/wk', perks: ['12 bottles'] }
]

export default function PlansPreview(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-heading mb-6">Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideInFromRight} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-2xl font-heading mt-2">{p.price}</p>
            <ul className="mt-4 text-sm">
              {p.perks.map((perk)=> <li key={perk}>• {perk}</li>)}
            </ul>
            <button className="mt-6 w-full bg-primary text-white py-2 rounded-2xl">Choose</button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
