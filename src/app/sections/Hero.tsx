"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import { fadeInUp, float } from '../utils/animations'

export default function Hero(){
  return (
    <section className="relative overflow-hidden hero-bg pb-20">
      <Header />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 py-16">
        <div className="w-full md:w-1/2">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeInUp} className="text-4xl md:text-5xl font-heading mb-4">Fresh milk delivered, subscription made simple</motion.h1>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6}} className="text-lg mb-6">MilkMint brings farm-fresh milk to your doorstep with flexible plans and zero hassle.</motion.p>
          <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="flex gap-4">
            <Button onClick={()=>{window.location.href='/plans'}}>Get Started</Button>
            <a href="/download" className="inline-flex items-center px-4 py-3 rounded-2xl bg-white border">Download App</a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div initial={{opacity:0, x:60}} whileInView={{opacity:1, x:0}} transition={{duration:0.8}} className="relative">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <img src="/Screenshots/1.png" alt="app screenshot" className="h-60 w-full object-cover rounded-2xl" />
            </div>
          </motion.div>

          <motion.div className="blob blob-1 left-8 top-6" variants={float} animate="animate" />
          <motion.div className="blob blob-2 right-6 bottom-6" variants={float} animate="animate" />
        </div>
      </div>
    </section>
  )
}
