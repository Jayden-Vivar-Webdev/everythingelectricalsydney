import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function MapLocations(){
    return(
        <>
        

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
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Service Area</h3>
                    <p className="text-slate-600">Sydney, Australia</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faPhone} className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                      <a href="tel:0449003526" className="text-red-600 hover:text-red-700 transition font-medium">
                        0449 003 526
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <a href="mailto:info@everythingelectricalsydney.com.au" className="text-red-600 hover:text-red-700 transition break-all">
                        info@everythingelectricalsydney.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faClock} className="text-red-600 mt-1 mr-4 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <div className="text-slate-600 text-sm">
                        {/* <p>Monday - Friday: 6:00 AM - 5:30 PM</p>
                        <p>Saturday: 8:00 AM - 12:00 PM</p>
                        <p>Sunday: Closed</p> */}
                        24/7 
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
        
        </>
    )
}