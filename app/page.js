'use client'

import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield, TrendingUp, Clock, Award, Star, Zap, Car, Truck, Bike } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BeforeAfter from '@/components/BeforeAfter'

export default function Home() {
  const services = [
    {
      title: 'CAR DETAILING & CERAMIC COATING',
      description: 'Comprehensive detailing services and advanced ceramic coating protection. Transform maintenance costs into long-term asset protection.',
      image: 'https://images.unsplash.com/photo-1580679568899-be51739ba2df?w=800&q=80',
      link: '/services/car-detailing',
      icon: Car,
      highlight: 'Save $300 over 3 years'
    },
    {
      title: 'RV DETAILING & CERAMIC COATING',
      description: 'Specialized care for your RV investment. Prevent up to $5,000 in oxidation damage with professional ceramic coating protection.',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      link: '/services/rv-detailing',
      icon: Truck,
      highlight: 'Prevent $5K+ depreciation'
    },
    {
      title: 'TRUCK DETAILING & CERAMIC COATING',
      description: 'Heavy-duty protection for work trucks. Chemical-resistant ceramic armor that stands up to mud, salt, and the elements.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      link: '/services/truck-detailing',
      icon: Truck,
      highlight: 'Save $300 over 3 years'
    },
    {
      title: 'MOTORCYCLE DETAILING & CERAMIC COATING',
      description: 'High-temperature ceramic protection for bikes. Protects chrome and paint where traditional wax melts instantly.',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      link: '/services/motorcycle-detailing',
      icon: Bike,
      highlight: 'Save $100 over 3 years'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Asset Protection Specialists',
      description: 'We don\'t just clean vehicles—we protect your investments from depreciation and environmental damage.'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI Strategy',
      description: 'Our ceramic coating solutions save you hundreds in maintenance costs while preserving resale value.'
    },
    {
      icon: Award,
      title: 'Certified & Insured',
      description: 'Fully certified ceramic coating professionals with comprehensive insurance for your peace of mind.'
    },
    {
      icon: Clock,
      title: 'Mobile Convenience',
      description: 'Professional service at your location across South Denver Metro. Save time while protecting your asset.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'INSPECTION & CONSULTATION',
      description: 'We assess your vehicle and explain the ROI difference between traditional detailing and ceramic coating protection.',
      icon: CheckCircle
    },
    {
      step: '02',
      title: 'PROFESSIONAL SERVICE',
      description: 'Our certified team arrives at your location with professional equipment and premium ceramic coating materials.',
      icon: Shield
    },
    {
      step: '03',
      title: 'LIFETIME MEMBERSHIP',
      description: 'Ceramic coating clients automatically join the Spruce Shield Club with 30% off all future maintenance washes.',
      icon: Award
    }
  ]

  const stats = [
    { value: '500+', label: 'Vehicles Protected', icon: Car },
    { value: '$2,500', label: 'Average Value Preserved', icon: TrendingUp },
    { value: '5 Years', label: 'Ceramic Coating Lifespan', icon: Shield },
    { value: '30%', label: 'Member Savings', icon: Star }
  ]

  const faqs = [
    {
      question: 'Why Choose Ceramic Coating Over Traditional Wax?',
      answer: 'Traditional wax melts at 110°F and requires reapplication 2-3 times per year, costing you $1,200-$1,800 over 3 years. Ceramic coating is a one-time investment of $1,200-$2,000 that lasts 3-5 years, actually SAVING you money while providing superior protection.'
    },
    {
      question: 'What Is The Spruce Shield Club Membership?',
      answer: 'When you invest in ceramic coating, you automatically receive FREE lifetime membership to our Spruce Shield Club. Members receive 30% off all maintenance washes, priority booking, and free annual coating inspections—saving an average of $450 per year.'
    },
    {
      question: 'How Does Mobile Service Work?',
      answer: 'We bring professional ceramic coating equipment and expertise directly to your South Denver Metro location. Simply schedule your appointment, and our certified team handles everything on-site.'
    },
    {
      question: 'What\'s Your Service Area?',
      answer: 'We serve the entire South Denver Metro area including Castle Rock, Parker, Highlands Ranch, Centennial, Littleton, Lone Tree, and surrounding communities.'
    },
    {
      question: 'How Long Does Ceramic Coating Take?',
      answer: 'Professional ceramic coating application typically takes 4-8 hours depending on vehicle size and condition. We handle everything at your location while you focus on your day.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section - Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-person-washing-a-car-with-a-sponge-4085-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-semibold tracking-wider">CERTIFIED CERAMIC COATING SPECIALISTS</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PROTECT YOUR ASSET,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4E5A1] to-[#D4AF37]">
              NOT JUST YOUR PAINT
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light leading-relaxed">
            Stop wasting $1,800+ on wax that melts in Colorado heat.
          </p>
          <p className="text-[#1B9B8A] text-2xl md:text-3xl mb-10 font-bold tracking-wide">
            Invest once. Save for years. Protect forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-7 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50 transition-all duration-300 hover:scale-105 hover:shadow-[#1B9B8A]/70">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                GET FREE ROI ANALYSIS
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <a href="#services" className="flex items-center gap-2">
                SEE THE MATH
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B9B8A] to-[#158F7E] border-2 border-black flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm">500+ Protected Vehicles</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#1B9B8A]/10 via-[#D4AF37]/5 to-[#1B9B8A]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group cursor-default">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#1B9B8A]/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</div>
                  <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced ROI Focus */}
      <section id="services" className="py-24 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 bg-[#1B9B8A]/10 border border-[#1B9B8A]/30 rounded-full px-6 py-2">
                <Zap className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-[#1B9B8A] text-sm font-bold tracking-wider">THE GOLDEN STRATEGY</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              STOP PAYING TO WAX.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1]">
                START SAVING WITH CERAMIC.
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Traditional wax is a recurring expense that melts in Colorado heat. Ceramic coating is a one-time investment that pays for itself while protecting your asset for years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-gray-800 overflow-hidden hover:border-[#D4AF37] transition-all duration-500 group relative">
                  {/* ROI Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {service.highlight}
                  </div>
                  
                  <div className="h-72 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-black mb-4 text-white tracking-tight group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-lg">{service.description}</p>
                    <Button asChild variant="outline" className="w-full border-[#1B9B8A] text-[#1B9B8A] hover:bg-[#1B9B8A] hover:text-white font-bold py-6 transition-all duration-300 group-hover:scale-105">
                      <Link href={service.link} className="flex items-center justify-center gap-2">
                        VIEW ROI BREAKDOWN
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Membership Teaser */}
          <div className="bg-gradient-to-r from-[#1B9B8A]/20 via-[#D4AF37]/10 to-[#1B9B8A]/20 border-2 border-[#D4AF37]/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
              <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>BONUS: SPRUCE SHIELD CLUB</h3>
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <p className="text-gray-300 text-lg mb-4">
              All ceramic coating clients receive <span className="text-[#D4AF37] font-bold">FREE LIFETIME MEMBERSHIP</span> with 30% off all future maintenance washes
            </p>
            <Button asChild variant="link" className="text-[#1B9B8A] hover:text-[#D4AF37] font-bold">
              <Link href="/membership">Learn More About Membership Benefits →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Benefits */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#0F1419]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              THE SPRUCE DETAILING
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1]"> DIFFERENCE</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter />

      {/* Process Section - Enhanced Timeline */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              HOW IT WORKS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Three simple steps to lifetime asset protection
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-[#1B9B8A] via-[#D4AF37] to-[#1B9B8A]"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="relative">
                    {/* Timeline Circle */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-10 shadow-2xl shadow-[#D4AF37]/50 relative">
                        <span className="text-black font-black text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {item.step}
                        </span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] animate-ping opacity-20"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 text-center group">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-xl font-black mb-4 text-white tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced Design */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 text-white tracking-wide flex items-start gap-3 group-hover:text-[#D4AF37] transition-colors">
                  <span className="text-[#D4AF37] text-2xl flex-shrink-0">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-9 text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with ROI Focus */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1B9B8A]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-wider">FREE ROI CONSULTATION</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              READY TO STOP WASTING MONEY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1]">
                ON WAXING?
              </span>
            </h2>
            
            <p className="text-gray-300 text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
              Let us show you the exact dollar amount you'll save by switching to ceramic coating.
            </p>
            <p className="text-[#1B9B8A] text-2xl font-bold mb-10">
              Free consultation • No pressure • Just math.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-12 py-7 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50 transition-all duration-300 hover:scale-105">
                <a href="tel:+17209712020" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  CALL (720) 971-2020
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-12 py-7 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link href="/membership">
                  VIEW MEMBERSHIP BENEFITS
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">Lifetime Warranty Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">Free Membership Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196241.1331133!2d-104.99!3d39.5771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM0JzM3LjYiTiAxMDTCsDUyJzM1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[50%] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
      </section>
    </div>
  )
}
