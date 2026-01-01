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
    { name: 'SERVICES', href: '/#services' },
    { name: 'CAR DETAILING', href: '/car-detailing' },
    { name: 'RV DETAILING', href: '/rv-detailing' },
    { name: 'BOAT DETAILING', href: '/boat-detailing' },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-2xl">S</span>
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl tracking-wider">SPRUCE</div>
              <div className="text-[#00BCD4] text-xs tracking-widest">MOBILE DETAILING</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium tracking-wider transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                CONTACT US
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium py-2 tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white w-full">
                <a href="tel:+17209712020" className="flex items-center gap-2 justify-center">
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