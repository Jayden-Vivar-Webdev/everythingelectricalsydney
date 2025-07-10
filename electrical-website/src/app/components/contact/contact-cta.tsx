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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  

  return (
    <>
      {/* Header */}
      <div className='flex w-full h-[42rem] sm:h-[40rem] md:h-[28rem] lg:h-[25rem] '>

      
        {/* Form */}
        <form onSubmit={handleSubmit} className="absolute 
        w-[90%] 
        max-w-7xl 
        left-1/2 
        -translate-x-1/2 
        space-y-6 bg-white 
        bottom-1
        translate-y-1/3
        sm:translate-y-4/6
        md:translate-y-3/6
        lg:bottom-10
        lg:translate-y-5/8
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
              />
            </div>
            
            <div>
              <input
                type="text"
                name="address"
                placeholder="Job Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
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
              >
                <option value="">Service Type</option>
                <option value="emergency-repair">Emergency Repair</option>
                <option value="installation">Installation</option>
                <option value="maintenance">Maintenance</option>
                <option value="inspection">Inspection</option>
                <option value="replacement">Replacement</option>
                <option value="renovation">Renovation</option>
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
              />
              <label htmlFor="robot-check" className="text-sm text-gray-600">
                I&apos;m not a robot
              </label>
            </div>
            
            <div className="flex-1">
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Book now
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