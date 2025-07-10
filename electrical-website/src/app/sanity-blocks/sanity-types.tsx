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
export interface StatsSectionBlock {
  _type: "statsSection";
  title: string;
  description: string;
  stats: Array<{
    name: string;
    value: string;
  }>;
}




export type CustomBlock =
  | Block
  | SanityImage
  | ImageGridBlock
  | GridInfoBlock
  | StatsSectionBlock
  | HeroSectionBlock
  | HeroContactBlock
  | ServicesSectionBlock
  | CtaSectionBlock;
