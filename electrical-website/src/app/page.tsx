import { client } from "@/app/sanity/client";
import { PortableText } from "next-sanity";
import { contentMap } from "./context-map/map-sections";
import Banner from "./components/banner/banner";
import ServiceLocations from "./components/locations/service-locations";
import FAQ from "./components/faq/faq";
import MapLocations from "./components/locations/map-locations";
import { homePageStructuredData } from "./data/local-business-data";
import Script from "next/script";

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export default async function Home() {
  const data = await client.fetch(POST_QUERY, { slug: "/" });

  if (!data) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Script
        id="home-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageStructuredData),
        }}
      />

      <Banner />
      <PortableText value={data.content} components={contentMap} />
      <ServiceLocations />
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 pb-10">
            <span className="mr-2">Servicing Location</span>
            <span className="text-red-600">Mapped View </span>
          </h1>
          <MapLocations />
        </div>
      </div>
      <FAQ />
    </>
  );
}
