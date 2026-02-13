import { client } from "@/app/sanity/client";
import Banner from "./components/banner/banner";
import ServiceLocations from "./components/locations/service-locations";
import FAQ from "./components/faq/faq";
import MapLocations from "./components/locations/map-locations";
import { homePageStructuredData } from "./data/local-business-data";
import Script from "next/script";
import HomeHero from "./components/(pages)/home/HomeHero";
import HomeFeature from "./components/(pages)/home/Features";
import ServicesGrid from "./context-map/reusable/services-grid";
import ContentHome from "./components/(pages)/home/ContentHome";
import GoogleReviews from "./components/testimonials/google-reviews";
import Link from "next/link";

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
      <HomeHero />
      <ServicesGrid />
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
              Need fast help?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Book the service that matches your site
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you are fixing a fault, keeping a strata building
              compliant, or planning a smart home upgrade, these quick links
              take you straight to the service detail pages so you can see
              scope, inclusions, and booking options.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "All Electrical Services",
                href: "/services",
                copy: "Overview of residential, commercial, and Level 2 work, with response times across Greater Sydney.",
              },
              {
                title: "Electrical Repairs & Maintenance",
                href: "/services/electrical-repairs-maintenance",
                copy: "Fault finding, safety checks, RCD testing, lighting and power repairs to keep you operational.",
              },
              {
                title: "Real Estate & Strata",
                href: "/services/real-estate-strata",
                copy: "Compliance-driven maintenance programs, common-area lighting, smoke alarms, and rapid callouts.",
              },
              {
                title: "Smart Home Upgrades",
                href: "/services/smart-home",
                copy: "Planning and installing smart lighting, climate, security, and voice control that works together.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-red-600">
                    {item.title}
                  </h3>
                  <span className="text-red-600 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {item.copy}
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-red-600">
                  View service
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HomeFeature />
      <ContentHome />
      <GoogleReviews />
      <ServiceLocations />
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 pb-10">
            <span className="mr-2">Servicing Location</span>
            <span className="text-red-600">Mapped View </span>
          </h2>
          <MapLocations />
        </div>
      </div>
      <FAQ />
    </>
  );
}
