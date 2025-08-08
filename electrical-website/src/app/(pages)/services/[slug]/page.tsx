import { contentMap } from '@/app/context-map/map-sections';
import { client } from '@/app/sanity/client';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { cache } from 'react';

type Params = Promise<{ slug: string }>;

// Cache the Sanity client queries
const getCachedSlugs = cache(async () => {
  return await client.fetch(
    `*[_type == "customSections" && defined(slug.current)][].slug.current`,
    {},
    { 
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['customSections'] 
      } 
    }
  );
});

const getCachedPost = cache(async (slug: string) => {
  return await client.fetch(
    `*[_type == "customSections" && slug.current == $slug][0]{
      title,
      content,
      _updatedAt
    }`,
    { slug },
    { 
      next: { 
        revalidate: 1800, // Cache for 30 minutes
        tags: ['customSections', `post-${slug}`] 
      } 
    }
  );
});

export async function generateStaticParams() {
  try {
    const slugs = await getCachedSlugs();
    
    // More efficient processing without reduce
    return slugs
      .map((slug: string) => slug.split('/')[2])
      .filter((slugName: string | undefined): slugName is string => slugName !== undefined)
      .map((slugName: string) => ({ slug: slugName }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const fullSlug = `/services/${slug}`;
    const post = await getCachedPost(fullSlug);
    
    if (!post) {
      return {
        title: 'Page Not Found - Everything Electrical Sydney',
        description: 'The requested page could not be found.',
      };
    }

    const pageTitle = `Everything Electrical Sydney — ${String(post.title)}`;
    const pageDescription = `Discover how Everything Electrical Sydney helps with ${post.title} for clients across Camden, Campbelltown, Oran Park and NSW.`;

    return {
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: `https://everythingelectricalsydney.com.au/services/${slug}`,
      },
      openGraph: {
        url: `https://everythingelectricalsydney.com.au/services/${slug}`,
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
            width: 1200,
            height: 630,
            alt: `Everything Electrical Sydney - ${post.title}`,
            type: 'image/png',
          },
        ],
        siteName: 'Everything Electrical Sydney',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: ['https://everythingelectricalsydney.com.au/images/electrical_og.png'],
      },
      keywords: [
        `Everything Electrical Sydney ${post.title}`,
        `${post.title} services`,
        'CCTV Installation',
        'Camden Electrician',
        'Campbelltown Electrician',
      ],
      authors: [{ name: 'Nexa Web' }],
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
      title: 'Everything Electrical Sydney',
      description: 'Professional electrical services in Sydney',
    };
  }
}

export default async function PostPage({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const fullSlug = `/services/${slug}`;
    const post = await getCachedPost(fullSlug);
    
    if (!post) {
      notFound(); // This will show the 404 page instead of redirecting
    }

    return (
      <main>
        {/* Add structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": post.title,
              "description": `Professional ${post.title} services in Sydney`,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Everything Electrical Sydney",
                "url": "https://everythingelectricalsydney.com.au"
              },
              "areaServed": ["Camden", "Campbelltown", "Oran Park", "NSW"],
              "url": `https://everythingelectricalsydney.com.au/services/${slug}`
            })
          }}
        />
        
        <PortableText value={post.content} components={contentMap} />
      </main>
    );
  } catch (error) {
    console.error('Error rendering post page:', error);
    notFound();
  }
}