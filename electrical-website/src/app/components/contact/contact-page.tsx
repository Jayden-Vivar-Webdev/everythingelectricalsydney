"use client"
import FAQ from '@/app/components/faq/faq';
import {
    PhoneIcon,
    MapPinIcon,
    ClockIcon,
    EnvelopeOpenIcon,
  } from '@heroicons/react/24/outline'

  import { Phone, Mail, MapPin } from 'lucide-react';
  



const ContactPageBottom = () => {



  
  return (
    <>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Contact Our Team
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services with multiple convenient ways to reach our certified specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Phone Support */}
          <div className="group bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-101 transition-transform duration-300 shadow-lg">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Phone Support</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Direct access to our certified electrical specialists for immediate professional consultation and emergency services.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-600 mb-2">0449 003 526</p>
                <p className="text-slate-600 mb-4 text-lg">Call us directly</p>
                <div className="bg-slate-50 px-6 py-4 rounded-lg border">
                  <p className="text-sm font-semibold text-slate-700">Business Hours</p>
                  <p className="text-sm text-slate-600">Mon-Fri: 6:00am - 5:30pm AEST</p>
                  <p className="text-sm text-slate-600">Saturday: 8:00am - 12:00pm AEST</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Support */}
          <div className="group bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-101 transition-transform duration-300 shadow-lg">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email Support</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Professional correspondence for project inquiries, detailed quotes, and comprehensive electrical assessments.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-600 mb-2">Email Us</p>
                <p className="text-slate-600 mb-4 text-lg">info@everythingelectricalsydney.com.au</p>
                <div className="bg-slate-50 px-6 py-4 rounded-lg border">
                  <p className="text-sm font-semibold text-slate-700">Response Time</p>
                  <p className="text-sm text-slate-600">Professional inquiries within 24 hours</p>
                  <p className="text-sm text-slate-600">Quote requests prioritized</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="group bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-red-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-101 transition-transform duration-300 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Area</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                Comprehensive electrical services delivered across Sydney&apos;s metropolitan area with full licensing and insurance coverage.
              </p>
              <div className="mt-auto">
                <p className="text-2xl font-bold text-red-600 mb-2">Sydney Metro</p>
                <p className="text-slate-600 mb-4 text-lg">New South Wales, Australia</p>
                <div className="bg-slate-50 px-6 py-4 rounded-lg border">
                  <p className="text-sm font-semibold text-slate-700">Coverage Area</p>
                  <p className="text-sm text-slate-600">All Sydney metropolitan areas</p>
                  <p className="text-sm text-slate-600">Licensed and insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <p className="font-semibold text-slate-900">Fully Licensed</p>
              <p className="text-sm text-slate-600">NSW Electrical License</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <p className="font-semibold text-slate-900">Fully Insured</p>
              <p className="text-sm text-slate-600">Public Liability Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <p className="font-semibold text-slate-900">24/7 Emergency</p>
              <p className="text-sm text-slate-600">Emergency Call-Out Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Form */}

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div id='map-location' className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211598.39875715823!2d150.95673795!3d-34.03809955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bcb6cedc3de398b%3A0xcad31bc94cbc952!2sEverything%20Electrical%20Sydney!5e0!3m2!1sen!2sau!4v1752496836692!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[500px]"
                  title="Everything Electrical Service Area Map"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-8 rounded-2xl h-full">
                <div className="flex items-center mb-8">
                  <MapPinIcon className="text-red-600 h-8 w-8 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Service Area</h3>
                    <p className="text-slate-600">Sydney, Australia</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneIcon className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                      <a href="tel:0449003526" className="text-red-600 hover:text-red-700 transition font-medium">
                        0449 003 526
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <EnvelopeOpenIcon className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <a href="info@everythingelectricalsydney.com.au" className="text-red-600 hover:text-red-700 transition">
                        info@everythingelectricalsydney.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ClockIcon className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <div className="text-slate-600 text-sm">
                        <p>Monday - Friday: 6:00 AM - 5:30 PM</p>
                        <p>Saturday: 8:00 AM - 12:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Service Areas Include:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Sydney Metropolitan Area</li>
                    <li>• Camden Region</li>
                    <li>• Cronulla Area</li>
                    <li>• Surrounding South Western Areas</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <a
                    href="https://maps.app.goo.gl/AvRyLmCfmHgLSccS7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <MapPinIcon className="mr-2 h-5 w-5" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
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