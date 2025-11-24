"use client"

import React from 'react'
import { motion } from 'framer-motion'

const features = [
  'Track daily milk delivery status',
  'Recharge wallet & pay vendors',
  'Pause or modify daily subscription',
  'Manage multiple family members',
  'View monthly summary & analytics'
]

export default function AppPreview(){
  return (
    <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
        <div className="hidden md:block flex-shrink-0">
          <div className="w-64 h-[560px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src="/Screenshots/1.png" alt="phone mockup" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-full md:w-80">
          <h3 className="text-lg font-semibold mb-3">What You Can Do With MilkMint</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {features.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
