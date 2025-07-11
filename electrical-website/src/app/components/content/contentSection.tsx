import Image from "next/image";

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
  description: string;
  subHeader: string;
  content: string;
  images: ImageProps[];
  statsHeader: string;
  stats: StatItemProps[];
};

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
          <p className="mt-6 text-xl leading-8 text-gray-600">
            {description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {/* Text Content */}
          <div className="lg:pr-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {subHeader}
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {content}
            </p>
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
                    priority={index < 2} // Prioritize loading first two images
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-1">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-base font-semibold leading-7 secondary-text">
                {statsHeader}
              </p>
              <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {stats.slice(0, 4).map((stat, index) => (
                  <div
                    key={index}
                    className={`flex flex-col border-b border-gray-200 pb-6 ${
                      index === 2 ? "sm:border-b sm:pb-6" : ""
                    }`}
                  >
                    <dt className="text-sm font-medium text-gray-600">
                      {stat.stat}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}