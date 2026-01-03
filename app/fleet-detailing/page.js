'use client'

import Link from 'next/link'
import { Phone, CheckCircle, MapPin, Clock, DollarSign, Shield, Truck, Users, Sparkles, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function FleetDetailing() {
  const valueProps = [
    {
      icon: MapPin,
      title: 'On-Site Mobile Service',
      description: 'We come to your lot. Zero downtime for your fleet operations.'
    },
    {
      icon: DollarSign,
      title: 'Volume-Based Pricing',
      description: 'Competitive discounts for recurring and large fleet accounts.'
    },
    {
      icon: Shield,
      title: 'Consistent Quality',
      description: 'SOP-driven detailing ensures every vehicle meets your standards.'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'After hours and weekend service available for your convenience.'
    }
  ]

  const services = [
    { title: 'Fleet Exterior Wash', description: 'High-volume exterior washing with premium products', icon: Truck },
    { title: 'Interior Fleet Cleaning', description: 'Complete interior detailing for passenger comfort', icon: Sparkles },
    { title: 'Full Fleet Detail', description: 'Comprehensive interior and exterior service', icon: Shield },
    { title: 'Dealership Prep', description: 'Show-ready detailing for inventory vehicles', icon: Car },
    { title: 'Rental Turnover', description: 'Fast turnaround detailing between rentals', icon: Clock },
    { title: 'Subscription Plans', description: 'Recurring maintenance programs with locked-in pricing', icon: Calendar }
  ]

  const process = [
    { step: '1', title: 'Fleet Assessment', description: 'We evaluate your fleet size, vehicle types, and specific detailing needs.', icon: Users },
    { step: '2', title: 'Custom Quote', description: 'Transparent pricing with volume discounts and flexible scheduling options.', icon: DollarSign },
    { step: '3', title: 'On-Site Service', description: 'Our mobile team arrives at your location with professional equipment.', icon: Truck },
    { step: '4', title: 'Quality Check', description: 'Final inspection ensures every vehicle meets your brand standards.', icon: CheckCircle }
  ]

  const comparison = [
    { feature: 'Schedule', standard: 'One-off appointments', spruce: 'Recurring maintenance plans' },
    { feature: 'Quality', standard: 'Inconsistent results', spruce: 'SOP-driven consistency' },
    { feature: 'Scope', standard: 'Exterior wash only', spruce: 'Full interior + exterior' },
    { feature: 'Location', standard: 'You drive to them', spruce: 'We come to your lot' },
    { feature: 'Pricing', standard: 'Per-vehicle rates', spruce: 'Volume discounts' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden" aria-label="Fleet detailing hero section">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-brand-gold/10 border-2 border-brand-gold/40 rounded-full px-6 py-2">
              <Users className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold text-sm font-semibold tracking-wider">B2B SOLUTIONS</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-5xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            Professional Fleet Cleaning for Commercial Vehicles
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Mobile, scalable detailing solutions for dealerships, rental fleets, corporate vehicles, and logistics companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button size="lg" className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-black px-10 py-6 text-lg font-bold" asChild>
              <Link href="/contact">GET FLEET PRICING</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-10 py-6 text-lg font-bold" asChild>
              <a href="#services">SEE SERVICES</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-brand-teal transition-all group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal/20 to-brand-gold/20 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>{prop.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>Fleet Detailing Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-brand-gold transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-gold/20 to-brand-teal/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"></div>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>Our Fleet Cleaning Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 hidden md:block"></div>
            <div className="space-y-24 md:space-y-32">
              {process.map((item, idx) => {
                const Icon = item.icon
                const isEven = idx % 2 === 0
                return (
                  <div key={idx} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center z-20 shadow-2xl hidden md:flex">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className={`flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-brand-gold transition-all">
                          <div className="md:hidden w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-black" />
                          </div>
                          <div className="inline-block bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STEP {item.step}</div>
                          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>{item.title}</h3>
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

      {/* Comparison Table */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif' }}>Why Fleet Detailing Beats Standard Car Washes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-gray-800 rounded-2xl overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-900 to-gray-800">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-400 font-bold">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-bold">Standard Wash</th>
                  <th className="text-center py-4 px-6 text-brand-gold font-bold">Spruce Fleet Service</th>
                </tr>
              </thead>
              <tbody className="bg-gradient-to-br from-gray-900 to-gray-800">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-t border-gray-800">
                    <td className="py-4 px-6 text-white font-semibold">{row.feature}</td>
                    <td className="text-center py-4 px-6 text-gray-500">{row.standard}</td>
                    <td className="text-center py-4 px-6 text-brand-teal font-semibold">{row.spruce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-brand-teal/20 via-[#0A0A0A] to-brand-gold/10 border-y-2 border-brand-gold/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            Ready to streamline your fleet maintenance?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">Professional fleet detailing with flexible scheduling and volume pricing</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-black px-12 py-6 text-lg font-bold" asChild>
              <Link href="/contact">GET FLEET QUOTE</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-12 py-6 text-lg font-bold" asChild>
              <a href="tel:+17209712020"><Phone className="w-5 h-5 mr-2" />CALL NOW</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
