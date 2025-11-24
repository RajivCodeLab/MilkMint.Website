"use client"

import React from 'react'
import Button from '../components/Button'

type Props = {
  apkUrl: string
  isAndroid: boolean
}

export default function DownloadButtons({ apkUrl, isAndroid }: Props){
  return (
    <div className="w-full">
      <div className="rounded-xl p-4 shadow-sm bg-white border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a href={apkUrl} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl">Download APK</Button>
          </a>

          <a href="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-2xl border border-gray-200 bg-white text-gray-700">Instructions</button>
          </a>
        </div>

        <div className="mt-3 text-sm text-gray-600">Latest Version: <strong>v1.0.2</strong> <span className="text-gray-400">(Internal Build) — Updated today</span></div>
      </div>
    </div>
  )
}
