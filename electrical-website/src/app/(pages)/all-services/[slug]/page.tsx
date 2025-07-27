import HeroMain from "@/app/components/hero/hero-main";
import { redirect } from "next/navigation";
import { EnhancedTestimonialSection } from "@/app/components/content/content-image";
import type { ContentData } from "@/app/components/content/content-image";
import generateLongDescription from "@/app/lib/generateLongDescription";
import { PortableTextComponents } from '@portabletext/react';
import MapLocations from "@/app/components/locations/map-locations";
type Params = Promise<{slug: string}>
import { Phone, Mail, MapPin } from 'lucide-react';

export async function generateMetadata({params}: {params: Params}){
    const {slug} = await params
    const fullslug = `/all-services/${slug}`
    const updatedSlug = slug.replace('-', ' ')
    const titleCaseSlug = updatedSlug.split(' ').map(word => word[0].toUpperCase() + word.slice(1))
    if (!fullslug) {
        return redirect('/services');
    }
    return {
    
    title: `Everything Electrical Sydney ${(slug)[0].toUpperCase}`,
    description: `Everything Electrical Sydney provides mutiple services across ${(slug)[0].toUpperCase}.
    These services include commercial and residential work, along with Level 2 Electrical Services. Everything Electrical Sydney also
    provides 24/7 Emergency Electrical Services.
    `,
    alternates: {
      canonical: `https://everythingelectricalsydney.com.au/${fullslug}`,
    },
    openGraph: {
      url: `https://everythingelectricalsydney.com.au/${fullslug}`,
      title: `Everything Electrical Sydney ${titleCaseSlug}`,
      description: `Everything Electrical Sydney provides mutiple services across ${titleCaseSlug}.
    These services include commercial and residential work, along with Level 2 Electrical Services. Everything Electrical Sydney also
    provides 24/7 Emergency Electrical Services.
    `,
      images: [
        {
          url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
          width: 1200,
          height: 630,
          alt: `Everything Electrical Sydney Providing Services to ${titleCaseSlug} and surrounding locations`,
          type: 'image/png',
        },
      ],
      siteName: 'Everything Electrical Sydney', // ✅ correct key
    },
    keywords: [
      `Everything Electrical Sydney ${titleCaseSlug}`,
      `${titleCaseSlug} Electrical services`,
      'CCTV Installation',
      `${titleCaseSlug} Electrician`,
      `${titleCaseSlug} Electrician`,
    ],
    authors: [{ name: 'Nexa Web' }],
  }
}



export default async function AllServices({params}: {params: Params}){

    const {slug} = await params
    const updatedSlug = slug.replace('-', ' ')
    const titleCaseSlug = updatedSlug.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    const content: ContentData = {
      title: `Comprehensive Electrical Services in ${titleCaseSlug}`,
      label: "Areas We Serve",
      quote: `We've proudly helped hundreds of homeowners and businesses in ${titleCaseSlug} with reliable and efficient electrical services.`,
      image: {
        src: "/images/electrician.jpg",
        alt: `Electrical services in ${titleCaseSlug}`
      },
      logoImage: {
        src: "https://cdn.sanity.io/images/8dp3bjvf/production/1b7e474f74450217589bd452389ec3f836edbce3-1250x1250.png",
        alt: "Everything Electrical Sydney"
      },
      companyName: "Everything Electrical Sydney",
      location: `Everything Electrical Sydney and ${titleCaseSlug}`,
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: generateLongDescription(titleCaseSlug.toString()),
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
        normal: ({ children }) => <p className="mb-4">{children}</p>,
      },
    };

    if(!slug){
        redirect('/services')
    }
    return(
        <>
        
        <HeroMain 
        announcementText={`Professional Electrical Services ${titleCaseSlug}`}
        announcementLink={'#contact'}
        headline={`${titleCaseSlug} Electrical Services`}
        subheadline={`Everything Electrical Your Trusted Electrical Provider In ${titleCaseSlug}`}
        backgroundImage={'/images/electrician.jpg'}
        backgroundImageAlt={`Electrical Services in ${titleCaseSlug}`}
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
        <div className='py-10 bg-white'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 pb-10">
        <span className="mr-2">Servicing Location</span>
        <span className="text-red-600">Mapped View </span>
        
        </h1>
          <MapLocations />
        </div> 
        </div>
        
         <section className="py-24 mt-30 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Our Team
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services with multiple convenient ways to reach our certified specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Phone Support */}
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Direct access to our certified electrical specialists for immediate professional consultation and emergency services.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">0449 003 526</p>
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
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Professional correspondence for project inquiries, detailed quotes, and comprehensive electrical assessments.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">Email Us</p>
                <p className="text-gray-400 mb-4 text-lg">info@everythingelectricalsydney.com.au</p>
                <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                  <p className="text-sm font-semibold text-gray-200">Response Time</p>
                  <p className="text-sm text-gray-300">Professional inquiries within 24 hours</p>
                  <p className="text-sm text-gray-300">Quote requests prioritized</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Service Area</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Comprehensive electrical services delivered across Sydney&apos;s metropolitan area with full licensing and insurance coverage.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">Sydney Metro</p>
                <p className="text-gray-400 mb-4 text-lg">New South Wales, Australia</p>
                <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                  <p className="text-sm font-semibold text-gray-200">Coverage Area</p>
                  <p className="text-sm text-gray-300">All Sydney metropolitan areas</p>
                  <p className="text-sm text-gray-300">Licensed and insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center 
              mb-3 border border-green-500/100 transition-all duration-500
              hover:scale-110 hover:border-green-500/0">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">Fully Licensed</p>
              <p className="text-sm text-gray-400">NSW Electrical License</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 border border-blue-500/100
              transition-all duration-500 hover:scale-110 hover:border-green-500/0">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">Fully Insured</p>
              <p className="text-sm text-gray-400">Public Liability Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 
              border border-orange-500/100
              transition-all hover:scale-110 hover:border-orange-500/0">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">24/7 Emergency</p>
              <p className="text-sm text-gray-400">Emergency Call-Out Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
   

    
}