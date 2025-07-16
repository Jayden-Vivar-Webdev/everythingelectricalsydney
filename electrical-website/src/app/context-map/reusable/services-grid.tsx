import { client } from '@/app/sanity/client';
import RenderContent from '@/app/context-map/render-sections';

const GET_QUERY_SERVICES = `*[_type == "customSections" && slug.current == $slug][0]{
    content[_type == "servicesSection"][0]
  }`
  
export default async function ServicesGrid() {

  const servicesData = await client.fetch(GET_QUERY_SERVICES, { slug: '/' });
  
  return (
      <RenderContent content={servicesData.content} />
  );
}
