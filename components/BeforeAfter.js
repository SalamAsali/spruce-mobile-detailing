'use client'

import { useState, useRef, useEffect } from 'react'

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  
  const slides = [
    {
      before: 'https://images.unsplash.com/photo-1610465299996-e3e2c3e27e18?w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80',
      title: 'Full Exterior Detailing',
      description: 'Complete transformation with wash, polish, and ceramic coating'
    },
    {
      before: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=60',
      after: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=80',
      title: 'Interior Deep Clean',
      description: 'Professional shampooing and odor elimination'
    },
    {
      before: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=1200&q=60',
      after: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=80',
      title: 'Paint Restoration',
      description: 'Scratch removal and paint correction'
    }
  ]

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white">
          BEFORE & AFTER
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-6"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          See the incredible transformations we achieve with our professional detailing services
        </p>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
          {/* Before After Slider */}
          <div 
            ref={containerRef}
            className="before-after-slider relative h-[500px] md:h-[600px] select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Before Image */}
            <img 
              src={slides[activeSlide].before}
              alt="Before detailing"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            
            {/* After Image */}
            <div 
              className="after-image absolute inset-0"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={slides[activeSlide].after}
                alt="After detailing"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-3 rounded-lg font-bold z-20 tracking-wider text-sm">
              BEFORE
            </div>
            <div className="absolute top-6 right-6 bg-[#1B9B8A] text-white px-6 py-3 rounded-lg font-bold z-20 tracking-wider text-sm">
              AFTER
            </div>

            {/* Slider Handle */}
            <div 
              className="slider-handle"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4AF37] rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="p-8 text-center bg-gray-900 border-t border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white tracking-wider">
              {slides[activeSlide].title}
            </h3>
            <p className="text-gray-400 mb-8 text-lg">{slides[activeSlide].description}</p>
            
            {/* Navigation Dots */}
            <div className="flex gap-3 justify-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSlide(index)
                    setSliderPosition(50)
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === activeSlide 
                      ? 'bg-[#D4AF37] w-12' 
                      : 'bg-gray-700 hover:bg-gray-600 w-3'
                  }`}
                  aria-label={`View slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
