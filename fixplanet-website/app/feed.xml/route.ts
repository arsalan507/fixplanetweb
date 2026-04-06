import { getAllBlogSlugs, getBlogPostBySlug } from '@/data/blog-posts';

export async function GET() {
  const slugs = getAllBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b!.publishedDate).getTime() - new Date(a!.publishedDate).getTime());

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post!.title}]]></title>
      <link>https://www.fixplanet.in/blog/${post!.slug}</link>
      <guid isPermaLink="true">https://www.fixplanet.in/blog/${post!.slug}</guid>
      <pubDate>${new Date(post!.publishedDate).toUTCString()}</pubDate>
      <description><![CDATA[${post!.metaDescription}]]></description>
      <category>${post!.category}</category>
    </item>`
    )
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FIXplanet Blog — iPhone &amp; MacBook Repair Tips Bangalore</title>
    <link>https://www.fixplanet.in/blog</link>
    <description>Expert guides on iPhone screen replacement, MacBook troubleshooting, iPad repair costs. Bangalore-specific pricing and service tips from repair specialists.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.fixplanet.in/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
