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
      <div className="relative bg-gray-900 lg:max-h-screen">
        <div className="relative isolate flex min-h-[78svh] items-center overflow-hidden lg:min-h-[88svh] lg:items-center lg:pt-14 lg:pb-[6rem]">
          <picture className="absolute inset-0 -z-10">
            {backgroundImageDesktop && (
              <source
                media="(min-width: 1024px)"
                srcSet={backgroundImageDesktop}
              />
            )}
            <img
              src={backgroundImage}
              alt={backgroundImageAlt}
              className="h-full w-full object-cover object-[center_top] lg:object-[left_35%]"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/65 via-gray-900/75 to-gray-950/90 lg:bg-gradient-to-r lg:from-gray-950/90 lg:via-gray-900/80 lg:to-gray-900/45"></div>

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 lg:pt-0 lg:top-0">
            <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:max-w-3xl lg:py-20">
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
                className={`mx-auto max-w-xl text-center transition-all duration-700 ease-out will-change-transform lg:max-w-2xl lg:text-center ${animation ? textAnimateClasses : ""}`}
              >
                <h1 className="text-balance text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white">
                  {headline}
                </h1>
                {subheadline && (
                  <div className="mt-7 sm:mt-8 flex flex-col items-center space-y-2.5 text-center lg:items-center lg:text-center">
                    {subheadline
                      .split(".")
                      .filter((s) => s.trim() !== "")
                      .map((sentence, index) => (
                        <p
                          key={index}
                          className="inline-flex items-center text-white text-base sm:text-lg font-semibold tracking-wide"
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
                    <div className="flex w-full max-w-sm items-center justify-center rounded-full bg-white/10 px-4 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur sm:w-auto">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                        alt="Google logo"
                        className="h-6 w-6"
                        loading="lazy"
                      />
                      <div className="ml-3 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white">
                        <StarRating rating={googleRating} />
                        <span className="text-center">
                          {googleRating?.toFixed(1)} on Google
                          {googleReviewCount
                            ? ` • ${googleReviewCount}+ reviews`
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-8 sm:mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-x-6">
                  {primaryCtaText && (
                    <a
                      href={primaryCtaUrl}
                      id={primaryCtaUrl}
                      className="w-full rounded-md secondary-bg px-6 py-3 text-base font-semibold text-white text-center shadow-sm hover:secondary-bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:w-auto sm:px-3.5 sm:py-2.5 sm:text-sm"
                    >
                      {primaryCtaText}
                    </a>
                  )}
                  {secondaryCtaText && (
                    <a
                      href={secondaryCtaUrl}
                      className="inline-flex w-full items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto sm:border-0 sm:px-0 sm:py-0 sm:text-sm/6"
                    >
                      {secondaryCtaText}{" "}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
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
