"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const apkUrl = '/apk/milkmint-latest.apk'
const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

export default function DownloadPage(){
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.origin + apkUrl
      setDownloadUrl(fullUrl)
      // Generate QR code using Google Charts API
      setQrCodeUrl(`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(fullUrl)}&choe=UTF-8`)
    }
  }, [])
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#E6F7F4] via-[#D1F5D3]/30 to-[#E6F7F4] py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Download <span className="text-primary">MilkMint</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Get the app and start managing your milk business professionally. Available for Android devices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-emerald-600">✓</span> Track deliveries instantly
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-emerald-600">✓</span> Auto-generate bills
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="text-emerald-600">✓</span> Payment tracking
              </div>
            </div>
          </motion.div>

          {/* Main Download Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Left Column - Download Options */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="#2FBFA4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Direct APK Download</h2>
                    <p className="text-gray-600">Download and install the app directly on your Android device</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href={apkUrl} download className="block">
                    <button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download APK Now
                    </button>
                  </a>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Latest Version</span>
                      <span className="text-sm font-bold text-primary">v1.0.2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Size</span>
                      <span className="text-sm text-gray-900">12.5 MB</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                    <div className="flex gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm text-blue-900">
                        <p className="font-medium mb-1">Installation Guide:</p>
                        <ol className="list-decimal pl-4 space-y-1 text-blue-800">
                          <li>Download the APK file</li>
                          <li>Open your device's download folder</li>
                          <li>Tap the APK file to install</li>
                          <li>Enable "Install from unknown sources" if prompted</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR Code Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#2FBFA4" strokeWidth="2"/>
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#2FBFA4" strokeWidth="2"/>
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#2FBFA4" strokeWidth="2"/>
                      <rect x="14" y="14" width="7" height="7" rx="1" stroke="#2FBFA4" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Scan QR Code</h3>
                </div>
                
                <p className="text-gray-600 mb-6">Point your phone camera at the QR code to download instantly</p>
                
                <div className="bg-white border-4 border-primary/20 rounded-2xl p-6 inline-block mx-auto shadow-lg">
                  {qrCodeUrl ? (
                    <img 
                      src={qrCodeUrl} 
                      alt="Download MilkMint QR Code" 
                      className="w-48 h-48"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = '<div class="w-48 h-48 flex items-center justify-center text-gray-400">QR Code Loading...</div>'
                      }}
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="animate-pulse text-gray-400 mb-2">Generating QR Code...</div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-xs text-gray-500 mt-4">Works with any QR code scanner or camera app</p>
              </motion.div>
            </div>

            {/* Right Column - Stats & Features */}
            <div className="space-y-8">
              {/* Live Stats Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 shadow-xl border-2 border-primary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <h3 className="text-xl font-bold text-gray-900">Live Today</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-gray-600">Active Vendors</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">15K+</div>
                    <div className="text-sm text-gray-600">Customers Served</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                    <div className="text-sm text-gray-600">Deliveries Tracked</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">₹10L+</div>
                    <div className="text-sm text-gray-600">Revenue Managed</div>
                  </div>
                </div>
              </motion.div>

              {/* Features List */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get</h3>
                <div className="space-y-4">
                  {[
                    { icon: '📊', title: 'Daily Delivery Tracking', desc: 'Mark deliveries in seconds' },
                    { icon: '💰', title: 'Auto Bill Generation', desc: 'Bills created automatically' },
                    { icon: '📱', title: 'WhatsApp Integration', desc: 'Share bills instantly' },
                    { icon: '👥', title: 'Customer Management', desc: 'Store all customer details' },
                    { icon: '📈', title: 'Analytics Dashboard', desc: 'Track business performance' },
                    { icon: '🔒', title: 'Secure & Private', desc: 'Your data is encrypted' },
                    { icon: '🏖️', title: 'Customer Holiday', desc: 'Manage customer holidays easily' },
                     { icon: '💳', title: 'Payment Reminders', desc: 'Send automatic payment reminders' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              
            </div>
          </div>

          {/* Why Choose MilkMint Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-primary">MilkMint?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of milk vendors who have transformed their business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Lightning Fast',
                  desc: 'Mark deliveries in under 5 seconds',
                  color: 'from-yellow-400 to-orange-500'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Works Offline',
                  desc: 'Track deliveries without internet',
                  color: 'from-blue-400 to-indigo-500'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Easy to Use',
                  desc: 'Simple interface, no training needed',
                  color: 'from-green-400 to-emerald-500'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: '500+ Vendors',
                  desc: 'Trusted by growing businesses',
                  color: 'from-purple-400 to-pink-500'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        {/* Quick Testimonial */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 shadow-xl text-white"
              >
                <div className="flex gap-1 mb-4 ">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">
                  "MilkMint has completely transformed how I manage my milk business. I save 2 hours every day!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold">Rajesh Kumar</div>
                    <div className="text-sm text-white/70">Milk Vendor, Bangalore</div>
                  </div>
                </div>
              </motion.div>
          {/* Support Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12  mt-8 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Help Installing?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to help you get started. Contact us on WhatsApp for instant support.
            </p>
            <button
              onClick={() => window.open('https://wa.me/917899301122?text=Hi%2C%20I%20need%20help%20installing%20MilkMint', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Help on WhatsApp
            </button>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  )
}

