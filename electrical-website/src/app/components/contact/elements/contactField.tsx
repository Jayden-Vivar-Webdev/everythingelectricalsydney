type FormDataProp = {
    fullName: string
    mobile: string
    email: string
    address: string
    serviceType: string
    description: string
}

type ContactFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    submitError: string;
    formData: FormDataProp;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    isSubmitting: boolean;
}



export default function ContactFormInputs({handleSubmit, submitError, formData, handleChange, isSubmitting}: ContactFormProps){
    return(
        <>
        {/* Header */}
      <div  className='relative w-full h-[42rem] sm:h-[33rem] md:h-[28rem] lg:h-[20rem]'>
        {/* Form */}
        <form id='contact' onSubmit={handleSubmit} className="absolute 
        w-[90%] 
        max-w-7xl 
        left-1/2 
        -translate-x-1/2 
        space-y-6 bg-white 
        top-1
        -translate-y-1/4
        sm:-translate-y-2/6
        md:-translate-y-2/6
        lg:-translate-y-3/6
        p-10 
        rounded-xl 
        shadow-[0_20px_40px_rgba(0,0,0,0.1)]">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Describe your <span className="secondary-text">electrical</span> requirement to get a quote
          </h1>
          
          {/* Security badges */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Your information is 100% safe and secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>You will receive a response within minutes</span>
            </div>
          </div>
        </div>

        {/* Error message */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-red-800 text-sm">{submitError}</span>
            </div>
          </div>
        )}

        {/* First Row - Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <input
              type="text"
              name="address"
              placeholder="Job Location"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Second Row - Service Type and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
              required
              disabled={isSubmitting}
            >
              <option value="">Service Type</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="inspection">Inspection</option>
              <option value="replacement">Replacement</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="lg:col-span-2">
            <textarea
              name="description"
              placeholder="Describe your electrical job"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Submit Button with reCAPTCHA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="robot-check"
              className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
              required
              disabled={isSubmitting}
            />
            <label htmlFor="robot-check" className="text-sm text-gray-600">
              I&apos;m not a robot
            </label>
          </div>
          
          <div className="flex-1">
            <button
              type="submit"
              
              disabled={isSubmitting}
              className="w-full secondary-bg text-white font-semibold py-3 px-8 rounded-md hover:secondary-light-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Book now'
              )}
            </button>
          </div>
        </div>
      </form>

        {/* Yellow accent line */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 rounded-full"></div>
        </div>
    </div>
        </>
    )
}