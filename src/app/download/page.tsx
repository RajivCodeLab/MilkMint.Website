"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import Button from '../components/Button'

const apkUrl = '/apk/milkmint-latest.apk'

function getQrUrl(target: string, size = 220) {
  return `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(target)}`
}

export default function DownloadPage(){
  const [isAndroid, setIsAndroid] = useState(false)
  const [qrSrc, setQrSrc] = useState('')

  useEffect(() => {
    // Basic userAgent/device detection
    const ua = navigator.userAgent || ''
    const android = /Android/i.test(ua)
    setIsAndroid(android)
    setQrSrc(getQrUrl(window.location.origin + apkUrl))
  }, [])

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-6">
          <h1 className="text-3xl font-heading">Download MilkMint</h1>
          <p className="mt-2 text-gray-700">Available for Internal Testing</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-700">Install the APK to test the app internally. Place your APK at <code className="bg-gray-100 px-2 py-1 rounded">{apkUrl}</code> in the `public/` folder.</p>

            {isAndroid ? (
              <a href={apkUrl} className="no-underline">
                <Button>Download APK</Button>
              </a>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={apkUrl} className="no-underline">
                  <Button>Download APK</Button>
                </a>
                <a href="/" className="inline-flex items-center px-4 py-3 rounded-2xl border bg-white">Instructions</a>
              </div>
            )}

            <div className="mt-4">
              <div className="text-sm mb-2">Scan QR to download</div>
              {qrSrc && <img src={qrSrc} alt="QR code to download APK" className="w-40 h-40 rounded-md shadow-lg" />}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-64 h-[512px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src="/Screenshots/1.png" alt="phone mockup" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

