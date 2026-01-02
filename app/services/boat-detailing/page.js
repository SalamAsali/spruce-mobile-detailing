'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function BoatDetailing() {
  const services = [
    {
      title: 'Boat Interior Detailing',
      description: 'Our boat interior detailing service includes thorough cleaning and sanitization of all seating, floors, compartments, and storage areas. We remove mildew, stains, and odors while conditioning vinyl and leather to prevent cracking and fading.',
      icon: Sparkles
    },
    {
      title: 'Exterior Boat Detailing',
      description: 'Denver\'s sun and water can cause oxidation and dull finishes. Our exterior boat detailing includes hull washing, gel coat polishing, metal brightening, and waxing with professional-grade compounds.',
      icon: Shield
    },
    {
      title: 'Yacht Detailing',
      description: 'Our yacht detailing services deliver luxury-level care for large vessels. From decks to engine rooms, we detail every surface to offer long-lasting interior protection and preserve your yacht\'s elegance.',
      icon: Sparkles
    },
    {
      title: 'Jet Ski Detailing',
      description: 'Specialized detailing designed for high-performance watercraft. All products we use are water-resistant to maintain quality and keep your jet ski looking sleek and performing at its best.',
      icon: Shield
    }
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: 'Top-Quality Boat Detailing',
      description: 'We offer top-quality boat detailing to every marine vessel owner in Denver. Our team uses advanced techniques and equipment to return your boat to pristine condition.'
    },
    {
      icon: Shield,
      title: 'Certified & Insured',
      description: 'Extensive boat detailing packages for all types of vessels. As an industry-leading mobile detailing service, we handle boats, yachts, jet skis, and more.'
    },
    {
      icon: Clock,
      title: 'Time-Saving Experience',
      description: 'We come to your home or marina to perform on-site boat detailing in Denver, saving you time and hassle.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Book & Assess',
      description: 'Use our online form or call to confirm your appointment. Our detailing professionals will arrive on time to assess your boat\'s condition.'
    },
    {
      step: '2',
      title: 'Detail & Protect',
      description: 'We explain the steps, recommend services, and start cleaning, waxing, and preserving every surface of your boat per your selected package.'
    },
    {
      step: '3',
      title: 'Final Walkthrough',
      description: 'Before finalizing, we show you the completed vessel to ensure satisfaction. The result: a spotless boat with brand-new interior and exterior appearance.'
    }
  ]

  const faqs = [
    {
      question: 'What does Boat Detailing Include?',
      answer: 'Boat detailing includes deep cleaning, polishing, and protecting every surface of your vessel. It addresses exterior gel coat, vinyl, metal, and interior finishes to restore like-new condition.'
    },
    {
      question: 'How Much Does Boat Detailing Cost?',
      answer: 'Cost varies based on vessel size and condition. We provide free quotes after assessing your boat. Packages start at competitive rates for basic cleaning up to comprehensive restoration services.'
    },
    {
      question: 'How Long Does Boat Detailing Take?',
      answer: 'Timing depends on vessel size and service selected. A basic detail may take 2-4 hours, while comprehensive yacht detailing can take a full day or more.'
    },
    {
      question: 'Is Boat Detailing Worth It?',
      answer: 'Absolutely! Regular detailing protects your investment, prevents oxidation, maintains resale value, and ensures your vessel looks pristine for every outing.'
    },
    {
      question: 'Consider Restoration Services?',
      answer: 'For boats with significant wear, oxidation, or damage, our restoration services can bring your vessel back to life. This includes gel coat restoration, color correction, and structural repairs.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-40 lg:pt-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            BOAT DETAILING<br className="hidden sm:block" /> DENVER
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Many people consider their boat a beloved family member.<br className="hidden sm:block" /> Give it the best care with Spruce Detailing's expert marine services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-7 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                BOOK NOW
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-7 text-lg font-bold">
              GET A FREE QUOTE
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OUR BOAT DETAILING<br className="hidden sm:block" /> SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Spruce Detailing specializes in expert marine detailing services across Denver
            </p>
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
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>BOAT RESTORATION SERVICES</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Has your boat seen better days? Our <span className="text-[#D4AF37] font-bold">restoration services</span> can bring it back to life with gel coat restoration, oxidation removal, and complete surface renewal.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] hover:from-[#F4E5A1] hover:to-[#D4AF37] text-black font-bold px-10 py-6">
              <Link href="/services/restoration">VIEW RESTORATION SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WHY CHOOSE US FOR<br className="sm:hidden" /> BOAT DETAILING?
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
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            HOW OUR BOAT<br className="sm:hidden" /> DETAILING WORKS
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            FREQUENTLY ASKED<br className="sm:hidden" /> QUESTIONS
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-xl p-6 hover:border-[#1B9B8A]/50 transition-all group">
                <h3 className="text-xl font-bold mb-4 text-white flex items-start gap-3 group-hover:text-[#1B9B8A] transition-colors">
                  <span className="text-[#D4AF37] text-2xl">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-9 text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight leading-[1.2]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            GIVE YOUR BOAT THE CARE<br className="hidden sm:block" /> IT DESERVES IN DENVER
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Our boat detailers perform thorough waxing and cleaning beyond a regular wash.<br className="hidden sm:block" /> Ready for a pristine, brand-new-looking boat?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-12 py-7 text-lg font-bold shadow-2xl">
            <a href="tel:+17209712020" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              GET YOUR FREE QUOTE
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
