import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald'
})

export const metadata = {
  title: 'Spruce Mobile Detailing | Premium Auto Detailing South Denver Metro',
  description: 'Professional mobile detailing services in South Denver Metro, Castle Rock, Parker, Highlands Ranch, and surrounding areas. Expert car, RV, and boat detailing at your location.',
  keywords: 'mobile detailing, car detailing, RV detailing, boat detailing, South Denver, Castle Rock, Parker, Highlands Ranch, Centennial, Littleton, Colorado auto detailing',
  openGraph: {
    title: 'Spruce Mobile Detailing | Premium Auto Detailing South Denver Metro',
    description: 'Professional mobile detailing services in South Denver Metro and surrounding areas.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://sprucemobiledetailing.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              'name': 'Spruce Mobile Detailing',
              'description': 'Premium mobile auto detailing services in South Denver Metro',
              'telephone': '+1-720-971-2020',
              'areaServed': {
                '@type': 'GeoCircle',
                'geoMidpoint': {
                  '@type': 'GeoCoordinates',
                  'latitude': '39.5771',
                  'longitude': '-104.8764'
                },
                'geoRadius': '30000'
              },
              'address': {
                '@type': 'PostalAddress',
                'addressRegion': 'CO',
                'addressLocality': 'South Denver Metro'
              },
              'priceRange': '$$',
              'openingHours': 'Mo-Su 08:00-20:00'
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${oswald.variable}`}>
        <div className="overflow-x-hidden">
          <Navigation />
          <main>{children}</main>
          <Footer />

          {/* === MOBILE: BOTTOM STICKY BAR (md:hidden) === */}
          <div className="md:hidden fixed bottom-0 left-0 w-full z-[9999] bg-neutral-900 border-t border-neutral-800 p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <div className="flex gap-3">
              {/* Call Button */}
              <a href="tel:+17209712020" className="w-[60%] flex items-center justify-center bg-emerald-500 text-black font-black text-lg uppercase tracking-widest py-3 rounded hover:bg-emerald-400 transition">
                Call Now
              </a>
              {/* Menu Button (Triggers Modal) */}
              <button onClick={() => document.getElementById('service-modal').classList.toggle('hidden')} className="w-[40%] flex items-center justify-center bg-neutral-800 text-white font-bold text-sm uppercase tracking-wide border border-neutral-700 rounded hover:bg-neutral-700 transition">
                Start Quote
              </button>
            </div>
          </div>

          {/* === DESKTOP: FLOATING BUBBLES (hidden md:flex) === */}
          <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-[9999] items-end">
            {/* Bubble 1: Call */}
            <a href="tel:+17209712020" className="group relative w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📞</span>
              <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap font-bold">
                (720) 971-2020
              </span>
            </a>

            {/* Bubble 2: Menu (Triggers Modal) */}
            <button onClick={() => document.getElementById('service-modal').classList.toggle('hidden')} className="group relative w-16 h-16 bg-neutral-800 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">☰</span>
              <span className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap border border-neutral-700">
                View Services
              </span>
            </button>
          </div>

          {/* === SHARED: "QUESTIONNAIRE STYLE" MODAL OVERLAY === */}
          <div id="service-modal" className="hidden fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              
              {/* Header */}
              <div className="bg-neutral-800 p-6 flex justify-between items-center border-b border-neutral-700">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">How can we help?</h3>
                <button onClick={() => document.getElementById('service-modal').classList.add('hidden')} className="text-gray-400 hover:text-white text-2xl">&times;</button>
              </div>

              {/* Service Grid */}
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Standard Detailing */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-emerald-400 mb-4 border-b border-neutral-800 pb-2">Detailing Services</h4>
                    <div className="space-y-3">
                      <a href="/car-detailing" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group"><span className="text-2xl mr-3">🚗</span> <span className="text-gray-300 group-hover:text-white font-medium">Car Detailing</span></a>
                      <a href="/rv-detailing" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group"><span className="text-2xl mr-3">🚐</span> <span className="text-gray-300 group-hover:text-white font-medium">RV Detailing</span></a>
                      <a href="/truck-detailing" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group"><span className="text-2xl mr-3">🚚</span> <span className="text-gray-300 group-hover:text-white font-medium">Truck Detailing</span></a>
                      <a href="/fleet-detailing" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group"><span className="text-2xl mr-3">🚛</span> <span className="text-gray-300 group-hover:text-white font-medium">Fleet Detailing</span></a>
                    </div>
                  </div>
                  {/* Premium Services */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-yellow-400 mb-4 border-b border-neutral-800 pb-2">Premium Care</h4>
                    <div className="space-y-3">
                      <a href="/ceramic-coating" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group relative overflow-hidden">
                        <span className="text-2xl mr-3">🛡️</span> 
                        <div className="flex flex-col"><span className="text-white font-bold">Ceramic Coating</span><span className="text-[10px] text-yellow-400 uppercase">Most Popular</span></div>
                      </a>
                      <a href="/paint-protection-film" className="flex items-center p-3 rounded hover:bg-neutral-800 transition group"><span className="text-2xl mr-3">🧱</span> <span className="text-gray-300 group-hover:text-white font-medium">PPF</span></a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 text-center">
                <button onClick={() => document.getElementById('service-modal').classList.add('hidden')} className="text-sm text-gray-500 hover:text-white transition">Close Menu</button>
              </div>
            </div>
          </div>

        </div>
      </body>
    </html>
  )
}
