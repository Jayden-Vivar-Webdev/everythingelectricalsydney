import ContactPageBottom from "@/app/components/contact/contact-page";
import { client } from "@/app/sanity/client";
import { contentMap } from "@/app/context-map/map-sections";
import { PortableText } from "next-sanity";
import { localBusinessData } from "@/app/data/local-business-data";

const POST_QUERY = `*[_type == "customSections" && slug.current == $slug][0]{
  title,
  content,
}`;

export const metadata = {
  title:
    "Contact Us — Everything Electrical Sydney | Licensed Sydney Electricians",
  description:
    "Get in touch with Everything Electrical Sydney for expert electrical services across Sydney. Contact our friendly team for quotes, service bookings, or urgent electrical assistance.",
  alternates: {
    canonical: "https://everythingelectricalsydney.com.au/contact",
  },
  openGraph: {
    url: "https://everythingelectricalsydney.com.au/contact",
    title:
      "Contact Everything Electrical Sydney — Book a Service or Get a Quote",
    description:
      "Reach out to Everything Electrical Sydney for trusted, professional electrical services. Serving homes, businesses, and strata properties across the Sydney region.",
    images: [
      {
        url: "https://everythingelectricalsydney.com.au/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Everything Electrical Sydney – Expert Electricians in Sydney",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "contact electrician Sydney",
    "Sydney electrical services",
    "book an electrician Sydney",
    "Everything Electrical Sydney contact",
    "Level 2 electrician Sydney",
    "emergency electrician Sydney",
  ],
  authors: [{ name: "Everything Electrical Sydney" }],
};

export default async function ContactPage() {
  const data = await client.fetch(POST_QUERY, { slug: "/contact" });

  if (!data) {
    return <p>Post not found</p>;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...localBusinessData,
            description: `Professional Electrical Services Sydney Wide`,
            url: `https://everythingelectricalsydney.com.au/contact`,
          }),
        }}
      />
      <PortableText value={data.content} components={contentMap} />
      <ContactPageBottom />
    </>
  );
}
