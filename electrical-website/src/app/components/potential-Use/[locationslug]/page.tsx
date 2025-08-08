import { client } from '@/app/sanity/client';
import { contentMap } from '@/app/context-map/map-sections';
import { PortableText } from 'next-sanity';
import HeroContact from '@/app/components/hero/hero-contact';
import { redirect } from 'next/navigation';

type Params = Promise<{
  slug: string;
  locationslug: string;
}>;

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
    title,
    content,
  }`;
  

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, locationslug } = await params;
  const fullSlug = `/services/${slug}`;

  const post = await client.fetch(POST_QUERY, { slug: fullSlug });

  if (!post) {
    return {
      title: 'Page not found — Everything Electrical Sydney',
      description: 'This page could not be found.',
    };
  }

  const locationName = locationslug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const pageTitle = `Everything Electrical Sydney - ${post.title} in ${locationName}`;
  const pageDescription = `Explore how Everything Electrical Sydney delivers expert ${post.title} for clients in ${locationName}.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://everythingelectricalsydney.com.au/${slug}/${locationslug}`,
    },
    openGraph: {
      url: `https://everythingelectricalsydney.com.au/services/${slug}/${locationslug}`,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
          width: 1200,
          height: 630,
          alt: `Everything Electrical Sydney - ${post.title} in ${locationName}`,
          type: 'image/png',
        },
      ],
      siteName: 'Everything Electrical Sydney',
    },
    keywords: [
      `${post.title} in ${locationName}`,
      `Everything Electrical Sydney ${post.title}`,
      'Sydney Electrical Services',
      `${locationName} websites`,
    ],
    authors: [{ name: 'Nexa Web' }],
  };
}


export default async function PostPage({ params }: { params: Params }) {
  const { slug, locationslug } = await params;
  const fullSlug = `/services/${slug}`;
  const post = await client.fetch(POST_QUERY, { slug: fullSlug });
  
  const locationName = locationslug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const postTitle = `${post.title} in ${locationName}`
  if (!post) {
    redirect('/services')  // Redirect to services page
  }
  
  return (
    <>
    <HeroContact
      title={postTitle}
      description={`We're here to answer any questions about electrical work in your ${locationName}.`}
      backgroundImage="/images/assets/electrical-switchbox.jpg"
      address={{
        line1: "Based in Sydney",
        line2: "Proudly Serving All of Sydney",
        cityStateZip: "New South Wales, 2000"
      }}
      phone="0449 003 526"
      email="info@everythingelectricalsydney.com.au"
    />
    <PortableText value={post.content} components={contentMap} />
    </>
  );
}
