'use client'
import Image from 'next/image'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

const stats = [
  { label: 'Business Established', value: '2010' },
  { label: 'Projects Completed', value: '5,000+' },
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Satisfied Clients', value: '1,000+' },
]

const values = [
  {
    name: 'Licensed & Insured',
    description: 'All our electricians are fully licensed and insured for complete peace of mind.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transparent Pricing',
    description: 'Upfront quotes, no hidden costs, no surprises.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Safety First',
    description: 'We follow strict safety protocols to protect your home, family, or workplace.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Same-Day Service',
    description: 'Available across Sydney for urgent jobs and emergencies.',
    icon: ClockIcon,
  },
  {
    name: '24/7 Emergency Respons',
    description: ' Faults, outages, hazards we’re here when you need us most.',
    icon: BoltIcon,
  },
  {
    name: 'Best Price Guarantee',
    description: 'We’ll beat any written quote from a competitor.',
    icon: StarIcon,
  },
]

const portfolio = [
  {
    name: 'Commercial Switchboard Upgrade',
    category: 'Infrastructure Modernization',
    imageUrl: '/images/assets/google-images/switch-boards.webp',
    location: 'Camden Business District',
  },
  {
    name: 'Integrated Security Infrastructure',
    category: 'Commercial Systems',
    imageUrl: '/images/assets/google-images/cctv-installation.webp',  
    location: 'Liverpool Commercial Hub',
  },
  {
    name: 'Power Distribution Network',
    category: 'Electrical Infrastructure',
    imageUrl: '/images/assets/google-images/electrical-upgrade.webp',
    location: 'Granville Industrial Complex',
  },
  {
    name: 'Level 2 ASP Services',
    category: 'Utility-Grade Work',
    imageUrl: '/images/assets/google-images/powerline-repair.webp',
    location: 'Wollongong Region',
  },
  {
    name: 'Emergency Response System',
    category: '24/7 Critical Services',
    imageUrl: '/images/assets/google-images/road-powerline.webp',
    location: 'Gregory Hills Development',
  },
  {
    name: 'Smart Home Integration',
    category: 'Residential Automation',
    imageUrl: '/images/assets/google-images/residential.webp',
    location: 'Campbelltown Residential',
  },
  {
    name: 'Commercial AV Systems',
    category: 'Technology Integration',
    imageUrl: '/images/assets/google-images/tv-installation.webp',
    location: 'Sutherland Corporate Center',
  },
  {
    name: 'HVAC Electrical Systems',
    category: 'Climate Infrastructure',
    imageUrl: '/images/assets/google-images/aircon.webp',
    location: 'Cronulla Commercial',
  },
]


