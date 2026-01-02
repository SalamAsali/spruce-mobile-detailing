'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, Car, Truck, Bike, Ship, Sparkles, Shield, Wrench, FileText } from 'lucide-react'
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
    'Castle Rock', 'Parker', 'Highlands Ranch', 'Centennial',
    'Littleton', 'Greenwood Village', 'Lone Tree', 'South Aurora',
    'Lakewood', 'Englewood', 'Cherry Creek', 'Washington Park'
  ]

  return (
    <nav className="bg-black/98 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="Spruce Mobile Detailing" 
              width={80} 
              height={80}
              className="object-contain"
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
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors flex items-center gap-1 group"
                style={{ fontFamily: 'Montserrat' }}>
                SERVICES
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl shadow-2xl py-6 px-6 z-50">
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
                  
                  {/* Bottom CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <Link href="/services/restoration" className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#1B9B8A]/20 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-lg flex items-center justify-center">
                          <Wrench className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-white block" style={{ fontFamily: 'Montserrat' }}>Featured: Restoration Services</span>
                          <span className="text-xs text-gray-400">Transform your vehicle to showroom condition</span>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-[#D4AF37] rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
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

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors flex items-center gap-1 group"
                style={{ fontFamily: 'Montserrat' }}>
                LOCATIONS
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2 z-50 grid grid-cols-2 gap-1">
                  {locationItems.map((location) => (
                    <div
                      key={location}
                      className="px-4 py-2 text-xs text-gray-400 hover:text-[#1B9B8A] transition-colors"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button className="bg-[#1B9B8A] hover:bg-[#158F7E] text-white px-6 py-6 text-xs font-bold tracking-[0.15em] shadow-lg" style={{ fontFamily: 'Montserrat' }}>
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                CONTACT US
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                ABOUT US
              </Link>
              
              <Link
                href="/membership"
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Montserrat' }}
              >
                MEMBERSHIP
              </Link>
              
              {/* Mobile Services */}
              <div className="border-t border-gray-800 pt-4">
                {serviceCategories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-6">
                    <div className={`text-xs font-bold mb-3 tracking-wider ${catIndex === 0 ? 'text-[#1B9B8A]' : 'text-[#D4AF37]'}`}>{category.title}</div>
                    {category.items.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] text-sm py-2 pl-4"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                ))}
              </div>

              <Button className="bg-[#1B9B8A] hover:bg-[#158F7E] text-white w-full py-6 mt-4">
                <a href="tel:+17209712020" className="flex items-center gap-2 justify-center font-bold tracking-wider">
                  <Phone className="w-4 h-4" />
                  CONTACT US
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
