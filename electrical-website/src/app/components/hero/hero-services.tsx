"use client";
import React from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type ServicesHeroProps = {
  title?: string;
  titleSpan?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaText?: string;
};

export default function ServicesHero({
  title = "Professional",
  titleSpan = "Electrical Services",
  subtitle = "TRUSTED ELECTRICAL SOLUTIONS",
  description = "We deliver comprehensive electrical solutions for commercial and residential clients, combining industry-leading expertise with unwavering commitment to safety and quality.",
  backgroundImage = "/images/assets/electrical-switchbox.jpg",
  ctaText = "Request Consultation",
}: ServicesHeroProps) {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Sophisticated gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Optimized background image */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Everything Electrical Sydney - Services"
            fill
            quality={75}
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Enhanced overlay with subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-12 sm:py-16 lg:py-20">
          {/* Centered Content */}
          <div className="hero-services-reveal w-full max-w-6xl mx-auto space-y-8 sm:space-y-12 transform">
            {/* Premium Badge with Glow Effect */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-600 rounded-full">
              <BuildingOffice2Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                {subtitle}
              </span>
            </div>

            {/* Hero Title with Enhanced Typography */}
            <div className="space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-left text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                  <span className="font-extralight">{title}</span>
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {titleSpan}
                  </span>
                </h1>
              </div>

              {/* Enhanced divider with gradient animation */}
              <div className="flex justify-start">
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="text-left max-w-6xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
                {description}
              </p>
            </div>

            {/* Premium Action Buttons with Enhanced Styling */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <a
                href="/contact"
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center text-sm sm:text-base">
                  {ctaText}
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a href="tel:0449003526" className="block">
                <button className="group w-full flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-300 hover:bg-white hover:shadow-md text-slate-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base">
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Schedule Call
                </button>
              </a>
            </div>

            {/* Trust Indicators with Subtle Animation */}
          </div>
        </div>
      </div>
    </div>
  );
}
