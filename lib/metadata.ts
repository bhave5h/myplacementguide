import type { Metadata } from 'next'

interface PageMeta {
  title:       string
  description: string
  ogImage:     string
  path:        string
}

const BASE_URL = 'https://myplacementguru.com' // update to real domain

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
      siteName:  'MyPlacementGuru',
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
    keywords:   ['MyPlacementGuru','internships','placement', 'career', 'masterclass', 'Nagpur', 'IT jobs', 'resume', 'fresher', 'Sarang Thakre'],
  }
}

// Per-page metadata exports
export const homeMeta = generateMeta({
  title:       'MyPlacementGuru | Stop Applying. Start Getting Hired.',
  description: 'Free masterclass by Sarang Thakre — learn the hiring managers secret to cracking top IT & Marketing roles, May 24 & 31.',
  ogImage:     '/Images/og/og-home.jpg',
  path:        '/',
})

export const curriculumMeta = generateMeta({
  title:       'MyPlacementGuru | 10-Day Career Masterclass Curriculum',
  description: 'From ATS resumes to salary negotiation — a structured 10-day journey to make you corporate-ready. See the full curriculum.',
  ogImage:     '/Images/og/og-curriculum.jpg',
  path:        '/curriculum',
})

export const missionMeta = generateMeta({
  title:       'MyPlacementGuru | Why This Masterclass Exists',
  description: 'Sarang Divakar Thakre bridges the gap between campus and corporate. Read the mission behind MyPlacementGuru.',
  ogImage:     '/Images/og/og-mission.jpg',
  path:        '/mission',
})

export const registerMeta = generateMeta({
  title:       'MyPlacementGuru | Register — Free & Paid Sessions',
  description: 'Reserve your free seat for May 24/31 or enrol in the 10-Day Masterclass at ₹999 early bird price. Limited to 100 students.',
  ogImage:     '/Images/og/og-register.jpg',
  path:        '/register',
})

export const webinarMeta = generateMeta({
  title:       'MyPlacementGuru | Free Career Masterclass Webinar',
  description: 'Join the free live career masterclass by Sarang Divakar Thakre. Learn how to design ATS-friendly resumes, build LinkedIn SEO, and crack interviews.',
  ogImage:     '/Images/og/og-webinar.jpg',
  path:        '/webinar',
})

