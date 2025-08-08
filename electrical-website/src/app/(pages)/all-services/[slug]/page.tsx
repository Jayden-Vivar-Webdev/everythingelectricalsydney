import HeroMain from "@/app/components/hero/hero-main";
import { notFound, redirect } from "next/navigation";
import { EnhancedTestimonialSection } from "@/app/components/content/content-image";
import type { ContentData } from "@/app/components/content/content-image";
import generateLongDescription from "@/app/lib/generateLongDescription";
import { PortableTextComponents } from '@portabletext/react';
import MapLocations from "@/app/components/locations/map-locations";
import { Metadata } from 'next';
import { cache } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

type Params = Promise<{ slug: string }>;

// Define valid locations
const validLocations = [
  // Metro Sydney
  { name: "Sydney", slug: "sydney" },
  { name: "Parramatta", slug: "parramatta" },
  { name: "Liverpool", slug: "liverpool" },
  { name: "Blacktown", slug: "blacktown" },
  { name: "Penrith", slug: "penrith" },
  { name: "Campbelltown", slug: "campbelltown" },
  { name: "Camden", slug: "camden" },
  { name: "Oran Park", slug: "oran-park" },
  { name: "Narellan", slug: "narellan" },
  { name: "Glenmore Park", slug: "glenmore-park" },
  { name: "St Marys", slug: "st-marys" },
  { name: "Narellan Vale", slug: "narellan-vale" },

  // Inner West
  { name: "Newtown", slug: "newtown" },
  { name: "Ashfield", slug: "ashfield" },
  { name: "Leichhardt", slug: "leichhardt" },
  { name: "Marrickville", slug: "marrickville" },

  // Eastern Suburbs
  { name: "Bondi", slug: "bondi" },
  { name: "Randwick", slug: "randwick" },
  { name: "Maroubra", slug: "maroubra" },
  { name: "Coogee", slug: "coogee" },

  // Western Sydney
  { name: "Mount Druitt", slug: "mount-druitt" },
  { name: "Rooty Hill", slug: "rooty-hill" },
  { name: "Doonside", slug: "doonside" },
  { name: "Fairfield", slug: "fairfield" },
  { name: "Auburn", slug: "auburn" },
  { name: "Granville", slug: "granville" },
  { name: "Quakers Hill", slug: "quakers-hill" },
  { name: "Schofields", slug: "schofields" },

  // Hills District
  { name: "Castle Hill", slug: "castle-hill" },
  { name: "Baulkham Hills", slug: "baulkham-hills" },
  { name: "Kellyville", slug: "kellyville" },
  { name: "Rouse Hill", slug: "rouse-hill" },
  { name: "The Ponds", slug: "the-ponds" },

  // South West Sydney
  { name: "Leppington", slug: "leppington" },
  { name: "Edmondson Park", slug: "edmondson-park" },
  { name: "Cecil Hills", slug: "cecil-hills" },
  { name: "Badgerys Creek", slug: "badgerys-creek" },

  // Wollongong / Illawarra
  { name: "Wollongong", slug: "wollongong" },
  { name: "Fairy Meadow", slug: "fairy-meadow" },
  { name: "Shellharbour", slug: "shellharbour" },
  { name: "Dapto", slug: "dapto" },
  { name: "Corrimal", slug: "corrimal" },
  { name: "Figtree", slug: "figtree" },

  // Blue Mountains
  { name: "Katoomba", slug: "katoomba" },
  { name: "Springwood", slug: "springwood" },
  { name: "Blaxland", slug: "blaxland" },
  { name: "Glenbrook", slug: "glenbrook" },
  { name: "Lawson", slug: "lawson" },
] as const;

interface LocationInfo {
  name: string;
  slug: string;
}

// Cache location validation
const validateLocation = cache((slug: string): LocationInfo | null => {
  return validLocations.find(location => location.slug === slug) || null;
});

