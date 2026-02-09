export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Everything Electrical Sydney",
  description:
    "Explore a full range of licensed electrical services across Sydney. Residential, commercial, strata, and emergency electrical services.",
  telephone: "0449003526",
  email: "info@everythingelectricalsydney.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mobile service across Sydney",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    postalCode: "2000",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "Place",
    name: "Sydney, NSW",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -33.8688,
      longitude: 151.2093,
    },
    geoRadius: "50000",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: "tel:0449003526",
    name: "Call Now",
  },
  knowsAbout: [
    "Electrical Installation",
    "Emergency Electrical Services",
    "Level 2 Electrical Services",
    "CCTV Installation",
    "Commercial Electrical Work",
    "Residential Electrical Work",
  ],
  openingHours: ["Mo-Fr 06:00-17:30", "Sa 08:00-12:00"],
  priceRange: "$$",
};

export const homePageStructuredData = {
  ...localBusinessData,
  url: "https://www.everythingelectricalsydney.com.au",
  areaServed: [
    { "@type": "Place", name: "Northern Sydney" },
    { "@type": "Place", name: "Western Sydney" },
    { "@type": "Place", name: "Southern Sydney" },
    { "@type": "Place", name: "Eastern Sydney" },
  ],
  description:
    "Everything Electrical Sydney offers licensed residential, commercial, and strata electrical services across Sydney. Trusted, reliable, and professional electricians available 24/7.",
};

export const servicesPageStructuredData = {
  ...localBusinessData,
  url: "https://www.everythingelectricalsydney.com.au/services",
  description:
    "Everything Electrical Sydney provides licensed residential, commercial, and strata electrical services across Sydney. Explore all our professional services.",
};

export const blogPageStructuredData = {
  ...localBusinessData,
  name: "Everything Electrical Sydney Blog",
  description: `Professional Electrical Service Sydney`,
  url: `https://www.everythingelectricalsydney.com.au/blog`,
};

export const aboutPageStructuredData = {
  ...localBusinessData,
  name: "Everything Electrical Sydney About",
  description: `Professional Electrical Service Sydney`,
  url: `https://www.everythingelectricalsydney.com.au/about`,
};

export const areasPageStructuredData = {
  ...localBusinessData,
  name: "Everything Electrical Sydney Service Areas",
  description: `Professional Electrical Service Sydney Wide`,
  areaServed: [
    { "@type": "Place", name: "Northern Sydney" },
    { "@type": "Place", name: "Western Sydney" },
    { "@type": "Place", name: "Southern Sydney" },
    { "@type": "Place", name: "Eastern Sydney" },
  ],
  url: `https://www.everythingelectricalsydney.com.au/areas`,
};
