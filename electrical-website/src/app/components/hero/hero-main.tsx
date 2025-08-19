'use client';
import Image from 'next/image';
import React from 'react';
import ContactFormCta from '../contact/contact-cta';
type HeroMainProps = {
  announcementText?: string;
  announcementLink?: string;
  headline: string;
  subheadline?: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
};

function HeroMain({
  announcementText,
  announcementLink,
  headline,
  subheadline,
  backgroundImage,
  backgroundImageAlt = '',
  primaryCtaText,
  primaryCtaUrl = '#',
  secondaryCtaText,
  secondaryCtaUrl = '#',
}: HeroMainProps) {
  return (
    <>
    <div className="bg-gray-900 relative">
      <div className="relative isolate overflow-hidden pt-14 pb-[10rem]">
      <Image
          alt={backgroundImageAlt}
          src={backgroundImage}
          fill
          className="absolute inset-0 -z-10 object-cover opacity-[0.2]"
          priority
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* {announcementText && (
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  {announcementText}{' '}
                  {announcementLink && (
                    <a href={announcementLink} className="font-semibold text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                       Contact Us <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            )} */}
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                {headline}
              </h1>
              {subheadline && (
                <div className="mt-8 flex flex-col items-center space-y-2 text-center">
                  {subheadline.split('.').filter(s => s.trim() !== '').map((sentence, index) => (
                    <p key={index} className="inline-flex items-center text-white text-sm sm:text-lg font-semibold tracking-wide">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {sentence.trim()}.
                    </p>
                  ))}
                </div>
              )}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {primaryCtaText && (
                  <a
                    href={primaryCtaUrl}
                    id={primaryCtaUrl}
                    className="rounded-md secondary-bg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:secondary-bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {primaryCtaText}
                  </a>
                )}
                {secondaryCtaText && (
                  <a href={secondaryCtaUrl} className="text-sm/6 font-semibold text-white">
                    {secondaryCtaText} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        />
      </div>
    </div>
    <ContactFormCta />
    </>
  );
}

export default React.memo(HeroMain)