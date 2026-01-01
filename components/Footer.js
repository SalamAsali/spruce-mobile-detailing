'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Car Detailing', href: '/car-detailing' },
    { name: 'RV Detailing', href: '/rv-detailing' },
    { name: 'Boat Detailing', href: '/boat-detailing' },
  ]

  const serviceAreas = [
    'Castle Rock',
    'Parker',
    'Highlands Ranch',
    'Centennial',
    'Littleton',
    'Greenwood Village',
    'Lone Tree',
    'South Aurora',
    'Lakewood',
    'Englewood',
    'Cherry Creek',
    'Washington Park'
  ]

  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Spruce Mobile Detailing" 
                width={100} 
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium mobile detailing services in South Denver Metro. We bring professional auto care to your location.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/sprucemobiledetailing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wider">SERVICE AREAS</h3>
            <ul className="space-y-2 text-sm">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area} className="text-gray-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wider">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+17209712020" 
                  className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1B9B8A]" />
                  <span>+1 (720) 971-2020</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@sprucemobiledetailing.com" 
                  className="flex items-start gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1B9B8A]" />
                  <span className="break-all">info@sprucemobiledetailing.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1B9B8A]" />
                <span>Serving South Denver Metro<br />Castle Rock to Cherry Creek</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Spruce Mobile Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}