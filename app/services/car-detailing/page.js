'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CarDetailing() {
  const services = [
    {
      title: 'Interior Detailing',
      description: 'Comprehensive interior cleaning including vacuuming, shampooing seats and carpets, detailed cleaning of crevices and hard-to-reach areas, dashboard and console treatment, and complete odor elimination.',
      icon: Sparkles
    },
    {
      title: 'Exterior Detailing',
      description: 'Deep washing of doors, tires, wheels, and trunk. Premium hand wax application for a glossy, showroom finish. Paint protection and restoration to keep your vehicle looking pristine.',
      icon: Shield
    },
    {
      title: 'Luxury Car Detailing',
      description: 'Specialized care for premium vehicles including Porsche, BMW, Mercedes, Tesla, and more. Precision techniques and premium products designed specifically for luxury automobiles.',
      icon: Sparkles
    },
    {
      title: 'Full Service Detailing',
      description: 'Complete interior and exterior detailing package. Everything from deep cleaning and shampooing to waxing and protection, giving your car a complete transformation.',
      icon: Shield
    }
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: 'Advanced Techniques',
      description: 'We employ the latest detailing techniques and use professional-grade equipment to achieve superior results.'
    },
    {
      icon: Shield,
      title: 'Certified & Insured',
      description: 'Our team of certified technicians is fully insured, giving you complete peace of mind.'
    },
    {
      icon: Clock,
      title: 'Time-Saving Mobile Service',
      description: 'We come directly to your location in South Denver Metro, saving you time and providing ultimate convenience.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'CONSULTATION',
      description: 'We discuss your vehicle\'s needs and recommend the best detailing package for your specific requirements and budget.'
    },
    {
      step: '2',
      title: 'CLEANING & POLISHING',
      description: 'Our expert technicians thoroughly clean, polish, and protect every surface using premium products and professional techniques.'
    },
    {
      step: '3',
      title: 'FINAL WALKTHROUGH',
      description: 'We walk you through the completed work, ensuring every detail meets your expectations and answering any questions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
            CAR DETAILING SOUTH DENVER
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your car with our comprehensive interior<br className="hidden sm:block" /> and exterior detailing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-6 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                BOOK NOW
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-6 text-lg font-bold">
              GET A FREE QUOTE
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
              OUR CAR DETAILING<br className="hidden sm:block" /> SERVICES
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
                        <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Restoration Upsell */}
          <div className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 via-[#1B9B8A]/10 to-[#D4AF37]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>CAR RESTORATION SERVICES</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Got paint scratches, swirl marks, or oxidation? Our <span className="text-[#D4AF37] font-bold">restoration services</span> can bring your car back to showroom condition with paint correction and ceramic coating.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black font-bold px-10 py-6">
              <Link href="/services/restoration">EXPLORE RESTORATION</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
            TOP-QUALITY CAR<br className="sm:hidden" /> DETAILING
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
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
            OUR DETAILING PROCESS
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-[#1B9B8A] via-[#D4AF37] to-[#1B9B8A]"></div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-10 shadow-2xl">
                      <span className="text-black font-black text-3xl" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#1B9B8A] transition-all text-center">
                    <h3 className="text-xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'Montserrat, sans-serif', textWrap: 'balance' }}>
            READY TO RESTORE<br className="hidden sm:block" /> YOUR CAR'S SHINE?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Book your car detailing service today and experience<br className="hidden sm:block" /> the Spruce Mobile Detailing difference.
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
