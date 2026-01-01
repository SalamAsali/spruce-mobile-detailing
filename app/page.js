'use client'

import Link from 'next/link'
import { Phone, Mail, Clock, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BeforeAfter from '@/components/BeforeAfter'

export default function Home() {
  const services = [
    {
      title: 'Car Detailing',
      description: 'Step into a car that feels as new as the day you bought it. Our comprehensive car detailing services include interior deep cleaning, exterior washing and waxing, odor elimination, and scratch repair.',
      link: '/car-detailing',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80'
    },
    {
      title: 'RV Detailing',
      description: 'Travel in comfort with a pristine RV interior and exterior. We specialize in cleaning small recreational vehicles to large motorhomes, restoring shine and protecting against the elements.',
      link: '/rv-detailing',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=80'
    },
    {
      title: 'Boat Detailing',
      description: 'Keep your boat looking showroom-ready. Our expert boat detailing services include hull washing, gel coat polishing, interior cleaning, and protection against UV and water exposure.',
      link: '/boat-detailing',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80'
    }
  ]

  const faqs = [
    {
      question: 'What Does Mobile Detailing Mean?',
      answer: 'Mobile detailing means we come to your location—whether at home, office, or another convenient spot—with all the equipment and supplies needed to detail your vehicle. You don\'t have to drive anywhere; we bring our professional service directly to you.'
    },
    {
      question: 'What Is Full Service Auto Detailing?',
      answer: 'Full service auto detailing includes a comprehensive cleaning of both the interior and exterior of your vehicle. This typically involves vacuuming, shampooing, odor elimination, washing, waxing, tire cleaning, and protection treatments to restore your vehicle to like-new condition.'
    },
    {
      question: 'Can You Detail A Car At Office Or Home?',
      answer: 'Absolutely! That\'s the core of our mobile service. We can detail your vehicle at your home, office, or any location in the Greater Toronto Area that\'s convenient for you. All we need is access to water and electricity in most cases.'
    },
    {
      question: 'What Is The Difference Between A Car Wash And Detailing?',
      answer: 'A car wash is a quick exterior cleaning that removes dirt and grime. Detailing is a thorough, comprehensive service that includes deep cleaning, polishing, waxing, and protection for both interior and exterior surfaces. Detailing restores and protects your vehicle, going far beyond a simple wash.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* The Spruce Detailing Difference Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile Detailing Mississauga</h1>
            <p className="text-xl md:text-2xl mb-8">Professional Auto Detailing In Mississauga Done At Your Convenience</p>
            <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Serving across Mississauga and the Greater Toronto Area, Spruce Detailing specializes in professional mobile detailing. 
            Our team thoroughly inspects your vehicle, understands its maintenance needs, and suggests the best detailing solutions. 
            Whether you require exterior or interior mobile detailing, we will cater to your needs with care and dedication.
          </p>
        </div>
      </section>

      {/* The Spruce Detailing Difference */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">The Spruce Detailing Difference</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your vehicle is a significant investment that deserves exceptional care. At Spruce Detailing, we understand 
                that every vehicle has unique needs, which is why we offer flexible packages tailored to your specific requirements.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our convenient mobile services mean you never have to disrupt your busy schedule. We come to you—at home, 
                at work, or wherever is most convenient—bringing professional-grade equipment and premium products to deliver 
                outstanding results every time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Flexible scheduling to fit your lifestyle</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Customized packages for every vehicle type</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Premium products and professional equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Serving Mississauga and Greater Toronto Area</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" 
                alt="Professional car detailing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfter />

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-emerald-900">
            From Our Mobile Detailing Studio To Your Garage: An Immaculately Detailed Vehicle
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We bring professional detailing services directly to your location across the Greater Toronto Area
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-emerald-900">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Protection Film Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" 
                alt="Paint protection film application" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-900">Paint Protection Film</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Protect your vehicle's paint from chips, scratches, and environmental damage with our premium paint 
                protection film services. This invisible shield preserves your vehicle's finish while maintaining its 
                original appearance.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our expert technicians apply high-quality film with precision, ensuring a seamless finish that keeps 
                your vehicle looking pristine for years to come.
              </p>
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-emerald-900">Serving Mississauga & Greater Toronto Area</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We bring our mobile detailing services to your location across Mississauga, Port Credit, Lorne Park, and the entire GTA.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977252178!2d-79.69703599999999!3d43.5789543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2sMississauga%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Quote Now</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to experience the Spruce Detailing difference? Contact us today for a free, no-obligation quote.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:+18001234567" className="flex items-center gap-2 text-lg hover:text-emerald-200 transition-colors">
              <Phone className="w-5 h-5" />
              +1-800-123-4567
            </a>
            <a href="mailto:support@example.com" className="flex items-center gap-2 text-lg hover:text-emerald-200 transition-colors">
              <Mail className="w-5 h-5" />
              support@example.com
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              <a href="tel:+18001234567">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900">
              <a href="mailto:support@example.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}