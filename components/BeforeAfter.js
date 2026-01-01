'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function BeforeAfter() {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const slides = [
    {
      before: 'https://images.unsplash.com/photo-1610465299996-e3e2c3e27e18?w=800&q=60',
      after: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
      title: 'Full Exterior Detailing',
      description: 'Complete transformation with wash, polish, and wax'
    },
    {
      before: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=60',
      after: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
      title: 'Interior Deep Clean',
      description: 'Professional shampooing and odor elimination'
    },
    {
      before: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800&q=60',
      after: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
      title: 'Paint Restoration',
      description: 'Scratch removal and paint correction'
    }
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider">
          BEFORE & AFTER
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-6"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          See the incredible transformations we achieve with our professional detailing services
        </p>
        
        <Card className="overflow-hidden bg-gray-900 border-gray-800">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Before Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold z-10 tracking-wider">
                  BEFORE
                </div>
                <img 
                  src={slides[activeSlide].before} 
                  alt="Before detailing"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* After Image */}
              <div className="relative">
                <div className="absolute top-4 left-4 bg-[#00BCD4] text-white px-4 py-2 rounded-lg font-semibold z-10 tracking-wider">
                  AFTER
                </div>
                <img 
                  src={slides[activeSlide].after} 
                  alt="After detailing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="p-8 text-center bg-gray-900 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-2 text-white tracking-wider">{slides[activeSlide].title}</h3>
              <p className="text-gray-400 mb-6">{slides[activeSlide].description}</p>
              
              {/* Navigation Dots */}
              <div className="flex gap-2 justify-center">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === activeSlide 
                        ? 'bg-[#D4AF37] w-8' 
                        : 'bg-gray-700 hover:bg-gray-600 w-3'
                    }`}
                    aria-label={`View slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
