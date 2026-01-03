import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingWidgets from '@/components/FloatingWidgets'

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
          <FloatingWidgets />
        </div>
      </body>
    </html>
  )
}
