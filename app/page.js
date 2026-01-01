'use client'

import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BeforeAfter from '@/components/BeforeAfter'

export default function Home() {
  const services = [
    {
      title: 'CAR DETAILING',
      description: 'Transform your car with our comprehensive interior and exterior detailing services. From deep cleaning to paint protection, we restore your vehicle to showroom condition.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80',
      link: '/car-detailing'
    },
    {
      title: 'RV DETAILING',
      description: 'Specialized care for your RV or motorhome. We handle everything from washing and waxing to full interior detailing.',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=80',
      link: '/rv-detailing'
    },
    {
      title: 'BOAT DETAILING',
      description: 'Professional marine detailing services for boats and yachts. Hull cleaning, gel coat polishing, and interior detailing.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      link: '/boat-detailing'
    }
  ]

  const benefits = [
    'Team of expert detailing specialists',
    'Premium products and professional techniques',
    'Safe and certified mobile detailing products',
    'Convenient service at your location'
  ]

  const process = [
    {
      step: '01',
      title: 'BOOK YOUR INSPECTION',
      description: 'Schedule a consultation where we assess your vehicle and recommend the best detailing package.'
    },
    {
      step: '02',
      title: 'WE COME TO YOU',
      description: 'Our mobile team arrives at your location with all professional equipment ready to work.'
    },
    {
      step: '03',
      title: 'DETAIL & SHINE',
      description: 'We meticulously clean, polish, and protect every surface using advanced techniques.'
    }
  ]

  const faqs = [
    {
      question: 'What Is Mobile Detailing?',
      answer: 'Mobile detailing means we bring our professional services directly to your location in South Denver Metro.'
    },
    {
      question: 'What Does Full Service Auto Detailing Include?',
      answer: 'Full service detailing includes comprehensive interior and exterior cleaning with protective treatments.'
    },
    {
      question: 'How Do I Book An Appointment?',
      answer: 'Simply call us at (720) 971-2020 and we will discuss your needs and schedule a convenient time.'
    },
    {
      question: 'How Long Does Car Detailing Take?',
      answer: 'Timing varies from 2-6 hours based on vehicle size and service package.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80)',
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-wider">
            MOBILE DETAILING
          </h1>
          <p className="text-[#D4AF37] text-xl md:text-2xl mb-8 tracking-widest font-light">
            Professional Auto Detailing In South Denver Done At Your Convenience
          </p>
          <Button size="lg" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-6 text-lg">
            <a href="tel:+17209712020">GET IN TOUCH</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider">
            FROM OUR MOBILE DETAILING STUDIO TO YOUR GARAGE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-6"></div>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg">
            We offer swift vehicle tire care and exceptional detailing services
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#D4AF37] transition-all group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-wider">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <Button asChild variant="outline" className="w-full border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white">
                    <Link href={service.link}>LEARN MORE</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                alt="Professional car detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white tracking-wider">
                ALL YOU NEED TO <span className="text-[#D4AF37]">KNOW</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Expert in offering first-rate detailing services for your automobiles. At Spruce Mobile Detailing in South Denver Metro, your car receives quality care from qualified professionals.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#00BCD4] flex-shrink-0 mt-1 w-6 h-6" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfter />

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider">
            HOW OUR MOBILE DETAILING WORKS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition-colors">
                  <div className="text-6xl font-bold text-[#D4AF37] mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-white tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[#D4AF37] w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-16"></div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#D4AF37] transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide flex items-start gap-3">
                  <span className="text-[#D4AF37]">•</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0A0A0A] border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wider">
            EXPERIENCE PREMIUM MOBILE DETAILING
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Let Spruce Detailing bring professional automotive care right to your driveway in South Denver Metro.
          </p>
          <Button size="lg" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-10 py-6 text-lg">
            <a href="tel:+17209712020">GET YOUR FREE QUOTE NOW</a>
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196241.1331133!2d-104.99!3d39.5771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM0JzM3LjYiTiAxMDTCsDUyJzM1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
      </section>
    </div>
  )
}
