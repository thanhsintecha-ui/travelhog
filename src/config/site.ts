/**
 * Site configuration
 */

export const siteConfig = {
  name: 'Tan Phat Food',
  description: 'Website chuyên nghiệp được xây dựng với Next.js',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/tanphatfood',
    facebook: 'https://facebook.com/tanphatfood',
    instagram: 'https://instagram.com/tanphatfood',
  },
  creator: {
    name: 'Tan Phat Food Team',
    url: 'https://tanphatfood.com',
  },
};

export type SiteConfig = typeof siteConfig;

