import { client } from "@/app/sanity/client";
import { PortableText } from "next-sanity";
import ServiceLocations from "@/app/components/locations/service-locations";
import MapLocations from "@/app/components/locations/map-locations";
import { contentMap } from "@/app/context-map/map-sections";
const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export const metadata = {
  title:
    "Areas We Serve — Everything Electrical Sydney | Local Electricians Across Sydney",
  description:
    "Discover the suburbs and regions covered by Everything Electrical Sydney. We provide trusted, licensed electrical services to homes and businesses throughout Greater Sydney and surrounding areas.",
  alternates: {
    canonical: "https://www.everythingelectricalsydney.com.au/areas",
  },
  openGraph: {
    url: "https://www.everythingelectricalsydney.com.au/areas",
    title:
      "Everything Electrical Sydney — Electrical Services Across Sydney & Surrounds",
    description:
      "Everything Electrical Sydney proudly serves residential, commercial, and strata clients across Sydney’s suburbs and nearby areas, delivering quality electrical work you can rely on.",
    images: [
      {
        url: "https://www.everythingelectricalsydney.com.au/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Areas Served by Everything Electrical Sydney – Licensed Electricians",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "electrician Sydney suburbs",
    "electrical services Sydney areas",
    "licensed electrician Sydney",
    "Everything Electrical Sydney service areas",
    "local electricians Sydney",
    "electrical contractors Sydney suburbs",
  ],
  authors: [{ name: "Everything Electrical Sydney" }],
};

export default async function AreasPage() {
  const data = await client.fetch(POST_QUERY, { slug: "/areas" });

  if (!data) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({}),
        }}
      />
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
    </>
  );
}
