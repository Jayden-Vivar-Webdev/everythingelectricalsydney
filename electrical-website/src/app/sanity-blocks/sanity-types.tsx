import { PortableTextBlock } from "@sanity/types";
import React from "react";

export interface SanityImage {
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Block {
  _type: string;

}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ImageGridBlock {
  _type: "imageGrid";
  images: SanityImage[];
  
}

export interface GridInfoBlock {
  _type: "gridInfo";
  features: Feature[];
}



export interface HeroSectionBlock {
  _type: 'heroSection';
  announcementText?: string;
  announcementLink?: string;
  headline: string;
  subheadline?: string;
  backgroundImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
}


export interface CtaSectionBlock {
  _type: "ctaSection";
  title: string;
  description: string;
  buttons: Array<{
    label: string;
    url: string;
    style: "primary" | "secondary";
  }>;
}
export interface HeroContactBlock {
  _type: "heroContact";
  title?: string;
  description?: string;
  backgroundImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  address?: {
    line1: string;
    line2?: string;
    cityStateZip?: string;
  };
  phone?: string;
  email?: string;
}
export interface ServicesSectionBlock {
  _type: "servicesSection";
  services: {
    _type: "serviceItem";
    title?: string;
    href?: string;
    description?: string;
    image?: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
      alt?: string;
    };
    subtitle?: string;
    icon?: {
      name?: string;
    };
  }[];
}
export interface FeatureSectionBlock {
  _type: "featureSection";
  title: string;
  description: string;
  featureItems: Array<{
    name: string;
    value: string;
  }>;
}

export interface ContentSectionBlock {
  _type: 'contentSection';
  tag: string;
  header: string;
  description: string;
  subHeader: string;
  content: string;
  images: Array<{
    image: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    alt: string;
  }>;
  statsHeader: string;
  stats: Array<{
    stat: string;
    value: string;
  }>;
}


export interface GoogleReviewsBlock {
  _type: 'googleReviewsBlockSection';
  title: string;
  subtitle: string;
  overallRating: number;
  totalReviews: number;
  theme: 'light' | 'dark';
  showViewAllButton: boolean;
  reviews: Array<{
    _type: 'review'
    id: number;
    name: string;
    avatar: string;
    rating: number;
    timeAgo: string;
    text: string;
    helpful: number;
  }>
}

export interface ContentSectionImageBlock {
  _type: 'contentSectionImage';
  backgroundImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  logoImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  label: string;
  quote: string;
  title: string;
  description: PortableTextBlock[];
  stats: Array<{
    value: string;
    label: string;
  }>
}

export interface ServiceHeroBlock {
  _type: 'serviceHeroBlock',
  theme: string,
  image: {
    _type: 'image';
    asset: { _ref: string; _type: 'reference' };
    alt?: string;
  };
  badge?: string;
  title?: string;
  description?: string;
  stats?: Array<{
    id: number;
    name: string;
    value: string
  }>;
  imagePosition: string;
}

export interface ServiceHeroDynamic {
  _id: string;
  _type: 'serviceHeroDynamic';
  slug: {
    current: string;
  };
  title: string;
  titleSpan: string;
  subtitle: string;
  description: string;
  backgroundImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  services: {
    title: string;
    description: string;
    features: string[];
  }[];
  ctaText: string;
}



export type CustomBlock =
  | Block
  | SanityImage
  | ImageGridBlock
  | GridInfoBlock
  | FeatureSectionBlock
  | HeroSectionBlock
  | HeroContactBlock
  | ContentSectionBlock
  | ServicesSectionBlock
  | GoogleReviewsBlock
  | ServiceHeroDynamic
  | ContentSectionImageBlock
  | CtaSectionBlock;
