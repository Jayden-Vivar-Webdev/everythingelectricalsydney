"use client"
import FAQ from '@/app/components/faq/faq';
import {
    PhoneIcon,
    
  } from '@heroicons/react/24/outline'
import MapLocations from '../locations/map-locations';
import { Phone, Mail, MapPin } from 'lucide-react';
  
const ContactPageBottom = () => {

  return (
    <>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Our Team
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services with multiple convenient ways to reach our certified specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Phone Support */}
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Direct access to our certified electrical specialists for immediate professional consultation and emergency services.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">0449 003 526</p>
                <p className="text-gray-400 mb-4 text-lg">Call us directly</p>
                <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                  <p className="text-sm font-semibold text-gray-200">Business Hours</p>
                  <p className="text-sm text-gray-300">Mon-Fri: 6:00am - 5:30pm AEST</p>
                  <p className="text-sm text-gray-300">Saturday: 8:00am - 12:00pm AEST</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Support */}
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Professional correspondence for project inquiries, detailed quotes, and comprehensive electrical assessments.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">Email Us</p>
                <p className="text-gray-400 mb-4 text-lg">info@everythingelectricalsydney.com.au</p>
                <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                  <p className="text-sm font-semibold text-gray-200">Response Time</p>
                  <p className="text-sm text-gray-300">Professional inquiries within 24 hours</p>
                  <p className="text-sm text-gray-300">Quote requests prioritized</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="group bg-gray-800 p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Service Area</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                Comprehensive electrical services delivered across Sydney&apos;s metropolitan area with full licensing and insurance coverage.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-400 mb-2">Sydney Metro</p>
                <p className="text-gray-400 mb-4 text-lg">New South Wales, Australia</p>
                <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                  <p className="text-sm font-semibold text-gray-200">Coverage Area</p>
                  <p className="text-sm text-gray-300">All Sydney metropolitan areas</p>
                  <p className="text-sm text-gray-300">Licensed and insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center 
              mb-3 border border-green-500/100 transition-all duration-500
              hover:scale-110 hover:border-green-500/0">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">Fully Licensed</p>
              <p className="text-sm text-gray-400">NSW Electrical License</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 border border-blue-500/100
              transition-all duration-500 hover:scale-110 hover:border-green-500/0">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">Fully Insured</p>
              <p className="text-sm text-gray-400">Public Liability Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 
              border border-orange-500/100
              transition-all hover:scale-110 hover:border-orange-500/0">
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
              <p className="font-semibold text-white">24/7 Emergency</p>
              <p className="text-sm text-gray-400">Emergency Call-Out Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Service Locations
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conveniently located to assist with your electrical service needs across Sydney.
            </p>
          </div>

          <MapLocations />

         
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs font-semibold mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Questions About Our Services
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our electrical services and solutions.
            </p>
          </div>
          
        </div>
        <FAQ />
        <div className="flex relative py-[15rem] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: "url('/images/assets/electrical-switchbox.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div> {/* Overlay behind content */}

        <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to inquire about your next electrical service?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white">
            Schedule a free consultation with our certified electrical specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
                Get Free Consultation
            </a>
            <a 
                href="tel:0449003526" 
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-bold transition-all duration-200"
            >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call 0449 003 526
            </a>
            </div>
        </div>
        </div>
      </section>
      
    </>
  );
};

export default ContactPageBottom;