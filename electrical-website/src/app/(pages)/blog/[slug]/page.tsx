import Image from 'next/image'; 
import { client } from '@/app/sanity/client';
import {PortableTextComponents } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { Url } from 'next/dist/shared/lib/router/router';
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder(client);
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  // Fetch all post slugs from Sanity
  const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`);
  // Return them as an array of { slug } objects
  return slugs.map((slug: string) => ({ slug }));
}


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  image,
  body 
}`;


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
      return (
        <a 
          href={href} 
          className="text-red-600 hover:text-red-800 underline transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
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

// This function runs before rendering and provides metadata for the page
export async function generateMetadata({ params }: {params: Params}) {
  
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return {
      title: 'Post Not Found | Nexa Web Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  

  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : 'https://nexawebdev.com/images/nexa_og.png';

  const data = post.body;
  const metaDescription = JSON.stringify(data[0].children[0].text, null, 2).split('.')[0] + '.'
  return {
    title: `${post.title} | Everything Electrical Sydney Blog`,
    description: metaDescription,
    canonical: `https://everythingelectricalsydney.com.au/blog/${slug}`,
    openGraph: {
      title: `${post.title} | Everything Electrical Sydney Blog`,
      description: metaDescription,
      url: `https://everythingelectricalsydney.com.au/blog/${slug}`,
      siteName: 'Everything Electrical Sydney',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function PostPage({ params }: {params: Params}) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return <p>Post not found</p>;
  }

  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : null;

  return (
    <section className="w-full flex justify-center py-20 px-10">
      <div className="w-full max-w-5xl flex flex-col">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black">{post.title}</h1>
        <div className="relative w-full h-0 pb-[66%] mb-10"> 
          {/* 800/1200 = 0.6666 = 66.66% aspect ratio */}
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          )}
        </div>

        
        <p className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-full">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </p>
        

        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
