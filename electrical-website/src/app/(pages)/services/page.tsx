import { client } from '@/app/sanity/client';
import { PortableText } from 'next-sanity';
import { contentMap } from '@/app/context-map/map-sections';
import ServiceLocations from '@/app/components/locations/service-locations';
import MapLocations from '@/app/components/locations/map-locations';
import ServicesGrid from '@/app/context-map/reusable/services-grid';
import { redirect } from 'next/navigation';

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "customSections" && defined(slug.current)][].slug.current`);
  console.log('SLUGS')
  console.log(slugs)
  return slugs.map((slug: string) => ({
    slug,  // just a string, no array
  }));
}

export const metadata = {
  title: 'Our Electrical Services — Everything Electrical Sydney | Residential, Commercial & Strata',
  description:
    'Explore a full range of licensed electrical services with Everything Electrical Sydney. We service homes, businesses, and strata properties across Sydney with reliable, safe, and high-quality electrical solutions.',
  alternates: {
    canonical: 'https://everythingelectricalsydney.com.au/services',
  },
  openGraph: {
    url: 'https://everythingelectricalsydney.com.au/services',
    title: 'Electrical Services Sydney — Everything Electrical Sydney',
    description:
      'From general electrical work to Level 2 services, our expert electricians provide trusted, efficient, and code-compliant solutions across residential, commercial, and strata sectors in Sydney.',
    images: [
      {
        url: 'https://everythingelectricalsydney.com.au/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Electrical Services by Everything Electrical Sydney – Licensed Sydney Electricians',
        type: 'image/png',
      },
    ],
    siteName: 'Everything Electrical Sydney',
  },
  keywords: [
    'electrical services Sydney',
    'residential electrician Sydney',
    'commercial electrical services Sydney',
    'strata electrician Sydney',
    'Level 2 electrician Sydney',
    'Everything Electrical Sydney services',
    'licensed electrician Sydney',
  ],
  authors: [{ name: 'Everything Electrical Sydney' }],
};

  
  



export default async function Services() {
  
  const data = await client.fetch(POST_QUERY, { slug: '/services' });
 
 

  if (!data) {
    redirect('/services')  // Redirect to services page
  }
  
 
  
  return (
    <>  
      
      <PortableText value={data.content} components={contentMap} />
      <ServicesGrid />

      <ServiceLocations />
      <div className='py-10 bg-white'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 pb-10">
        <span className="mr-2">Servicing Location</span>
        <span className="text-red-600">Mapped View </span>
        </h1>
          <MapLocations />
        </div> 
      </div>
      
    </>
  );
}
