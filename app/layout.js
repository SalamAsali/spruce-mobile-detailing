import HelpBannerClientWrapper from '@/components/HelpBannerClientWrapper'

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
import './globals.css'
                                   import { Inter, Oswald } from 'next/font/google'
            import Footer from '@/components/Footer'
              import HelpBannerClientWrapper from '@/components/HelpBannerClientWrapper'
                
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
                                                            '@type': 'AutoRepair',
                                                            'name': 'Spruce Mobile Detailing',
                                                            'description': 'Premium mobile auto detailing services in South Denver Metro',
                                                            'telephone': '+1-720-971-2020',
                                                            'areaServed': {
                                                                              '@type': 'GeoCircle',
                                                                              'geoMidpoint': {
                                                                                                  '@type': 'GeoCoordinates',
                                                                                                  'latitude': '39.5771',
                                                                                                  'longitude': '-104.8615'
                                                                                },
                                                                              'geoRadius': '30'
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
        <HelpBannerClientWrapper />
          <main>{children}</main>
          <Footer />
  </body>
  </html>
    )
}'name': 'Spruce Mobile Detailing',
              'description': 'Premium mobile auto detailing services in South Denver Metro',
              'telephone': '+1-720-971-2020',
              'areaServed': {
                '@type': 'GeoCircle',
                'geoMidpoint': {
                  '@type': 'GeoCoordinates',
                  'latitude': '39.5771',
:59                },
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
ArrowDown ArrowDown ArrowDown      <body className={`${inter.className} ${oswald.variable}`}>
          <HelpBannerClientWrapper />
          <main>{children}</main>
          <Footer />
          <FloatingWidgets />
        </div>
      </body>
    </html>
  )
}
