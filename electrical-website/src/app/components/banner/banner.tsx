export default function Banner() {
  return (
    <div className="flex flex-wrap items-center justify-center secondary-bg px-4 sm:px-6 py-3 text-white text-sm text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-2">
        <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
        <strong className="font-semibold">We’re available 24/7</strong>

        <svg
          viewBox="0 0 2 2"
          aria-hidden="true"
          className="mx-2 size-0.5 fill-current hidden sm:inline"
        >
          <circle r={1} cx={1} cy={1} />
        </svg>

        <a
          href="tel:0449003526"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          <strong>Contact Us Now 0449 003 526</strong> <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
