'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+17209712020"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white rounded-full shadow-2xl shadow-[#1B9B8A]/50 transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Phone Icon */}
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full">
            <Phone className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
          </div>

          {/* Expanded Text - Desktop */}
          <div className={`hidden md:flex flex-col overflow-hidden transition-all duration-300 ${isExpanded ? 'max-w-[200px] pr-6' : 'max-w-0'}`}>
            <span className="text-sm font-bold whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              CALL NOW
            </span>
            <span className="text-xs whitespace-nowrap">
              (720) 971-2020
            </span>
          </div>

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-[#1B9B8A] animate-ping opacity-20"></div>
        </a>
      </div>

      {/* Mobile Quick Actions - Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent pb-safe z-40">
        <div className="flex items-center gap-2 p-3">
          <a
            href="tel:+17209712020"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white py-4 rounded-xl font-bold shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>CALL (720) 971-2020</span>
          </a>
          <a
            href="/contact"
            className="px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black rounded-xl font-bold shadow-lg"
          >
            QUOTE
          </a>
        </div>
      </div>
    </>
  )
}
