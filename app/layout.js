import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spruce Mobile Detailing | Professional Auto Detailing in Mississauga & GTA',
  description: 'Professional mobile detailing services in Mississauga and Greater Toronto Area. Expert car, RV, and boat detailing at your convenience.',
  keywords: 'mobile detailing, car detailing, RV detailing, boat detailing, Mississauga, GTA, Toronto, auto detailing',
  openGraph: {
    title: 'Spruce Mobile Detailing | Professional Auto Detailing in Mississauga & GTA',
    description: 'Professional mobile detailing services in Mississauga and Greater Toronto Area.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}