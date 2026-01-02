'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, Car, Truck, Bike, Ship, Sparkles, Shield, Wrench, Star } from 'lucide-react'
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
    { name: 'Castle Rock', slug: 'castle-rock' }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1400px]">
        <div className="bg-black/95 backdrop-blur-md border-2 border-[#D4AF37]/40 rounded-full shadow-2xl shadow-[#D4AF37]/20 px-10 py-2">
          <div className="flex justify-between items-center h-24">
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

            <div className="flex items-center gap-8">
              <Link href="/" className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold tracking-[0.12em] transition-all relative group px-4 py-2 rounded-full border border-transparent hover:border-[#D4AF37]/30" style={{ fontFamily: 'Montserrat' }}>
                HOME
              </Link>

              <Link href="/about" className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold tracking-[0.12em] transition-all relative group px-4 py-2 rounded-full border border-transparent hover:border-[#D4AF37]/30" style={{ fontFamily: 'Montserrat' }}>
                ABOUT US
              </Link>

              <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold tracking-[0.12em] transition-all flex items-center gap-2 relative group px-4 py-2 rounded-full border border-transparent hover:border-[#D4AF37]/30" style={{ fontFamily: 'Montserrat' }}>
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
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
                                <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 hover:border-[#1B9B8A] hover:bg-gray-800/50 transition-all duration-300 group relative">
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    
                    <div className="mt-6 pt-6 border-t border-gray-800 flex gap-3">
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

              <Link href="/membership" className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors relative group" style={{ fontFamily: 'Montserrat' }}>
                MEMBERSHIP
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <div className="relative group" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
                <button className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors flex items-center gap-1 relative group" style={{ fontFamily: 'Montserrat' }}>
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
                          key={location.slug}
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
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/98 backdrop-blur-md border-b-2 border-[#D4AF37]/30">
        <div className="flex items-center justify-between px-4 h-16">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Spruce" 
              width={50} 
              height={50}
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
          </Link>
          
          <button
            className="p-2 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`bg-black/98 border-t border-gray-800 transition-all duration-300 ${isOpen ? 'max-h-[calc(100vh-4rem)]' : 'max-h-0'} overflow-hidden`}>
          <div className="px-3 py-3 space-y-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
            {['Home', 'About Us', 'Membership'].map((item, idx) => (
              <Link
                key={item}
                href={idx === 0 ? '/' : idx === 1 ? '/about' : '/membership'}
                className="block text-white hover:text-[#D4AF37] text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-800/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="border-t border-gray-800 my-2 pt-2">
              {serviceCategories.map((category, catIdx) => (
                <div key={catIdx} className="mb-2">
                  <div className={`text-xs font-bold mb-1 px-3 ${catIdx === 0 ? 'text-[#1B9B8A]' : 'text-[#D4AF37]'}`}>
                    {category.title}
                  </div>
                  {category.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={`w-4 h-4 ${item.color}`} />
                        <span className="flex-1">{item.name}</span>
                        {item.badge && <span className="text-[8px] bg-[#D4AF37] text-black px-1.5 py-0.5 rounded-full font-bold">{item.badge}</span>}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-3">
              <Button className="flex-1 bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white py-4 text-sm font-bold" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
              </Button>
              <Button variant="outline" className="flex-1 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black py-4 text-sm font-bold" asChild>
                <a href="tel:+17209712020">CALL</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Spacing for Fixed Header */}
      <div className="lg:hidden h-16"></div>
    </>
  )
}
