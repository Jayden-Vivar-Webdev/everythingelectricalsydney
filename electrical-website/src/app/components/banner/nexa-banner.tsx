'use client'
export default function FooterBanner() {

  return (
    <div className="z-50 bg-gray-900 px-4 py-3 pb-25 shadow-lg md:pb-3">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4">
          <p className="text-[0.8rem] text-white flex">
            © {new Date().getFullYear()} All rights reserved. 
            <span className="px-2 hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            Powered by
            <a 
              href="https://nexawebdev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 ont-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Nexa Web Development
            </a>
          </p>
          
        </div>
      </div>
    </div>
  )
}