import MobileLocationService from './search-locations';
import Link from 'next/link';
const ServiceLocations = () => {

  return (
    <section id='locations' className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Electrical 
            <span className="block text-red-600 text-3xl md:text-4xl font-bold mb-4">Service Areas</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 mb-4">
          Providing reliable, professional electrical and air conditioning services across Sydney, NSW, Australia.
            <br />
            <br />
            <strong>Can’t see your suburb listed? Don’t worry we cover many more areas. Get in touch and we’ll confirm if we can service your location.</strong>
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-[#ae1414] rounded-full"></div>
          </div>

          <Link href={"#contact"} className="mt-10 group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Request Service in your area
            <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 relative overflow-hidden">
          {/* Card decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative">
            {/* Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 secondary-bg rounded-2xl border border-red-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Service Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">Coverage</div>
              </div>
            </div>

            {/* Locations Grid */}
            <MobileLocationService />
          </div>
        </div>
        

        {/* Call to Action */}
        <div/>
      </div>
    </section>
    
  );
};

export default ServiceLocations;