export async function generateStaticParams() {
  return validLocations.map(location => ({
    slug: location.slug
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const location = validateLocation(slug);

    if (!location) {
      return {
        title: 'Location Not Found | Everything Electrical Sydney',
        description: 'The requested location could not be found.',
        robots: { index: false, follow: false },
      };
    }

    const locationName = location.name;
    const pageTitle = `Everything Electrical Sydney - Professional Electrical Services in ${locationName}`;
    const pageDescription = `Everything Electrical Sydney provides comprehensive electrical services in ${locationName}. Commercial, residential work, and Level 2 electrical services. 24/7 emergency electrical services available.`;

    return {
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: `https://everythingelectricalsydney.com.au/all-services/${slug}`,
      },
      openGraph: {
        url: `https://everythingelectricalsydney.com.au/all-services/${slug}`,
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
            width: 1200,
            height: 630,
            alt: `Everything Electrical Sydney - Professional Electrical Services in ${locationName}`,
            type: 'image/png',
          },
        ],
        siteName: 'Everything Electrical Sydney',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: ['https://everythingelectricalsydney.com.au/images/electrical_og.png'],
      },
      keywords: [
        `Everything Electrical Sydney ${locationName}`,
        `${locationName} electrical services`,
        `${locationName} electrician`,
        'CCTV installation',
        'Level 2 electrical services',
        '24/7 emergency electrical',
        `commercial electrician ${locationName}`,
        `residential electrician ${locationName}`,
      ],
      authors: [{ name: 'Everything Electrical Sydney' }],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Everything Electrical Sydney - Professional Electrical Services',
      description: 'Professional electrical services across Sydney',
    };
  }
}

