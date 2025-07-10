import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '../sanity/imagebuilder';
import Link from 'next/link';
import HeroMain from '../components/hero/hero-main';
import HeroContact from '../components/hero/hero-contact';
import Services from '../components/services/servicesList';
import Stats from '../components/stats/stats';


export const contentMap: Record<string, (block: { _type: string; [key: string]: unknown}, index: number) => React.ReactElement
> = {
  block: (block, index) => {
    const components: PortableTextComponents = {
      block: {
        normal: ({ children }) => <p className="mb-6 text-lg md:text-xl text-light/90 leading-10">{children}</p>,
       
        strong: ({ children }) =>  <strong className="mb-6 text-black">{children}</strong>,

        h1: ({ children }) => (
          <h1 className="stat-number text-4xl md:text-5xl lg:text-6xl font-bold pb-6">
            {children}
          </h1>
        ),
    
        h2: ({ children }) => (
          <h2 className="text-3xl md:text-4xl font-semibold pb-5">
            {children}
          </h2>
        ),
    
        h3: ({ children }) => (
          <h3 className="text-2xl md:text-3xl font-semibold pb-4">
            {children}
          </h3>
        ),
    
        h4: ({ children }) => (
          <h4 className="md:text-2xl font-semibold pb-3">
            {children}
          </h4>
        ),
    
        h5: ({ children }) => (
          <h5 className="text-lg md:text-xl font-semibold pb-3">
            {children}
          </h5>
        ),
      },
      
      list: {
        bullet: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 text-light/90 text-lg md:text-xl">{children}</ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 text-light/90 text-lg md:text-xl">{children}</ol>
        ),
      },
      listItem: {
        bullet: ({ children }) => <li className="ml-3 text-lg md:text-xl">{children}</li>,
        number: ({ children }) => <li className="ml-3 text-lg md:text-xl">{children}</li>,
      },
    };
  
    return (
      <div key={index} className="text-light/90">
        <PortableText value={[block]} components={components} />
      </div>
    );
  },
  heroSection: (block, index) => {
    const heroSection = block as {
      _type: 'heroSection';
      announcementText?: string;
      announcementLink?: string;
      headline: string;
      subheadline?: string;
      backgroundImage: {
        _type: 'image';
        asset: { _ref: string; _type: 'reference' };
        alt?: string;
      };
      primaryCtaText?: string;
      primaryCtaUrl?: string;
      secondaryCtaText?: string;
      secondaryCtaUrl?: string;
    };
  
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
    const contactForm = block as {
      _type: 'heroContact';
      title: string;
      description?: string;
      backgroundImage: {
        _type: 'image';
        asset: { _ref: string; _type: 'reference' };
        alt?: string;
      };
      address: {
        line1: string;
        line2?: string;
        cityStateZip: string;
      };
      phone: string;
      email: string;
    };
  
    return (
      <HeroContact
        key={index}
        title={contactForm.title}
        description={contactForm.description}
        backgroundImage={urlFor(contactForm.backgroundImage.asset._ref).url()} // pass image URL or ref as string
        address={contactForm.address}
        phone={contactForm.phone}
        email={contactForm.email}
      />
    );
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
    type SanityImage = {
      _type: 'image';
      alt?: string;
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  
    const images = (block.images ?? []) as SanityImage[];
  
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
    interface Feature {
      icon: React.ReactNode;
      title: string;
      description: string;
    }
    const features = block.features as Feature[];

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
    const section = block as {
      _type: 'servicesSection';
      header: string;
      subheader?: string;
      services: {
        title?: string;
        href?: string;
        description?: string;
        image?: {
          asset: { _ref: string };
          alt?: string;
        };
        subtitle?: string;
        icon?: {
          name?: string;
        
        };
      }[];
    };
  
    const serviceItems = section.services?.map((item, i) => ({
      id: i,
      title: item.title ?? '',
      href: item.href ?? '#',
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

  

  statsSection: (block, index) => {
    interface StatsSectionBlock {
      _type: 'statsSection';
      title: string;
      description?: string;
      stats: Array<{
        name: string;
        value: string;
      }>;
    }
  
    const statsBlock = block as unknown as StatsSectionBlock;
  
    return (
    
      <Stats
      key={index}
      title={statsBlock.title}
      description={statsBlock.description}
      stats={statsBlock.stats}
    />
      
      
    );
  },
  
    

  ctaSection: (block, index) => {
    interface CtaSectionBlock {
      _type: 'ctaSection';
      title: string;
      description: string;
      buttons: Array<{
        label: string;
        url: string;
        style: 'primary' | 'secondary';
      }>;
    }

    const ctablock = block as unknown as CtaSectionBlock;

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
