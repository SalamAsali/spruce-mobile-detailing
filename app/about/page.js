'use client'

import Link from 'next/link'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only premium products and professional-grade equipment to deliver outstanding results every time.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We tailor our services to meet your specific needs and exceed expectations.'
    },
    {
      icon: Clock,
      title: 'Convenience First',
      description: 'Our mobile service comes to you, saving you time and making professional detailing effortlessly accessible.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Spruce Mobile Detailing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for professional mobile detailing services in Mississauga and the Greater Toronto Area
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Spruce Mobile Detailing was founded with a simple mission: to bring professional, high-quality auto detailing 
                services directly to our customers across the Greater Toronto Area. We understand that your time is valuable, 
                and your vehicle is an important investment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a passion for automotive care has grown into a trusted mobile detailing service serving 
                Mississauga, Port Credit, Lorne Park, and surrounding communities. Our team of skilled technicians is dedicated 
                to delivering exceptional results while providing the ultimate convenience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need car detailing, RV detailing, or boat detailing, we bring our expertise and professional 
                equipment directly to your location, ensuring your vehicle receives the care it deserves without disrupting 
                your busy schedule.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80" 
                alt="Professional detailing team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-emerald-900">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Why Choose Spruce Mobile Detailing</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-900">Certified & Insured Professionals</h3>
                    <p className="text-gray-700">Our team consists of trained, certified technicians who are fully insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-900">Premium Products & Equipment</h3>
                    <p className="text-gray-700">We use only the highest quality detailing products and professional-grade equipment for superior results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-900">Convenient Mobile Service</h3>
                    <p className="text-gray-700">We come to your home, office, or any location in the GTA, saving you time and hassle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-900">Customized Packages</h3>
                    <p className="text-gray-700">Every vehicle is unique. We offer flexible packages tailored to your specific needs and budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-emerald-900">Satisfaction Guaranteed</h3>
                    <p className="text-gray-700">We stand behind our work. If you're not completely satisfied, we'll make it right.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" 
                alt="Professional car detailing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-emerald-900">Proudly Serving the Greater Toronto Area</h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            As a mobile detailing service, we bring our expertise directly to customers throughout Mississauga and the surrounding areas, including:
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-emerald-900">Mississauga</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-emerald-900">Port Credit</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-emerald-900">Lorne Park</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-emerald-900">Greater Toronto Area</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your mobile detailing service or get a free quote.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              <a href="tel:+18001234567">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
              <a href="mailto:support@example.com">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}