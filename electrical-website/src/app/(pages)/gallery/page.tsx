import { client } from "@/app/sanity/client";
import { PortableText } from "next-sanity";
import { contentMap } from "@/app/context-map/map-sections";

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export const metadata = {
  title:
    "Project Gallery — Everything Electrical Sydney | Completed Electrical Work",
  description:
    "Browse completed residential, commercial, strata, and Level 2 electrical projects by Everything Electrical Sydney across Greater Sydney.",
  alternates: {
    canonical: "https://www.everythingelectricalsydney.com.au/gallery",
    languages: {
      en: "https://www.everythingelectricalsydney.com.au/gallery",
      "en-AU": "https://www.everythingelectricalsydney.com.au/gallery",
    },
  },
  openGraph: {
    url: "https://www.everythingelectricalsydney.com.au/gallery",
    title:
      "Electrical Project Gallery | Everything Electrical Sydney — Recent Work",
    description:
      "See a selection of recent electrical installations, upgrades, and maintenance projects delivered by our licensed Sydney electricians.",
    images: [
      {
        url: "https://www.everythingelectricalsydney.com.au/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Everything Electrical Sydney project gallery",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "electrical project gallery",
    "Sydney electrician portfolio",
    "Level 2 electrician projects Sydney",
    "commercial electrical work Sydney",
    "residential electrical installations Sydney",
    "Everything Electrical Sydney gallery",
  ],
  authors: [{ name: "Everything Electrical Sydney" }],
};

export default async function GalleryPage() {
  const data = await client.fetch(POST_QUERY, { slug: "/gallery" });

  if (!data) {
    return <p>Post not found</p>;
  }

  return <PortableText value={data.content} components={contentMap} />;
}
