"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import { fadeInUp, float } from '../utils/animations'

export default function Hero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F7F4] via-[#D1F5D3]/30 to-[#E6F7F4] min-h-screen flex items-center">
      <div className="absolute inset-x-0 top-6 z-30">
        <Header />
      </div>
      
      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/2 space-y-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once:true }} 
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-gray-900 mb-6">
              Smart Milk Delivery & <span className="text-primary">Billing App</span> for Milk Vendors & Societies
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{opacity:0, y:10}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}} 
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            No more registers. No more delivery mistakes. No more billing confusion.
          </motion.p>
          
          <motion.div 
            initial={{opacity:0, y:10}} 
            whileInView={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}} 
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={()=>{window.location.href='/early-access'}}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Early Access
            </button>
            <button 
              onClick={()=>{window.open('https://wa.me/917899301122', '_blank')}}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              WhatsApp Us
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          <motion.div 
            initial={{opacity:0, scale:0.95, y:20}} 
            whileInView={{opacity:1, scale:1, y:0}} 
            transition={{duration:0.8, delay:0.2}}
            className="relative"
          >
            {/* Glass morphism card */}
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/Screenshots/3.png" 
                  alt="MilkMint App Dashboard" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-primary/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Live Updates</span>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary to-accent text-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs opacity-90">Active Vendors</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
