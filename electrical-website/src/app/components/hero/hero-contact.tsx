'use client'
import React, { useState } from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios';

type ContactFormProps = {
  title?: string
  backgroundImage?: string;
  description?: React.ReactNode
  address?: {
    line1: string
    line2?: string
    cityStateZip?: string
  }
  phone?: string
  email?: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function HeroContact({
  title = 'Get in touch',
  description = (
    <>
      Learn More About Our Services
    </>
  ),
  address = {
    line1: 'Sydney',
    line2: '',
    cityStateZip: 'NSW, AUS 2000',
  },
  phone = '0449 003 526',
  email = 'info@everythingelectricalsydney.com.au',
  backgroundImage = '/images/electrician.jpg',
  
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    robotCheck: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    if(!executeRecaptcha) {
      console.log("not available to execute recaptcha")
      return
    }

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields')
      }

      if (!formData.robotCheck) {
        throw new Error('Please confirm you are not a robot')
      }

      const gRecaptchaToken = await executeRecaptcha('inquirySubmit')
      console.log('Token:', gRecaptchaToken);

      const responseRecaptcha = await axios({
        method: "post",
        url: "/api/recaptcha-submit",
        data: {
          gRecaptchaToken
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        }
      })

      if(responseRecaptcha?.data?.success === true){
        console.log(`Success with score: ${responseRecaptcha?.data?.score}`)
      } else {
        setSubmitStatus('error')
        setErrorMessage('Failed reCAPTCHA verification. Please try again.')
        return;
      }

      // Create FormData object
      const submitData = {
        from_name: 'Electrical Services Website',
        subject: 'New Contact Form Submission',
        fullName: `${formData.firstName} ${formData.lastName}`,
        mobile: formData.phone,
        email: formData.email,
        address: 'Not Provided',
        serviceType: 'Not Provided',
        description: formData.message
      };

      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          robotCheck: false
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
     <div className="relative isolate">
      <div className="mx-auto grid max-w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative flex w-full justify-center px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2 bg-gray-900">
            <Image
                src={backgroundImage}
                alt="Background decoration"
                width={500}
                height={800}
                priority
                className="absolute inset-0 h-full w-full object-cover opacity-[0.2]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            />
            </div>
            <h2 className="text-pretty text-white text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
            <div className='py-1 inline-flex mt-6 rounded-xl'>
                <strong className=" text-lg/8 text-white">{description}</strong>
            </div>
            
            <dl className="mt-10 space-y-4 text-base/7 text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 bg-red-600 p-1 rounded-lg" />
                </dt>
                <dd>
                  {address.line1}
                  <br />
                  {address.line2 && <>{address.line2}<br /></>}
                  {address.cityStateZip}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text bg-red-600 p-1 rounded-lg" />
                </dt>
                <dd>
                  <a href={`tel:${phone}`} className="hover:text-gray-200">
                    {phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 bg-red-600 p-1 rounded-lg" />
                </dt>
                <dd>
                  <a href={'#'} className="hover:text-gray-200">
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="flex flex-col w-full px-1 sm:px-6 md:px-10 justify-center lg:px-5 xl:px-20">
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Contact Us</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 rounded-md bg-green-50 p-4 border-l-4 border-green-400">
                <div className="flex">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Message sent successfully!
                    </h3>
                    <p className="mt-1 text-sm text-green-700">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 rounded-md bg-red-50 p-4 border-l-4 border-red-400">
                <div className="flex">
                  <XCircleIcon className="h-5 w-5 text-red-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Error sending message
                    </h3>
                    <p className="mt-1 text-sm text-red-700">
                      {errorMessage || 'There was a problem sending your message. Please try again.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-rows gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Have any questions? Feel free to ask.</span>
              </div>
              <div className="flex items-center gap-2 pb-10">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>We&apos;re here to help and will respond within 24 hours.</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-700">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-700">
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-700">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="robotCheck"
                name="robotCheck"
                checked={formData.robotCheck}
                onChange={handleInputChange}
                className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                required
              />
              <label htmlFor="robotCheck" className="text-sm text-gray-600">
                I&apos;m not a robot
              </label>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </>
   
  )
}