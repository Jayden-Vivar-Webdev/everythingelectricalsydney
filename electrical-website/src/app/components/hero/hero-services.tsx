'use client'
import React, { useState, useEffect } from 'react'
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  BuildingOffice2Icon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  DocumentTextIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    0: BoltIcon,
    1: ShieldCheckIcon,
    2: ClockIcon,
    // Add any future keys you need
  };
  

type Service = {
  title: string
  description: string
  features: string[]
}


type ServicesHeroProps = {
  title?: string
  titleSpan?: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  services?: Service[]
  ctaText?: string
}

export default function ServicesHero({
  title = "Professional",
  titleSpan = "Electrical Services",
  subtitle = "TRUSTED ELECTRICAL SOLUTIONS",
  description = "We deliver comprehensive electrical solutions for commercial and residential clients, combining industry-leading expertise with unwavering commitment to safety and quality.",
  backgroundImage = "/images/assets/electrical-switchbox.jpg", // Your image path here
  ctaText = "Request Consultation",
  services = [
    {
     
      title: "Electrical Installations",
      description: "Complete installation services with certified expertise",
      features: ["Commercial Wiring", "Residential Systems", "Panel Upgrades", "Code Compliance"]
    },
    {
      
      title: "Safety & Compliance",
      description: "Comprehensive safety assessments and certifications",
      features: ["Safety Audits", "Compliance Testing", "Risk Assessment", "Certification Services"]
    },
    {

      title: "Maintenance & Support",
      description: "Proactive maintenance and emergency response",
      features: ["Preventive Maintenance", "Emergency Response", "System Monitoring", "Technical Support"]
    }
  ]
}: ServicesHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="relative min-h-screen bg-white">
      {/* Image Background with White Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        
        {/* Black overlay to darken the background */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 sm:py-16 lg:py-20">
          
          {/* Left Column - Professional Content */}
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-600 rounded-full">
              <BuildingOffice2Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-white font-medium text-xs sm:text-sm tracking-wider">
                {subtitle}
              </span>
            </div>

            {/* Executive Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                <span className="font-extralight">{title}</span>
                <br />
                <span className="font-semibold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  {titleSpan}
                </span>
              </h1>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
            </div>

            {/* Professional Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-light">
              {description}
            </p>

            {/* Corporate Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: CheckCircleIcon, text: "Licensed Professional", subtext: "NSW Electrical License" },
                { icon: ShieldCheckIcon, text: "Fully Insured", subtext: "$20M Coverage" },
                { icon: StarIcon, text: "Quality Certified", subtext: "ISO 9001 Compliant" },
                { icon: DocumentTextIcon, text: "Warranty Protected", subtext: "10 Year Guarantee" }
              ].map((credential, index) => (
                <div 
                  key={index} 
                  className={`group p-4 sm:p-5 bg-white/90 backdrop-blur-md rounded-xl border border-white/30 shadow-lg hover:bg-white hover:shadow-xl hover:border-white/50 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-sm group-hover:bg-red-500/30 transition-all duration-75"></div>
                      <div className="relative p-2.5 sm:p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-md group-hover:from-red-500 group-hover:to-red-600 group-hover:shadow-lg transition-all duration-75">
                        <credential.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 font-semibold text-sm mb-1 group-hover:text-slate-800 transition-colors">{credential.text}</div>
                      <div className="text-slate-600 text-xs font-medium">{credential.subtext}</div>
                    </div>
                  </div>
                  
                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/20 via-red-500/50 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Executive Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <a
                href='/contact'
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center text-sm sm:text-base">
                  {ctaText}
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a href="tel:0400123456" className="block">
                <button className="group w-full flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-300 hover:bg-white hover:shadow-md text-slate-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base">
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Schedule Call
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Professional Services Panel */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Executive Services Container */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
              
              {/* Professional Header */}
              <div className="bg-slate-100/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900">Service Capabilities</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">Comprehensive electrical solutions</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Services Portfolio */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                {services.map((service, index) => {
                  const IconComponent = iconMap[index]
                  const isActive = index === activeService
                  
                  return (
                    <div
                      key={index}
                      className={`relative p-4 sm:p-6 rounded-xl border cursor-pointer transition-all duration-500 group ${
                        isActive 
                          ? 'bg-red-50 border-red-300 shadow-lg' 
                          : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md'
                      }`}
                      onClick={() => setActiveService(index)}
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${
                          isActive 
                            ? 'bg-red-600 text-white shadow-lg' 
                            : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                        }`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{service.title}</h4>
                          <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">{service.description}</p>
                          
                          {isActive && (
                            <div className="space-y-2 sm:space-y-3 mt-4 animate-fadeIn">
                              {service.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Corporate Metrics */}
              <div className="bg-slate-100/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-slate-200">
                <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">1000+</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">Projects Delivered</div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">10+</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">Years Experience</div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">100%</div>
                    <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}