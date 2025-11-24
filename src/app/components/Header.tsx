"use client"

import React from 'react'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img src="/images/milkmint_logo.png" alt="MilkMint" className="h-10 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).src='/images/logo.svg'}} />
          <span className="font-heading text-lg">MilkMint</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-darktext">
          <a href="/plans">Plans</a>
          <a href="/download">Download</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </header>
  )
}
