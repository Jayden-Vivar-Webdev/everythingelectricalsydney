import Link from 'next/link';
import MobileLocationService from './search-locations';
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
             Everything Electrical Service Locations
            <span className="block text-red-600 text-3xl md:text-4xl font-bold mb-4">Service Excellence</span>
          </h2>
          <p className="text-secondary-600 mb-4">
            Delivering premium electrical services all across locations in Sydney NSW, Australia
            <br />
            <br />
            <strong>Can’t find your location? No worries! We cover many more areas than listed here. Please get in touch with us, we’re happy to help and confirm if we service your area.</strong>
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-[#ae1414] rounded-full"></div>
          </div>
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
        <div className="text-center mt-16">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url(/images/assets/electrical-switchbox.jpg)] bg-cover bg-center"></div>

            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Connect with our experts and discover how we can help.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
              >
                Request Service in Your Area
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ServiceLocations;