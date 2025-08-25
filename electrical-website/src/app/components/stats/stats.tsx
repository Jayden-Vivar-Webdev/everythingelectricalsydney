import { CheckIcon } from '@heroicons/react/24/solid';

  
  type featureItem = {
    id?: number;
    name?: string;
    value?: string;
  }
  type FeaturesProps = {
    title: string
    description?: string;
    featureItems: featureItem[]
  }

  
  export default function Features({ title, description, featureItems }: FeaturesProps) {
    
    return (
        <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {title}
                </h2>
                
                <div className="mx-auto mt-8 w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                
                {description?.split('\n\n').map((para, i) => (
                    <p key={i} className="mt-8 text-xl leading-8 text-gray-300/90 font-light">
                        {para}
                    </p>
                ))}
            </div>
            <div className={`mt-24 grid gap-6 sm:gap-8 ${
                featureItems.length === 6 
                    ? 'grid-cols-2 md:grid-cols-3' 
                    : 'grid-cols-2'
            }`}>
                {featureItems?.map((item, index) => (
                    <div
                        key={item.id ?? index}
                        className="group relative flex flex-col rounded-xl bg-white/5 p-6 sm:p-8 backdrop-blur-sm border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 ease-in-out hover:shadow-3xl hover:-translate-y-2"
                    >
                        {/* Gradient glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                        
                        <div className="relative flex items-start mb-4 sm:mb-6 space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-700 shadow-lg">
                                <CheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug">{item.name}</h3>
                        </div>
                        
                        <p className="relative mt-2 text-sm sm:text-base text-gray-300/80 leading-relaxed flex-grow font-light">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}
  