import { client } from "@/app/sanity/client";
import { PortableText } from "next-sanity";
import { contentMap } from "@/app/context-map/map-sections";

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export default async function GalleryPage() {
  const data = await client.fetch(POST_QUERY, { slug: "/gallery" });

  if (!data) {
    return <p>Post not found</p>;
  }

  return <PortableText value={data.content} components={contentMap} />;
}
