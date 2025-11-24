"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const plans = [
  {
    id: 'basic',
    title: 'Basic',
    price: '$5/wk',
    bullets: ['2 bottles per delivery', 'Free delivery', 'Pause anytime']
  },
  {
    id: 'standard',
    title: 'Standard',
    price: '$12/wk',
    bullets: ['6 bottles per delivery', 'Priority scheduling', 'Discounted add-ons']
  },
  {
    id: 'plus',
    title: 'Plus',
    price: 'Vendor-dependent',
    bullets: ['Custom bundles', 'Vendor-selected pricing', 'Premium support']
  }
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const card = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function PlansPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-3xl font-heading">Subscription Plans</h1>
          <p className="mt-2 text-gray-700">Choose the plan that fits your household. Change or pause anytime.</p>
        </header>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div key={p.id} variants={card} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform transition-transform">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">{p.title}</h2>
                <div className="text-sm text-gray-500">{p.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button onClick={() => (window.location.href = '/download')}>Download App</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

