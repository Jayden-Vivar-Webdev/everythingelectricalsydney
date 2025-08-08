import Image from 'next/image'; 
import { client } from '@/app/sanity/client';
import { PortableTextComponents } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { Url } from 'next/dist/shared/lib/router/router';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cache } from 'react';

const builder = imageUrlBuilder(client);
type Params = Promise<{ slug: string }>;

// Cache the Sanity client queries
const getCachedSlugs = cache(async () => {
  return await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
    {},
    { 
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['posts'] 
      } 
    }
  );
});

const getCachedPost = cache(async (slug: string) => {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      image,
      body,
      _updatedAt,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }`,
    { slug },
    { 
      next: { 
        revalidate: 1800, // Cache for 30 minutes
        tags: ['posts', `post-${slug}`] 
      } 
    }
  );
});

export async function generateStaticParams() {
  try {
    const slugs = await getCachedSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}



// Optimized PortableText components
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="pb-6 text-base md:text-lg text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pb-6 mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pb-5 mt-8 mb-4 border-b border-gray-200">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 pb-4 mt-6 mb-3">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-gray-800 pb-3 mt-6 mb-2">
        {children}
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-base md:text-lg font-medium text-gray-700 pb-2 mt-4 mb-2">
        {children}
      </h5>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-5 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="pl-2 leading-relaxed">
        {children}
      </li>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href;
      const isExternal = href?.startsWith('http');
      
      return (
        <a 
          href={href} 
          className="text-red-600 hover:text-red-800 underline transition-colors duration-200"
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
  },
};

function urlFor(source: Url) {
  return builder.image(source);
}

// Helper function to extract meta description safely
function extractMetaDescription(body: string): string {
  try {
    if (!body || !Array.isArray(body) || body.length === 0) {
      return 'Read the latest electrical insights and tips from Everything Electrical Sydney.';
    }

    const firstBlock = body.find(block => 
      block._type === 'block' && 
      block.style === 'normal' && 
      block.children && 
      block.children.length > 0
    );

    if (firstBlock && firstBlock.children[0]?.text) {
      const text = firstBlock.children[0].text;
      const sentences = text.split('.');
      const firstSentence = sentences[0];
      return firstSentence.length > 160 
        ? firstSentence.substring(0, 157) + '...'
        : firstSentence + '.';
    }

    return 'Read the latest electrical insights and tips from Everything Electrical Sydney.';
  } catch (error) {
    console.error('Error extracting meta description:', error);
    return 'Read the latest electrical insights and tips from Everything Electrical Sydney.';
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getCachedPost(slug);

    if (!post) {
      return {
        title: 'Post Not Found | Everything Electrical Sydney Blog',
        description: 'The requested blog post could not be found.',
        robots: { index: false, follow: false },
      };
    }

    const imageUrl = post.image 
      ? urlFor(post.image).width(1200).height(630).format('webp').quality(85).url()
      : 'https://everythingelectricalsydney.com.au/images/electrical_og.png';

    const metaDescription = extractMetaDescription(post.body);
    const pageTitle = `${post.title} | Everything Electrical Sydney Blog`;
    
    return {
      title: pageTitle,
      description: metaDescription,
      alternates: {
        canonical: `https://everythingelectricalsydney.com.au/blog/${slug}`,
      },
      openGraph: {
        title: pageTitle,
        description: metaDescription,
        url: `https://everythingelectricalsydney.com.au/blog/${slug}`,
        siteName: 'Everything Electrical Sydney',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
            type: 'image/webp',
          },
        ],
        type: 'article',
        publishedTime: post.publishedAt,
        ...(post._updatedAt && { modifiedTime: post._updatedAt }),
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: metaDescription,
        images: [imageUrl],
      },
      keywords: [
        'electrical services Sydney',
        'electrician blog',
        'electrical tips',
        'Camden electrician',
        'Campbelltown electrician',
        post.title.toLowerCase(),
      ],
      authors: [{ name: 'Everything Electrical Sydney' }],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Everything Electrical Sydney Blog',
      description: 'Professional electrical insights and tips',
    };
  }
}

export default async function PostPage({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const post = await getCachedPost(slug);

    if (!post) {
      notFound();
    }

    const imageUrl = post.image 
      ? urlFor(post.image).width(1200).height(800).format('webp').quality(85).url()
      : null;

    const publishedDate = new Date(post.publishedAt);
    const readingTime = post.estimatedReadingTime || 3;

    return (
      <>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": extractMetaDescription(post.body),
              "image": imageUrl || 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
              "author": {
                "@type": "Organization",
                "name": "Everything Electrical Sydney",
                "url": "https://everythingelectricalsydney.com.au"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Everything Electrical Sydney",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://everythingelectricalsydney.com.au/images/logo.png"
                }
              },
              "datePublished": post.publishedAt,
              "dateModified": post._updatedAt || post.publishedAt,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://everythingelectricalsydney.com.au/blog/${slug}`
              },
              "keywords": "electrical services, electrician, Sydney, electrical tips"
            })
          }}
        />

        <article className="w-full flex justify-center py-20 px-10">
          <div className="w-full max-w-5xl flex flex-col">
            {/* Article Header */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black leading-tight">
                {post.title}
              </h1>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
                <time 
                  dateTime={post.publishedAt}
                  className="inline-block px-3 py-1 font-medium text-red-600 bg-red-50 rounded-full"
                >
                  {publishedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
                
                <span className="flex items-center gap-1">
                  📖 {readingTime} min read
                </span>
              </div>
            </header>

            {/* Featured Image */}
            {imageUrl && (
              <div className="relative w-full h-0 pb-[66%] mb-10 rounded-lg overflow-hidden"> 
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            )}

            {/* Article Content */}
            <main className="prose prose-lg max-w-none">
              <PortableText value={post.body} components={components} />
            </main>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Professional Electrical Services?
                </h3>
                <p className="text-gray-700 mb-4">
                  Everything Electrical Sydney provides expert electrical services across Camden, 
                  Campbelltown, Oran Park and greater NSW. Contact us for reliable, professional service.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Get a Quote Today
                </a>
              </div>
            </footer>
          </div>
        </article>
      </>
    );
  } catch (error) {
    console.error('Error rendering post page:', error);
    notFound();
  }
}