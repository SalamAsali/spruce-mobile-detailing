'use client'

import Link from 'next/link'
import { Phone, MapPin, Car, Truck, Bike, Ship, CheckCircle, Star, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function LocationPage() {
  const cityName = 'CASTLE ROCK'
  const citySlug = 'castle-rock'
  
  const services = [
    { name: 'Car Detailing', icon: Car, href: '/services/car-detailing' },
    { name: 'RV Detailing', icon: Truck, href: '/services/rv-detailing' },
    { name: 'Truck Detailing', icon: Truck, href: '/services/truck-detailing' },
    { name: 'Motorcycle', icon: Bike, href: '/services/motorcycle-detailing' },
    { name: 'Boat Detailing', icon: Ship, href: '/services/boat-detailing' }
  ]

  const benefits = [
    'Mobile service - We come to you',
    'Certified professionals',
    'Premium products only',
    'Same-day service available',
    'Free quotes and consultations',
    'Restoration specialists'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#1B9B8A]/10 border-2 border-[#1B9B8A]/40 rounded-full px-6 py-2">
              <MapPin className="w-4 h-4 text-[#1B9B8A]" />
              <span className="text-[#1B9B8A] text-sm font-semibold tracking-wider">LOCAL MOBILE DETAILING</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            DETAILING SERVICES IN Castle Rock
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Premium mobile auto detailing serving Castle Rock and surrounding areas. We come to you.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-6 text-lg font-bold" asChild>
            <Link href="/contact"><Phone className="w-5 h-5 mr-2" />GET FREE QUOTE</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B9B8A]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OUR SERVICES IN Castle Rock
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#1B9B8A]" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.name}</h3>
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

      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                WHY CHOOSE SPRUCE IN Castle Rock?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We bring professional-grade detailing, restoration, and ceramic coating services directly to your location in Castle Rock. Our certified team uses System X, Glidecoat, and Suntek products to protect your investment.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" alt={`Detailing in $Castle Rock`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#1B9B8A]/10 to-[#D4AF37]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>SERVING Castle Rock & SURROUNDING AREAS</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Part of our commitment to Castle Rock to Denver Metro service area. Professional detailing, restoration, and ceramic coating at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-6 font-bold" asChild>
                <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL (720) 971-2020</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-6 font-bold" asChild>
                <Link href="/contact">REQUEST QUOTE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
