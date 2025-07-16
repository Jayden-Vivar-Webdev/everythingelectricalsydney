import { client } from '@/app/sanity/client';
import type { PortableTextBlock } from '@sanity/types';
import RenderContent from '@/app/context-map/render-sections';
import ServiceLocations from '@/app/components/locations/service-locations';

import MapLocations from '@/app/components/locations/map-locations';
import ServicesGrid from '@/app/context-map/reusable/services-grid';

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

  
  
  



export default async function Services() {
  
  const data = await client.fetch(POST_QUERY, { slug: '/services' });
 
 

  if (!data) {
    return <p>Post not found</p>;
  }
  
 
  
  return (
    <>  

      <RenderContent content={data.content as PortableTextBlock[]} />
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
