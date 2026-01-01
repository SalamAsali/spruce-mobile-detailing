'use client'

import Link from 'next/link'
import { CheckCircle, Sparkles, Shield, Anchor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function BoatDetailing() {
  const services = [
    {
      title: 'Boat Interior Detailing',
      description: 'Thorough cleaning and sanitizing of all seating, floors, and compartments. We remove mildew and odors, and condition vinyl and leather surfaces to keep your boat interior pristine.',
      icon: Sparkles
    },
    {
      title: 'Exterior Boat Detailing',
      description: 'Complete hull washing, gel coat polishing, and metal brightening. We apply premium marine wax to restore shine and protect against UV rays and water exposure.',
      icon: Shield
    },
    {
      title: 'Yacht Detailing',
      description: 'Luxury-level care for large vessels. Our comprehensive yacht detailing service covers everything from decks to engine rooms with meticulous attention to detail.',
      icon: Anchor
    },
    {
      title: 'Jet Ski Detailing',
      description: 'Specialized cleaning and protection for high-performance watercraft. We use water-resistant products designed specifically for jet skis and personal watercraft.',
      icon: Sparkles
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We assess your vessel\'s type, size, and condition, then recommend the best detailing package for your specific marine craft and budget.'
    },
    {
      step: '2',
      title: 'Detailing Procedure',
      description: 'Our marine detailing experts clean, polish, and protect every surface using specialized marine-grade products and professional techniques.'
    },
    {
      step: '3',
      title: 'Final Walkthrough',
      description: 'We conduct a complete inspection with you, ensuring your vessel looks showroom-ready and is protected for the season ahead.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Boat Detailing Mississauga</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Many people consider their boat to be a beloved family member. This is why it deserves the best care you can give in Mississauga. 
            Spruce Detailing's expert boat detailing services will help you enhance and preserve the surfaces of your marine vessel.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our Boat Detailing Services</h2>
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

      {/* Boat Interior Detailing */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" 
                alt="Boat interior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Boat Interior Detailing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Keep your boat's interior fresh and comfortable with our comprehensive interior detailing service. 
                We clean and sanitize every surface, remove marine odors, and protect your investment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete cleaning and sanitizing of seating areas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Floor and carpet deep cleaning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Storage compartment cleaning and organization</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Mildew and odor removal</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Vinyl and leather conditioning and protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Boat Detailing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Exterior Boat Detailing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restore your boat's exterior shine and protect it from harsh marine environments. Our exterior detailing 
                service includes hull washing, polishing, and protective treatments designed for watercraft.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete hull washing and decontamination</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Gel coat polishing and restoration</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Metal brightening and polish</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Premium marine wax application</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">UV and water exposure protection</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80" 
                alt="Boat exterior detailing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Yacht Detailing */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-emerald-900">Luxury Yacht Detailing</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your yacht deserves the highest level of care. Our comprehensive yacht detailing service provides luxury-level 
            attention to every detail, from the deck to the engine room. We understand the unique requirements of large 
            vessels and deliver exceptional results.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our experienced team uses marine-grade products and specialized techniques to clean, polish, and protect your 
            yacht's surfaces, ensuring it maintains its beauty and value season after season.
          </p>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
            <img 
              src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80" 
              alt="Luxury yacht" 
              className="w-full h-full object-cover"
            />
          </div>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <a href="mailto:support@example.com">Schedule Yacht Detailing</a>
          </Button>
        </div>
      </section>

      {/* Jet Ski Detailing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80" 
                alt="Jet ski detailing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Jet Ski Detailing</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Keep your high-performance watercraft looking great and protected with our specialized jet ski detailing service. 
                We use water-resistant products designed specifically for personal watercraft.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Complete exterior wash and decontamination</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Hull polishing and waxing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Seat cleaning and conditioning</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Water-resistant protection application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Quality Features */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Top-Quality Boat Detailing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Advanced Techniques</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use specialized marine detailing techniques and professional-grade marine products for superior results.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Comprehensive Packages</h3>
                <p className="text-gray-700 leading-relaxed">
                  From small boats to luxury yachts, we offer tailored packages for every type of watercraft.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Anchor className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-900">Time-Saving Mobile Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  We bring our professional boat detailing service to your marina or storage location in the GTA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Our Boat Detailing Process</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Detail Your Boat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your boat detailing service today and keep your vessel looking showroom-ready.
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