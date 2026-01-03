'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TruckDetailing() {
  const services = [
    {
      title: 'Truck Interior Detailing',
      description: 'Heavy-duty interior cleaning for work trucks. Deep vacuuming, seat shampooing, floor mat cleaning, dashboard restoration, and odor elimination designed for trucks that work hard.',
      icon: Sparkles
    },
    {
      title: 'Exterior Truck Detailing',
      description: 'Complete exterior detailing including undercarriage cleaning, bed liner treatment, chrome restoration, paint correction, and protective waxing or ceramic coating.',
      icon: Shield
    },
    {
      title: 'Commercial Fleet Detailing',
      description: 'Specialized fleet services for businesses with multiple trucks. Consistent quality, scheduled maintenance, and volume pricing for commercial operations.',
      icon: Sparkles
    },
    {
      title: 'Truck Restoration',
      description: 'Complete restoration for older trucks with oxidation, paint damage, or heavy wear. Paint correction, bed restoration, and protective coating application.',
      icon: Shield
    }
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: 'Heavy-Duty Specialists',
      description: 'Our team specializes in truck detailing with industrial-grade products and techniques designed for work vehicles.'
    },
    {
      icon: Shield,
      title: 'Bed & Undercarriage',
      description: 'We don\'t just clean the surface. Complete bed liner treatment, undercarriage cleaning, and frame protection.'
    },
    {
      icon: Clock,
      title: 'Fleet Services',
      description: 'Commercial fleet services available with volume pricing and scheduled maintenance programs.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'INSPECT & ASSESS',
      description: 'We evaluate your truck\'s condition and recommend the right services for work trucks, personal trucks, or commercial fleets.',
      icon: CheckCircle
    },
    {
      step: '2',
      title: 'DEEP CLEAN',
      description: 'Heavy-duty cleaning inside and out, including bed, undercarriage, and all surfaces using industrial-strength products.',
      icon: Sparkles
    },
    {
      step: '3',
      title: 'PROTECT & SEAL',
      description: 'Apply protective coatings, bed liner treatment, and sealants to protect your truck against the elements and heavy use.',
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            TRUCK DETAILING SOUTH DENVER
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Heavy-duty detailing for work trucks and pickups.<br className="hidden sm:block" /> Professional cleaning and protection built for vehicles that work hard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-6 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                GET FREE QUOTE
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              TRUCK DETAILING SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#1B9B8A]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 via-[#1B9B8A]/10 to-[#D4AF37]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>TRUCK RESTORATION SERVICES</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Work trucks take a beating. Our <span className="text-[#D4AF37] font-bold">restoration services</span> can handle severe paint damage, bed rust, and heavy oxidation.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black font-bold px-10 py-6">
              <Link href="/services/restoration">VIEW RESTORATION</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            WHY CHOOSE US
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all text-center group">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-[#1B9B8A]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-center mb-16 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            HOW IT WORKS
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37] to-[#D4AF37] hidden md:block"></div>
            <div className="space-y-24">
              {process.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-20 shadow-2xl shadow-[#D4AF37]/50 hidden md:flex">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className={`flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#1B9B8A] transition-all">
                          <div className="md:hidden w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-black" />
                          </div>
                          <div className="inline-block bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                            STEP {item.step}
                          </div>
                          <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>{item.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            READY FOR PROFESSIONAL TRUCK DETAILING?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Heavy-duty cleaning and protection for work trucks.<br className="hidden sm:block" /> Mobile service across South Denver Metro.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-12 py-6 text-lg font-bold shadow-2xl">
            <a href="tel:+17209712020" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              CALL (720) 971-2020
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
