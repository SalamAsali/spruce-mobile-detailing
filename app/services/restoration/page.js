'use client'

import Link from 'next/link'
import { Sparkles, Shield, Clock, Phone, Star, CheckCircle, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Restoration() {
  const services = [
    {
      title: 'Oxidation Removal',
      description: 'Intensive gelcoat restoration that carefully removes oxidized layers to reveal a fresh, shiny surface. Perfect for RVs, boats, and vehicles showing chalk-like residue.',
      icon: Sparkles,
      features: ['Gelcoat restoration', 'Wetsanding services', 'Professional-grade compounds', 'Better-than-new shine']
    },
    {
      title: 'Paint Correction',
      description: 'Professional paint correction removes swirl marks, scratches, and defects. Machine polishing with precision techniques to restore depth and clarity.',
      icon: Shield,
      features: ['Swirl mark removal', 'Scratch correction', 'Hard water spot removal', 'Multi-stage polishing']
    },
    {
      title: 'RV Decal Repair',
      description: 'Expert removal and replacement of faded, peeled, or cracked RV decals. UV-resistant replacements that match original designs or custom options.',
      icon: Sparkles,
      features: ['Decal removal', 'Custom design options', 'UV-resistant materials', 'Bubble-free installation']
    },
    {
      title: 'Acrylic Roof Coating',
      description: 'Protective acrylic coating for EPDM/PVC roofs. Conceals stains, forms elastic barrier, and extends roof life by 10+ years.',
      icon: Shield,
      features: ['Weather resistance', 'UV protection', 'Leak prevention', '10-year extension']
    }
  ]

  const process = [
    {
      step: '1',
      title: 'FREE TEST PATCH',
      description: 'We perform a free test patch on your vehicle to show exactly what results to expect. No obligation assessment.',
      icon: CheckCircle
    },
    {
      step: '2',
      title: 'CUSTOM PROCESS',
      description: 'Tailored restoration plan based on your vehicle\'s condition. We explain every step and provide transparent pricing.',
      icon: Wrench
    },
    {
      step: '3',
      title: 'PROFESSIONAL APPLICATION',
      description: 'Expert restoration using professional-grade tools and techniques. Your vehicle is transformed to better-than-new condition.',
      icon: Sparkles
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/40 rounded-full px-6 py-2 shadow-lg shadow-[#D4AF37]/20">
              <Star className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-wider">MOST REQUESTED SERVICE</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
            VEHICLE RESTORATION
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform faded, oxidized vehicles back to showroom condition.<br className="hidden sm:block" /> Professional restoration from Castle Rock to Denver Metro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black px-10 py-6 text-lg font-bold shadow-2xl" asChild>
              <Link href="/contact"><Wrench className="w-5 h-5 mr-2" />GET FREE TEST PATCH</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#1B9B8A] text-[#1B9B8A] hover:bg-[#1B9B8A] hover:text-white px-10 py-6 text-lg font-bold" asChild>
              <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL NOW</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>RESTORATION SERVICES</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">Complete restoration solutions for all vehicle types</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#D4AF37] transition-all group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#1B9B8A]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <div className="pl-16 space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#1B9B8A]" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#D4AF37]/20 via-[#1B9B8A]/10 to-[#D4AF37]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>🌟 FREE MEMBERSHIP WITH RESTORATION 🌟</h3>
            <p className="text-gray-300 text-lg mb-4">All restoration customers receive <span className="text-[#D4AF37] font-bold">FREE LIFETIME MEMBERSHIP</span> to Spruce Shield Club</p>
            <p className="text-gray-400">30% off all maintenance • Priority booking • Free annual inspection</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-center mb-16 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>HOW IT WORKS</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 hidden md:block"></div>
            <div className="space-y-32">
              {process.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-20 shadow-2xl hidden md:flex">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className={`flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37] transition-all">
                          <div className="md:hidden w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-black" />
                          </div>
                          <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black text-xs font-bold px-3 py-1 rounded-full mb-4">STEP {item.step}</div>
                          <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{item.title}</h3>
                          <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
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

      <section className="py-20 px-4 bg-gradient-to-br from-[#D4AF37]/20 via-[#0A0A0A] to-[#1B9B8A]/10 border-y-2 border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>READY TO RESTORE<br className="hidden sm:block" /> YOUR VEHICLE?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">Get a free test patch and see the transformation yourself.<br className="hidden sm:block" /> Custom quotes for every project.</p>
          <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black px-12 py-6 text-lg font-bold shadow-2xl" asChild>
            <Link href="/contact"><Phone className="w-5 h-5 mr-2" />SCHEDULE FREE TEST PATCH</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
