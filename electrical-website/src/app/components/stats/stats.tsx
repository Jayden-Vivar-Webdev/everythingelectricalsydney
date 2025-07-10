
  type statItems = {
    id?: number;
    name?: string;
    value?: string;
  }
  type StatsProps = {
    title: string
    description?: string;
    stats: statItems[]
  }

  
  export default function Stats({title, description, stats}: StatsProps) {
    return (
        <div className="sectionary-bg-light py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-full">
                <div className="text-center space-y-5 max-w-6xl mx-auto">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {title}
                    </h2>
                    <div className="mx-auto w-20 h-1 bg-white rounded-full"></div>
                    {description?.split('\n\n').map((para, i) => (
                    <p key={i} className="text-lg text-white leading-relaxed pt-10">
                        <strong>{para}</strong>
                    </p>
                    ))}

                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats?.map((item, index) => (
                    <div
                        key={item.id ?? index}
                        className="flex flex-col rounded-xl bg-white/10 p-7 border border-white/20 shadow-lg hover:bg-white/20 transition duration-300 ease-in-out"
                    >
                        <dt className="text-xl font-semibold text-white mb-2 text-whites">✔️ {item.name}</dt>
                        <dd className="text-white/80 text-base leading-relaxed flex-grow">{item.value}</dd>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>

    )
  }
  