'use client'

import Link from 'next/link'
import { Shield, Award, Clock, CheckCircle, Star, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const certifications = [
    {
      title: 'System X Certified',
      description: 'Authorized System X Ceramic Coating professionals with comprehensive training and certification.',
      icon: Shield
    },
    {
      title: 'Glidecoat Licensed',
      description: 'Licensed Glidecoat Professionals skilled in assessment, preparation, and application of pro-grade ceramic coatings.',
      icon: Award
    },
    {
      title: 'Suntek PPF Experts',
      description: 'Certified installers of Suntek Paint Protection Film with 10-year warranty backing.',
      icon: Shield
    }
  ]

  const values = [
    {
      title: 'Expert Protection',
      description: 'Your vehicle is more than transportation—it\'s your home on the road, your work partner, or your pride and joy. We protect it like our own.',
      icon: Shield
    },
    {
      title: 'Quality Products',
      description: 'We use only industry-leading products: System X and Glidecoat ceramic coatings, Suntek PPF, and professional-grade detailing supplies.',
      icon: Sparkles
    },
    {
      title: 'Mobile Convenience',
      description: 'Serving Denver and all surrounding cities within 50 miles. We come to you—whether at home, work, or storage facility.',
      icon: Clock
    },
    {
      title: 'Warranty Backed',
      description: 'All ceramic coating applications come with supplier-backed warranties. Suntek PPF includes a remarkable 10-year warranty.',
      icon: Award
    }
  ]

  const services = [
    'Ceramic Coating (System X & Glidecoat)',
    'Paint Protection Film (Suntek PPF)',
    'Oxidation Removal & Gelcoat Restoration',
    'RV Decal Repair & Installation',
    'Acrylic Roof Coating (EPDM/PVC)',
    'Professional Detailing (All Vehicles)',
    'Wetsanding & Paint Correction',
    'Mobile Service (We Come To You)'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/40 rounded-full px-6 py-2 shadow-lg shadow-[#D4AF37]/20">
              <Star className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-wider">CERTIFIED PROFESSIONALS</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
            ABOUT SPRUCE MOBILE DETAILING
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Colorado's premier mobile detailing, restoration, and protection specialists.<br className="hidden sm:block" /> Certified professionals serving South Denver Metro.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
                WHY CHOOSE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1]">SPRUCE DETAILING</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At Spruce Mobile Detailing, we understand the harsh conditions your vehicles face in Colorado—from intense UV rays to road salt, mud, and ever-changing weather. That's why we specialize in professional-grade protection and restoration services.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Whether you drive a luxury car, work truck, RV, motorcycle, or boat, we protect your investment with industry-leading ceramic coatings, paint protection film, and expert restoration techniques. We don't just clean vehicles—we preserve assets.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-6 font-bold" asChild>
                <Link href="/contact">GET FREE CONSULTATION</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1620584898989-d39f7f9ed1b7?w=800&q=80" 
                alt="Professional detailing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
              CERTIFIED & LICENSED<br className="sm:hidden" /> PROFESSIONALS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#D4AF37] transition-all group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#1B9B8A]/20 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{cert.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B9B8A]/30 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
            WHAT SETS US APART
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#1B9B8A]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
              OUR CORE SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-800 rounded-xl hover:border-[#1B9B8A] transition-all group">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Serving Denver and all surrounding cities within 50 miles including Boulder, Golden, Lakewood,<br className="hidden md:block" /> Littleton, Castle Rock, Parker, Aurora, Centennial, and more!
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black px-12 py-6 font-bold" asChild>
              <Link href="/contact">SCHEDULE YOUR SERVICE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y-2 border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
            READY TO PROTECT<br className="hidden sm:block" /> YOUR INVESTMENT?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Contact our certified team for a free consultation<br className="hidden sm:block" /> and personalized service package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white px-12 py-6 text-lg font-bold" asChild>
              <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL (720) 971-2020</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-12 py-6 text-lg font-bold" asChild>
              <Link href="/contact">GET FREE QUOTE</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
