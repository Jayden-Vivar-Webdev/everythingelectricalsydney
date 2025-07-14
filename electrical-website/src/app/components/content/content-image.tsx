import React from 'react';

// TypeScript interfaces for the component props
interface ImageData {
  alt: string;
  src: string;
}

interface StatData {
  label: string;
  value: string;
}

interface ContentData {
  image: ImageData;
  logoImage: ImageData;
  quote: string;
  label: string;
  title: string;
  description: string;
  stats: StatData[];
  cta: string;
  companyName?: string;
  location?: string;
}

interface EnhancedTestimonialSectionProps {
  isDarkMode?: boolean;
  contentInfo: ContentData;
  onCtaClick?: () => void;
  className?: string;
}

const EnhancedTestimonialSection: React.FC<EnhancedTestimonialSectionProps> = ({ 
  isDarkMode = false, 
  contentInfo,
  onCtaClick,
  className = ""
}) => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Enhanced Testimonial Card */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl ring-1 ring-white/10 sm:p-12 lg:max-w-lg">
              
              {/* Background Image with Better Overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img
                  alt={contentInfo.image.alt}
                  src={contentInfo.image.src}
                  className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90" />
              </div>
              
              {/* Refined Decorative Element */}
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 blur-xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Logo */}
                <div className="mb-8">
                  <img
                    alt={contentInfo.logoImage.alt}
                    src={contentInfo.logoImage.src}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                  <svg className="mb-4 h-8 w-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="relative">
                    {contentInfo.quote}
                  </p>
                </blockquote>
                
                {/* Attribution */}
                <div className="mt-8 border-t border-white/20 pt-6">
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-white">
                      {contentInfo.companyName || "Company Name"}
                    </span>
                    {(contentInfo.location || contentInfo.companyName) && " · "}
                    {contentInfo.location || "Location"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Content Section */}
          <div className="lg:pl-4">
            <div className={`text-base leading-7 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              
              {/* Label with Better Styling */}
              <div className="mb-4">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                  isDarkMode 
                    ? 'bg-red-900/20 text-red-400 ring-red-800' 
                    : 'bg-red-50 text-red-700 ring-red-200'
                }`}>
                  {contentInfo.label}
                </span>
              </div>
              
              {/* Enhanced Title */}
              <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="block">{contentInfo.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block text-red-600">{contentInfo.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              
              {/* Enhanced Description */}
              <div className={`mt-6 max-w-xl text-lg leading-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {contentInfo.description}
              </div>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className={`mt-12 grid grid-cols-2 gap-6 border-t pt-10 sm:grid-cols-4 ${
              isDarkMode ? 'border-slate-700' : 'border-slate-200'
            }`}>
              {contentInfo.stats.map((stat, statIdx) => (
                <div key={statIdx} className="text-center">
                  <div className={`text-3xl font-bold sm:text-4xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`mt-2 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA */}
            <div className="mt-10">
              <a 
                href="#" 
                onClick={handleCtaClick}
                className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                {contentInfo.cta}
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component with sample data
const ExampleUsage: React.FC = () => {
  const sampleContentInfo: ContentData = {
    image: {
      alt: "Electrical installation work",
      src: "/api/placeholder/400/600"
    },
    logoImage: {
      alt: "Everything Electrical Logo",
      src: "/api/placeholder/120/48"
    },
    quote: "Outstanding service and professionalism. They transformed our electrical system with precision and care.",
    label: "TRUSTED PROFESSIONALS",
    title: "Sydney's Premier Electrical Services",
    description: "With over two decades of experience, we deliver exceptional electrical solutions for residential and commercial properties across Sydney. Our certified electricians combine technical expertise with unmatched customer service.",
    stats: [
      { label: "Years Experience", value: "20+" },
      { label: "Projects Completed", value: "5,000+" },
      { label: "Happy Customers", value: "98%" },
      { label: "Team Members", value: "25+" }
    ],
    cta: "Get Your Free Quote Today",
    companyName: "Everything Electrical",
    location: "Sydney"
  };

  const handleCtaClick = () => {
    console.log("CTA clicked!");
    // Add your CTA logic here
  };

  return (
    <div className="space-y-8">
      {/* Light Mode Example */}
      <EnhancedTestimonialSection 
        contentInfo={sampleContentInfo}
        onCtaClick={handleCtaClick}
        isDarkMode={false}
      />
      
      {/* Dark Mode Example */}
      <EnhancedTestimonialSection 
        contentInfo={sampleContentInfo}
        onCtaClick={handleCtaClick}
        isDarkMode={true}
      />
    </div>
  );
};

export default ExampleUsage;
export { EnhancedTestimonialSection, type ContentData, type EnhancedTestimonialSectionProps };