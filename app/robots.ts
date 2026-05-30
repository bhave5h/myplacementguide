import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules:   { userAgent: '*', allow: '/' },
    sitemap: 'https://myplacementguru-sw2p.vercel.app/sitemap.xml',
  }
}
