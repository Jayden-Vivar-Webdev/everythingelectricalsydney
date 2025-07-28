import { PortableText} from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../sanity/imagebuilder';
import Link from 'next/link';
import HeroMain from '../components/hero/hero-main';
import HeroContact from '../components/hero/hero-contact';
import Services from '../components/services/servicesList';
import Stats from '../components/stats/stats';
import ContentSection from '../components/content/contentSection';
import GoogleReviews from '../components/testimonials/google-reviews';
import * as SanityTypes from '../sanity-blocks/sanity-types';
import {EnhancedTestimonialSection} from '../components/content/content-image';
import { ContentData } from '../components/content/content-image';
import ServiceHeroSection from '../components/servicehero/service-hero'; 
import {PortableTextBlock} from '@portabletext/types';
import ServicesHero from '../components/hero/hero-services';
import { portableTextComponents } from './text-components';

export type SanityBlockRenderer = (block: { _type: string; [key: string]: unknown }, index: number) => React.ReactElement;



export const contentMap: Record<string, SanityBlockRenderer> = {
  block: (block, index) => {
    return (
      <div key={index} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-light/90">
        <PortableText value={block} components={portableTextComponents} />
      </div>
    );
  },

  heroSection: (block, index) => {
    const heroSection = block as unknown as SanityTypes.HeroSectionBlock
  
    return (
      <HeroMain
        key={index}
        announcementText={heroSection.announcementText}
        announcementLink={heroSection.announcementLink}
        headline={heroSection.headline}
        subheadline={heroSection.subheadline}
        backgroundImage={urlFor(heroSection.backgroundImage.asset._ref).url()} // includes alt inside
        primaryCtaText={heroSection.primaryCtaText}
        primaryCtaUrl={heroSection.primaryCtaUrl}
        secondaryCtaText={heroSection.secondaryCtaText}
        secondaryCtaUrl={heroSection.secondaryCtaUrl}
      />
    );
  },
  


  heroContact: (block, index) => {
    const contactForm = block as unknown as SanityTypes.HeroContactBlock
  
    return (
      <HeroContact
        key={index}
        title={contactForm.title}
        description={contactForm.description}
        backgroundImage={urlFor(contactForm.backgroundImage.asset._ref).width(1200)
          .height(1200)
          .fit('max')
          .auto('format')
          .quality(90)
          .url()
        } // pass image URL or ref as string
        address={contactForm.address}
        phone={contactForm.phone}
        email={contactForm.email}
      />
    );
  },
  
  serviceHeroBlock: (block, index) => {
    const serviceBlock = block as unknown as SanityTypes.ServiceHeroBlock

    return(
      <ServiceHeroSection
        key={index}
        theme={['light', 'dark'].includes(serviceBlock.theme) ? serviceBlock.theme as 'light' | 'dark' : 'light'}
        imageUrl={urlFor(serviceBlock.image?.asset._ref)?.url()}
        imageAlt = {serviceBlock.image?.alt}
        badge={serviceBlock.badge}
        title={serviceBlock.title}
        description={serviceBlock.description}
        stats={serviceBlock.stats}
        imagePosition={['left', 'right'].includes(serviceBlock.imagePosition) ? serviceBlock.imagePosition as 'left' | 'right' : 'left'}
      />
    )
  },
  

  
  image: (block, index) => {
    const imageBlock = block as {
      _type: 'image';
      alt?: string;
      asset: { _ref: string; _type: 'reference' };
    };
  
    return (
      <div key={index} className="rounded-xl overflow-hidden shadow-lg py-10">
        <Image
          src={urlFor(imageBlock.asset._ref)
            .width(1200)
            .quality(90)
            .url()}
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
  

  separator: (block, index) => {
    const baseClass = "my-10 border-t";
  
    switch (block.style) {
      case 'line':
        return (
          <hr
            key={index}
            className={`${baseClass} border-light/30`}
          />
        );
  
      case 'dashed':
        return (
          <hr
            key={index}
            className={`${baseClass} border-light/30 border-dashed`}
          />
        );
  
      case 'stars':
        return (
          <div
            key={index}
            className="flex justify-center my-10 text-light/50 text-2xl"
          >
            ★ ★ ★ ★ ★
          </div>
        );
  
      case 'blank':
        return <div key={index} className="py-10" />;
  
      default:
        return (
          <hr
            key={index}
            className={`${baseClass} border-light/30`}
          />
        );
    }
  },
  

  imageGrid: (block, index) => {  
    const images = (block.images ?? []) as SanityTypes.SanityImage[];
  
    return (
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 py-10">
        {images.map((img: unknown, i) => {
          const imageUrl = urlFor(img as string).url(); // <- Fixes the TS error
  
          return (
            <div key={i} className="border border-light/20 rounded-lg p-2 flex flex-row justify-between">
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

  
  
  
  

  gridInfo: (block, index) => {
    const features = block.features as SanityTypes.Feature[];

    return(
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-15">
      {features.map((feature, i) => (
        <div key={i} className="feature-card bg-dark/70 backdrop-blur-md p-6 rounded-xl border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
          <div className="feature-icon mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-light/80">{feature.description}</p>
      </div>
        ))}
      </div>
    )
      
  },


  servicesSection: (block, index) => {
    const section = block as unknown as SanityTypes.ServicesSectionBlock
  
    const serviceItems = section.services?.map((item, i) => ({
      id: i,
      title: item.title ?? '',
      href: item.href ?? '',
      description: item.description ?? '',
      imageUrl: item.image?.asset?._ref ? urlFor(item.image.asset._ref).url() : '',
      imageAlt: item.image?.alt ?? '',
      subtitle: item.subtitle ?? '',
      icon: {
        name: item.icon?.name ?? '',
      },
    })) ?? [];
  
    return (
      <Services
        key={index}
        services={serviceItems}

      />
    );
  },

  

  featureSection: (block, index) => {
    
    const statsBlock = block as unknown as SanityTypes.FeatureSectionBlock;
    
    return (
      <Stats
      key={index}
      title={statsBlock.title}
      description={statsBlock.description}
      featureItems={statsBlock.featureItems}
    />

    );
  },


  contentSection: (block, index) => {
    
  
    const contentBlock = block as unknown as SanityTypes.ContentSectionBlock;
    
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
        description={contentBlock.description}
        subHeader={contentBlock.subHeader}
        content={contentBlock.content
          .split('\n\n')
          .map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        images={images} // mapped images with URLs
        statsHeader={contentBlock.statsHeader}
        stats={contentBlock.stats}
      />
    );
  },

  googleReviewsBlockSection: (block, index) => {
    
  const contentBlock = block as unknown as SanityTypes.GoogleReviewsBlock;
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

  contentSectionImage: (block, index) => {
    const contentBlock = block as unknown as SanityTypes.ContentSectionImageBlock;
  
    const content: ContentData = {
      image: contentBlock.backgroundImage && contentBlock.backgroundImage.asset?._ref
        ? {
            alt: contentBlock.backgroundImage.alt,
            src: urlFor(contentBlock.backgroundImage.asset._ref).url(),
          }
        : undefined,
    
      logoImage: contentBlock.logoImage && contentBlock.logoImage.asset?._ref
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
        portableTextComponents={portableTextComponents}  // Pass it here!
      />
    );
  },
  
  serviceHeroDynamic: (block, index) => {
      const HeroSection = block as unknown as SanityTypes.ServiceHeroDynamic;

      return(

        <ServicesHero
          key={index}
          title={HeroSection.title}
          titleSpan={HeroSection.titleSpan}
          subtitle={HeroSection.subtitle}
          description={HeroSection.description}
          backgroundImage={urlFor(HeroSection.backgroundImage.asset._ref)
            .width(1200)
            .height(700)
            .fit('max')
            .auto('format')
            .quality(90)
            .url()}
          ctaText={HeroSection.ctaText}
          services={HeroSection.services}
        />
      )
  },
  

    

  ctaSection: (block, index) => {

    const ctablock = block as unknown as SanityTypes.CtaSectionBlock;

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
                  btn.style === 'primary' ? 'cta-button pulse' : 'secondary-button'
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }
};
