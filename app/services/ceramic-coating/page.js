'use client'

import Link from 'next/link'
import { Shield, Star, CheckCircle, Phone, Droplets, Sun, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CeramicCoating() {
  const benefits = [
    { title: 'Prevents Oxidation', description: 'Protective layer guards against oxidation, preserving paint gloss and finish for years.', icon: Shield },
    { title: 'Easy Maintenance', description: 'Hydrophobic properties repel water, dust, and dirt. Cleaning becomes effortless.', icon: Droplets },
    { title: 'UV Protection', description: 'Reflects harmful UV rays, providing long-term protection from sun damage.', icon: Sun },
    { title: '35% More Gloss', description: 'Restores color and gloss up to 35% more than traditional wax.', icon: Sparkles },
    { title: 'Scratch Resistant', description: 'Diamond-hard coating resists scratches and repels stains from road contaminants.', icon: Shield },
    { title: 'Winter Protection', description: 'Prevents ice and snow adhesion, repels road salt, perfect for Colorado winters.', icon: Star }
  ]

  const products = [
    {
      name: 'System X Ceramic Coating',
      description: 'Industry-leading ceramic coating specifically designed for RVs, cars, trucks, and boats. Warranty-backed protection.',
      features: ['Warranty included', 'Professional application', 'Multi-year protection', 'Hydrophobic surface']
    },
    {
      name: 'Glidecoat Pro',
      description: 'Premium pro-grade ceramic coating. Licensed professionals certified in assessment, preparation, and application.',
      features: ['Supplier warranty', 'Certified installers', 'Custom packages', 'Long-lasting protection']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610465299996-e3e2c3e27e18?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-[#1B9B8A]/10 border-2 border-[#1B9B8A]/40 rounded-full px-6 py-2">
              <Shield className="w-5 h-5 text-[#1B9B8A]" />
              <span className="text-[#1B9B8A] text-sm font-semibold tracking-wider">CERTIFIED COATING PROFESSIONALS</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>CERAMIC<br className="hidden sm:block" /> COATING</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">Professional nano-technology protection for all vehicles.<br className="hidden sm:block" /> System X & Glidecoat certified installers.</p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-7 text-lg font-bold" asChild>
            <Link href="/contact"><Phone className="w-5 h-5 mr-2" />GET FREE QUOTE</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B9B8A]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>CERAMIC COATING BENEFITS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#1B9B8A]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>OUR PRODUCTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-[#D4AF37]/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{product.name}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1B9B8A]" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Every ceramic coating application includes free membership to our discounted wash program</p>
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-10 py-6 font-bold" asChild>
              <Link href="/membership">LEARN ABOUT MEMBERSHIP</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y-2 border-[#1B9B8A]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>GET CERAMIC COATING<br className="hidden sm:block" /> PROTECTION TODAY</h2>
          <p className="text-gray-300 text-xl mb-10">Warranty-backed ceramic coating from certified professionals</p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-12 py-7 text-lg font-bold" asChild>
            <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL (720) 971-2020</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
