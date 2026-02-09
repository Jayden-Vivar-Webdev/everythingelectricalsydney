import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../sanity/imagebuilder";
import Link from "next/link";
import HeroMain from "../components/hero/hero-main";
import HeroContact from "../components/hero/hero-contact";
import Services from "../components/services/servicesList";
import Stats from "../components/stats/stats";
import ContentSection from "../components/content/contentSection";
import GoogleReviews from "../components/testimonials/google-reviews";
import * as SanityTypes from "../sanity-blocks/sanity-types";
import { EnhancedTestimonialSection } from "../components/content/content-image";
import { ContentData } from "../components/content/content-image";
import ServiceHeroSection from "../components/servicehero/service-hero";
import { PortableTextBlock } from "@portabletext/types";
import ServicesHero from "../components/hero/hero-services";
import { portableTextComponents } from "./text-components";
import FlexGallery from "../components/gallery/bento-style";

export type SanityBlockRenderer = (
  block: { _type: string; [key: string]: unknown },
  index: number,
) => React.ReactElement;
export const contentMap: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-lg md:text-xl text-gray-600">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="mb-6 text-black">{children}</strong>
    ),
    h1: ({ children }) => (
      <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold pb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-black text-3xl md:text-4xl font-semibold pb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-black text-2xl md:text-3xl font-semibold pb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-black md:text-2xl font-semibold pb-3">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-black text-lg md:text-xl font-semibold pb-3">
        {children}
      </h5>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="pt-3 text-gray-600 list-disc list-inside space-y-2 mb-6 text-lg md:text-xl">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-gray-600 list-decimal list-inside space-y-2 mb-6 text-lg md:text-xl">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-600 ml-3 text-lg mb-5 md:text-xl">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-600 ml-3 text-lg md:text-xl">{children}</li>
    ),
  },
  marks: {
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => {
      const { href } = value;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 underline hover:text-red-800 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    heroSection: ({ value, index }) => {
      const heroSection = value as unknown as SanityTypes.HeroSectionBlock;

      const backgroundImageUrl = urlFor(
        heroSection.backgroundImage.asset._ref,
      ).url();

      return (
        <HeroMain
          key={index}
          announcementText={heroSection.announcementText}
          announcementLink={heroSection.announcementLink}
          headline={heroSection.headline}
          subheadline={heroSection.subheadline}
          backgroundImage={backgroundImageUrl} // includes alt inside
          primaryCtaText={heroSection.primaryCtaText}
          primaryCtaUrl={heroSection.primaryCtaUrl}
          secondaryCtaText={heroSection.secondaryCtaText}
          secondaryCtaUrl={heroSection.secondaryCtaUrl}
        />
      );
    },
    heroContact: ({ value, index }) => {
      const contactForm = value as unknown as SanityTypes.HeroContactBlock;

      return (
        <HeroContact
          key={index}
          title={contactForm.title}
          description={contactForm.description}
          backgroundImage={urlFor(contactForm.backgroundImage.asset._ref)
            .width(1200)
            .height(1200)
            .fit("max")
            .auto("format")
            .quality(90)
            .url()} // pass image URL or ref as string
          address={contactForm.address}
          phone={contactForm.phone}
          email={contactForm.email}
        />
      );
    },

    serviceHeroBlock: ({ value, index }) => {
      const serviceBlock = value as unknown as SanityTypes.ServiceHeroBlock;

      return (
        <ServiceHeroSection
          key={index}
          theme={
            ["light", "dark"].includes(serviceBlock.theme)
              ? (serviceBlock.theme as "light" | "dark")
              : "light"
          }
          imageUrl={urlFor(serviceBlock.image?.asset._ref)
            ?.width(1200)
            .height(1600)
            .fit("max")
            .auto("format")
            .quality(90)
            .url()}
          imageAlt={serviceBlock.image?.alt}
          badge={serviceBlock.badge}
          title={serviceBlock.title}
          description={serviceBlock.description}
          stats={serviceBlock.stats}
          imagePosition={
            ["left", "right"].includes(serviceBlock.imagePosition)
              ? (serviceBlock.imagePosition as "left" | "right")
              : "left"
          }
        />
      );
    },

    image: ({ value, index }) => {
      const imageBlock = value as {
        _type: "image";
        alt?: string;
        asset: { _ref: string; _type: "reference" };
      };

      return (
        <div key={index} className="rounded-xl overflow-hidden shadow-lg py-10">
          <Image
            src={urlFor(imageBlock.asset._ref).width(1200).quality(90).url()}
            alt={imageBlock.alt || "Relevant description here"}
            width={800}
            height={500}
            className="rounded-xl w-full object-cover w-1/2"
            loading="lazy"
            priority={index === 0}
            sizes="(max-width: 1500px) 100vw, 800px"
          />
        </div>
      );
    },

    imageGallery: ({ value, index }) => {
      const imageGallery = value as unknown as SanityTypes.ImageGalleryBlock;

      const formattedImages =
        imageGallery.images?.map((img) => ({
          src: urlFor(img.asset._ref).url(),
          alt: img.alt || "",
        })) || [];

      return <FlexGallery key={index} images={formattedImages || []} />;
    },

    separator: ({ value, index }) => {
      const baseClass = "my-10 border-t";

      switch (value.style) {
        case "line":
          return <hr key={index} className={`${baseClass} border-light/30`} />;

        case "dashed":
          return (
            <hr
              key={index}
              className={`${baseClass} border-light/30 border-dashed`}
            />
          );

        case "stars":
          return (
            <div
              key={index}
              className="flex justify-center my-10 text-light/50 text-2xl"
            >
              ★ ★ ★ ★ ★
            </div>
          );

        case "blank":
          return <div key={index} className="py-20 md:py-10 lg:py-3" />;

        default:
          return <hr key={index} className={`${baseClass} border-light/30`} />;
      }
    },

    imageGrid: ({ value, index }) => {
      const images = (value.images ?? []) as SanityTypes.SanityImage[];

      return (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 py-10"
        >
          {images.map((img: unknown, i) => {
            const imageUrl = urlFor(img as string).url(); // <- Fixes the TS error

            return (
              <div
                key={i}
                className="border border-light/20 rounded-lg p-2 flex flex-row justify-between"
              >
                <Image
                  src={imageUrl}
                  alt={`Grid image ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      );
    },

    gridInfo: ({ value, index }) => {
      const features = value.features as SanityTypes.Feature[];

      return (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-15"
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card bg-dark/70 backdrop-blur-md p-6 rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="feature-icon mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-light/80">{feature.description}</p>
            </div>
          ))}
        </div>
      );
    },

    servicesSection: ({ value, index }) => {
      const section = value as unknown as SanityTypes.ServicesSectionBlock;

      const serviceItems =
        section.services?.map((item, i) => ({
          id: i,
          title: item.title ?? "",
          href: item.href ?? "#",
          description: item.description ?? "",
          imageUrl: item.image?.asset?._ref
            ? urlFor(item.image.asset._ref).url()
            : "",
          imageAlt: item.image?.alt ?? "",
          subtitle: item.subtitle ?? "",
          icon: {
            name: item.icon?.name ?? "",
          },
        })) ?? [];

      return <Services key={index} services={serviceItems} />;
    },

    featureSection: ({ value, index }) => {
      const statsBlock = value as unknown as SanityTypes.FeatureSectionBlock;

      return (
        <Stats
          key={index}
          title={statsBlock.title}
          description={statsBlock.description}
          featureItems={statsBlock.featureItems}
        />
      );
    },

    contentSection: ({ value, index }) => {
      const contentBlock = value as unknown as SanityTypes.ContentSectionBlock;

      // Convert Sanity image refs to URLs
      const images = contentBlock.images.map(({ image, alt }) => ({
        alt,
        src: urlFor(image.asset._ref).url(),
      }));

      return (
        <ContentSection
          key={index}
          tag={contentBlock.tag}
          header={contentBlock.header}
          description={contentBlock.description
            .replace(/\r\n/g, "\n")
            .split(/\n/)
            .map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={idx} />;

              // 🔹 Case 1: bullet points (• or .)
              if (trimmed.startsWith("•") || trimmed.startsWith(".")) {
                return (
                  <div key={idx} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{trimmed.replace(/^•\s*|^\.\s*/, "")}</span>
                  </div>
                );
              }

              const colonIndex = trimmed.indexOf(":");
              if (colonIndex > -1) {
                return (
                  <div key={idx} className="text-gray-600">
                    <strong className="text-black">
                      {trimmed.slice(0, colonIndex + 1)}
                    </strong>
                    {trimmed.slice(colonIndex + 1)}
                  </div>
                );
              }
              // 🔹 Default case
              return (
                <div key={idx} className="text-gray-600">
                  {trimmed}
                </div>
              );
            })}
          subHeader={contentBlock.subHeader}
          content={contentBlock.content
            .replace(/\r\n/g, "\n")
            .split(/\n/)
            .map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return <br key={idx} />;

              if (trimmed.startsWith("•") || trimmed.startsWith(".")) {
                return (
                  <div key={idx} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{trimmed.replace(/^•\s*|^\.\s*/, "")}</span>
                  </div>
                );
              }
              // Case 2: check for colon
              const colonIndex = trimmed.indexOf(":");
              if (colonIndex > -1) {
                return (
                  <div key={idx} className="text-gray-600">
                    <strong className="text-black">
                      {trimmed.slice(0, colonIndex + 1)}
                    </strong>
                    {trimmed.slice(colonIndex + 1)}
                  </div>
                );
              }

              return (
                <div key={idx} className="text-gray-600">
                  {trimmed}
                </div>
              );
            })}
          images={images} // mapped images with URLs
          statsHeader={contentBlock.statsHeader}
          stats={contentBlock.stats}
        />
      );
    },

    googleReviewsBlockSection: ({ value, index }) => {
      const contentBlock = value as unknown as SanityTypes.GoogleReviewsBlock;
      return (
        <GoogleReviews
          key={index}
          title={contentBlock.title}
          subtitle={contentBlock.subtitle}
          overallRating={contentBlock.overallRating}
          totalReviews={contentBlock.totalReviews}
          theme={contentBlock.theme}
          showViewAllButton={contentBlock.showViewAllButton}
          reviews={contentBlock.reviews}
        />
      );
    },

    contentSectionImage: ({ value, index }) => {
      const contentBlock =
        value as unknown as SanityTypes.ContentSectionImageBlock;

      const content: ContentData = {
        image:
          contentBlock.backgroundImage &&
          contentBlock.backgroundImage.asset?._ref
            ? {
                alt: contentBlock.backgroundImage.alt,
                src: urlFor(contentBlock.backgroundImage.asset._ref).url(),
              }
            : undefined,

        logoImage:
          contentBlock.logoImage && contentBlock.logoImage.asset?._ref
            ? {
                alt: contentBlock.logoImage.alt,
                src: urlFor(contentBlock.logoImage.asset._ref).url(),
              }
            : undefined,

        quote: contentBlock.quote,
        label: contentBlock.label,
        title: contentBlock.title,
        description: contentBlock.description as PortableTextBlock[],
        stats: contentBlock.stats,
        cta: "Get Your Free Quote Today",
        companyName: "Everything Electrical",
        location: "Sydney",
      };

      return (
        <EnhancedTestimonialSection
          key={index}
          contentInfo={content}
          isDarkMode={false}
          portableTextComponents={portableTextComponents} // Pass it here!
        />
      );
    },

    serviceHeroDynamic: ({ value, index }) => {
      const HeroSection = value as unknown as SanityTypes.ServiceHeroDynamic;

      return (
        <ServicesHero
          key={index}
          title={HeroSection.title}
          titleSpan={HeroSection.titleSpan}
          subtitle={HeroSection.subtitle}
          description={HeroSection.description}
          backgroundImage={urlFor(HeroSection.backgroundImage.asset._ref)
            .width(1600) // matches display width
            .auto("format")
            .quality(90)
            .url()}
          ctaText={HeroSection.ctaText}
        />
      );
    },

    ctaSection: ({ value, index }) => {
      const ctablock = value as unknown as SanityTypes.CtaSectionBlock;

      return (
        <section
          key={index}
          className="cta-section py-20 px-4 md:px-10 bg-dark/70 backdrop-blur-md border-t border-b border-primary/20 text-center"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl mb-6">{ctablock.title}</h2>
            <p className="text-xl mb-8 text-light/80">{ctablock.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {ctablock.buttons.map((btn, i: number) => (
                <Link
                  key={i}
                  href={btn.url}
                  className={`px-8 py-3 text-lg ${
                    btn.style === "primary"
                      ? "cta-button pulse"
                      : "secondary-button"
                  }`}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    },
  },
};
