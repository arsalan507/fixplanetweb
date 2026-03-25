import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fixplanet.in';
  const currentDate = new Date();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bangalore-locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/warranty`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // Service pages (high priority for Google Ads landing pages + SEO)
  const servicePages = [
    {
      url: `${baseUrl}/iphone-screen-cracked`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/iphone-storage-upgrade`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/apple-watch-repair-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/airpods-repair-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Blog listing page + all blog posts
  const blogSlugs = getAllBlogSlugs();
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  // Area pages — only high-value areas with actual GSC impressions
  const highValueAreaSlugs = [
    'marathahalli',
    'cunningham-road',
    'whitefield',
    'whitefield-main-road',
    'basaveshwaranagar',
    'avalahalli',
    'koramangala',
    'mg-road',
    'anekal',
    'hennur-road',
    'bel-road',
    'begur',
    'amruthahalli',
    'indiranagar',
    'hsr-layout',
    'electronic-city',
    'jayanagar',
    'jp-nagar',
    'bellandur',
    'brookefield',
    'malleshwaram',
    'hebbal',
    'yelahanka',
    'btm-layout',
    'sarjapur-road',
    'anjanapura',
  ];
  const areaPages = highValueAreaSlugs.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...servicePages, ...blogPages, ...areaPages];
}
