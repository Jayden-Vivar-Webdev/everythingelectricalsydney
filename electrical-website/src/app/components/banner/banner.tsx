export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 secondary-bg px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
        <a href="#">
          <strong className="font-semibold">We’re available 24/7</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Contact Us Now we are always here, your trusted emergency electrical service. &nbsp;<span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        
      </div>
    </div>
  )
}