export default function AboutPageSection() {
  return (
    <div className="bg-white">
      {/* Hero Section with Enhanced Visual Hierarchy */}
      <section className="relative">
        <div className="absolute inset-0"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-red-50 px-6 py-2 text-sm font-medium text-red-700 ring-1 ring-red-600/20">
                Sydney&apos;s Premier Electrical Contractors
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
            Local, Trusted & Reliable Electricians Since 2010
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent pb-5">
                Sydney
              </span>
            </h1>
            <div className="pt-5 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <p className="space-y-6 mt-6 text-lg md:text-xl leading-8 text-gray-600 text-slate-600">
              At Everything Electrical Sydney, we’ve been powering homes, businesses, 
              and communities across Sydney and the Blue Mountains since 2010. 
              Over the past decade, we’ve built our reputation on one simple promise: safe, 
              reliable, and professional electrical services you can trust.
              <br></br><br></br>What started as a small local business has grown into one of Sydney’s 
              most trusted electrical teams. With thousands of successful projects behind us 
              from family homes and apartments to large commercial and industrial sites 
              our goal has always stayed the same: deliver quality work, honest advice, and real peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Company Overview with Visual Elements */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
                More Than a Decade of Service You Can Rely On

                </h2>
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
              </div>
              <div className="space-y-6 mt-6 text-lg md:text-xl leading-8 text-gray-600 text-slate-600">

              
                <p>
                With over 5,000 projects completed and more than 1,000 satisfied clients, our experience speaks for itself. We know every customer, every home, and every business is different, which is why we take the time to listen, explain, and deliver solutions that work long-term — not quick fixes.
                </p>
                
                
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-900 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 h-full">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col justify-center items-center text-center bg-slate-800/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-white lg:text-4xl">{stat.value}</div>
                      <div className="text-sm font-medium text-white mt-2 uppercase tracking-wide">{stat.label}</div>
                      <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-red-600 to-red-500 mx-auto opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Showcase Image */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative h-[24rem] lg:h-[36rem] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Professional Electrical Services - Everything Electrical Sydney"
              src="/images/precision-electrical.jpg"
              fill
              className="object-cover object-bottcom"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-8 lg:p-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  Precision Electrical Services Meets Professional Excellence
                </h3>
                <p className="mt-4 text-lg text-slate-200">
                  The best services and methodologies ensuring superior results on every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Why Sydney Chooses Everything Electrical</h2>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            We understand that inviting an electrician into your home or business requires trust. That’s why we keep things simple, transparent, and stress free.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.name} className="relative bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">{value.name}</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative h-20 w-100">
              <Image 
                src='/images/white-logo.png'
                alt='Everything Electrical Sydney - Professional Excellence'
                fill
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio with Better Layout */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Project Portfolio</h2>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our comprehensive electrical expertise across diverse commercial and residential projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image 
                    alt={project.name}
                    src={project.imageUrl}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.name}
                    </h3>
                    <p className="text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-red-600 font-medium text-sm uppercase tracking-wide">{project.category}</p>
                  <p className="text-sm text-slate-500">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl">
            <div className="absolute inset-0"></div>

            <div className="grid lg:grid-cols-2 items-center">
              {/* Left side image */}
              <div className="relative h-80 lg:h-full">
                <Image
                  alt="Professional Electrician - Everything Electrical Sydney"
                  src="/images/ees-about-image.jpg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
              </div>

              {/* Right side content */}
              <div className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto grid max-w-full grid-cols-1 items-start gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:grid-cols-1">
                    <div className="lg:pl-4">
                      <div className="text-sm sm:text-base leading-7 text-slate-700">
                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                          <span className="block">Our Commitment</span>
                          <span className="block text-red-600">to You</span>
                        </h1>

                        {/* Intro text */}
                        <div className="mt-6 text-xl leading-8 text-gray-600 text-slate-600">
                          <p className="mb-6 text-lg md:text-xl text-gray-600">
                            We’re proud to say our business is built on repeat customers
                            and referrals. People come back to us because we’re not just
                            here to “fix a job” we’re here to build trust and long-term
                            partnerships.
                          </p>

                          {/* Values list */}
                          <ul className="py-1 text-gray-600 list-disc list-inside space-y-2 mb-6 text-lg md:text-xl">
                            <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>Integrity:&nbsp;We do what we say, when we say it.</span>
                            </li>

                            <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>
                                Clear Communication:&nbsp;We explain the work, update you
                                along the way, and keep pricing upfront.
                              </span>
                            </li>

                            <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>
                                Reliability:&nbsp;We turn up on time, prepared, and ready
                                to get the job done right.
                              </span>
                            </li>

                            <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>
                                Innovation:&nbsp;From smart home automation to
                                energy-efficient upgrades, we keep up with the latest
                                technology.
                              </span>
                            </li>

                            <li className="flex items-start gap-2 text-lg md:text-xl mb-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>
                                Community Focus:&nbsp;As a local Sydney team, we’re proud
                                to support families, businesses, and property managers
                                across the region.
                              </span>
                            </li>
                          </ul>
                        </div>
                        {/* End intro */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}