export default async function AllServices({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const location = validateLocation(slug);

    if (!location) {
      notFound();
    }

    const locationName = location.name;

    const content: ContentData = {
      title: `Comprehensive Electrical Services in ${locationName}`,
      label: "Areas We Serve",
      quote: `We've proudly helped hundreds of homeowners and businesses in ${locationName} with reliable and efficient electrical services.`,
      image: {
        src: "/images/electrician.jpg",
        alt: `Professional electrical services in ${locationName}`
      },
      logoImage: {
        src: "https://cdn.sanity.io/images/8dp3bjvf/production/1b7e474f74450217589bd452389ec3f836edbce3-1250x1250.png",
        alt: "Everything Electrical Sydney Logo"
      },
      companyName: "Everything Electrical Sydney",
      location: `Everything Electrical Sydney serving ${locationName}`,
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: generateLongDescription(locationName),
            },
          ],
          markDefs: []
        }
      ],
      stats: [
        { label: "Jobs Completed", value: "3,000+" },
        { label: "Emergency Services", value: "24/7" },
        { label: "Years Experience", value: "10+" },
        { label: "Star Rating", value: "5.0" },
      ],
      cta: "Get a Free Quote",
    };

    const portableTextComponents: PortableTextComponents = {
      block: {
        normal: ({ children }) => (
          <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
        ),
      },
    };

    return (
      <>
        {/* Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Everything Electrical Sydney",
              "description": `Professional electrical services in ${locationName}`,
              "url": `https://everythingelectricalsydney.com.au/all-services/${slug}`,
              "telephone": "0449003526",
              "email": "info@everythingelectricalsydney.com.au",
              "areaServed": {
                "@type": "Place",
                "name": locationName
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -33.8688,
                  "longitude": 151.2093
                },
                "geoRadius": "50000"
              },
              "services": [
                "Electrical Installation",
                "Emergency Electrical Services",
                "Level 2 Electrical Services",
                "CCTV Installation",
                "Commercial Electrical Work",
                "Residential Electrical Work"
              ],
              "openingHours": [
                "Mo-Fr 06:00-17:30",
                "Sa 08:00-12:00"
              ],
              "priceRange": "$$"
            })
          }}
        />

        <main>
          <HeroMain 
            announcementText={`Professional Electrical Services in ${locationName}`}
            announcementLink={'#contact'}
            headline={`${locationName} Electrical Services`}
            subheadline={`Everything Electrical - Your Trusted Electrical Provider in ${locationName}`}
            backgroundImage={'/images/electrician.jpg'}
            backgroundImageAlt={`Professional electrical services in ${locationName}`}
            primaryCtaText={'Call Now'}
            primaryCtaUrl={`tel:0449003526`}
            secondaryCtaText={`Book Now`}
            secondaryCtaUrl={'/contact'}
          />
      
          <EnhancedTestimonialSection 
            contentInfo={content} 
            isDarkMode={false}
            portableTextComponents={portableTextComponents}
          />

          {/* Service Area Map Section */}
          <section className='py-16 bg-white' aria-labelledby="service-area-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
                <h2 id="service-area-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  <span className="mr-2">Service Areas</span>
                  <span className="text-red-600">Interactive Map</span>
                </h2>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive electrical services across {locationName} and surrounding areas
                </p>
              </header>
              <MapLocations />
            </div> 
          </section>
          
          {/* Contact Section */}
          <section className="py-24 bg-gray-900" aria-labelledby="contact-heading">
            <div className="container mx-auto px-4">
              <header className="text-center mb-20">
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Contact Our Team
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-6" aria-hidden="true"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Professional electrical services with multiple convenient ways to reach our certified specialists in {locationName}
                </p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Phone Support */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <Phone className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Direct access to our certified electrical specialists for immediate professional consultation and emergency services in {locationName}.
                    </p>
                    <div className="mt-auto">
                      <a 
                        href="tel:0449003526"
                        className="text-2xl font-bold text-red-400 mb-2 hover:text-red-300 transition-colors block"
                      >
                        0449 003 526
                      </a>
                      <p className="text-gray-400 mb-4 text-lg">Call us directly</p>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Business Hours</p>
                        <p className="text-sm text-gray-300">Mon-Fri: 6:00am - 5:30pm AEST</p>
                        <p className="text-sm text-gray-300">Saturday: 8:00am - 12:00pm AEST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Email Support */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Professional correspondence for project inquiries, detailed quotes, and comprehensive electrical assessments in {locationName}.
                    </p>
                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-red-400 mb-2">Email Us</p>
                      <div
                        
                        className="text-gray-400 mb-4 text-lg hover:text-gray-300 transition-colors block break-all"
                      >
                        info@everythingelectricalsydney.com.au
                      </div>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Response Time</p>
                        <p className="text-sm text-gray-300">Professional inquiries within 24 hours</p>
                        <p className="text-sm text-gray-300">Quote requests prioritized</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Service Area</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Comprehensive electrical services delivered across {locationName} and Sydney&apos;s metropolitan area with full licensing and insurance coverage.
                    </p>
                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-red-400 mb-2">{locationName}</p>
                      <p className="text-gray-400 mb-4 text-lg">New South Wales, Australia</p>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Coverage Area</p>
                        <p className="text-sm text-gray-300">{locationName} and surrounding areas</p>
                        <p className="text-sm text-gray-300">Licensed and insured</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Trust Indicators */}
              <footer className="mt-16 pt-12 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center 
                    mb-3 border border-green-500 transition-all duration-500
                    hover:scale-110 hover:border-green-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">Fully Licensed</p>
                    <p className="text-sm text-gray-400">NSW Electrical License</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 border border-blue-500
                    transition-all duration-500 hover:scale-110 hover:border-blue-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">Fully Insured</p>
                    <p className="text-sm text-gray-400">Public Liability Coverage</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 
                    border border-orange-500 transition-all duration-500 hover:scale-110 hover:border-orange-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">24/7 Emergency</p>
                    <p className="text-sm text-gray-400">Emergency Call-Out Available</p>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error rendering location page:', error);
    redirect('/areas')
  }
}