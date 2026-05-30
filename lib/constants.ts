export const SITE_NAME    = 'MyPlacementGuru'
export const MENTOR_NAME  = 'Sarang Divakar Thakre'
export const FREE_DATE    = 'May 24 & 31, 2025'
export const PAID_START   = 'June 1, 2025'
export const FREE_PRICE   = '₹0'
export const PAID_PRICE   = '₹999'
export const WHATSAPP_URL = 'https://wa.me/91XXXXXXXXXX' // replace with real number
export const FREE_SEATS   = 100

export const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Mission',    href: '/mission' },
  { label: 'Webinar',    href: '/webinar' },
  { label: 'Register',   href: '/register' },
]

export const MENTOR_STATS = [
  { value: '5+',   label: 'Years in IT',             suffix: '', description: 'Cracked multiple offers from top-tier firms.' },
  { value: '2',    label: 'Companies Founded',       suffix: '', description: 'Founder of NagpurHeights & BigTopSocial.' },
  { value: '1',    label: 'Successful Exit',         suffix: '', description: 'Exited a prominent Digital Agency.' },
  { value: 'Mission',  label: 'The Mission',         suffix: '', description: "I don't want to just teach; I want to build the next generation of Corporate Leaders." },
]

export const THREE_PILLARS = [
  {
    number: '01',
    title:  'The Resume Architect',
    body:   'Build an ATS-friendly resume that passes the 6-second test.',
    icon:   'FileText',
  },
  {
    number: '02',
    title:  'LinkedIn SEO',
    body:   'How to make recruiters come to you.',
    icon:   'LinkedinLogo',
  },
  {
    number: '03',
    title:  "The Founder's Interview Playbook",
    body:   'Answer "Tell me about yourself" like a leader.',
    icon:   'MicrophoneStage',
  },
]

export const CURRICULUM_DAYS = [
  { days: '1–2', title: 'The Scientific Resume',               desc: 'Layout & Psychology.' },
  { days: '3–4', title: 'LinkedIn Mastery & Personal Branding',desc: 'How to make recruiters come to you.' },
  { days: '5–6', title: 'Advanced Job Search Strategies',      desc: 'Hidden Job Market.' },
  { days: '7–8', title: 'Live Mock Interviews & Body Language', desc: 'Real-time feedback and non-verbal cues.' },
  { days: '9',   title: 'Salary Negotiation',                  desc: 'Demand your worth.' },
  { days: '10',  title: 'The Graduation & Internship Selection',   desc: 'Top performers earn a direct internship opportunity at BigTopSocial or Matoshri Realestate.' },
]

export const BONUSES = [
  { label: 'Bonus 01', icon: '📄', title: 'Premium Resume Templates', desc: 'Templates used in my startups.' },
  { label: 'Bonus 02', icon: '📧', title: 'Cold Email Scripts for HRs', desc: 'Outreach sequences that get replies.' },
  { label: 'Bonus 03', icon: '🚀', title: 'The Internship Gateway', desc: 'Opportunity to intern at BigTopSocial or Matoshri Realestate for top performers.' },
]

export const PRICING = [
  {
    tier:     'Free Session',
    price:    '₹0',
    date:     'May 24 & 31',
    seats:    'Limited to 100 Students',
    features: ['Live session', 'The 3 Pillars', 'Q&A with Sarang', 'Community access'],
    cta:      'Reserve My Free Seat',
    highlight: false,
    badge:    'FREE',
  },
  {
    tier:     '10-Day Masterclass',
    price:    '₹999',
    date:     'Starts June 1',
    seats:    'Early Bird',
    features: ['All 10 curriculum modules', '3 premium bonuses', 'Mock interview sessions', 'Internship opportunity', 'Lifetime community access', '100% satisfaction guarantee'],
    cta:      'Enrol at Early Bird Price',
    highlight: true,
    badge:    'BEST VALUE',
  },
]
