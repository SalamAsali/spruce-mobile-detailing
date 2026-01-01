'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CAR DETAILING', href: '/car-detailing' },
    { name: 'RV DETAILING', href: '/rv-detailing' },
    { name: 'BOAT DETAILING', href: '/boat-detailing' },
  ]

  return (
    <nav className="bg-black/98 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-black text-3xl" style={{ fontFamily: 'Oswald' }}>S</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-2xl tracking-[0.15em]" style={{ fontFamily: 'Oswald' }}>SPRUCE</div>
              <div className="text-[#00BCD4] text-xs tracking-[0.3em] font-medium" style={{ fontFamily: 'Montserrat' }}>MOBILE DETAILING</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#D4AF37] text-xs font-semibold tracking-[0.15em] transition-colors relative group"
                style={{ fontFamily: 'Montserrat' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-6 py-6 text-xs font-bold tracking-[0.15em] shadow-lg" style={{ fontFamily: 'Montserrat' }}>
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#D4AF37] text-sm font-semibold py-3 tracking-wider transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white w-full py-6 mt-4">
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