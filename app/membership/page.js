'use client'

import Link from 'next/link'
import { Star, Crown, Shield, Sparkles, Phone, CheckCircle, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Membership() {
  const benefits = [
    {
      title: '30% Off All Washes',
      description: 'Locked-in member rates for life. Save hundreds annually on maintenance washes.',
      icon: Star
    },
    {
      title: 'Priority Booking',
      description: 'Skip the wait during busy seasons. Members get first priority for scheduling.',
      icon: Crown
    },
    {
      title: 'Free Annual Inspection',
      description: 'Yearly coating and protection check-up at no cost. Keep your investment protected.',
      icon: Shield
    },
    {
      title: 'Quarterly Wash Program',
      description: 'Discounted wash packages available quarterly, biannually, or annually.',
      icon: Sparkles
    },
    {
      title: 'Exclusive Member Pricing',
      description: 'Special pricing on add-on services and upgrades throughout the year.',
      icon: Award
    },
    {
      title: 'Lifetime Protection',
      description: 'As long as you own your vehicle, your membership stays active.',
      icon: Star
    }
  ]

  const howToJoin = [
    'Purchase any Ceramic Coating service',
    'Purchase any Complete Restoration service',
    'Purchase any PPF + Ceramic Coating combo'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/40 rounded-full px-8 py-3 mb-6">
            <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[#D4AF37] text-lg font-black tracking-wider" style={{ fontFamily: 'Montserrat' }}>EXCLUSIVE MEMBERSHIP</span>
            <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>THE SPRUCE SHIELD CLUB</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">Never pay full price for a wash again.<br className="hidden sm:block" /> FREE lifetime membership with ceramic coating or restoration services.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>MEMBERSHIP BENEFITS</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#D4AF37] transition-all group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#1B9B8A]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Icon className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>HOW TO JOIN</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl">Membership is automatically included with these premium services:</p>
          </div>

          <div className="space-y-4">
            {howToJoin.map((method, index) => (
              <div key={index} className="flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-[#D4AF37]/30 rounded-2xl hover:border-[#D4AF37] transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center flex-shrink-0 text-black font-black text-xl" style={{ fontFamily: 'Montserrat' }}>
                  {index + 1}
                </div>
                <span className="text-xl text-gray-300 group-hover:text-white transition-colors">{method}</span>
                <CheckCircle className="w-6 h-6 text-[#1B9B8A] ml-auto" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-6">Don't have a membership yet?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black px-10 py-6 font-bold" asChild>
                <Link href="/services/ceramic-coating">VIEW CERAMIC COATING</Link>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-6 font-bold" asChild>
                <Link href="/services/restoration">VIEW RESTORATION</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#D4AF37]/20 via-[#0A0A0A] to-[#1B9B8A]/10 border-y-2 border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>JOIN THE SPRUCE SHIELD CLUB TODAY</h2>
          <p className="text-gray-300 text-xl mb-10">Save 30% on maintenance for the lifetime of your vehicle</p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-12 py-6 text-lg font-bold" asChild>
            <Link href="/contact"><Phone className="w-5 h-5 mr-2" />GET STARTED</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
