"use client";
import Image from "next/image";
import { useState } from "react";

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

    if (toggleServices) {
      setViewCount(6);
    } else {
      setViewCount(13);
    }
  };

  return (
    <>
      <div className="pt-35 sm:pt-30 md:pt-20"></div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Complete Electrical Solutions Across{" "}
              <span className="secondary-text">Sydney</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-7">
              Our trusted and qualified electricians are here for all your
              electrical needs. From routine jobs to emergency calls outs, we’ve
              got Sydney covered 24/7
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                  <p className="mr-8 font-medium">{service.subtitle}</p>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="flex gap-x-2.5">{service.icon.name}</div>
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
            <button
              onClick={() => {
                handleViewMore();
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {!toggleServices ? "See More Services" : "Hide Services"}
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
