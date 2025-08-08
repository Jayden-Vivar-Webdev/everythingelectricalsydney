export default function ConfirmationMessage(){
    return(
        <div className='relative w-full h-[42rem] sm:h-[33rem] md:h-[28rem] lg:h-[20rem]'>
        <div className="absolute 
          w-[90%] 
          max-w-7xl 
          left-1/2 
          -translate-x-1/2 
          bg-white 
          top-1
          -translate-y-1/4
          sm:-translate-y-2/6
          md:-translate-y-2/6
          lg:-translate-y-3/6
          p-10 
          rounded-xl 
          shadow-[0_20px_40px_rgba(0,0,0,0.1)]
          text-center">
          
          <div className="max-w-md mx-auto">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thank you for your request!
            </h2>
            
            <p className="text-gray-600 mb-6">
              We&apos;ve received your electrical service request and will get back to you within minutes. 
              Our qualified electricians will contact you shortly to discuss your requirements.
            </p>
            
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-cyan-800">What happens next?</p>
                  <p className="text-sm text-cyan-700 mt-1">
                    Our team will review your request and contact you to schedule a convenient time for assessment or service.
                  </p>
                </div>
              </div>
            </div>
            
            {/* <button
              onClick={() => setShowConfirmation(false)}
              className="secondary-bg text-white font-semibold py-3 px-8 rounded-md hover:secondary-light-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Submit Another Request
            </button> */}
          </div>
        </div>
      </div>
    )
}