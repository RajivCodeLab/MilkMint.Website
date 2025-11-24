"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight } from '../utils/animations'
import Button from '../components/Button'

export default function DownloadCTA(){
  return (
    <section className="py-12 flex items-center justify-between gap-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-heading mb-4">Get the MilkMint App</h2>
        <p className="mb-4">Manage your deliveries and subscriptions from your phone.</p>
        <div className="flex gap-3">
          <Button onClick={()=>{window.location.href='/download'}}>Download</Button>
          <a className="px-4 py-3 rounded-2xl border bg-white">Learn More</a>
        </div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideInFromRight} className="hidden md:block">
        <div className="w-56 h-96 relative">
          <div className="absolute inset-0 transform -rotate-3">
            <img src="/Screenshots/3.png" alt="screenshot" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>
          <div className="absolute inset-0 transform rotate-2" style={{top: '12px', left: '8px'}}>
            <img src="/Screenshots/2.png" alt="screenshot" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>
          <div className="absolute inset-0 transform rotate-6" style={{top: '24px', left: '16px'}}>
            <img src="/Screenshots/1.png" alt="screenshot" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
