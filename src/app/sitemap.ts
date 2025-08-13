import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://penginapanarizky.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/villa-kamar',
    '/fasilitas',
    '/galeri',
    '/kontak',
    '/artikel',
  ].map((path) => ({
    url: `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  // Article routes (hardcoded from our current list)
  const articleSlugs = [
    'pantai-legon-pari-sawarna',
    'panduan-liburan-legon-pari',
    'daya-tarik-legon-pari',
  ]
  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/artikel/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // Dynamic accommodation detail examples
  const detailRoutes: MetadataRoute.Sitemap = [
    '/villa/villa-premium',
    '/kamar/kamar-deluxe',
    '/cottage/cottage-alam',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...articleRoutes, ...detailRoutes]
}
