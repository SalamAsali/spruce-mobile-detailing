'use client'

import { useState } from 'react'
import HelpBanner from './HelpBanner'

export default function FloatingWidgets() {
  const [isHelpBannerOpen, setIsHelpBannerOpen] = useState(false)

  const toggleHelpBanner = () => setIsHelpBannerOpen(!isHelpBannerOpen)
  const closeHelpBanner = () => setIsHelpBannerOpen(false)

  return (
    <>
      {/* === MOBILE: BOTTOM STICKY BAR (md:hidden) === */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-neutral-900 border-t border-neutral-800 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="flex gap-3">
          {/* Call Button */}
          <a href="tel:+17209712020" className="w-[60%] flex items-center justify-center bg-emerald-500 text-black font-black text-lg uppercase tracking-widest py-3 rounded hover:bg-emerald-400 transition">
            Call Now
          </a>
          {/* Menu Button (Triggers Help Wizard) */}
          <button onClick={toggleHelpBanner} className="w-[40%] flex items-center justify-center bg-neutral-800 text-white font-bold text-sm uppercase tracking-wide border border-neutral-700 rounded hover:bg-neutral-700 transition">
            Help Wizard
          </button>
        </div>
      </div>

      {/* === DESKTOP: FLOATING BUBBLES (hidden md:flex) === */}
      <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-[9999] items-end">
        {/* Bubble 1: Call */}
        <a href="tel:+17209712020" className="group relative w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">📞</span>
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-bold">
            (720) 971-2020
          </span>
        </a>

        {/* Bubble 2: Help Wizard (Triggers Modal) */}
        <button onClick={toggleHelpBanner} className="group relative w-16 h-16 bg-neutral-800 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">☰</span>
          <span className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap border border-neutral-700">
            Help Wizard
          </span>
        </button>
      </div>

      {/* === HelpBanner Modal === */}
      <HelpBanner isOpen={isHelpBannerOpen} onClose={closeHelpBanner} />
    </>
  )
}
