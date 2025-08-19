'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

const stats = [
  { label: 'Business Established', value: '2014' },
  { label: 'Projects Completed', value: '5,000+' },
  { label: 'Years of Excellence', value: '10+' },
  { label: 'Satisfied Clients', value: '1,000+' },
]

const values = [
  {
    name: 'Safety Excellence',
    description: 'Comprehensive safety protocols protecting clients, workforce, and community through rigorous industry standards and continuous monitoring.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Technical Mastery',
    description: 'Advanced technical expertise combined with precision services, delivering installations that exceed industry benchmarks.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Clear Communication',
    description: 'Transparent project communication with detailed progress updates and comprehensive upfront pricing without hidden costs.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Reliable Partnership',
    description: 'Consistent delivery excellence through punctual service, precise execution, and accountability.',
    icon: ClockIcon,
  },
  {
    name: 'Innovation Focus',
    description: 'Continuous advancement through emerging technologies, industry best practices, and ongoing professional development.',
    icon: BoltIcon,
  },
  {
    name: 'Client Success',
    description: 'Complete satisfaction guarantee through exceptional service delivery and enduring professional relationships.',
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

const serviceHighlights = [
  'Round-the-Clock Emergency Response',
  'Full-Spectrum Electrical Solutions',
  'Rapid Professional Deployment',
  'Certified 5-Star Service Rating',
  'Decade-Plus Industry Leadership',
  'Complete Sydney Metro Coverage',
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
              Everything Electrical 
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent pb-5">
                Sydney
              </span>
            </h1>
            <div className="pt-5 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <p className="mt-8 text-xl leading-8 text-slate-600 max-w-3xl mx-auto font-light">
            Professional, certified electricians delivering uncompromising excellence 
              across Sydney and the Blue Mountains region for over a decade.
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
                  Industry Leadership Through Excellence
                </h2>
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-6 text-lg md:text-xl text-gray-600">
                <p>
                  Our decade plus industry leadership spans comprehensive electrical solutions across residential, 
                  commercial, and industrial sectors. Through unwavering commitment to excellence, safety protocols, 
                  and client satisfaction, we&apos;ve established ourselves as Sydney&apos;s most trusted electrical services provider.
                </p>
                <p>
                  From sophisticated installations and system modernisations to critical maintenance and emergency 
                  responses, we deliver unmatched expertise with complete transparency and reliability. 
                  Our qualifications and insurance coverage ensures your investment remains protected 
                  by industry leading professionals.
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
              src="/images/assets/google-images/electrical-tools.jpg"
              fill
              className="object-cover"
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
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Our Professional Standards</h2>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
            </div>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              Every engagement reflects our commitment to integrity, reliability, and superior service
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
              <div className="relative h-80 lg:h-full">
                <Image
                  alt="Professional Electrician - Everything Electrical Sydney"
                  src="/images/assets/electrical-switchbox.jpg"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-12 lg:p-16">
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl leading-tight">
                    Partner With 
                    <span className="block text-red-400">Industry Professionals</span>
                  </h2>
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
                  <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                    Experience electrical services that consistently exceed industry standards for quality, 
                    safety, and professional excellence.
                  </p>
                  
                  <div className="mt-10 space-y-4">
                    {serviceHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <CheckCircleIcon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-300 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  
                    <a 
                      href="tel:0449003526" 
                      className="z-10 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Book Now
                      <span aria-hidden="true">→</span>
                    </a>
                    <Link
                      href="/services" 
                      className="z-10 inline-flex items-center justify-center gap-x-3 rounded-xl border border-slate-600 bg-transparent px-8 py-4 text-sm font-semibold text-white hover:bg-slate-800 transition-all duration-200"
                    >
                      View Services
                    </Link>
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