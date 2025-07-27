'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBarTemp() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center px-6 py-2 lg:px-8">
        <Link href="/" className="flex relative max-h-[5rem] p-2 overflow-hidden justify-center items-center lg:w-[30rem]">
          <span className="sr-only">Everything Electrical Sydney</span>
          <Image
            alt="Everything Electrical Sydney"
            src="/images/logos/1.svg"
            width={200}
            height={100}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </nav>
    </header>
  )
}