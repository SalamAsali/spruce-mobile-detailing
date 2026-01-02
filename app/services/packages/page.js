'use client'

import Link from 'next/link'
import { Phone, Star, Shield, Sparkles, Wrench, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Packages() {
  const packages = [
    {
      name: 'Detailing Package',
      price: 'Starting at $199',
      description: 'Complete interior and exterior detailing',
      features: ['Full exterior wash & wax', 'Interior deep clean', 'Window cleaning', 'Tire shine', 'Basic protection'],
      icon: Sparkles,
      color: 'border-gray-700',
      link: '/contact'
    },
    {
      name: 'Protection Package',
      price: 'Starting at $1,200',
      description: 'Ceramic coating with detailing included',
      features: ['Everything in Detailing Package', 'Professional ceramic coating', 'Warranty backed', 'FREE Membership', 'Priority service'],
      icon: Shield,
      color: 'border-[#1B9B8A]',
      popular: true,
      link: '/services/ceramic-coating'
    },
    {
      name: 'Ultimate Restoration',
      price: 'Custom Quote',
      description: 'Complete transformation package',
      features: ['Everything in Protection Package', 'Oxidation removal', 'Paint correction', 'PPF on vulnerable areas', 'Decal repair if needed', 'FREE Lifetime Membership'],
      icon: Wrench,
      color: 'border-[#D4AF37]',
      link: '/services/restoration'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>SERVICE<br className="hidden sm:block" /> PACKAGES</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">Choose the perfect package for your vehicle.<br className="hidden sm:block" /> From basic detailing to complete restoration.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <Card key={index} className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 ${pkg.color} transition-all group relative ${pkg.popular ? 'md:scale-105 shadow-2xl shadow-[#1B9B8A]/30' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-6 py-2 rounded-full text-xs font-black tracking-wider">
                      ⭐ MOST POPULAR ⭐
                    </div>
                  )}
                  <CardContent className={`p-8 ${pkg.popular ? 'pt-10' : ''}`}>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-10 h-10 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-2xl font-black mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{pkg.name}</h3>
                      <div className="text-3xl font-black text-[#D4AF37] mb-2">{pkg.price}</div>
                      <p className="text-gray-400 text-sm">{pkg.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#1B9B8A] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className={`w-full py-6 font-bold text-lg ${pkg.popular ? 'bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`} asChild>
                      <Link href={pkg.link}>SELECT PACKAGE</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/20 via-[#1B9B8A]/10 to-[#D4AF37]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>CUSTOM PACKAGES AVAILABLE</h3>
            <p className="text-gray-300 text-lg mb-6">Need something specific? We create custom packages tailored to your vehicle's needs and your budget.</p>
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-6 font-bold" asChild>
              <Link href="/contact">REQUEST CUSTOM QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y-2 border-[#1B9B8A]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>READY TO GET STARTED?</h2>
          <p className="text-gray-300 text-xl mb-10">Contact us today to discuss the right package for your vehicle</p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-12 py-7 text-lg font-bold" asChild>
            <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL (720) 971-2020</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
