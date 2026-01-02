'use client'

import Link from 'next/link'
import { Phone, MapPin, Car, Truck, Bike, Ship } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AuroraPage() {
  const services = [
    { name: 'Car Detailing', icon: Car, href: '/services/car-detailing' },
    { name: 'RV Detailing', icon: Truck, href: '/services/rv-detailing' },
    { name: 'Truck Detailing', icon: Truck, href: '/services/truck-detailing' },
    { name: 'Motorcycle Detailing', icon: Bike, href: '/services/motorcycle-detailing' },
    { name: 'Boat Detailing', icon: Ship, href: '/services/boat-detailing' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-24 px-4 pt-40 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80)', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#1B9B8A]/10 border-2 border-[#1B9B8A]/40 rounded-full px-6 py-2">
              <MapPin className="w-4 h-4 text-[#1B9B8A]" />
              <span className="text-[#1B9B8A] text-sm font-semibold tracking-wider">AURORA MOBILE DETAILING</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            AURORA<br className="hidden sm:block" /> DETAILING SERVICES
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Premium mobile detailing in Aurora.<br className="hidden sm:block" /> We come to you.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-7 text-lg font-bold" asChild>
            <Link href="/contact"><Phone className="w-5 h-5 mr-2" />GET FREE QUOTE</Link>
          </Button>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>SERVICES IN AURORA</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#1B9B8A]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.name}</h3>
                    <Button asChild variant="outline" size="sm" className="w-full border-[#1B9B8A] text-[#1B9B8A] hover:bg-[#1B9B8A] hover:text-white">
                      <Link href={service.href}>LEARN MORE</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>AURORA'S PREMIER<br className="hidden sm:block" /> MOBILE DETAILING</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">Professional service at your location.</p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-12 py-7 text-lg font-bold" asChild>
            <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL (720) 971-2020</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
