'use client'

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(720) 971-2020',
      description: 'Monday - Sunday: 8AM - 8PM',
      action: 'tel:+17209712020',
      color: 'from-[#1B9B8A] to-[#158F7E]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@sprucemobiledetailing.com',
      description: 'We respond within 24 hours',
      action: 'mailto:info@sprucemobiledetailing.com',
      color: 'from-[#D4AF37] to-[#F4E5A1]'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'South Denver Metro',
      description: 'Mobile service - We come to you',
      action: '#',
      color: 'from-[#1B9B8A] to-[#158F7E]'
    }
  ]

  const serviceAreas = [
    'Castle Rock', 'Parker', 'Highlands Ranch', 'Centennial',
    'Littleton', 'Greenwood Village', 'Lone Tree', 'South Aurora',
    'Lakewood', 'Englewood', 'Cherry Creek', 'Washington Park'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 pt-44 md:pt-48 lg:pt-40 xl:pt-44 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-[#1B9B8A]/10 border-2 border-[#1B9B8A]/40 rounded-full px-6 py-2 shadow-lg shadow-[#1B9B8A]/20">
              <Phone className="w-5 h-5 text-[#1B9B8A]" />
              <span className="text-[#1B9B8A] text-sm font-semibold tracking-wider">WE'RE HERE TO HELP</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
            GET IN TOUCH
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to give your vehicle the care it deserves?<br className="hidden sm:block" /> Contact us for a free quote or to schedule service.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 hover:border-[#1B9B8A] transition-all group">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>{item.title}</h3>
                    <a href={item.action} className="text-[#D4AF37] text-xl font-semibold mb-2 block hover:text-[#F4E5A1] transition-colors">
                      {item.details}
                    </a>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-2 border-[#D4AF37]/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black mb-4 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
                    REQUEST A FREE QUOTE
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
                </div>

                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const data = {
                    name: formData.get('name'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    vehicle: formData.get('vehicle'),
                    service: formData.get('service'),
                    message: formData.get('message')
                  }
                  
                  // For now, redirect to phone call (can be connected to backend later)
                  window.location.href = `tel:+17209712020`
                  alert('Thank you! We will call you shortly at ' + data.phone)
                }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors"
                        placeholder="John Doe"
                        required
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors"
                        placeholder="(720) 555-0123"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors"
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-300 mb-2">Vehicle Type *</label>
                      <select id="vehicle" name="vehicle" className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors" required aria-required="true">
                        <option value="">Select vehicle type...</option>
                        <option value="car">Car</option>
                        <option value="rv">RV/Motorhome</option>
                        <option value="truck">Truck</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="boat">Boat</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">Service Needed</label>
                      <select id="service" name="service" className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors" aria-label="Select service type">
                        <option value="">Select service...</option>
                        <option value="detailing">Detailing</option>
                        <option value="restoration">Restoration</option>
                        <option value="ceramic">Ceramic Coating</option>
                        <option value="ppf">Paint Protection Film</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:border-[#1B9B8A] focus:outline-none focus:ring-2 focus:ring-[#1B9B8A]/50 transition-colors h-32 resize-none"
                      placeholder="Tell us about your vehicle and what services you're interested in..."
                      aria-label="Additional message or comments"
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[#1B9B8A] to-[#158F7E] hover:from-[#158F7E] hover:to-[#1B9B8A] text-white py-6 text-lg font-bold shadow-xl">
                    <Send className="w-5 h-5 mr-2" />
                    SEND MESSAGE
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by Spruce Mobile Detailing.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
              WE SERVE SOUTH<br className="sm:hidden" /> DENVER METRO
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              Mobile detailing service across all major areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-800 rounded-lg hover:border-[#1B9B8A] transition-all group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#1B9B8A]/20 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-[#1B9B8A]" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{area}</span>
              </div>
            ))}
          </div>

          {/* Hours */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/10 to-[#1B9B8A]/10 border-2 border-[#D4AF37]/30">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3 text-white" style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif', textWrap: 'balance' }}>
                BUSINESS HOURS
              </h3>
              <div className="text-gray-300 text-lg space-y-2">
                <p><span className="text-[#D4AF37] font-semibold">Monday - Sunday:</span> 8:00 AM - 8:00 PM</p>
                <p className="text-sm text-gray-400">Emergency services available by appointment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
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
