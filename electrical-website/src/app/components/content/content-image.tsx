
import { PortableText, PortableTextComponents } from '@portabletext/react';
import React from 'react';
import Image from 'next/image';
import {
  PortableTextBlock
} from '@portabletext/types';


// TypeScript interfaces for the component props
interface ImageData {
  alt?: string;
  src?: string;
}

interface StatData {
  label: string;
  value: string;
}

interface ContentData {
  image?: ImageData;
  logoImage?: ImageData;
  quote?: string;
  label?: string;
  title?: string;
  description?: PortableTextBlock[];
  stats?: StatData[];
  cta?: string;
  companyName?: string;
  location?: string;
}

interface EnhancedTestimonialSectionProps {
  isDarkMode?: boolean;
  contentInfo: ContentData;
  className?: string;
  portableTextComponents?: PortableTextComponents;
}


const EnhancedTestimonialSection: React.FC<EnhancedTestimonialSectionProps> = ({ 
  isDarkMode = false, 
  contentInfo,
  className = "",
  
  portableTextComponents
}) => {
  return (
    
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-full grid-cols-1 items-start gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:grid-cols-1">
          
          {/* Enhanced Testimonial Card - Only show if image or quote exists */}
          {(contentInfo.image) && (
            <div className="lg:pr-4 w-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl ring-1 ring-white/10 sm:p-8 md:p-10">
                
                {/* Background Image with Better Overlay */}
                {contentInfo.image && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <Image
                      src={contentInfo.image.src || '/images/electrician.jpg'}
                      alt={contentInfo.image.alt || 'Everything Electrical Sydney'}
                      fill
                      className="object-cover opacity-20"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/90" />
                  </div>
                )}
                
                {/* Refined Decorative Element */}
                {contentInfo.image && (
                  <>
                    <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 blur-xl" />
                  </>
                )}
                
                {/* Content */}
                <div className="relative z-10 p-10">
                  {/* Logo - Only show if logoImage exists */}
                  {contentInfo.logoImage && (
                    <div className="absolute top-[-3rem] right-6 w-[14rem] mb-6 sm:mb-8 h-[10rem]">
                      <Image
                        src={contentInfo.logoImage.src || '/images/logos/1.svg'}
                        alt={contentInfo.logoImage.alt || 'Logo image'}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 10rem"
                        priority
                      />
                    </div>
                  )}
                  
                  {/* Quote - Only show if quote exists */}
                  {contentInfo.quote && (
                    <blockquote className="text-base pt-10 sm:text-lg md:text-xl font-medium leading-relaxed text-white">
                      <svg className="mb-3 h-6 w-6 sm:h-8 sm:w-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                      <p className="relative">
                        {contentInfo.quote}
                      </p>
                    </blockquote>
                  )}
                  
                  {/* Attribution - Only show if companyName or location exists */}
                  {(contentInfo.companyName || contentInfo.location) && (
                    <div className="mt-6 sm:mt-8 border-t border-white/20 pt-4 sm:pt-6">
                      <p className="text-xs sm:text-sm text-slate-300">
                        {contentInfo.companyName && (
                          <span className="font-semibold text-white">
                            {contentInfo.companyName}
                          </span>
                        )}
                        {contentInfo.companyName && contentInfo.location && " · "}
                        {contentInfo.location}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Enhanced Content Section  */}
          <div className="lg:pl-4">
            <div className={`text-sm sm:text-base leading-7 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              
              {/* Label with Better Styling - Only show if label exists */}
              {contentInfo.label && (
                <div className="mb-3 sm:mb-4">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
                    isDarkMode 
                      ? 'bg-red-900/20 text-red-400 ring-red-800' 
                      : 'bg-red-50 text-red-700 ring-red-200'
                  }`}>
                    {contentInfo.label}
                  </span>
                </div>
              )}
              
              {/* Enhanced Title - Only show if title exists */}
              {contentInfo.title && (
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span className="block">{contentInfo.title.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block text-red-600">{contentInfo.title.split(' ').slice(2).join(' ')}</span>
                </h1>
              )}
              
              {/* Description - Only show if description exists and portableTextComponents is provided */}
              {contentInfo.description && portableTextComponents && (
                <div className={`mt-6 text-xl leading-8 text-gray-600 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <PortableText value={contentInfo.description} components={portableTextComponents} />
                </div>
              )}
            </div>
            
            {/* Enhanced Stats Grid - Only show if stats exist and has items */}
            {contentInfo.stats && contentInfo.stats.length > 0 && (
              <div className={`mt-12 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'} pt-12`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {contentInfo.stats.map((stat, statIdx) => (
                    <div key={statIdx} className="text-center">
                      <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        <span className="text-red-600">{stat.value}</span>
                      </div>
                      <div className={`mt-3 text-xs font-medium tracking-widest uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {stat.label}
                      </div>
                      <div className={`mt-4 mx-auto h-0.5 w-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Enhanced CTA - Only show if cta exists */}
            {contentInfo.image && (
              <div className="mt-8 sm:mt-10 flex w-full justify-center pt-10">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {contentInfo.cta}
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { EnhancedTestimonialSection, type ContentData, type EnhancedTestimonialSectionProps };