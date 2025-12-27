import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog-posts';
import BlogLeadForm from '@/components/blog/BlogLeadForm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | FIXplanet',
    };
  }

  return {
    title: `${post.title} | FIXplanet Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedDate,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-style content to HTML-safe format
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => {
        // Handle headers
        if (line.startsWith('# ')) {
          return `<h1 class="text-4xl font-bold text-navy-primary mb-6 mt-8">${line.slice(2)}</h1>`;
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-3xl font-bold text-navy-primary mb-4 mt-8">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-2xl font-semibold text-navy-primary mb-3 mt-6">${line.slice(4)}</h3>`;
        }
        if (line.startsWith('#### ')) {
          return `<h4 class="text-xl font-semibold text-navy-primary mb-2 mt-4">${line.slice(5)}</h4>`;
        }

        // Handle bold
        line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Handle lists
        if (line.match(/^[-*]\s/)) {
          return `<li class="ml-6 mb-2">${line.slice(2)}</li>`;
        }
        if (line.match(/^\d+\.\s/)) {
          return `<li class="ml-6 mb-2">${line.replace(/^\d+\.\s/, '')}</li>`;
        }

        // Handle checkmarks/crosses
        line = line.replace(/✓/g, '<span class="text-success">✓</span>');
        line = line.replace(/❌/g, '<span class="text-error">❌</span>');
        line = line.replace(/✅/g, '<span class="text-success">✅</span>');

        // Handle horizontal rules
        if (line.trim() === '---') {
          return '<hr class="my-8 border-gray-medium" />';
        }

        // Handle empty lines
        if (line.trim() === '') {
          return '<br />';
        }

        // Regular paragraphs
        if (line.trim().length > 0 && !line.startsWith('<')) {
          return `<p class="mb-4 leading-relaxed">${line}</p>`;
        }

        return line;
      })
      .join('\n');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-primary to-charcoal text-white py-12">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {' / '}
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            {' / '}
            <span className="text-white">{post.title}</span>
          </nav>

          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-teal-accent hover:underline mb-6"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-teal-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
            <span className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {new Date(post.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center">
              <Clock size={18} className="mr-2" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="container-custom py-8">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Article Body */}
            <article
              className="prose prose-lg max-w-none bg-white rounded-xl shadow-sm p-8 md:p-12"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#2D3436',
              }}
            />

            {/* Lead Capture Form - Mid Article */}
            <div className="my-12">
              <BlogLeadForm
                source={`Blog: ${post.title}`}
                title="Need Expert Help with Your Device?"
                description="Get same-day doorstep service across Bangalore with 12-month warranty"
              />
            </div>

            {/* Call to Action with Contact Options */}
            <div className="mt-12 bg-gradient-to-r from-navy-primary to-charcoal text-white rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Your Device Fixed?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Same-day doorstep service • 12-month warranty • OEM-grade components
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  href="tel:+91-8105955009"
                  size="lg"
                  className="!bg-teal-accent !text-white hover:!bg-teal-600"
                >
                  <Phone className="mr-2" size={20} />
                  Call +91 8105955009
                </Button>
                <Button
                  href="https://wa.me/918105955009"
                  variant="ghost"
                  size="lg"
                  className="!text-white !border-white hover:!bg-white hover:!text-navy-primary"
                >
                  WhatsApp Us
                </Button>
              </div>
              <p className="text-sm text-gray-300">
                Or scroll up to fill the form and we'll call you back within 15-30 minutes
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-dark text-sm">
                Found this helpful? Share with others who might need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-primary mb-6">
              Continue Reading
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="flex-1 bg-gray-light hover:bg-gray-medium transition-colors rounded-lg p-6 text-center"
              >
                <h3 className="font-semibold text-navy-primary mb-2">
                  Browse All Articles
                </h3>
                <p className="text-sm text-gray-dark">
                  Tips, guides, and insights for Apple device care
                </p>
              </Link>
              <Link
                href="/services"
                className="flex-1 bg-teal-accent/10 hover:bg-teal-accent/20 transition-colors rounded-lg p-6 text-center"
              >
                <h3 className="font-semibold text-navy-primary mb-2">
                  Our Services
                </h3>
                <p className="text-sm text-gray-dark">
                  Professional Apple device care in Bangalore
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
