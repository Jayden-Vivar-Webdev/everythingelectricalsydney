import React, { useState } from 'react';

const ContactFormCta = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    serviceType: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const submitData = new FormData();
      submitData.append('access_key', 'e8509236-870e-4538-89ee-0a4f591bcd26');
      submitData.append('subject', 'New Contact Form Submission');
      submitData.append('from_name', 'Electrical Services Website');
      submitData.append('fullName', formData.fullName);
      submitData.append('mobile', formData.mobile);
      submitData.append('email', formData.email);
      submitData.append('address', formData.address);
      submitData.append('serviceType', formData.serviceType);
      submitData.append('description', formData.description);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setShowConfirmation(true);
        // Reset form
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          address: '',
          serviceType: '',
          description: ''
        });
        
        // Hide confirmation after 5 seconds
        setTimeout(() => {
          setShowConfirmation(false);
        }, 5000);
      } else {
        setSubmitError('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.log(error)
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showConfirmation) {
    return (
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
            
            <button
              onClick={() => setShowConfirmation(false)}
              className="secondary-bg text-white font-semibold py-3 px-8 rounded-md hover:secondary-light-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className='relative w-full h-[42rem] sm:h-[33rem] md:h-[28rem] lg:h-[20rem]'>
        {/* Form */}
        <form onSubmit={handleSubmit} className="absolute 
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
              required
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
  );
};

export default ContactFormCta;