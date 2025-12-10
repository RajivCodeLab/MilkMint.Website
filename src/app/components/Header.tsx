"use client"

import React from 'react'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <img src="/images/logo.png" alt="MilkMint" className="w-6 h-6" onError={(e)=>{
              const img = e.currentTarget as HTMLImageElement
              img.style.display = 'none'
              img.parentElement!.innerHTML = '<span class="text-white font-bold text-xl">M</span>'
            }} />
          </div>
          <span className="font-heading text-xl font-semibold text-gray-900">MilkMint</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <a href="/plans" className="hover:text-primary transition-colors">Plans</a>
          <a href="/download" className="hover:text-primary transition-colors">Download</a>
          <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
        </nav>
      </div>
    </header>
  )
}
