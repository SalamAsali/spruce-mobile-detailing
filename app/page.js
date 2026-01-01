'use client'

import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight, Star } from 'lucide-react'
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
      description: 'Specialized care for your RV or motorhome. We handle everything from washing and waxing to full interior detailing, ensuring your home on wheels looks and feels amazing.',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=80',
      link: '/rv-detailing'
    },
    {
      title: 'BOAT DETAILING',
      description: 'Professional marine detailing services for boats and yachts. Hull cleaning, gel coat polishing, interior detailing, and protection against harsh marine environments.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      link: '/boat-detailing'
    }
  ]

  const benefits = [
    'Team of expert detailing specialists',
    'Premium products and professional techniques',
    'Safe and certified mobile detailing products',
    'Convenient service at your location',
    'Flexible scheduling - weekends and evenings',
    'Comprehensive mobile insurance coverage'
  ]

  const process = [
    {
      step: '01',
      title: 'BOOK YOUR INSPECTION',
      description: 'Schedule a consultation where we assess your vehicle and recommend the best detailing package for your needs.'
    },
    {
      step: '02',
      title: 'WE COME TO YOU',
      description: 'Our mobile team arrives at your location with all professional equipment and premium products ready to work.'
    },
    {
      step: '03',
      title: 'DETAIL & SHINE',
      description: 'We meticulously clean, polish, and protect every surface using advanced techniques and top-quality products.'
    }
  ]

  const faqs = [
    {
      question: 'What Is Mobile Detailing?',
      answer: 'Mobile detailing means we bring our professional services directly to your location in South Denver Metro. We have all equipment and supplies to detail your vehicle at your home, office, or any convenient spot.'
    },
    {
      question: 'What Does Full Service Auto Detailing Include?',
      answer: 'Full service detailing includes comprehensive interior and exterior cleaning - vacuuming, shampooing, odor elimination, washing, waxing, tire cleaning, and protective treatments to restore your vehicle to like-new condition.'
    },
    {
      question: 'How Do I Book An Appointment With Spruce Detailing?',
      answer: 'Simply call us at (720) 971-2020 or use our online booking form. We will discuss your needs, provide a quote, and schedule a convenient time to come to your location.'
    },
    {
      question: 'How Long Does Car Detailing Take?',
      answer: 'Timing varies based on vehicle size and service package. Basic detailing takes 2-3 hours, while comprehensive packages may take 4-6 hours. We will provide an accurate time estimate when you book.'
    }
  ]

  return (
    <div className=\"min-h-screen bg-[#0A0A0A]\">\n      {/* Hero Section */}\n      <section className=\"relative h-screen flex items-center justify-center overflow-hidden\">\n        <div \n          className=\"absolute inset-0 bg-cover bg-center\"\n          style={{\n            backgroundImage: 'url(https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80)',\n            backgroundPosition: 'center 40%'\n          }}\n        >\n          <div className=\"absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black\"></div>\n        </div>\n        \n        <div className=\"container mx-auto px-4 relative z-10 text-center\">\n          <h1 className=\"text-5xl md:text-7xl font-bold mb-6 text-white tracking-wider\">\n            MOBILE DETAILING\n          </h1>\n          <p className=\"text-[#D4AF37] text-xl md:text-2xl mb-8 tracking-widest font-light\">\n            Professional Auto Detailing In South Denver Done At Your Convenience\n          </p>\n          <Button size=\"lg\" className=\"bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-6 text-lg\">\n            <a href=\"tel:+17209712020\">GET IN TOUCH</a>\n          </Button>\n        </div>\n      </section>\n\n      {/* Services Section */}\n      <section id=\"services\" className=\"py-20 px-4 bg-black\">\n        <div className=\"container mx-auto max-w-7xl\">\n          <h2 className=\"text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider\">\n            FROM OUR MOBILE DETAILING STUDIO TO YOUR GARAGE\n          </h2>\n          <div className=\"w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-6\"></div>\n          <p className=\"text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg\">\n            We offer swift vehicle tire care and exceptional detailing services\n          </p>\n\n          <div className=\"grid md:grid-cols-3 gap-8\">\n            {services.map((service, index) => (\n              <Card key={index} className=\"bg-gray-900 border-gray-800 overflow-hidden hover:border-[#D4AF37] transition-all group\">\n                <div className=\"h-64 overflow-hidden\">\n                  <img \n                    src={service.image} \n                    alt={service.title}\n                    className=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500\"\n                  />\n                </div>\n                <CardContent className=\"p-6\">\n                  <h3 className=\"text-2xl font-bold mb-3 text-white tracking-wider\">{service.title}</h3>\n                  <p className=\"text-gray-400 mb-6 leading-relaxed\">{service.description}</p>\n                  <Button asChild variant=\"outline\" className=\"w-full border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-white\">\n                    <Link href={service.link}>LEARN MORE</Link>\n                  </Button>\n                </CardContent>\n              </Card>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* Benefits Section */}\n      <section className=\"py-20 px-4 bg-[#0A0A0A]\">\n        <div className=\"container mx-auto max-w-6xl\">\n          <div className=\"grid md:grid-cols-2 gap-12 items-center\">\n            <div className=\"relative h-96 rounded-lg overflow-hidden\">\n              <img \n                src=\"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80\" \n                alt=\"Professional car detailing\" \n                className=\"w-full h-full object-cover\"\n              />\n            </div>\n            <div>\n              <h2 className=\"text-4xl font-bold mb-6 text-white tracking-wider\">\n                ALL YOU NEED TO <span className=\"text-[#D4AF37]\">KNOW</span>\n              </h2>\n              <p className=\"text-gray-400 mb-8 leading-relaxed text-lg\">\n                Expert in offering first-rate detailing services for your automobiles, covering all your expectations. At Spruce Mobile Detailing in South Denver, Metro your car will receive quality care from qualified professionals.\n              </p>\n              <div className=\"space-y-4\">\n                {benefits.map((benefit, index) => (\n                  <div key={index} className=\"flex items-start gap-3\">\n                    <CheckCircle className=\"text-[#00BCD4] flex-shrink-0 mt-1 w-6 h-6\" />\n                    <p className=\"text-gray-300\">{benefit}</p>\n                  </div>\n                ))}\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      {/* Before & After */}\n      <BeforeAfter />\n\n      {/* Process Section */}\n      <section className=\"py-20 px-4 bg-[#0A0A0A]\">\n        <div className=\"container mx-auto max-w-6xl\">\n          <h2 className=\"text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider\">\n            HOW OUR MOBILE DETAILING WORKS\n          </h2>\n          <div className=\"w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-16\"></div>\n\n          <div className=\"grid md:grid-cols-3 gap-8 relative\">\n            {process.map((item, index) => (\n              <div key={index} className=\"relative\">\n                <div className=\"bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition-colors\">\n                  <div className=\"text-6xl font-bold text-[#D4AF37] mb-4 opacity-20\">{item.step}</div>\n                  <h3 className=\"text-xl font-bold mb-4 text-white tracking-wider\">{item.title}</h3>\n                  <p className=\"text-gray-400 leading-relaxed\">{item.description}</p>\n                </div>\n                {index < process.length - 1 && (\n                  <div className=\"hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2\">\n                    <ArrowRight className=\"text-[#D4AF37] w-8 h-8\" />\n                  </div>\n                )}\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* FAQ Section */}\n      <section className=\"py-20 px-4 bg-black\">\n        <div className=\"container mx-auto max-w-4xl\">\n          <h2 className=\"text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wider\">\n            FREQUENTLY ASKED QUESTIONS\n          </h2>\n          <div className=\"w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] mx-auto mb-16\"></div>\n\n          <div className=\"space-y-6\">\n            {faqs.map((faq, index) => (\n              <div key={index} className=\"bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-[#D4AF37] transition-colors\">\n                <h3 className=\"text-xl font-bold mb-3 text-white tracking-wide flex items-start gap-3\">\n                  <span className=\"text-[#D4AF37]\">•</span>\n                  {faq.question}\n                </h3>\n                <p className=\"text-gray-400 leading-relaxed pl-6\">{faq.answer}</p>\n              </div>\n            ))}\n          </div>\n        </div>\n      </section>\n\n      {/* CTA Section */}\n      <section className=\"py-20 px-4 bg-[#0A0A0A] border-t border-gray-800\">\n        <div className=\"container mx-auto max-w-6xl text-center\">\n          <h2 className=\"text-4xl md:text-5xl font-bold mb-6 text-white tracking-wider\">\n            EXPERIENCE PREMIUM MOBILE DETAILING\n          </h2>\n          <p className=\"text-gray-400 text-xl mb-8 max-w-2xl mx-auto\">\n            Don't waste time driving to a wash. Let Spruce Detailing bring professional automotive care right to your driveway in South Denver Metro.\n          </p>\n          <Button size=\"lg\" className=\"bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-10 py-6 text-lg\">\n            <a href=\"tel:+17209712020\">GET YOUR FREE QUOTE NOW</a>\n          </Button>\n        </div>\n      </section>\n\n      {/* Map Section */}\n      <section className=\"h-96 relative\">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392482.2662266!2d-104.99!3d39.5771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM0JzM3LjYiTiAxMDTCsDUyJzM1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890\"\n          width=\"100%\"\n          height=\"100%\"\n          style={{ border: 0 }}\n          allowFullScreen\n          loading=\"lazy\"\n          referrerPolicy=\"no-referrer-when-downgrade\"\n          className=\"grayscale\"\n        />\n      </section>\n    </div>\n  )\n}
