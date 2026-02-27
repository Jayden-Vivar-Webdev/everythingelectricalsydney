"use client";
import React from "react";
import ContactFormCta from "../contact/contact-cta";
import { StarRating } from "../testimonials/google-reviews";

type HeroMainProps = {
  announcementText?: string;
  announcementLink?: string;
  headline: string;
  subheadline?: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  backgroundImageDesktop?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  animation?: boolean;
  googleRating?: number;
  googleReviewCount?: number;
};

function HeroMain({
  announcementText,
  announcementLink,
  headline,
  subheadline,
  backgroundImage,
  backgroundImageAlt = "",
  backgroundImageDesktop,
  primaryCtaText,
  primaryCtaUrl = "#",
  secondaryCtaText,
  secondaryCtaUrl = "#",
  animation = false,
  googleRating = 4.9,
  googleReviewCount = 240,
}: HeroMainProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger fade/slide-in once component mounts on the client
    const timer = window.setTimeout(() => setIsVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const textAnimateClasses = isVisible
    ? "opacity-100 translate-x-0"
    : "opacity-0 translate-x-8";

  return (
    <>
      <div className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black lg:bg-none lg:bg-gray-900 lg:max-h-screen">
        <div className="relative isolate overflow-hidden lg:pt-14 lg:pb-[10rem]">
          <picture className="block lg:hidden h-82 w-full">
            <img
              src={backgroundImage}
              alt={backgroundImageAlt}
              className="h-full w-full object-cover object-[center_top]"
              loading="eager"
            />
          </picture>
          <picture className="hidden lg:block absolute inset-0 -z-10">
            <source media="(max-width: 1368px)" srcSet={backgroundImage} />
            <source
              media="(min-width: 769px)"
              srcSet={backgroundImageDesktop}
            />
            <img
              src={backgroundImage}
              alt={backgroundImageAlt}
              className="h-full w-full object-cover lg:object-[left_35%]"
              loading="eager"
            />
          </picture>
          <div className="hidden lg:block absolute inset-0 bg-gray-900/80"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 lg:pt-0 lg:top-0">
            <div className="mx-auto max-w-2xl py-5 sm:pt-10 sm:pb-16 lg:py-56">
              {!announcementText && (
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                    {announcementText}{" "}
                    {announcementLink && (
                      <a
                        href={announcementLink}
                        className="font-semibold text-white"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Contact Us <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
              <div
                className={`text-center transition-all duration-700 ease-out will-change-transform ${animation ? textAnimateClasses : ""}`}
              >
                <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
                  {headline}
                </h1>
                {subheadline && (
                  <div className="mt-6 sm:mt-8 flex flex-col items-center space-y-2 text-center">
                    {subheadline
                      .split(".")
                      .filter((s) => s.trim() !== "")
                      .map((sentence, index) => (
                        <p
                          key={index}
                          className="inline-flex items-center text-white text-sm sm:text-lg font-semibold tracking-wide"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-600 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {sentence.trim()}
                        </p>
                      ))}
                  </div>
                )}

                {(googleRating || googleReviewCount) && (
                  <div className="mt-4 sm:mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <div className="flex items-center rounded-full bg-white/10 px-4 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                        alt="Google logo"
                        className="h-6 w-6"
                        loading="lazy"
                      />
                      <div className="ml-3 flex items-center gap-2 text-sm font-semibold text-white">
                        <StarRating rating={googleRating} />
                        <span>
                          {googleRating?.toFixed(1)} on Google
                          {googleReviewCount
                            ? ` • ${googleReviewCount}+ reviews`
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
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
                    <a
                      href={secondaryCtaUrl}
                      className="text-sm/6 font-semibold text-white"
                    >
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

export default React.memo(HeroMain);
