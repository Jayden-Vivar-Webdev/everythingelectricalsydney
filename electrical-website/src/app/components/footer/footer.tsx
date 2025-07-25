'use client';
import React from 'react';
import Image from 'next/image';
const navigation = {
  services: [
    { name: 'Electrical Installations', href: '/services/installations' },
    { name: 'Switchboard Upgrades', href: '/services/switchboards' },
    { name: 'Lighting Solutions', href: '/services/lighting' },
    { name: 'Safety Inspections', href: '/services/inspections' },
    { name: 'Emergency Repairs', href: '/services/emergency' },
  ],
  areas: [
    { name: 'Sydney CBD', href: '/areas/cbd' },
    { name: 'Eastern Suburbs', href: '/areas/eastern' },
    { name: 'Northern Beaches', href: '/areas/northern' },
    { name: 'Inner West', href: '/areas/inner-west' },
    { name: 'Western Sydney', href: '/areas/western' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
  ],
  contact: [
    { name: 'Call: 0449 003 526', href: 'tel:0449003526' },
    { name: 'Contact Form', href: '#contact' }
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/everythingelectricalsydney',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/everythingelectricalsydney',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center w-[10rem] h-[2rem] md:w-[15rem]">
                <Image
                  alt="Everything Electrical Sydney"
                  src="/images/white-logo.png"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover object-left"
                />
                
              </div>
              <p className="text-sm">
                Licensed, insured electrical contractors serving Sydney since 2010. 24/7 emergency services available.
              </p>
              <div className="flex space-x-4 ml-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Service Areas
              </h3>
              <ul className="space-y-2">
                {navigation.areas.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact Us
              </h3>
              <ul className="space-y-2">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Business Hours
                </h4>
                <p className="mt-2 text-[15px]">Mon-Fri: 7am - 5pm</p>
                <p className="text-[15px]">Sat-Sun: Emergency only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm hover:text-white">
                Terms of Service
              </a>
              <a href="/licenses" className="text-sm hover:text-white">
                Licenses
              </a>
            </div>
            <p className="mt-4 text-sm md:mt-0">
              &copy; {new Date().getFullYear()} Everything Electrical Sydney. All rights reserved. ABN: 73 633 557 810 
            </p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500 md:text-left">
            <p>Licensed Number: 342944c | Everything Electrical Sydney</p>
          </div>
        </div>
      </div>
    </footer>
  );
}