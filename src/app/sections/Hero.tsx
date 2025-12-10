"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import Header from '../components/Header'
import { fadeInUp, float } from '../utils/animations'

// List all your screenshots here - they will auto-rotate
const screenshots = [
  '/Screenshots/1.png',
  '/Screenshots/2.png',
  '/Screenshots/3.png',
  '/Screenshots/4.png',
  '/Screenshots/5.png'
]

export default function Hero(){
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 3500) // Change image every 3.5 seconds

    return () => clearInterval(interval)
  }, [])
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
            {/* Glass morphism card with carousel */}
            <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 rounded-2xl shadow-xl p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentIndex}
                    src={screenshots[currentIndex]} 
                    alt={`MilkMint App Screenshot ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-auto rounded-xl shadow-lg"
                    onError={(e) => {
                      // Fallback to first screenshot if image fails to load
                      if (e.currentTarget.src !== screenshots[0]) {
                        e.currentTarget.src = screenshots[0]
                      }
                    }}
                  />
                </AnimatePresence>
                
                {/* Carousel indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to screenshot ${idx + 1}`}
                    />
                  ))}
                </div>
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
