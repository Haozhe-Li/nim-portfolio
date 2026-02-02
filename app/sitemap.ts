import { MetadataRoute } from 'next'
import { BLOG_POSTS } from './data'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = BLOG_POSTS.map((post) => ({
    url: `${WEBSITE_URL}${post.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${WEBSITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }))

  return [...routes, ...blogs]
}
