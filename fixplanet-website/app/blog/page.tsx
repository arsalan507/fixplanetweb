import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Apple Device Care Insights & Tips | FIXplanet Blog',
  description: 'Expert tips, troubleshooting guides, and industry insights for Apple device care in Bangalore. Learn from FIXplanet\'s specialists.',
  keywords: ['Apple care tips', 'iPhone troubleshooting', 'MacBook maintenance', 'device care guide', 'Bangalore tech'],
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'iphone-battery-health-bangalore',
    title: 'iPhone Battery Health Below 80%? Here\'s What You Need to Know in Bangalore',
    excerpt: 'Comprehensive guide to understanding iPhone battery degradation, when to replace, cost comparison, and tips to extend battery life in Bangalore\'s climate.',
    category: 'Device Care Tips',
    readTime: '8 min read',
    publishedDate: '2024-10-15',
    image: 'https://via.placeholder.com/800x450/1A2F4F/FFFFFF?text=iPhone+Battery',
    featured: true,
  },
  {
    slug: 'macbook-screen-replacement-guide',
    title: 'MacBook Screen Cracked? Complete Guide to Display Replacement in Bangalore',
    excerpt: 'Everything you need to know about MacBook screen damage, repair vs replacement decisions, cost breakdown by model, and how to prevent future damage.',
    category: 'Troubleshooting Guides',
    readTime: '10 min read',
    publishedDate: '2024-10-10',
    image: 'https://via.placeholder.com/800x450/1A2F4F/FFFFFF?text=MacBook+Screen',
  },
  {
    slug: 'iphone-water-damage-emergency-steps',
    title: 'Dropped Your iPhone in Water? Emergency Steps to Take in Bangalore',
    excerpt: 'Immediate actions to take after water damage, what NOT to do, recovery success rates, and when to seek professional help in Bangalore.',
    category: 'Troubleshooting Guides',
    readTime: '6 min read',
    publishedDate: '2024-10-05',
    image: 'https://via.placeholder.com/800x450/1A2F4F/FFFFFF?text=Water+Damage',
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-16">
        <div className="container-custom">
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link> / Blog
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Apple Device Care Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Tips, guides, and industry insights from Bangalore&apos;s Apple care experts
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy-primary">Featured Article</h2>
            </div>
            <Card hover padding="none" className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-primary mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-dark mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-dark mb-6">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button href={`/blog/${featuredPost.slug}`} variant="primary">
                    Read Full Article
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="py-12 bg-gray-light">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-primary">Recent Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.slug} hover padding="none" className="overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-navy-primary mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-dark mb-4 flex-grow">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-dark mb-4">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                    <span>
                      {new Date(post.publishedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-teal-accent font-medium hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Sidebar */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-primary mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Device Care Tips',
                'Troubleshooting Guides',
                'Industry News',
                'Customer Stories',
                'Bangalore Tech Scene',
                'Product Reviews',
              ].map((category) => (
                <button
                  key={category}
                  className="bg-gray-light hover:bg-teal-accent/10 border border-gray-medium hover:border-teal-accent px-6 py-3 rounded-lg font-medium text-navy-primary transition-all text-left"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Device?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experts are ready to assist you with any Apple device issue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Free Quote
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-navy-primary">
              Browse Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
