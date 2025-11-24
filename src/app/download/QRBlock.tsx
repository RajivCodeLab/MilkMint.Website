"use client"

import React from 'react'

type Props = {
  origin: string
  apkUrl: string
  canShow: boolean
}

function getQrUrl(target: string, size = 240){
  return `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodeURIComponent(target)}`
}

export default function QRBlock({ origin, apkUrl, canShow }: Props){
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm text-center">
      <h3 className="text-lg font-semibold mb-1">Scan to Download</h3>
      <p className="text-sm text-gray-600 mb-4">Scan this QR code to download the APK instantly.</p>

      <div className="flex items-center justify-center">
        {origin && canShow ? (
          <img
            src={getQrUrl(origin + apkUrl, 300)}
            alt="Download QR"
            className="w-56 h-56 object-contain rounded-md"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        ) : (
          <div className="w-56 h-56 bg-gray-50 rounded-md flex flex-col items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v4a1 1 0 001 1h3M21 7v4a1 1 0 01-1 1h-3M3 17v0a1 1 0 001 1h3m10 0h3a1 1 0 001-1v0" />
            </svg>
            <div className="text-sm">Download QR</div>
          </div>
        )}
      </div>
    </div>
  )
}
