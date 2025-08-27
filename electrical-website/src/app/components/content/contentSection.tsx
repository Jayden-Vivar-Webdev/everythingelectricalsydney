'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
type ImageProps = {
  alt: string;
  src: string;
};

type StatItemProps = {
  stat: string;
  value: string;
};

type ContentSectionProps = {
  tag: string;
  header: string;
  description: React.ReactNode;
  subHeader: string;
  content: React.ReactNode;
  images: ImageProps[];
  statsHeader: string;
  stats: StatItemProps[];
};

function Separator(){

  const pathname = usePathname();
  const slug = pathname.split('/')[1]

  if(slug === 'areas'){
    return(<div className='pt-30 sm:pt-35 md:pt-20'></div>)
  }

}

export default function ContentSection({
  tag,
  header,
  description,
  subHeader,
  content,
  images,
  statsHeader,
  stats,
}: ContentSectionProps) {
  return (
    <>
    {Separator()}
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl">
          <span className="text-base font-semibold leading-7 secondary-text">
            {tag}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {header}
          </h1>
          <div className="mt-6 text-xl leading-8 text-gray-600">
            {description}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {/* Text Content */}
          <div className="lg:pr-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {subHeader}
            </h2>
            <div className="mt-6 text-xl leading-8 text-gray-600">
              {content}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:row-span-2 lg:-mr-16 xl:mr-0">
            <div className="-mx-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-6 xl:gap-8">
              {images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-900/10 ${
                    (index === 1 || index === 3) ? "lg:-translate-y-10" : ""
                  }`}
                >
                  <Image
                    alt={img.alt}
                    src={img.src}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          {stats && <div className="pt-10 lg:col-span-2">
            {/* Red divider */}
            

            <h3 className="text-base font-medium text-slate-700 mb-2 uppercase tracking-wide">
                {statsHeader}
              </h3>
              {stats && <div className="w-16 h-[2px] bg-red-600 mb-6"></div>}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats?.slice(0, 4).map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 border border-slate-200 rounded-xl hover:shadow-md hover:bg-slate-50 transition duration-200"
                >
                  <div className="flex flex-col justify-between h-full">
                    <dl>
                      <dt className="text-sm font-medium text-slate-600 mb-1">
                        {stat.stat}
                      </dt>
                      <dd className="text-2xl font-semibold text-slate-900 tabular-nums">
                        {stat.value}
                      </dd>
                    </dl>

                    {/* Bottom accent bar */}
                    <div className="mt-4 h-1 w-12 bg-red-300 group-hover:bg-red-600 transition-colors duration-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </section>
    </>
  );
}