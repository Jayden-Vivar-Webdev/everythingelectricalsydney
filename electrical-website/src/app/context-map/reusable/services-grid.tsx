import { client } from '@/app/sanity/client';
import { contentMap } from '../map-sections';
import { PortableText } from 'next-sanity';
const GET_QUERY_SERVICES = `*[_type == "customSections" && slug.current == $slug][0]{
    content[_type == "servicesSection"][0]
  }`
  
export default async function ServicesGrid() {

  const servicesData = await client.fetch(GET_QUERY_SERVICES, { slug: '/' });
  
  return (
      <PortableText value={servicesData.content} components={contentMap}/>
  );
}
