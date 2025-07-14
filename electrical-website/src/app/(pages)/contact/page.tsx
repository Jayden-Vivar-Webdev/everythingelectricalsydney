
import ContactPageBottom from "@/app/components/contact/contact-page"
import { client } from '@/app/sanity/client';
import type { PortableTextBlock } from '@sanity/types';
import RenderContent from '@/app/context-map/render-sections';
const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;


export default async function ContactPage(){
    const data = await client.fetch(POST_QUERY, { slug: '/contact' });
    
    if (!data) {    
        return <p>Post not found</p>;
    }
    return(
        <>
        <RenderContent content={data.content as PortableTextBlock[]} />
        <ContactPageBottom />
        </>
    )
}