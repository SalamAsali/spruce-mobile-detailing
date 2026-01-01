'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Car Detailing Mississauga | Spruce Mobile Detailing',
  description: 'Professional car detailing services in Mississauga and GTA. Interior and exterior detailing, luxury car care, and more.',
}

export default function CarDetailing() {
  const services = [
    {
      title: 'Interior Detailing',
      description: 'Comprehensive interior cleaning including vacuuming, shampooing seats and carpets, detailed cleaning of crevices and hard-to-reach areas, dashboard and console treatment, and complete odor elimination.',
      icon: Sparkles
    },
    {
      title: 'Exterior Detailing',
      description: 'Deep washing of doors, tires, wheels, and trunk. Premium hand wax application for a glossy, showroom finish. Paint protection and restoration to keep your vehicle looking pristine.',
      icon: Shield
    },
    {
      title: 'Luxury Car Detailing',
      description: 'Specialized care for premium vehicles including Porsche, BMW, Mercedes, Tesla, and more. We use precision techniques and premium products specifically designed for luxury automobiles.',
      icon: Sparkles
    },
    {
      title: 'Full Service Detailing',
      description: 'Complete interior and exterior detailing package. Includes everything from deep cleaning and shampooing to waxing and protection, giving your car a complete transformation.',
      icon: CheckCircle
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We discuss your vehicle\'s needs and recommend the best detailing package for your specific requirements and budget.'
    },
    {
      step: '2',
      title: 'Cleaning & Polishing',
      description: 'Our expert technicians thoroughly clean, polish, and protect every surface of your vehicle using premium products and professional techniques.'
    },
    {
      step: '3',
      title: 'Final Walkthrough',
      description: 'We walk you through the completed work, ensuring every detail meets your expectations and answering any questions you may have.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Car Detailing Mississauga</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Step into a car that feels as new as the day you bought it with our car detailing Mississauga solutions. 
            Spruce Detailing works with you to clean your vehicle, eliminate foul odors, remove stains, repair scratches, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              <a href="tel:+18001234567">Book Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
              <a href="mailto:support@example.com">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our Car Detailing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 flex-shrink-0">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-emerald-900">{service.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interior Detailing Details */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                alt="Car interior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Interior Detailing Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our interior detailing service goes beyond a simple vacuum. We meticulously clean every surface, from seats 
                and carpets to dashboards and door panels.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Deep vacuuming of all seats, carpets, and floor mats</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Professional shampooing to remove stains and odors</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Detailed cleaning of crevices, vents, and hard-to-reach areas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete odor elimination for a fresh interior</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Dashboard, console, and trim treatment and protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Detailing Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Exterior Detailing Perfection</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transform your vehicle's exterior with our comprehensive detailing service. We deep wash every surface, 
                including doors, tires, wheels, and trunk, then apply premium wax for a glossy, protective finish.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Thorough hand wash and decontamination</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Deep cleaning of wheels, tires, and wheel wells</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Premium hand wax application for long-lasting shine</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Paint protection and restoration treatments</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Chrome and trim polishing and protection</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80" 
                alt="Car exterior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Car Detailing */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-emerald-900">Luxury Interior & Exterior Detailing</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your luxury vehicle deserves specialized care. We provide premium detailing services for high-end vehicles 
            including Porsche, BMW, Mercedes, Tesla, Audi, Lexus, and more. Our technicians are trained in the specific 
            needs of luxury automobiles, using only the finest products and most precise techniques.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            From delicate leather conditioning to specialized paint protection, we treat your luxury vehicle with the 
            care and attention it deserves. Trust us to maintain the pristine condition and value of your investment.
          </p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <a href="mailto:support@example.com">Schedule Luxury Detailing</a>
          </Button>
        </div>
      </section>

      {/* Top Quality Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Top-Quality Car Detailing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Advanced Techniques</h3>
                <p className="text-gray-700 leading-relaxed">
                  We employ the latest detailing techniques and use professional-grade equipment to achieve superior results.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Certified & Insured</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team of certified technicians is fully insured, giving you complete peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Time-Saving Mobile Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We come directly to your location in the GTA, saving you time and providing ultimate convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our Detailing Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Car's Shine?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your car detailing service today and experience the Spruce Mobile Detailing difference.
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