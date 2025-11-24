"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import { fadeInUp, float } from '../utils/animations'

export default function Hero(){
  return (
    <section className="relative overflow-hidden hero-bg py-20">
      <div className="absolute inset-x-0 top-6 z-30">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp} className="text-3xl md:text-5xl font-heading mb-6">Manage Your Daily Milk Deliveries Effortlessly</motion.h1>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-lg mb-6">Track deliveries, manage subscriptions, and stay connected with your local milk vendor — all in one app.</motion.p>
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="flex gap-4">
            <Button onClick={()=>{window.location.href='/download'}}>Download App</Button>
            <Button onClick={()=>{window.location.href='/plans'}} >View Plans</Button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} transition={{duration:0.8}} className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute inset-4 rounded-lg bg-white/80 shadow-lg flex items-center justify-center">
              <img src="/Screenshots/3.png" alt="app screenshot" className="w-64 h-64 object-cover rounded-lg" />
            </div>
          </motion.div>

          <motion.div className="blob blob-1 left-8 top-6" variants={float} animate="animate" />
          <motion.div className="blob blob-2 right-6 bottom-6" variants={float} animate="animate" />
        </div>
      </div>
    </section>
  )
}
