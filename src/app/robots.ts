import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checklist', '/success'],
    },
    sitemap: 'https://appbuildingblueprint.com/sitemap.xml',
  }
}
