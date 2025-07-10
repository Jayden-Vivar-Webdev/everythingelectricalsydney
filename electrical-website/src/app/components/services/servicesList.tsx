import Image from 'next/image';

type ServiceProps = {
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    imageAlt: string
    subtitle: string;
    icon: {
      name: string;
    };
  };
  
  type ServicesProps = {
    services: ServiceProps[];
  };
  

  export default function Services({services}: ServicesProps) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Our Electrical Services In Sydney
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">Fast, reliable emergency electrician services in Sydney, available 24/7.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((services) => (
              <article
                key={services.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                    alt={services.imageAlt}
                    src={services.imageUrl}
                    fill
                    className="absolute inset-0 -z-10 object-cover"
                    />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                  <p className="mr-8">
                    {services.subtitle}
                  </p>
                  <div className="-ml-4 flex items-center gap-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex gap-x-2.5">
                    
                      {services.icon.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={services.href}>
                    <span className="absolute inset-0" />
                    {services.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  