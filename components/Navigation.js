'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  const serviceItems = [
    { name: 'Car Detailing', href: '/services/car-detailing' },
    { name: 'Car Ceramic Coating', href: '/services/car-ceramic-coating' },
    { name: 'RV Detailing', href: '/services/rv-detailing' },
    { name: 'RV Ceramic Coating', href: '/services/rv-ceramic-coating' },
    { name: 'Truck Detailing', href: '/services/truck-detailing' },
    { name: 'Truck Ceramic Coating', href: '/services/truck-ceramic-coating' },
    { name: 'Motorcycle Detailing', href: '/services/motorcycle-detailing' },
    { name: 'Motorcycle Ceramic Coating', href: '/services/motorcycle-ceramic-coating' },
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

            {/* Services Dropdown */}
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
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-3 text-sm text-gray-300 hover:text-[#D4AF37] hover:bg-gray-800 transition-colors"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                <div className="text-gray-500 text-xs font-bold mb-2 tracking-wider">SERVICES</div>
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-[#D4AF37] text-sm py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
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
