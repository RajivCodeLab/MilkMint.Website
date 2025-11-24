"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const apkUrl = '/apk/milkmint-latest.apk'

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

export default function DownloadPage(){
  return (
    <div className="bg-[#E6F7F4] min-h-screen py-20">
      <Header />

      <main className="max-w-7xl mx-auto px-6 space-y-12">

        {/* HERO */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }} className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Download MilkMint</h1>
            <p className="text-gray-600 mt-2 max-w-3xl">Install the app and start managing your daily milk subscriptions instantly.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2"><span className="text-emerald-600">✔</span> Track deliveries</div>
            <div className="inline-flex items-center gap-2"><span className="text-emerald-600">✔</span> Manage subscription</div>
            <div className="inline-flex items-center gap-2"><span className="text-emerald-600">✔</span> Pay your vendor</div>
          </div>
        </motion.section>

        {/* FEATURE STRIP */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.05 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-[#2FBFA4] mt-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="2" width="10" height="20" rx="2" stroke="#2FBFA4" strokeWidth="1.5"/><circle cx="12" cy="18" r="0.8" fill="#2FBFA4" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Easy Installation</h4>
                  <p className="text-sm text-gray-600 mt-1">APK or QR — install instantly.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-[#2FBFA4] mt-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l7 4v6c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" stroke="#2FBFA4" strokeWidth="1.5"/><path d="M9.5 12.5l1.75 1.75L15 10" stroke="#2FBFA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Secure & Private</h4>
                  <p className="text-sm text-gray-600 mt-1">Your data stays encrypted.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-[#2FBFA4] mt-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12s2-4 9-4 9 4 9 4-2 4-9 4-9-4-9-4z" stroke="#2FBFA4" strokeWidth="1.5"/><path d="M8 12v2" stroke="#2FBFA4" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Connect With Vendor</h4>
                  <p className="text-sm text-gray-600 mt-1">Works with all local suppliers.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT - main content */}
          <div className="space-y-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45 }} className="bg-white p-8 rounded-xl shadow-md space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Install the APK</h2>
                <p className="text-gray-600 mt-1">Direct APK download for internal testing.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={apkUrl} className="inline-block w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#2FBFA4] hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl">Download APK</button>
                </a>

                <a href="/" className="inline-block w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-[#2FBFA4] text-[#2FBFA4] px-5 py-3 rounded-2xl bg-white">Instructions</button>
                </a>
              </div>

              <div className="text-sm text-gray-600">Latest Version: <strong>v1.0.2</strong> — Updated today</div>

              <div className="text-xs text-gray-500">Tip: On Android, after downloading, open your downloads and tap the APK to install.</div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.45, delay: 0.06 }} className="bg-white p-6 rounded-xl shadow-sm w-full md:w-100 text-center">
              <h3 className="text-lg font-semibold mb-1">Scan to Download</h3>
              <p className="text-sm text-gray-600 mb-4">Use your mobile camera to download instantly.</p>
              <img src="/images/qr.png" alt="QR" className="w-32 h-32 mx-auto" />
            </motion.div>
          </div>

          {/* RIGHT - mockup + features */}
          <div className="flex flex-col items-center md:items-end">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-6">
              <img src="/Screenshots/4.png" alt="phone mockup" className="rounded-3xl shadow-xl w-64 md:w-80" />
            </motion.div>

            
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

