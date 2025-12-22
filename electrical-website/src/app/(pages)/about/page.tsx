import { client } from "@/app/sanity/client";
import { PortableText } from "next-sanity";
import { contentMap } from "@/app/context-map/map-sections";
import AboutPageSection from "@/app/components/content/about-page";
import HeroContact from "@/app/components/hero/hero-contact";
import { aboutPageStructuredData } from "@/app/data/local-business-data";

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export const metadata = {
  title:
    "About Us — Everything Electrical Sydney | Trusted Sydney Electricians",
  description:
    "Learn more about Everything Electrical Sydney — your local, licensed electricians committed to quality, safety, and reliable service across residential, commercial, and strata properties.",
  alternates: {
    canonical: "https://everythingelectricalsydney.com.au/about",
  },
  openGraph: {
    url: "https://everythingelectricalsydney.com.au/about",
    title: "About Everything Electrical Sydney — Who We Are & What We Do",
    description:
      "Everything Electrical Sydney is built on trust, experience, and a commitment to delivering exceptional electrical services to homes, businesses, and strata clients across Sydney.",
    images: [
      {
        url: "https://everythingelectricalsydney.com.au/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Everything Electrical Sydney – Licensed and Experienced Electricians",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "about Everything Electrical Sydney",
    "Sydney electrician company",
    "licensed electricians Sydney",
    "electrical services Sydney",
    "local electricians Sydney",
    "trusted Sydney electricians",
  ],
  authors: [{ name: "Everything Electrical Sydney" }],
};

export default async function ContactPage() {
  const data = await client.fetch(POST_QUERY, { slug: "/about" });

  if (!data) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData),
        }}
      />
      <PortableText value={data.content} components={contentMap} />
      <div className="pt-40 sm:pt-30 md:pt-20"></div>
      <AboutPageSection />

      <HeroContact />
    </>
  );
}
