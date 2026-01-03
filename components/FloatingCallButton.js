'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu as MenuIcon, X } from 'lucide-react'
import Link from 'next/link'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: '🚗 Car Detailing', href: '/services/car-detailing' },
    { name: '🚐 RV Detailing', href: '/services/rv-detailing' },
    { name: '🚚 Truck Detailing', href: '/services/truck-detailing' },
    { name: '🚛 Fleet Detailing', href: '/fleet-detailing', badge: 'B2B' },
    { name: '🏍️ Motorcycle Detailing', href: '/services/motorcycle-detailing' },
    { name: '🚤 Boat Detailing', href: '/services/boat-detailing' }
  ]

  const premiumServices = [
    { name: '🛠️ Restoration', href: '/services/restoration' },
    { name: '🛡️ Ceramic Coating', href: '/services/ceramic-coating', badge: 'Popular' },
    { name: '🧱 Paint Protection Film', href: '/services/ppf' }
  ]

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="tel:+17209712020"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-brand-teal to-brand-teal-dark hover:from-brand-teal-dark hover:to-brand-teal text-white rounded-full shadow-2xl shadow-brand-teal/50 transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full">
            <Phone className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-w-[200px] pr-6' : 'max-w-0'}`}>
            <span className="text-sm font-bold whitespace-nowrap">CALL NOW</span>
            <span className="text-xs whitespace-nowrap block">(720) 971-2020</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-brand-teal animate-ping opacity-20"></div>
        </a>
      </div>

      {/* Mobile Sticky 2-Button Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/98 border-t-2 border-brand-gold/30 backdrop-blur-md pb-safe">
        <div className="flex items-center">
          {/* Call Button - 66% */}
          <a
            href="tel:+17209712020"
            className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white py-4 font-bold text-sm border-r border-gray-800"
          >
            <Phone className="w-5 h-5" />
            <span>CALL US</span>
          </a>

          {/* Menu Button - 33% */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-brand-gold hover:from-gray-800 hover:to-gray-700 py-4 font-bold text-sm transition-all"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            <span>MENU</span>
          </button>
        </div>
      </div>

      {/* Service Grid Popup (Mobile Menu) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-20 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Detailing Services */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-brand-teal mb-4 font-bold">
                  Detailing Services
                </h4>
                <div className="space-y-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-brand-teal rounded-xl transition-all group"
                    >
                      <span className="text-white text-sm font-semibold">{service.name}</span>
                      {service.badge && (
                        <span className="text-xs bg-brand-gold text-black px-2 py-1 rounded-full font-bold">
                          {service.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Premium Services */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-brand-gold mb-4 font-bold">
                  Premium Services
                </h4>
                <div className="space-y-2">
                  {premiumServices.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-brand-gold rounded-xl transition-all group relative"
                    >
                      <span className="text-white text-sm font-semibold">{service.name}</span>
                      {service.badge && (
                        <span className="text-xs bg-brand-gold text-black px-2 py-1 rounded-full font-bold">
                          {service.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Close hint */}
            <div className="text-center mt-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 text-sm hover:text-brand-gold transition-colors"
              >
                Tap Menu or scroll to close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
