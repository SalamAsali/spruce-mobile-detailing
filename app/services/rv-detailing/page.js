'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock, Phone, Star, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function RVDetailing() {
  const services = [
    {
      title: 'RV Interior Detailing',
      description: 'Comprehensive interior cleaning including vacuuming, shampooing seats and carpets, detailed cleaning of cabinets and storage areas, dashboard and console treatment, and complete odor elimination for a fresh living space.',
      icon: Sparkles
    },
    {
      title: 'RV Exterior Detailing',
      description: 'Full exterior wash including roof, sidewalls, and underbelly. Oxidation removal, paint correction, waxing, and sealing to protect against UV damage and maintain that showroom shine.',
      icon: Shield
    },
    {
      title: 'RV Restoration Services',
      description: 'Bring your aging RV back to life with our comprehensive restoration services. Gel coat restoration, decal replacement, oxidation removal, and full surface renewal for RVs that need more than standard detailing.',
      icon: Sparkles
    },
    {
      title: 'Full Service RV Detailing',
      description: 'Complete interior and exterior detailing package. Everything from deep cleaning and restoration to protective coatings, giving your RV a complete transformation from top to bottom.',
      icon: Shield
    }
  ]

  const pricingTiers = [
    {
      name: 'Basic Detail',
      pricePerFoot: 25,
      description: 'Essential cleaning and maintenance',
      features: [
        'Exterior hand wash',
        'Interior vacuum and wipe-down',
        'Window and mirror cleaning',
        'Tire dressing',
        'Basic odor removal',
        'Spot cleaning of stains'
      ],
      color: 'from-gray-800 to-gray-700',
      border: 'border-gray-700',
      buttonColor: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      name: 'Premium Detail',
      pricePerFoot: 50,
      description: 'Comprehensive detailing package',
      features: [
        'Everything in Basic Detail',
        'Paint correction and waxing',
        'Deep interior shampooing',
        'Cabinet and storage deep clean',
        'Oxidation removal',
        'Dashboard conditioning',
        'Chrome and metal polishing',
        'Air vent deep cleaning'
      ],
      color: 'from-[#1B9B8A] to-[#158F7E]',
      border: 'border-[#1B9B8A]',
      buttonColor: 'bg-[#1B9B8A] hover:bg-[#158F7E]',
      popular: true
    },
    {
      name: 'Ultimate Detail',
      pricePerFoot: 150,
      description: 'Most comprehensive detailing service',
      features: [
        'Everything in Premium Detail',
        'Full gel coat restoration',
        'Complete oxidation correction',
        'Engine bay detailing',
        'Undercarriage cleaning',
        'Awning cleaning and treatment',
        'Slide-out maintenance',
        'Extended warranty protection'
      ],
      color: 'from-[#D4AF37] to-[#F4E5A1]',
      border: 'border-[#D4AF37]',
      buttonColor: 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black hover:from-[#F4E5A1] hover:to-[#D4AF37]'
    }
  ]

  const addOnServices = [
    {
      name: 'Ceramic Coating',
      price: 'Starting at $1,200',
      description: 'Long-lasting protection with 3-5 year lifespan. Prevents oxidation and makes cleaning effortless.',
      features: ['UV Protection', 'Hydrophobic surface', 'Easy maintenance', 'Gloss enhancement'],
      icon: Shield,
      color: 'border-[#1B9B8A]'
    },
    {
      name: 'Complete Restoration',
      price: 'Custom Quote',
      description: 'Full vehicle restoration including paint correction, decal replacement, and surface renewal.',
      features: ['Paint correction', 'Decal replacement', 'Surface renewal', 'Like-new finish'],
      icon: Sparkles,
      color: 'border-[#D4AF37]',
      featured: true
    }
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: 'RV Specialists',
      description: 'Our team specializes in RV and motorhome detailing with experience handling vehicles from 20 to 45+ feet.'
    },
    {
      icon: Shield,
      title: 'Mobile Convenience',
      description: 'We come to your location with all professional equipment, whether you\'re at home, storage, or a campground.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with same-day service available for urgent needs before your next adventure.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'MEASURE & QUOTE',
      description: 'We measure your RV length and provide a detailed quote based on size and services needed.'
    },
    {
      step: '2',
      title: 'DETAIL & RESTORE',
      description: 'Our team arrives with professional equipment and completes the detailing or restoration package you selected.'
    },
    {
      step: '3',
      title: 'INSPECT & ENJOY',
      description: 'Final walkthrough to ensure satisfaction. Your RV is ready for your next adventure looking better than ever.'
    }
  ]

  const comparisonFeatures = [
    { feature: 'Lasts 3-5 Years', basic: false, premium: false, ultimate: true },
    { feature: 'UV Protection', basic: false, premium: true, ultimate: true },
    { feature: 'Oxidation Removal', basic: false, premium: true, ultimate: true },
    { feature: 'Interior Deep Clean', basic: false, premium: true, ultimate: true },
    { feature: 'Ceramic Coating', basic: false, premium: false, ultimate: true },
    { feature: 'Membership Included', basic: false, premium: false, ultimate: true }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            RV DETAILING & RESTORATION
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Specialized care for your RV or motorhome.<br className="hidden sm:block" /> Professional detailing and restoration services in South Denver Metro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-7 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                GET FREE QUOTE
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-7 text-lg font-bold">
              <a href="#pricing">VIEW PRICING</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OUR RV DETAILING<br className="hidden sm:block" /> SERVICES
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
                        <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.title}</h3>
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
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>RV RESTORATION SPECIALIST</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Got an older RV with oxidation, fading, or damage? Our <span className="text-[#D4AF37] font-bold">restoration services</span> can completely transform it. From gel coat repair to full surface renewal.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black font-bold px-10 py-6">
              <Link href="/services/restoration">EXPLORE RESTORATION</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              RV DETAILING PRICING
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Transparent pricing based on your RV length.<br className="hidden sm:block" /> Choose the package that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`bg-gradient-to-br ${tier.color} border-2 ${tier.border} overflow-hidden relative group hover:scale-105 transition-all duration-300 ${tier.popular ? 'md:scale-110 shadow-2xl shadow-[#1B9B8A]/50' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#1B9B8A] text-white text-center py-2 text-sm font-bold tracking-wider">
                    ⭐ MOST POPULAR ⭐
                  </div>
                )}
                <CardContent className={`p-8 ${tier.popular ? 'pt-14' : ''}`}>
                  <h3 className={`text-2xl font-black mb-2 ${tier.name === 'Ultimate Restoration' ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-5xl font-black ${tier.name === 'Ultimate Restoration' ? 'text-black' : 'text-white'}`}>${tier.pricePerFoot}</span>
                    <span className={`text-xl ${tier.name === 'Ultimate Restoration' ? 'text-black/70' : 'text-gray-300'}`}> /foot</span>
                  </div>
                  <p className={`text-sm mb-6 ${tier.name === 'Ultimate Restoration' ? 'text-black/70' : 'text-gray-300'}`}>{tier.description}</p>
                  
                  <Button className={`w-full py-6 font-bold text-lg mb-6 ${tier.buttonColor}`}>
                    <a href="tel:+17209712020">SELECT PACKAGE</a>
                  </Button>

                  <div className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.name === 'Ultimate Restoration' ? 'text-black' : 'text-[#1B9B8A]'}`} />
                        <span className={`text-sm ${tier.name === 'Ultimate Restoration' ? 'text-black' : 'text-gray-300'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-center mb-8 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              PACKAGE COMPARISON
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-semibold">Basic</th>
                    <th className="text-center py-4 px-4 text-[#1B9B8A] font-semibold">Premium</th>
                    <th className="text-center py-4 px-4 text-[#D4AF37] font-semibold">Ultimate</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-4 text-gray-300">{item.feature}</td>
                      <td className="text-center py-4 px-4">
                        {item.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="text-center py-4 px-4">
                        {item.premium ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                      <td className="text-center py-4 px-4">
                        {item.ultimate ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Membership Callout */}
          <div className="mt-12 bg-gradient-to-r from-[#1B9B8A]/20 via-[#D4AF37]/10 to-[#1B9B8A]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              🌟 BONUS: SPRUCE SHIELD CLUB MEMBERSHIP 🌟
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Purchase any <span className="text-[#D4AF37] font-bold">Ceramic Coating</span> or <span className="text-[#D4AF37] font-bold">Restoration</span> add-on and receive <span className="text-[#D4AF37] font-bold">FREE LIFETIME MEMBERSHIP</span>
            </p>
            <p className="text-gray-400 mb-6">
              Save 30% on all future maintenance washes • Priority booking • Annual inspection included
            </p>
            <Button asChild variant="link" className="text-[#1B9B8A] hover:text-[#D4AF37] font-bold text-lg">
              <Link href="/membership">Learn More About Membership Benefits →</Link>
            </Button>
          </div>

          {/* Add-On Services */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                PREMIUM ADD-ON SERVICES
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4"></div>
              <p className="text-gray-400">
                Enhance any detailing package with these professional services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {addOnServices.map((addon, index) => {
                const Icon = addon.icon
                return (
                  <Card key={index} className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 ${addon.color} overflow-hidden relative group ${addon.featured ? 'md:scale-105' : ''}`}>
                    {addon.featured && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black text-center py-2 text-xs font-black tracking-wider">
                        ⭐ MOST REQUESTED ADD-ON ⭐
                      </div>
                    )}
                    <CardContent className={`p-8 ${addon.featured ? 'pt-12' : ''}`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${addon.featured ? 'bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1]' : 'bg-gradient-to-br from-[#1B9B8A] to-[#158F7E]'}`}>
                          <Icon className={`w-7 h-7 ${addon.featured ? 'text-black' : 'text-white'}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-black mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{addon.name}</h4>
                          <p className={`text-lg font-bold ${addon.featured ? 'text-[#D4AF37]' : 'text-[#1B9B8A]'}`}>{addon.price}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{addon.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {addon.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 ${addon.featured ? 'text-[#D4AF37]' : 'text-[#1B9B8A]'}`} />
                            <span className="text-sm text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className={`w-full py-4 font-bold ${addon.featured ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] text-black hover:from-[#F4E5A1] hover:to-[#D4AF37]' : 'bg-[#1B9B8A] hover:bg-[#158F7E] text-white'}`}>
                        <a href="tel:+17209712020">ADD TO PACKAGE</a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                Add-ons can be combined with any detailing package above.<br />
                <span className="text-[#D4AF37] font-semibold">Ceramic Coating + Restoration customers receive FREE Membership</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WHY CHOOSE SPRUCE<br className="sm:hidden" /> FOR YOUR RV?
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
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            HOW IT WORKS
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-[#1B9B8A] via-[#D4AF37] to-[#1B9B8A]"></div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-10 shadow-2xl">
                      <span className="text-black font-black text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#1B9B8A] transition-all text-center">
                    <h3 className="text-xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            READY TO RESTORE<br className="hidden sm:block" /> YOUR RV?
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Professional RV detailing and restoration services.<br className="hidden sm:block" /> Mobile service across South Denver Metro.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-12 py-7 text-lg font-bold shadow-2xl">
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
