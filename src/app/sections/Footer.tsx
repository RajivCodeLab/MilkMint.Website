import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 text-sm text-darktext flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} MilkMint</div>
        <div className="flex gap-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}
