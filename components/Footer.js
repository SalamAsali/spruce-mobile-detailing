'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Car Detailing', href: '/car-detailing' },
    { name: 'RV Detailing', href: '/rv-detailing' },
    { name: 'Boat Detailing', href: '/boat-detailing' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ]

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-emerald-900 font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-lg">Spruce Mobile Detailing</span>
            </div>
            <p className="text-emerald-100 mb-4">
              Professional mobile detailing services in Mississauga and the Greater Toronto Area.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sprucemobiledetailing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-emerald-100 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-emerald-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+18001234567" 
                  className="flex items-start gap-2 text-emerald-100 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>+1-800-123-4567</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@example.com" 
                  className="flex items-start gap-2 text-emerald-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>support@example.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-emerald-100">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Serving Mississauga, Port Credit, Lorne Park & GTA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
          <p>&copy; {currentYear} Spruce Mobile Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}