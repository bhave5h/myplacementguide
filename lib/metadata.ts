import type { Metadata } from 'next'

interface PageMeta {
  title:       string
  description: string
  ogImage:     string
  path:        string
}

const BASE_URL = 'https://myplacementguide.com' // update to real domain

export function generateMeta({ title, description, ogImage, path }: PageMeta): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url,
      siteName:  'MyPlacementGuide',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale:    'en_IN',
      type:      'website',
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      images:      [ogImage],
    },
    alternates: { canonical: url },
    robots:     { index: true, follow: true },
    keywords:   ['MyPlacementGuide','internships','placement', 'career', 'masterclass', 'Nagpur', 'IT jobs', 'resume', 'fresher', 'Sarang Thakre'],
  }
}

// Per-page metadata exports
export const homeMeta = generateMeta({
  title:       'MyPlacementGuide | Stop Applying. Start Getting Hired.',
  description: 'Free masterclass by Sarang Thakre — learn the hiring managers secret to cracking top IT & Marketing roles, May 24 & 31.',
  ogImage:     '/images/og/og-home.jpg',
  path:        '/',
})

export const curriculumMeta = generateMeta({
  title:       'MyPlacementGuide | 10-Day Career Masterclass Curriculum',
  description: 'From ATS resumes to salary negotiation — a structured 10-day journey to make you corporate-ready. See the full curriculum.',
  ogImage:     '/images/og/og-curriculum.jpg',
  path:        '/curriculum',
})

export const missionMeta = generateMeta({
  title:       'MyPlacementGuide | Why This Masterclass Exists',
  description: 'Sarang Divakar Thakre bridges the gap between campus and corporate. Read the mission behind MyPlacementGuide.',
  ogImage:     '/images/og/og-mission.jpg',
  path:        '/mission',
})

export const registerMeta = generateMeta({
  title:       'MyPlacementGuide | Register — Free & Paid Sessions',
  description: 'Reserve your free seat for May 24/31 or enrol in the 10-Day Masterclass at ₹999 early bird price. Limited to 100 students.',
  ogImage:     '/images/og/og-register.jpg',
  path:        '/register',
})
