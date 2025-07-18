import MapLocations from "@/app/components/locations/map-locations"
import Link from "next/link"
export default function ThankYou(){
    return(
        <>
        <div className="bg-gray-900 relative">
      <div className="relative isolate overflow-hidden pt-14 pb-[10rem]">
        <img
          alt='Thank you for contacting everythign electrical'
          src='/images/assets/electrical-switchbox.jpg'
          className="absolute inset-0 -z-10 w-full h-full object-cover opacity-[0.2]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
           
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Thank You For Contacting Everything Electrical Sydney
              </h1>
              
                <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
                  We will get back to you shortly. If you would like to speak to us immediately please click the &ldquo;Call Now&rdquo; button below.
                </p>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                
                  <a
                    href="tel:0449003526"
                    id='1'
                    className="rounded-md secondary-bg px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:secondary-bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Call Now
                  </a>
                  <Link href='/' className="text-sm/6 font-semibold text-white">
                    Return To Home <span aria-hidden="true">→</span>
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        />
      </div>
      
    </div>
    <div className='py-10 bg-white'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 pb-10">
        <span className="mr-2">Servicing Location</span>
        <span className="text-red-600">Mapped View </span>
        
        </h1>
          <MapLocations />
        </div> 
      </div>
    
    </>    
    )
}