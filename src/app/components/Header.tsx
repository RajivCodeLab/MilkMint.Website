"use client"

import React from 'react'

export default function Header(){
  return (
    <header className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/milkmint_logo.png" alt="MilkMint" className="h-10 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).src='/images/logo.svg'}} />
          <span className="font-heading text-lg">MilkMint</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-darktext">
          <a href="/plans">Plans</a>
          <a href="/download">Download</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </header>
  )
}
