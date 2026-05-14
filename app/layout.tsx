import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { WhatsAppCTA }  from '@/components/ui/WhatsAppCTA'

const manrope = Manrope({
  subsets:  ['latin'],
  variable: '--font-display',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title:       { default: 'MyPlacementGuide', template: '%s | MyPlacementGuide' },
  description: 'Career Mastery Masterclass for Nagpur students by Sarang Divakar Thakre.',
  icons:       { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context':   'https://schema.org',
            '@type':      'Course',
            'name':       'Career Mastery Masterclass',
            'description':'10-day career readiness program for Nagpur students',
            'provider': {
              '@type': 'Person',
              'name':  'Sarang Thakre',
              'url':   'https://myplacementguide-sw2p.vercel.app',
            },
            'offers': {
              '@type':         'Offer',
              'price':         '999',
              'priceCurrency': 'INR',
              'availability':  'https://schema.org/LimitedAvailability',
            },
            'hasCourseInstance': {
              '@type':      'CourseInstance',
              'courseMode': 'online',
              'startDate':  '2025-06-01',
              'inLanguage': 'en-IN',
              'location':   'Nagpur, Maharashtra, India',
            },
          })}}
        />
      </head>
      <body className={`${manrope.variable} antialiased bg-[var(--color-canvas)] text-[var(--color-ink)] max-w-6xl mx-auto container`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppCTA />
        </SmoothScroll>
      </body>
    </html>
  )
}
