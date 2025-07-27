'use client'
export default function FooterBanner() {
  return (
    <div className="z-50 bg-gray-900 py-3 pb-20 shadow-lg md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-start w-full">
          <p className="text-[0.8rem] text-white text-center md:text-left">
            © {new Date().getFullYear()} All rights reserved. 
            <span className="px-2 hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            Powered by
            <a 
              href="https://nexawebdev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Nexa Web Development
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}