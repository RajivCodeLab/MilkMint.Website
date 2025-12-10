"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const vendorBenefits = [
  'Saves 6–8 hours/month',
  'Eliminates disputes',
  'Builds customer trust',
  'Simple payment tracking'
]

const societyBenefits = [
  'Transparent tracking',
  'No delivery complaints',
  'Clear billing records',
  'Easy vendor coordination'
]

export default function Benefits(){
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-heading mb-4 text-center">Why Choose MilkMint?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Built for vendors and societies alike</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{opacity:0, x:-20}} 
            whileInView={{opacity:1, x:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5}}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">For Vendors</h3>
            <ul className="space-y-4">
              {vendorBenefits.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{opacity:0, x:20}} 
            whileInView={{opacity:1, x:0}} 
            viewport={{once:true}} 
            transition={{duration:0.5}}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">For Societies</h3>
            <ul className="space-y-4">
              {societyBenefits.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
