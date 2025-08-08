'use client'
import { PhoneIcon} from '@heroicons/react/24/outline';

export default function ContactWidget() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      {/* Available Now Status Indicator */}
      <div className="fixed bottom-0 w-full sm:bottom-6 sm:left-6 z-50 sm:w-auto">
        <div className="bg-white border border-gray-300 rounded-t-2xl sm:rounded-2xl shadow-2xl  sm:border-gray-100 px-5 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <a href='/contact' className="flex w-1/2 sm:w-auto items-center gap-3 justify-center cursor-pointer">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Available Now</span>
                <span className="text-xs text-gray-500">Ready to Help</span>
              </div>
            </a>
            <div className="flex justify-center w-1/2 sm:w-auto border-l border-gray-200 pl-4">
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
      
    </>
  );
}