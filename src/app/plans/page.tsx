"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'

const plans = [
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: '₹99/month',
      yearly: '₹999/year',
      save: 'Save 2 months'
    },
    features: [
      'Daily Milk Tracking',
      'Smart Subscription Insights',
      'Wallet Support',
      'Delivery Updates',
    ],
    highlight: false
  },
  {
    id: 'elite',
    name: 'Elite',
    price: {
      monthly: '₹149/month',
      yearly: '₹1499/year',
      save: 'Save 2 months'
    },
    features: [
      'All Pro features',
      'Priority Vendor Support',
      'Advanced Usage Analytics',
      'Early Access to New Features',
    ],
    highlight: true
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
    <>
      <Header />
      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/80 p-8 md:p-10 rounded-2xl shadow-md">
          <header className="mb-8">
            <h1 className="text-3xl font-heading">Subscription Plans</h1>
            <p className="mt-2 text-gray-700">Choose the plan that fits your household. Change or pause anytime.</p>
          </header>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((p) => (
              <motion.div key={p.id} variants={card} whileHover={{ scale: 1.04 }} className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transform transition-transform flex flex-col border ${p.highlight ? 'border-primary' : 'border-transparent'}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-darktext">{p.name}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-primary">{p.price.monthly}</div>
                    <div className="text-base font-semibold text-accent">{p.price.yearly}</div>
                    <div className="text-xs text-green-700 font-medium">{p.price.save}</div>
                  </div>
                </div>

                <ul className="mt-6 mb-6 space-y-2 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={() => (window.location.href = '/download')} className="mt-auto w-full">Download App</Button>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

