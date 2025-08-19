import React from 'react';

const SeniorsDiscountBadge = () => {
  return (
    <div className="absolute top-50 z-10 
                    left-1/2 -translate-x-1/2 
                    sm:left-auto sm:right-10 sm:translate-x-0">
      {/* Professional badge with gradient and subtle shadow */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white shadow-xl px-8 py-5 flex items-center justify-center rounded-lg border border-red-500/30 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:10px_10px]"></div>
        
        {/* Shine effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="flex flex-col items-center text-center relative z-10">
          
          {/* Top label with icon */}
          <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-red-100 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Exclusive Offer
          </div>
          
          {/* Main discount */}
          <div className="mb-1 relative">
            <div className="text-4xl font-bold leading-none tracking-tight">$50 OFF</div>
            <div className="absolute -top-2 -right-5 bg-yellow-400 text-red-800 text-xs font-bold px-2 py-0.5 rounded-full rotate-12 shadow-sm">
              SAVE
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="text-sm font-medium text-red-100 bg-red-800/30 px-3 py-1 rounded-full">
            For Seniors • First Service
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-white/10"></div>
          <div className="absolute -right-2 -bottom-2 w-5 h-5 rounded-full bg-white/10"></div>
        </div>
      </div>
      
    </div>
  );
};

export default SeniorsDiscountBadge;