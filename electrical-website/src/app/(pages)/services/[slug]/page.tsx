import { contentMap } from '@/app/context-map/map-sections';
import { client } from '@/app/sanity/client';
import { PortableText } from 'next-sanity';
import { redirect } from 'next/navigation'
type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  // Fetch all post slugs from Sanity
  const slugs = await client.fetch(`*[_type == "customSections" && defined(slug.current)][].slug.current`);
  // Return them as an array of { slug } objects

  return slugs.reduce((acc: { slug: string }[], slug: string) => {
    const slugName = slug.split('/')[2];
    if (slugName !== undefined) {
      acc.push({ slug: slugName });
    }
    return acc;
  }, [] as { slug: string }[]);
  

}


const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export async function generateMetadata({ params }: { params: Params }) {
  
  const { slug } = await params;
  const fullSlug = `/services/${slug}`;
  const post = await client.fetch(POST_QUERY, { slug: fullSlug });
  if (!post) {
    return redirect('/services');
  }

  const pageTitle = `Everything Electrical Sydney — ${String(post.title)}`;
  const pageDescription = `Discover how Everything Electrical Sydney helps with ${post.title} for clients across Camden, Campbelltown, Oran Park and NSW.`;

  console.log(slug)

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
  const fullSlug = `/services/${slug}`;
  const post = await client.fetch(POST_QUERY, { slug: fullSlug });
  
  if (!post) {
    return <p>Post not found</p>;
  }


  
  

  return (
    <>
       
       <PortableText value={post.content} components={contentMap} />
            
    </>
  );
}
