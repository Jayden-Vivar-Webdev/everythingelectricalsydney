'use client'
import Image from 'next/image'
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
    { label: 'Business was founded', value: '2014' },
    { label: 'Projects completed', value: '5,000+' },
    { label: 'Years Of Experience', value: '10+' },
    { label: 'Satisfied clients', value: '1,000+' },
  ]
  
  const values = [
    {
      name: 'Safety First.',
      description: 'We follow strict safety protocols on every job to protect our clients, team, and community.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Professional Workmanship.',
      description: 'Every installation and repair is done to the highest standard, no shortcuts, ever.',
      icon: WrenchScrewdriverIcon,
    },
    {
      name: 'Transparent Communication.',
      description: 'We explain our process clearly, keep you informed, and never surprise you with hidden fees.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Reliability You Can Trust.',
      description: 'We show up on time, do the job right, and stand by our work.',
      icon: ClockIcon,
    },
    {
      name: 'Constant Improvement.',
      description: 'We stay up to date with new technologies and electrical standards to deliver the best.',
      icon: BoltIcon,
    },
    {
      name: 'Customer Satisfaction.',
      description: 'Our job isn’t done until you’re happy, we take pride in earning your trust.',
      icon: StarIcon,
    },
  ]
  

const team = [
  {
    name: 'Switch Board Upgrade',
    role: 'Repair & Maintenance',
    imageUrl:
      '/images/assets/google-images/switch-boards.webp',
    location: 'Camden, NSW',
  },
  {
    name: 'CCTV Installation',
    role: 'Security Installation',
    imageUrl:
      '/images/assets/google-images/cctv-installation.webp',
    location: 'Liverpool, NSW',
  },
  {
    name: 'Switchboard Installation',
    role: 'Electrical Installation',
    imageUrl:
      '/images/assets/google-images/electrical-upgrade.webp',
    location: 'Grandville, NSW',
  },
  {
    name: 'Powerline Repair',
    role: 'Level 2 Electrical',
    imageUrl:
      '/images/assets/google-images/powerline-repair.webp',
    location: 'Wollongon, NSW',
  },
  {
    name: 'Emergency Electrician',
    role: '24/7 Emergency',
    imageUrl:
      '/images/assets/google-images/road-powerline.webp',
    location: 'Gregory Hills, NSW',
  },
  {
    name: 'Residential Electrical',
    role: 'Installation & Upgrade',
    imageUrl:
      '/images/assets/google-images/residential.webp',
    location: 'Campbelltown, NSW',
  },
  {
    name: 'Tv Installation',
    role: 'Residential Installations',
    imageUrl:
      '/images/assets/google-images/tv-installation.webp',
    location: 'Toronto, Canada',
  },
  {
    name: 'Air conditioner Installation',
    role: 'Residential Installation',
    imageUrl:
      '/images/assets/google-images/aircon.webp',
    location: 'Cronulla, NSW',
  },
]
const benefits = [
  '24/7 Avaliability',
  'Emergency Electrical Services',
  'Fast Response Times',
  '5 Star Rated Service',
  '10+ Years Experience',
  'Servicing Sydney Wide',
]


export default function AboutPageSection() {


  return (
    <div className="bg-white pb-10">

  <section className="relative isolate">
    {/* Header section */}
    <div className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Everything Electrical Sydney</h1>
        <div className="mt-8 h-1 w-20 bg-red-600 mx-auto"></div>
        <p className="mt-8 text-lg text-gray-600 sm:text-xl">
          We are your trusted licensed and insured electricians serving Sydney and the red Mountains. 
          With over a decade of experience, we deliver professional electrical solutions with 
          uncompromising quality and reliability.
        </p>
      </div>
    </div>

    {/* Content section */}
    <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-8 text-base text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              Our certified team provides comprehensive electrical services including residential 
              and commercial installations, repairs, and maintenance. We specialize in Level 2 
              ASP services and emergency electrical solutions, ensuring prompt and efficient 
              resolution of all your electrical requirements.
            </p>
            <p className="mt-8">
              Understanding that electrical emergencies can occur at any time, we offer 24/7 
              availability with same-day service for urgent situations. Our transparent pricing 
              policy ensures you receive clear, upfront quotes with no hidden costs.
            </p>
          </div>
          <div>
            <p>
              Our commitment to excellence and customer satisfaction has established us as a 
              preferred electrical services provider in the Sydney metropolitan area. We&apos;re proud 
              of our consistently high customer ratings and repeat business from satisfied clients.
            </p>
            <p className="mt-8">
              As your reliable electrical partner, we combine technical expertise with professional 
              service standards. Contact us today to experience our commitment to quality, 
              transparency, and responsive service.
            </p>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
          {stats.map((stat, statIdx) => (
            <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l-2 border-red-600 pl-6">
              <dt className="text-base text-gray-600">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    {/* Image section */}
    <div className="mt-10 h-[25rem] sm:mt-20 sm:h-[30rem] md:h-[40rem] lg:h-[50rem] p-5 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image
        alt="Professional Electrical Services"
        src="/images/assets/google-images/electrical-tools.jpg"
        width={1500}
        height={700}
        className="aspect-[9/4] w-full h-full rounded-lg object-cover xl:rounded-lg"
      />
    </div>

    {/* Values section */}
    <div className='bg-gray-900 mt-10 sm:mt-20 px-10 py-15'>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto flex flex-wrap w-full justify-between lg:mx-0">
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Core Values</h2>
            <div className="mt-4 h-1 w-16 bg-red-600"></div>
            <p className="mt-6 text-lg text-white">
            The principles that guide our professional service delivery
            </p>
        </div>
        <div className='flex w-[20rem] h-[10rem]'>
            <Image 
                src='/images/white-logo.png'
                alt='Electrical Services - Everything Electrical Sydney'
                width={500}
                height={200}
                className='w-full h-full object-cover [object-position:-10px_center] lg:[object-position:-10px_-139px]'
            />
        </div>
      </div>
      <dl className="text-white mx-auto mt-5 grid lg:mt-16 grid-cols-1 gap-8 text-base text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        {values.map((value) => (
          <div key={value.name} className="relative pl-9">
            <dt className="inline font-semibold text-red">
              <value.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-red-600" />
              {value.name}
            </dt>{' '}
            <dd className="inline text-white">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
    </div>
    

    {/* Portfolio section */}
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
        <div className="mt-4 h-1 w-16 bg-red-600"></div>
        <p className="mt-6 text-lg text-gray-600">
          A selection of our recent professional electrical projects
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        {team.map((person) => (
          <li key={person.name}>
            <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-lg object-cover shadow-md" />
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-900">{person.name}</h3>
            <p className="text-base text-gray-600">{person.role}</p>
            <p className="text-sm text-gray-500">{person.location}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* CTA section */}
    <div className="relative mt-32 sm:mt-40">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-900 px-6 py-16 ring-1 ring-gray-200 sm:rounded-lg sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img
            alt="Professional Electrician"
            src="/images/assets/electrical-switchbox.jpg"
            className="h-96 w-full flex-none rounded-lg object-cover shadow-lg lg:aspect-square lg:h-auto lg:max-w-sm"
          />
          <div className="w-full flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Our Professional Team
            </h2>
            <div className="mt-4 h-1 w-16 bg-red-600"></div>
            <p className="mt-6 text-lg text-white">
              Everything Electrical Sydney provides professional electrical services with the highest standards of quality and safety.
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base text-white sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-x-3">
                  <CheckCircleIcon aria-hidden="true" className="h-6 w-5 flex-none text-red-600" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <a href="tel:0449003526" className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Request Professional Consultation <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}
