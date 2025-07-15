import React from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type ContactFormProps = {
  title?: string
  backgroundImage: string;
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
      Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
      integer elementum id sem. Arcu sed malesuada et magna.
    </>
  ),
  address = {
    line1: '545 Mavis Island',
    line2: '',
    cityStateZip: 'Chicago, IL 99191',
  },
  phone = '+1 (555) 234-5678',
  email = 'hello@example.com',
  backgroundImage = '#',
  onSubmit,
}: ContactFormProps) {
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
                width={400}
                height={800}
                className="absolute inset-0 h-full w-full object-cover opacity-[0.2]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            />
            </div>
            <h2 className="text-pretty text-white text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{title}</h2>
            <div className='px-3 py-1 secondary-bg inline-flex mt-6 rounded-xl'>
                <strong className=" text-lg/8 text-white text-white">{description}</strong>
            </div>
            
            <dl className="mt-10 space-y-4 text-base/7 text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6" />
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
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text" />
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
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6" />
                </dt>
                <dd>
                  <a href={`mailto:${email}`} className="hover:text-gray-200">
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          onSubmit={onSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="flex flex-col w-full px-1 sm:px-6 md:px-10 justify-center lg:px-5 xl:px-20">
            
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Contact Us</h2>
            <div className="grid grid-rows gap-4 text-sm text-gray-600">
              
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Have any questions? Feel free to ask. </span>
              </div>
              <div className="flex items-center gap-2 pb-10">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>We&apos;re here to help and will respond within 24 hours.</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black">
                  Last name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-black">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-black">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
            <button type="submit" className="w-full secondary-bg text-white font-semibold py-3 px-8 rounded-md hover:secondary-light-bg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              Send Message
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    </>
   
  )
}
