import RenderContent from '@/app/context-map/render-sections';
import { client } from '@/app/sanity/client';
import type { PortableTextBlock } from '@sanity/types';
type Params = Promise<{ slug: string[] }>;
import { redirect } from 'next/navigation'


const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;


export async function generateMetadata({ params }: { params: Params }) {
  
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug: slug });

  if (!post) {
    redirect('/services')  // Redirect to services page
  }

  const pageTitle = `Everything Electrical Sydney — ${post.title}`;
  const pageDescription = `Discover how Everything Electrical Sydney helps with ${post.title} for clients across Camden, Campbelltown, Oran Park and NSW.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://everythingelectricalsydney.com.au/${slug}`,
    },
    openGraph: {
      url: `https://everythingelectricalsydney.com.au/${slug}`,
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
      siteName: 'Everything Electrical Sydney', // ✅ correct key
    },
    keywords: [
      `Everything Electrical Sydney ${post.title}`,
      `${post.title} services`,
      'CCTV Installation',
      'Camden Electrician',
      'Campbelltown Electrician',
    ],
    authors: [{ name: 'Nexa Web' }],
  };
}


export default async function PostPage({ params }: { params: Params }) {
  const {slug} = await params
  
  const post = await client.fetch(POST_QUERY, { slug: slug });

  if (!post) {
    return <p>Post not found</p>;
  }
  
  return (
    <>

        <RenderContent content={post.content as PortableTextBlock[]} />
            
      
    </>
  );
}
