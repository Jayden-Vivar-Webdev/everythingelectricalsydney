import React from 'react';
import Image
 from 'next/image';
 type Stat = {
    id: number;
    name: string;
    value: string;
  };
  
  type StatsSectionProps = {
    theme?: 'light' | 'dark';
    imageUrl?: string;
    imageAlt?: string;
    badge?: string;
    title?: string;
    description?: string;
    stats?: Stat[];
    imagePosition?: 'left' | 'right';
  };

  
const ServiceHeroSection = ({
  theme = 'light',
  imageUrl = '',
  imageAlt = 'Team collaboration',
  badge = 'Our track record',
  title = 'Trusted by thousands of creators worldwide',
  description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  stats = [],
  imagePosition = 'left',
}: StatsSectionProps) => {
  const isLight = theme === 'light';
  
  const themeClasses = {
    background: isLight ? 'bg-white' : 'bg-gray-900',
    badge: isLight ? 'text-red-600' : 'text-red-400',
    title: isLight ? 'text-gray-900' : 'text-white',
    description: isLight ? 'text-gray-600' : 'text-gray-300',
    statBorder: isLight ? 'border-gray-900/10' : 'border-gray-100/10',
    statLabel: isLight ? 'text-gray-600' : 'text-gray-400',
    statValue: isLight ? 'text-gray-900' : 'text-white'
  };

  const imageClasses = imagePosition === 'left' 
    ? 'lg:left-0' 
    : 'lg:right-0';
  
  const contentClasses = imagePosition === 'left' 
    ? 'lg:col-start-2' 
    : 'lg:col-start-1';

  return (
    <div className={`relative ${themeClasses.background}`}>
      <Image
        alt={imageAlt}
        src={imageUrl}
        height={1000}
        width={500}
        loading='lazy'
        className={`h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 ${imageClasses} lg:h-full lg:w-1/2`}
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className={`px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 ${contentClasses} lg:px-8 lg:pt-32`}>
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className={`text-base/8 font-semibold ${themeClasses.badge}`}>
              {badge}
            </h2>
            <p className={`mt-2 text-pretty text-4xl font-semibold tracking-tight ${themeClasses.title} sm:text-5xl`}>
              {title}
            </p>
            <p className={`mt-6 text-lg/8 ${themeClasses.description}`}>
              {description.split('\n').map((line, i) => {
                const trimmed = line.trim();

                if (!trimmed) return <br key={i} /> // preserve empty lines

                if (trimmed.startsWith('•')) {
                  return (
                    <span key={i} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex justify-center text-red-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                      <span>{trimmed.slice(1).trim()}</span>
                    </span>
                  );
                }

                return <span key={i}>{line}</span>; // normal line, keep as inline
              })}
            </p>


            {stats.length > 0 && (
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div key={stat.id} className={`flex flex-col gap-y-3 border-l-2 border-red-600 ${themeClasses.statBorder} pl-6`}>
                    <dt className={`text-sm/6 ${themeClasses.statLabel}`}>
                      {stat.name}
                    </dt>
                    <dd className={`order-first text-3xl font-semibold tracking-tight ${themeClasses.statValue}`}>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;