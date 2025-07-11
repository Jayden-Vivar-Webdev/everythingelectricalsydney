'use client'
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 p-5 bg-white rounded-lg shadow-lg border border-gray-100 space-y-4 w-auto">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-semibold text-gray-800">Contact Us</h3>
            <button 
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close contact menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          <a 
            href="tel:0412345678" 
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
          >
            <div className="bg-red-50 p-2 rounded-full">
              <PhoneIcon className="h-5 w-5 text-red-600" />
            </div>
            <span>0412 345 678</span>
          </a>
          
          <a 
            href="mailto:info@everythingelectricalsydney.com.au" 
            className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
          >
            <div className="bg-red-50 p-2 rounded-full">
              <EnvelopeIcon className="h-5 w-5 text-red-600" />
            </div>
            <span>info@everythingelectricalsydney.com.au</span>
          </a>
          
          {/* <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors w-full">
            <div className="bg-red-50 p-2 rounded-full">
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-red-600" />
            </div>
            <span>Live Chat</span>
          </button> */}
        </div>
      )}
      <div className='flex w-full justify-end'>
        <button
          onClick={() => setOpen(!open)}
          className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
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
      
    </div>
  );
}