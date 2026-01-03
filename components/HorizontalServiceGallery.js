'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Car, Truck, Bike, Ship, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HorizontalServiceGallery() {
  const scrollRef = useRef(null)

  const services = [
    {
      title: 'Car Detailing',
      description: 'Premium detailing for luxury and everyday vehicles',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
      href: '/services/car-detailing',
      icon: Car
    },
    {
      title: 'RV Detailing',
      description: 'Specialized care for motorhomes and RVs',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      href: '/services/rv-detailing',
      icon: Truck
    },
    {
      title: 'Truck Detailing',
      description: 'Heavy-duty cleaning for work and personal trucks',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      href: '/services/truck-detailing',
      icon: Truck
    },
    {
      title: 'Motorcycle Detailing',
      description: 'Expert care for bikes and motorcycles',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      href: '/services/motorcycle-detailing',
      icon: Bike
    },
    {
      title: 'Boat Detailing',
      description: 'Professional marine detailing services',
      image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
      href: '/services/boat-detailing',
      icon: Ship
    },
    {
      title: 'Fleet Detailing',
      description: 'Commercial fleet solutions for businesses',
      image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=800&q=80',
      href: '/fleet-detailing',
      icon: Users,
      badge: 'B2B'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F1419] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      
      <div className="container mx-auto mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto text-center" style={{ fontFamily: 'var(--font-oswald), Cinzel, sans-serif' }}>
          Our Services
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-4 md:px-8 pb-8 cursor-grab active:cursor-grabbing"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
        onMouseDown={(e) => {
          const ele = e.currentTarget
          const startX = e.pageX - ele.offsetLeft
          const scrollLeft = ele.scrollLeft
          
          const handleMouseMove = (e) => {
            const x = e.pageX - ele.offsetLeft
            const walk = (x - startX) * 2
            ele.scrollLeft = scrollLeft - walk
          }
          
          const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
          }
          
          document.addEventListener('mousemove', handleMouseMove)
          document.addEventListener('mouseup', handleMouseUp)
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Link
              key={index}
              href={service.href}
              className="flex-none w-[85vw] md:w-[400px] h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl snap-center relative overflow-hidden group border-2 border-gray-800 hover:border-brand-teal transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {service.badge && (
                    <span className="text-xs font-bold bg-gradient-to-r from-brand-gold to-brand-gold-light text-black px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors" style={{ fontFamily: 'var(--font-oswald), Cinzel, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-brand-teal group-hover:text-brand-gold transition-colors">
                  <span className="text-sm font-semibold">LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">← Swipe or drag to explore services →</p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
