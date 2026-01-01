'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata = {
  title: 'RV Detailing Mississauga | Spruce Mobile Detailing',
  description: 'Professional RV detailing services in Mississauga and GTA. RV wash, wax, interior and exterior detailing for motorhomes.',
}

export default function RVDetailing() {
  const services = [
    {
      title: 'RV Wash',
      description: 'Thorough pre-wash to remove loose dirt and debris, followed by a comprehensive exterior wash that covers every surface of your RV, from roof to ground level.',
      icon: Sparkles
    },
    {
      title: 'RV Wash & Wax',
      description: 'Complete wash service plus premium wax application to protect your RV\'s exterior finish, enhance shine, and provide long-lasting protection against the elements.',
      icon: Shield
    },
    {
      title: 'RV Exterior Detailing',
      description: 'Restore your RV\'s shine with professional exterior detailing. We protect against fading, oxidation, and water spots while bringing back that showroom finish.',
      icon: Sparkles
    },
    {
      title: 'RV Interior Detailing',
      description: 'Comprehensive interior cleaning including vacuuming seats and carpets, detailed cleaning of kitchen and living areas, and elimination of odors and allergens for a fresh, comfortable space.',
      icon: CheckCircle
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We assess your RV\'s size and condition, discuss your specific needs, and recommend the best detailing package for your motorhome or recreational vehicle.'
    },
    {
      step: '2',
      title: 'Cleaning & Waxing',
      description: 'Our team thoroughly cleans and treats both interior and exterior surfaces using specialized RV detailing products and professional equipment.'
    },
    {
      step: '3',
      title: 'Final Walkthrough',
      description: 'We conduct a complete inspection with you, ensuring every detail meets your expectations and your RV is ready for your next adventure.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">RV Detailing Mississauga</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Travel in a clean and comfortable ride with a pristine interior through our RV detailing solutions. 
            Spruce Detailing specializes in improving the surfaces of Mississauga's small recreational vehicles, large motorhomes, and more.
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

      {/* Before & After Section */}
      <BeforeAfter />

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our RV Detailing Services</h2>
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

      {/* RV Wash Details */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80" 
                alt="RV exterior wash" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Comprehensive RV Wash</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our RV wash service begins with a thorough pre-wash to remove loose dirt, road grime, and debris. 
                We then perform a complete exterior wash that covers every inch of your recreational vehicle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Pre-wash to remove loose dirt and debris</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete exterior wash from roof to ground level</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Wheel and tire cleaning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Window and mirror cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RV Exterior Detailing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">RV Exterior Detailing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restore your RV's exterior shine and protect it from the elements. Our exterior detailing service addresses 
                fading, oxidation, and water spots while applying protective treatments to keep your RV looking great.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Oxidation removal and paint restoration</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Premium wax application for long-lasting protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">UV protection to prevent future fading</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Water spot removal and prevention</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Chrome and trim restoration</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80" 
                alt="RV exterior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RV Interior Detailing */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80" 
                alt="RV interior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">RV Interior Detailing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Create a fresh, comfortable living space in your RV with our comprehensive interior detailing service. 
                We clean every surface, eliminate odors, and remove allergens for a healthier environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Vacuuming of all seats, carpets, and upholstery</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Kitchen and bathroom area deep cleaning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Dashboard and control panel treatment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete odor and allergen elimination</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Window and mirror interior cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Quality Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Top-Quality RV Detailing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Advanced Techniques & Equipment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use specialized equipment designed for large vehicles and professional techniques to achieve outstanding results.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Certified & Insured Team</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our certified technicians are experienced in RV detailing and fully insured for your peace of mind.
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
                  We bring our professional RV detailing service to your location anywhere in the GTA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our RV Detailing Process</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Detail Your RV?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your RV detailing service today and travel in comfort and style.
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