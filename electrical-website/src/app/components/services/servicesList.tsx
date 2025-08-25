'use client'
import Image from 'next/image';
import { useState } from 'react';

type ServiceProps = {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  subtitle: string;
  icon: {
    name: string;
  };
};

type ServicesProps = {
  services: ServiceProps[];
};

export default function Services({ services }: ServicesProps) {

  const [viewCount, setViewCount] = useState<number>(6);
  const [toggleServices, setToggleServices] = useState(false);

  const handleViewMore = () => {
    setToggleServices(!toggleServices);

    if(toggleServices) {
      setViewCount(6)
    }else{
      setViewCount(13)
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
           
           Complete Electrical Solutions Across <span className="secondary-text">Sydney</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-7">
            Our trusted and qualified electricians are here for all your electrical needs.  From routine jobs to emergency calls outs, we’ve got Sydney covered 24/7
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* <article
          className="relative isolate flex flex-col justify-end overflow-hidden
            rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80
            transition-transform hover:scale-[1.02] lg:col-span-2"
        >
          <Image
            alt={'Professional Electrical Services'}
            src={'/images/electrician.jpg'}
            fill
            className="absolute inset-0 -z-10 object-cover transition-transform hover:scale-105"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
            <p className="mr-8 font-medium">
              Licensed & Insured
            </p>
            <div className="-ml-4 flex items-center gap-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="flex gap-x-2.5">
                Available 24/7
              </div>
            </div>
          </div>
          
          <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
            Need Expert Electrical Work?
          </h3>
          
          <p className="mt-4 text-lg leading-7 text-gray-200 max-w-2xl">
            From residential wiring to commercial installations, our certified electricians deliver safe, reliable solutions. Emergency repairs, panel upgrades, and new construction we handle it all.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              aria-label="Contact us for electrical services"
            >
              Contact Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="View all electrical services"
            >
              View Services
            </Link>
          </div>
          
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              5-Year Warranty
            </div>
          </div>
        </article> */}

          {services.slice(0, viewCount).map((service) => (
            <article
              key={service.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transition-transform hover:scale-[1.02]"
            >
              <Image
                alt={service.imageAlt}
                src={service.imageUrl}
                fill
                className="absolute inset-0 -z-10 object-cover transition-transform hover:scale-105"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <p className="mr-8 font-medium">
                  {service.subtitle}
                </p>
                <div className="-ml-4 flex items-center gap-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="flex gap-x-2.5">
                    {service.icon.name}
                  </div>
                </div>
              </div>
              
              <h3 className="mt-3 text-2xl font-semibold leading-8 text-white">
                <a href={service.href} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </a>
              </h3>
              
              <p className="mt-4 text-base leading-6 text-gray-300 line-clamp-3">
                {service.description}
              </p>
              
              <div className="mt-6">
                <a 
                  href={service.href} 
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
          
          
        </div>
        <div className="mt-8 sm:mt-10 flex w-full justify-center pt-10">
            <button onClick={() => {handleViewMore()}} className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              {!toggleServices ? "See More Services" : "Hide Services"}
              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
}