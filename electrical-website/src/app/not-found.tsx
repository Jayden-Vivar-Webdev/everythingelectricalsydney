// /pages/404.js
import React from "react";
import Image from "next/image";
export default function Custom404() {
  return (
    <>
      <section
        className="relative min-h-screen bg-gray-900 flex items-center justify-center px-4 py-24"
        id="features"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 opacity-95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNMjUgMTVIMHYxMGgyNXYxMGgxMHYtMTBoMjV2LTEwaC0yNXYtMTBoLTEwdjEweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center border border-white/10 shadow-lg">
              <a href="https://nexawebdev.com">
                <Image
                  src="/images/NW-logo.svg"
                  alt="Your Logo"
                  width={100}
                  height={100}
                  className="w-full h-full text-blue-400"
                />
              </a>
            </div>
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/50 mb-8">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
              System Maintenance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Website Upgrade in Progress
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;re performing scheduled maintenance to improve your
            experience. Our services will be back online shortly.
          </p>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-white font-medium mb-3">
              Need immediate assistance?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Contact our support team for urgent requests
            </p>
            <a
              href="tel:0449003526"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us Now
            </a>
          </div>
          <div className="mt-12 text-sm text-gray-400">
            <p>Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </section>
    </>
  );
}
