import { client } from '@/app/sanity/client';
import type { PortableTextBlock } from '@sanity/types';
import RenderContent from './context-map/render-sections';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import FAQ from './components/faq/faq';
const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;


export default async function Home() {
  
  const data = await client.fetch(POST_QUERY, { slug: '/' });

  if (!data) {
    return <p>Post not found</p>;
  }
  
  return (
    <>
      <Banner />  
      <RenderContent content={data.content as PortableTextBlock[]} />
      <FAQ />
      <Footer />
    </>
  );
}
