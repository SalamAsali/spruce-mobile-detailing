'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Shield, Clock, Award, Star, Sparkles, Car, Truck, Bike } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BeforeAfter from '@/components/BeforeAfter'
import TimelineProgress from '@/components/TimelineProgress'
import HorizontalServiceGallery from '@/components/HorizontalServiceGallery'

// FAQ Accordion Item Component
function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = React.useState(index === 0)
  
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl overflow-hidden hover:border-[#1B9B8A]/50 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1]' : 'bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20'}`}>
            <span className={`font-black text-lg ${isOpen ? 'text-black' : 'text-[#D4AF37]'}`} style={{ fontFamily: 'Montserrat' }}>
              Q
            </span>
          </div>
          <h3 className={`text-lg md:text-xl font-bold transition-colors leading-[1.4] ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#1B9B8A]'}`} style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            {faq.question}
          </h3>
        </div>
        <div className={`ml-4 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className={`w-6 h-6 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6">
          <div className="pl-14 pr-10 pt-2">
            <div className="h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-4"></div>
            <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const services = [
    {
      title: 'CAR DETAILING',
      description: 'Transform your car with our comprehensive interior and exterior detailing services. From deep cleaning to paint protection, we restore your vehicle to showroom condition.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
      link: '/services/car-detailing',
      icon: Car
    },
    {
      title: 'RV DETAILING',
      description: 'Specialized care for your RV or motorhome. We handle everything from washing and waxing to full interior detailing and ceramic coating protection.',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      link: '/services/rv-detailing',
      icon: Truck
    },
    {
      title: 'TRUCK DETAILING',
      description: 'Heavy-duty detailing for work trucks and pickups. Professional cleaning, paint correction, and protection built for vehicles that work hard.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      link: '/services/truck-detailing',
      icon: Truck
    },
    {
      title: 'MOTORCYCLE DETAILING',
      description: 'Expert detailing for motorcycles and bikes. Specialized care for chrome, paint, leather, and all surfaces with precision techniques.',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      link: '/services/motorcycle-detailing',
      icon: Bike
    }
  ]

  const benefits = [
    'Team of expert detailing specialists',
    'Premium products and professional techniques',
    'Safe and certified mobile detailing products',
    'Convenient service at your location',
    'Fully insured and certified professionals',
    'Same-day service available'
  ]

  const coreFeatures = [
    {
      icon: Sparkles,
      title: 'Top-Quality Car Detailing',
      description: 'We employ the latest detailing techniques and use professional-grade equipment to achieve superior results for every vehicle.'
    },
    {
      icon: Shield,
      title: 'Certified & Insured',
      description: 'Our team of certified technicians is fully insured, giving you complete peace of mind with every service.'
    },
    {
      icon: Clock,
      title: 'Time-Saving Experience',
      description: 'We come directly to your location in South Denver Metro, saving you time and providing ultimate convenience.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'BOOK YOUR INSPECTION',
      description: 'Schedule a consultation where we assess your vehicle and recommend the best detailing package for your needs.',
      icon: Phone
    },
    {
      step: '02',
      title: 'WE COME TO YOU',
      description: 'Our mobile team arrives at your location with all professional equipment ready to work.',
      icon: Car
    },
    {
      step: '03',
      title: 'DETAIL & SHINE',
      description: 'We meticulously clean, polish, and protect every surface using advanced techniques and premium products.',
      icon: Sparkles
    }
  ]

  const faqs = [
    {
      question: 'What Is Mobile Detailing?',
      answer: 'Mobile detailing means we bring our professional services directly to your location in South Denver Metro. You don\'t have to drive anywhere—we come to your home, office, or wherever is most convenient for you.'
    },
    {
      question: 'What Does Full Service Auto Detailing Include?',
      answer: 'Full service detailing includes comprehensive interior and exterior cleaning, vacuuming, shampooing, paint correction, waxing, and protective treatments. We handle every detail from top to bottom.'
    },
    {
      question: 'How Do I Book An Appointment?',
      answer: 'Simply call us at (720) 971-2020 or use our online booking system. We\'ll discuss your needs and schedule a convenient time for our mobile team to come to you.'
    },
    {
      question: 'How Long Does Car Detailing Take?',
      answer: 'Timing varies from 2-6 hours based on vehicle size and service package. We\'ll provide an accurate time estimate during your consultation.'
    },
    {
      question: 'Do You Offer Ceramic Coating?',
      answer: 'Yes! We offer professional ceramic coating services for all vehicle types. Ceramic coating provides long-lasting protection and is a great investment for preserving your vehicle\'s value.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A] overflow-x-hidden">
      {/* Hero Section - Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0" aria-label="Hero section with detailing video background">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://customer-assets.emergentagent.com/job_d65b521f-106d-4ea6-ab42-030731ea7e91/artifacts/at6jgjoi_Detailing.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            MOBILE DETAILING
          </h1>
          
          <p className="text-brand-gold text-base sm:text-lg md:text-xl mb-8 tracking-wide font-light max-w-3xl mx-auto leading-relaxed">
            Professional Auto Detailing from Castle Rock to Denver Metro & Surrounding Areas - Done At Your Convenience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-6 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50 transition-all duration-300 hover:scale-105" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                GET IN TOUCH
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-400 text-sm md:text-base px-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#1B9B8A]" />
              <span>Certified & Insured</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-2">5-Star Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#1B9B8A]" />
              <span>Same-Day Available</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-[#D4AF37] rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 bg-[#0A0A0A] relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-5xl mx-auto px-4" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              FROM OUR MOBILE DETAILING TEAM TO YOUR GARAGE
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4 md:mb-6"></div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We offer swift vehicle tire care and exceptional detailing services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-2 border-gray-800 overflow-hidden hover:border-[#1B9B8A] transition-all duration-500 group relative">
                  {/* Gold Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-3xl"></div>
                  
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    
                    {/* Icon Overlay with Gold Ring */}
                    <div className="absolute bottom-4 left-4 relative">
                      <div className="absolute inset-0 w-14 h-14 rounded-xl border-2 border-[#D4AF37]/50 animate-pulse"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-[#1B9B8A] to-[#158F7E] rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-black mb-3 text-white tracking-wide group-hover:text-[#1B9B8A] transition-colors" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.description}</p>
                    <Button asChild variant="outline" className="w-full border-[#1B9B8A] text-[#1B9B8A] hover:bg-[#1B9B8A] hover:text-white font-bold transition-all duration-300">
                      <Link href={service.link}>LEARN MORE</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All You Need To Know Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0A0A0A] to-[#0F1419]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                alt="Professional car detailing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
                ALL YOU NEED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light">KNOW</span>
              </h2>
              <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Expert in offering first-rate detailing services for your automobiles. At Spruce Mobile Detailing from Castle Rock to Denver Metro, your car receives quality care from qualified professionals.
              </p>
              <div className="space-y-3 md:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1B9B8A] to-[#158F7E] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 md:py-20 px-4 bg-[#0A0A0A] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              OUR CORE BENEFITS
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B9B8A]/20 to-[#D4AF37]/20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-10 h-10 text-[#1B9B8A]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white tracking-wide" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter />

      {/* Process Section - Vertical Timeline with Scroll Animation */}
      <section className="py-24 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              HOW OUR MOBILE DETAILING WORKS
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4 md:mb-6"></div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Three simple steps to a pristine vehicle
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <TimelineProgress />
            
            <div className="space-y-32 md:space-y-40">
              {process.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className="relative timeline-item" data-index={index}>
                    {/* Timeline Icon Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full flex items-center justify-center z-20 shadow-2xl shadow-[#D4AF37]/50 hidden md:flex timeline-icon">
                      <Icon className="w-8 h-8 text-black" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] animate-ping opacity-20"></div>
                    </div>

                    {/* Content Block */}
                    <div className={`flex items-center ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-2xl p-8 hover:border-[#1B9B8A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1B9B8A]/20 group relative">
                          {/* Mobile Icon */}
                          <div className="md:hidden w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-black" />
                          </div>
                          
                          {/* Step Number */}
                          <div className="inline-block bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                            STEP {item.step}
                          </div>
                          
                          <h3 className="text-2xl font-black mb-4 text-white tracking-wide leading-[1.3]" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
                            {item.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
                          
                          {/* Decorative Arrow */}
                          <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'} w-8 h-8`}>
                            <div className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${isEven ? 'border-l-8 border-l-gray-800' : 'border-r-8 border-r-gray-800'}`}></div>
                          </div>
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

      {/* FAQ Section - Accordion Style */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* CTA Below FAQs */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-10 py-6 font-bold" asChild>
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1B9B8A]/20 via-[#0A0A0A] to-[#D4AF37]/10 border-y border-[#D4AF37]/20">
        <div className="container mx-auto max-w-6xl text-center relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1B9B8A]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
              EXPERIENCE PREMIUM MOBILE DETAILING
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Let Spruce Detailing bring professional automotive care<br className="hidden sm:block" /> right to your location from Castle Rock to Denver Metro & surrounding areas.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white px-12 py-6 text-lg font-bold shadow-2xl shadow-[#1B9B8A]/50 transition-all duration-300 hover:scale-105">
              <a href="tel:+17209712020" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                GET YOUR FREE QUOTE NOW
              </a>
            </Button>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">Free Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#1B9B8A]" />
                <span className="text-sm">100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - South Denver Metro Highlighted */}
      <section className="h-[500px] relative" id="service-areas">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392482.2662266!2d-105.1!3d39.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7c0e8ce8e8d9%3A0x5e5e5e5e5e5e5e5e!2sCastle%20Rock%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        
        {/* Service Area Overlay */}
        <div className="absolute bottom-8 left-8 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-sm rounded-2xl p-6 border border-[#D4AF37]/30 max-w-md">
          <h3 className="text-xl font-black text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'var(--font-oswald), Oswald, sans-serif', textWrap: 'balance' }}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#1B9B8A] to-[#158F7E] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            SOUTH DENVER METRO
          </h3>
          <p className="text-gray-300 text-sm mb-2">
            Lakewood • Denver • Aurora • Centennial • Castle Rock
          </p>
          <p className="text-[#D4AF37] text-xs font-semibold">
            + All cities in between • Mobile service
          </p>
        </div>
      </section>
    </div>
  )
}
