'use client'

import { useEffect, useRef, useState } from 'react'

export default function TimelineProgress() {
  const [progress, setProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timeline = timelineRef.current
      const rect = timeline.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Start animating when timeline enters viewport
      const start = rect.top - windowHeight + 200
      const end = rect.bottom - 200
      
      if (start < 0 && end > 0) {
        // Calculate progress (0 to 100)
        const totalHeight = rect.height
        const scrolled = Math.min(Math.abs(start), totalHeight)
        const percentage = (scrolled / totalHeight) * 100
        setProgress(Math.min(percentage, 100))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={timelineRef} className="absolute left-1/2 transform -translate-x-1/2 w-1 top-0 bottom-0 hidden md:block">
      {/* Gray background line */}
      <div className="absolute inset-0 bg-gray-800"></div>
      
      {/* Animated gold line */}
      <div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-[#D4AF37] transition-all duration-200 ease-out"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  )
}
