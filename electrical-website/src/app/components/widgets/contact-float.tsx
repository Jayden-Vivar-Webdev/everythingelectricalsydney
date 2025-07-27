'use client'
import { PhoneIcon} from '@heroicons/react/24/outline';

export default function ContactWidget() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* Available Now Status Indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Available Now</span>
                <span className="text-xs text-gray-500">Ready to Help</span>
              </div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <a 
                href="tel:0449003526" 
                className="flex items-center gap-3 text-gray-800 hover:text-red-600 transition-all duration-200 group"
              >
                <div className="bg-red-600 p-2 rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                  <PhoneIcon className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Call Now</span>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">0449 003 526</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Widget */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        {open && (
          <div className="mb-3 p-6 bg-white rounded-2xl shadow-2xl border border-gray-100 space-y-4 min-w-[280px] backdrop-blur-sm">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="font-bold text-gray-800 text-lg">Contact Us</h3>
              <button 
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close contact menu"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            <a 
              href="tel:0449003526" 
              className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-all duration-200 group p-3 rounded-xl hover:bg-red-50"
            >
              <div className="bg-red-600 p-3 rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                <PhoneIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</span>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600">0449 003 526</span>
              </div>
            </a>
            
            <a 
              href="mailto:info@everythingelectricalsydney.com.au" 
              className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-all duration-200 group p-3 rounded-xl hover:bg-red-50"
            >
              <div className="bg-red-600 p-3 rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                <EnvelopeIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</span>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600">info@everythingelectricalsydney.com.au</span>
              </div>
            </a>
            
            <button className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-all duration-200 group w-full p-3 rounded-xl hover:bg-red-50">
              <div className="bg-red-600 p-3 rounded-full shadow-lg group-hover:bg-red-700 transition-colors">
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Chat</span>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600">Live Chat</span>
              </div>
            </button>
          </div>
        )}
        <div className='flex w-full justify-end'>
          <button
            onClick={() => setOpen(!open)}
            className={`p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${
              open ? 'bg-gray-700 hover:bg-gray-800' : 'bg-red-600 hover:bg-red-700'
            }`}
            aria-label={open ? "Close contact options" : "Open contact options"}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div> */}
    </>
  );
}