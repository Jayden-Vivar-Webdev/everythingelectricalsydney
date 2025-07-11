'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  DocumentTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, WrenchScrewdriverIcon, Cog8ToothIcon, Battery100Icon, BoltIcon, PhoneIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
  {
    name: 'Emergency Electrician',
    description: 'Get fast effective solutions for your electrical needs',
    href: '/services',
    icon: BoltIcon,
  },
  {
    name: 'Level 2 Electrician',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  { name: 'Switch Board Upgrades', description: 'Switch board upgrades onsite', href: '#', icon: Cog8ToothIcon },
  {
    name: 'EV Charger Installation',
    description: 'Secure your at home EV charger now',
    href: '#',
    icon: Battery100Icon,
  },
]
const callsToAction = [
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
  { name: 'View all Services', href: '#', icon: RectangleGroupIcon },
  { name: 'Request a Quote', href: '#', icon: DocumentTextIcon },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex relative max-h-[5rem] p-2 overflow-hidden justify-center items-center">
            <span className="sr-only">Everything Electrical Sydney</span>
            <img
              alt="Everything Electrical Sydney"
              src="/images/logos/1.svg"
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold ">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-16 bg-white transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
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
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold ">
            About
          </a>
          <a href="#" className="text-sm/6 font-semibold ">
            Contact
          </a>
          <a href="#" className="text-sm/6 font-semibold ">
            Blog
          </a>
          <a href="#" className="text-sm/6 secondary-bg text-white px-4 py-1 rounded-lg font-semibold hover:bg-red-500">
            Contact Us<span aria-hidden="true"></span>
          </a>
        </PopoverGroup>
        
          
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="h-[5rem] w-[15rem]">
              <span className="sr-only">Everything Electrical Sydney</span>
              <img
                alt="Everything Electrical Sydney"
                src="/images/logos/1.svg"
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold secondary-text hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
