'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, Car, Truck, Bike, Ship, Sparkles, Shield, Wrench, FileText, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  const serviceCategories = [
    {
      title: 'Detailing Services',
      items: [
        { name: 'Car Detailing', href: '/services/car-detailing', icon: Car, color: 'text-[#1B9B8A]' },
        { name: 'RV Detailing', href: '/services/rv-detailing', icon: Truck, color: 'text-[#1B9B8A]' },
        { name: 'Truck Detailing', href: '/services/truck-detailing', icon: Truck, color: 'text-[#1B9B8A]' },
        { name: 'Motorcycle Detailing', href: '/services/motorcycle-detailing', icon: Bike, color: 'text-[#1B9B8A]' },
        { name: 'Boat Detailing', href: '/services/boat-detailing', icon: Ship, color: 'text-[#1B9B8A]' },
      ]
    },
    {
      title: 'Premium Services',
      items: [
        { name: 'Restoration', href: '/services/restoration', icon: Wrench, color: 'text-[#D4AF37]', badge: 'Popular' },
        { name: 'Ceramic Coating', href: '/services/ceramic-coating', icon: Shield, color: 'text-[#D4AF37]' },
        { name: 'Paint Protection Film', href: '/services/ppf', icon: Shield, color: 'text-[#D4AF37]' },
        { name: 'Detailing Packages', href: '/services/packages', icon: Sparkles, color: 'text-[#D4AF37]' },
      ]
    }
  ]

  const locationItems = [
    { name: 'Denver', slug: 'denver' },
    { name: 'Lakewood', slug: 'lakewood' },
    { name: 'Aurora', slug: 'aurora' },
    { name: 'South Denver', slug: 'south-denver' },
    { name: 'Centennial', slug: 'centennial' },
    { name: 'Englewood', slug: 'englewood' },
    { name: 'Lone Tree', slug: 'lone-tree' },
    { name: 'Parker', slug: 'parker' },
    { name: 'Castle Rock', slug: 'castle-rock' },
    { name: 'Highlands Ranch', slug: 'highlands-ranch' },
    { name: 'Greenwood Village', slug: 'greenwood-village' },
    { name: 'South Aurora', slug: 'south-aurora' }
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1400px]">
      <div className="bg-black/95 backdrop-blur-md border-2 border-gray-800/50 rounded-full shadow-2xl px-10 py-2">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Glow Effect */}
          <Link href="/" className="flex items-center gap-4 relative group">
            <div className="absolute inset-0 bg-white/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image 
              src="/logo.png" 
              alt="Spruce Mobile Detailing" 
              width={100} 
              height={100}
              className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors relative group"
              style={{ fontFamily: 'Montserrat' }}
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors relative group"
              style={{ fontFamily: 'Montserrat' }}
            >
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Mega Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors flex items-center gap-1 relative group"
                style={{ fontFamily: 'Montserrat' }}>
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] transition-all duration-300 ease-out z-50 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl shadow-2xl py-6 px-6">
                  <div className="grid grid-cols-2 gap-6">
                    {serviceCategories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-3">
                        <h3 className={`text-xs font-bold tracking-wider mb-4 ${catIndex === 0 ? 'text-[#1B9B8A]' : 'text-[#D4AF37]'}`} style={{ fontFamily: 'Montserrat' }}>
                          {category.title}
                        </h3>
                        <div className="space-y-2">
                          {category.items.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 hover:border-[#1B9B8A] hover:bg-gray-800/50 transition-all duration-300 group relative"
                              >
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                  <Icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors block" style={{ fontFamily: 'Montserrat' }}>
                                    {item.name}
                                  </span>
                                </div>
                                {item.badge && (
                                  <span className="absolute top-1 right-1 text-[10px] font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black px-2 py-0.5 rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom CTAs */}
                  <div className="mt-6 pt-6 border-t border-gray-800 flex gap-3">
                    {/* Membership Highlight - 66% */}
                    <Link href="/membership" className="flex-[2] flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#1B9B8A]/20 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all group">
                      <div className="w-9 h-9 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-black" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-white block truncate" style={{ fontFamily: 'Montserrat' }}>Spruce Shield Club</span>
                        <span className="text-[10px] text-gray-400 block truncate">30% off all services</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-[#D4AF37] rotate-[-90deg] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>

                    {/* Service Areas - 33% */}
                    <Link href="#service-areas" className="flex-1 flex flex-col items-center justify-center px-3 py-3 bg-gradient-to-br from-[#1B9B8A]/20 to-gray-800 rounded-xl border border-[#1B9B8A]/30 hover:border-[#1B9B8A] transition-all group">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1B9B8A] to-[#158F7E] rounded-lg flex items-center justify-center mb-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold text-white text-center" style={{ fontFamily: 'Montserrat' }}>Service Areas</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Link */}
            <Link
              href="/membership"
              className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors relative group"
              style={{ fontFamily: 'Montserrat' }}
            >
              MEMBERSHIP
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Service Areas Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors flex items-center gap-1 relative group"
                style={{ fontFamily: 'Montserrat' }}>
                SERVICE AREAS
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </button>
              
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[500px] transition-all duration-300 ease-out z-50 ${locationsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl shadow-2xl py-6 px-6">
                  <h3 className="text-[#1B9B8A] text-xs font-bold tracking-wider mb-4" style={{ fontFamily: 'Montserrat' }}>
                    WE SERVE SOUTH DENVER METRO
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {locationItems.map((location) => (
                      <Link
                        key={location.name}
                        href={`/locations/${location.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-800 hover:border-[#1B9B8A] hover:bg-gray-800/50 transition-all group"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-[#1B9B8A]/20 to-gray-700 rounded flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-3 h-3 text-[#1B9B8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Montserrat' }}>
                          {location.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800 text-center">
                    <p className="text-xs text-gray-400">
                      <span className="text-[#D4AF37] font-semibold">Mobile Service</span> • We come to you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-[#1B9B8A] hover:bg-[#158F7E] text-white px-6 py-6 text-xs font-bold tracking-[0.15em] shadow-lg" style={{ fontFamily: 'Montserrat' }} asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                CONTACT
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                ABOUT US
              </Link>
              
              <Link
                href="/membership"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all flex items-center gap-2"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                <Star className="w-4 h-4 text-[#D4AF37]" />
                MEMBERSHIP
              </Link>
              
              {/* Mobile Services */}
              <div className="border-t border-gray-800 mt-2 pt-4">
                {serviceCategories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-4">
                    <div className={`text-xs font-bold mb-3 px-4 tracking-wider ${catIndex === 0 ? 'text-[#1B9B8A]' : 'text-[#D4AF37]'}`}>{category.title}</div>
                    <div className="space-y-1">
                      {category.items.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 text-gray-300 hover:text-white text-sm py-3 px-4 rounded-lg hover:bg-gray-800/50 transition-all group"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon className={`w-4 h-4 ${item.color}`} />
                            </div>
                            <span className="flex-1">{item.name}</span>
                            {item.badge && (
                              <span className="text-[9px] font-bold bg-[#D4AF37] text-black px-2 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Service Areas */}
              <div className="border-t border-gray-800 mt-2 pt-4">
                <div className="text-xs font-bold mb-3 px-4 tracking-wider text-[#1B9B8A]">SERVICE AREAS</div>
                <div className="grid grid-cols-2 gap-2 px-4">
                  {locationItems.slice(0, 6).map((location) => (
                    <div
                      key={location}
                      className="flex items-center gap-2 text-xs text-gray-400 py-2"
                    >
                      <div className="w-1.5 h-1.5 bg-[#1B9B8A] rounded-full"></div>
                      {location}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 px-4 mt-2">+ 6 more areas</div>
              </div>

              <div className="flex flex-col gap-3 mt-4 px-4">
                <Button className="bg-[#1B9B8A] hover:bg-[#158F7E] text-white w-full py-6" asChild>
                  <Link href="/contact" className="flex items-center gap-2 justify-center font-bold tracking-wider" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4" />
                    CONTACT
                  </Link>
                </Button>
                <Button variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black w-full py-6" asChild>
                  <a href="tel:+17209712020" className="flex items-center gap-2 justify-center font-bold tracking-wider">
                    <Phone className="w-4 h-4" />
                    CALL NOW
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
