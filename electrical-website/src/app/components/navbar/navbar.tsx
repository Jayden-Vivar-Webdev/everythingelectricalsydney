'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  
} from '@headlessui/react'
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  Bars3Icon,
  BellAlertIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  FireIcon,
  HomeIcon,
  SparklesIcon,
  SunIcon,
  VideoCameraIcon,
  WrenchIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, AdjustmentsHorizontalIcon, WrenchScrewdriverIcon, Cog8ToothIcon, Battery100Icon, BoltIcon, PhoneIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'


const products = [
  {
    name: 'Emergency Electrician',
    description: 'Rapid 24/7 response across Sydney for faults, outages & hazards.',
    href: '/emergency-electrician',
    icon: BoltIcon,
  },
  {
    name: 'Level 2 Electrician',
    description: 'Expert Level 2 electricians for advanced electrical needs.',
    href: '/level-2-electrician',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Switch Board Upgrades',
    description: 'Fast upgrades to improve safety and performance.',
    href: '/switchboard-upgrades',
    icon: Cog8ToothIcon,
  },
  {
    name: 'EV Charger Installation',
    description: 'Fast and efficient EV charger installations at your home.',
    href: '/ev-chargers',
    icon: Battery100Icon,
  },
  {
    name: 'Hot Water Systems',
    description: 'Installation and maintenance of electric hot water systems.',
    href: '/hot-water-systems',
    icon: FireIcon,
  },
  {
    name: 'Electrical Repairs',
    description: 'Prompt and reliable electrical repairs for home or business.',
    href: '/electrical-repairs',
    icon: WrenchIcon,
  },
  {
    name: 'Ceiling Fans',
    description: 'Installations for year-round comfort and energy efficiency.',
    href: '/ceiling-fans',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'CCTV Installation',
    description: 'High-quality surveillance for home and business security.',
    href: '/cctv-installation',
    icon: VideoCameraIcon,
  },
  {
    name: 'Air Conditioning Services',
    description: 'Licensed aircon wiring & installation of split/ducted systems.',
    href: '/air-conditioning',
    icon: SunIcon,
  },
  {
    name: 'Residential Electrical',
    description: 'Complete electrical solutions for homes and renovations.',
    href: '/residential-electrical',
    icon: HomeIcon,
  },
  {
    name: 'Commercial Electrical',
    description: 'Fit-outs, maintenance & energy-efficient solutions for business.',
    href: '/commercial-electrical',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Electrical Maintenance & Repairs',
    description: 'Emergency & scheduled servicing for all property types.',
    href: '/electrical-maintenance',
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: 'Smart Home, Alarms & Connected Systems',
    description: 'Smart lighting, alarms & climate control accessible from your phone.',
    href: '/smart-home',
    icon: SparklesIcon,
  },
  {
    name: 'Smoke Alarms & Compliance',
    description: 'Certified installations & testing to meet NSW safety standards.',
    href: '/smoke-alarms',
    icon: BellAlertIcon,
  },
  {
    name: 'Real Estate & Strata Services',
    description: 'Reliable support & maintenance for property managers.',
    href: '/real-estate-strata',
    icon: ClipboardDocumentCheckIcon,
  },
]
const callsToAction = [
  { name: 'Contact Us', href: 'tel:0449003526', icon: PhoneIcon },
  { name: 'View all Services', href: '/services', icon: RectangleGroupIcon },
  { name: 'Request a Quote', href: '/contact', icon: DocumentTextIcon },
]



export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Sample data - replace with your actual data
 

  return (
    <>
    <header className=" fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex relative max-h-[5rem] p-2 overflow-hidden justify-center items-center lg:w-[30rem]">
            <span className="sr-only">Everything Electrical Sydney</span>
            <Image
              alt="Everything Electrical Sydney"
              src="/images/logos/1.svg"
              width={200}
              height={100}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold ">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-20 bg-white transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />
              <div className="relative bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div key={item.name} className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-red-600" />
                      </div>
                      <a href={item.href} className="mt-6 block font-semibold secondary-text">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-red-600">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex text-white items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-red-500"
                        >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-white" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/about" className="text-sm/6 font-semibold ">
            About
          </a>
          <a href="/contact" className="text-sm/6 font-semibold ">
            Contact
          </a>
          <a href="/blog" className="text-sm/6 font-semibold ">
            Blog
          </a>
          
            
            <a href="tel:" className="text-sm/6 secondary-bg text-white px-4 py-1 rounded-lg font-semibold hover:bg-red-500 inline-flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              Call Us
            </a>
          
        </PopoverGroup>
        
          
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="h-[5rem] w-[15rem]">
              <span className="sr-only">Everything Electrical Sydney</span>
              <Image
                alt="Everything Electrical Sydney"
                src="/images/logos/1.svg"
                width={100} // adjust as needed
                height={100} // adjust as needed
                className="w-full h-full object-cover"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
          <div className="bg-white">

            {/* MAKESURE TO REMOVE HIDDEN */}
      <div className="px-2 py-1">
        <div className="space-y-1">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium text-gray-900 hover:bg-gradient-to-r hover:from-red-50 hover:to-indigo-50 hover:text-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="flex items-center">
                <span className="text-lg">Services</span>
              </span>
              <ChevronDown 
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180 text-red-600' : ''
                }`}
              />
            </button>
            
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-1 border-l-2 border-red-100 pl-4">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-start rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-red-700">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                  
                  {/* Call to Action Items */}
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation Links MAKESURE TO REMOVE HIDDEN */}
            <a
              href="/about"
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-700 transition-all duration-200"
            >
              <span>About</span>
              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/contact"
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-700 transition-all duration-200"
            >
              <span>Contact</span>
              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/blog"
              className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-700 transition-all duration-200"
            >
              <span>Blog</span>
              <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Action Section */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-3">
              <button onClick={() => {window.location.href = '/contact'; }} className="w-full secondary-bg text-white font-semibold py-3 px-4 rounded-lg hover:from-red-700 hover:to-indigo-700 transform hover:scale-101 transition-all duration-200 shadow-md hover:shadow-lg">
                Get Started Today
              </button>
              <button onClick={() => {window.location.href = '/services'; }} className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    
    </>
  )
}







