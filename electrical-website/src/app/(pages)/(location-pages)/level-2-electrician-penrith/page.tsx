import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localBusinessData } from "@/app/data/local-business-data";

export const metadata: Metadata = {
  title:
    "Level 2 Electrician Penrith | ASP Accredited | Everything Electrical Sydney",
  description:
    "Trusted Penrith Level 2 electricians for metering, underground and overhead service lines, disconnections, reconnections, and emergency repairs. Fully compliant with Ausgrid and Endeavour Energy requirements, servicing Penrith and greater Sydney.",
  alternates: {
    canonical:
      "https://www.everythingelectricalsydney.com.au/level-2-electrician-penrith",
  },
  openGraph: {
    url: "https://www.everythingelectricalsydney.com.au/level-2-electrician-penrith",
    title:
      "Level 2 Electrician Penrith | ASP Accredited | Everything Electrical Sydney",
    description:
      "ASP Level 2 electricians in Penrith handling metering, overhead and underground service lines, disconnections, reconnections, and emergency repairs across Penrith and Sydney.",
    images: [
      {
        url: "https://www.everythingelectricalsydney.com.au/images/electrical_og.png",
        width: 1200,
        height: 630,
        alt: "Level 2 electrician working on service mains in Penrith",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "level 2 electrician Penrith",
    "ASP level 2 Penrith",
    "meter install Penrith",
    "overhead service repairs Penrith",
    "underground consumer mains Penrith",
    "level 2 emergency repairs Penrith",
    "level 2 electrician Sydney",
  ],
  authors: [{ name: "Everything Electrical Sydney" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const services = [
  {
    title: "New Connections & Disconnections",
    copy: "Safe, compliant connection or isolation of your property to the network for new builds, upgrades, or renovations.",
  },
  {
    title: "Meter Installation & Relocation",
    copy: "Accurate metering for new builds, secondary dwellings, or renovations, including relocations and upgrades.",
  },
  {
    title: "Overhead & Underground Service Lines",
    copy: "Installation, upgrade, and repair of overhead or underground service lines for reliable network access.",
  },
  {
    title: "Private Power Poles",
    copy: "Installation and maintenance of private poles when your property needs a dedicated supply point.",
  },
  {
    title: "Emergency Network Repairs",
    copy: "Rapid response for urgent service line issues to restore supply quickly and safely.",
  },
  {
    title: "Switchboard Upgrades & Repairs",
    copy: "Modern switchboard upgrades, increased capacity, and repairs for safety and compliance.",
  },
];

const faqs = [
  {
    q: "What is Level 2 electrical work?",
    a: "It covers high voltage and network level services such as meter installations, service line connections, and private power poles. Only licensed ASP Level 2 electricians can perform this work.",
  },
  {
    q: "Why should I hire a licensed Level 2 electrician in Penrith?",
    a: "Hiring a licensed Level 2 electrician keeps your property safe and compliant, ensures network works are done correctly the first time, and protects long term reliability.",
  },
  {
    q: "Can you handle urgent Level 2 electrical repairs?",
    a: "Absolutely. We offer rapid response for emergency service line issues or urgent meter and connection faults across Penrith and Sydney.",
  },
  {
    q: "Do you service my area?",
    a: "Yes we provide Level 2 electrical services across Penrith, Nepean, and all Sydney suburbs. If your location isn’t listed, call us; we likely cover it.",
  },
  {
    q: "Is your work licensed and insured?",
    a: "Yes. We’re fully accredited under the NSW ASP scheme, carry $20M public liability insurance, and include a workmanship warranty.",
  },
  {
    q: "Do you provide upfront quotes?",
    a: "Yes. We give clear, upfront quotes so you know exactly what to expect before any work starts.",
  },
];

export default function Level2PenrithPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...localBusinessData,
            name: "Everything Electrical Sydney — Level 2 Penrith",
            url: "https://www.everythingelectricalsydney.com.au/level-2-electrician-penrith",
            description:
              "ASP Level 2 electricians in Penrith handling metering, service line works, and emergency repairs with Ausgrid- and Endeavour-ready compliance.",
            areaServed: "Penrith NSW and greater Sydney",
          }),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(255,87,87,0.2),transparent_32%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">
                Metering · Disconnects · Upgrades · ASP
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Trusted Level 2 Electricians Penrith
              </h1>
              <p className="text-lg sm:text-xl lg:text-1xl text-white/90 leading-relaxed font-light">
                Need a licensed Level 2 electrician for reliable electrical
                services in Penrith? We’re authorised to handle complex tasks
                including meter installations, underground and overhead service
                lines, and emergency repairs. Safe, fast, and fully compliant
                with Ausgrid and Endeavour Energy requirements across Penrith
                and greater Sydney.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="tel:0449003526"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Book a Level 2 Electrician Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold backdrop-blur transition hover:border-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
              <div className="grid grid-cols-1 text-center sm:flex sm:flex-wrap gap-3 text-sm text-slate-100">
                {[
                  "ASP Level 2 Accredited",
                  "Ausgrid & Endeavour compliant",
                  "Penrith & Sydney coverage",
                  "Rapid response",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-200">
                Everything Electrical · Penrith
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-red-500/20 rotate-3" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-red-500/20 backdrop-blur">
                <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="https://cdn.sanity.io/images/8dp3bjvf/production/f8180d806a89a6fbdbad13fc1480e5f5008d5820-5472x3648.jpg"
                    alt="Level 2 electrician repairing a switchboard in Penrith"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-transparent" />
                </div>
                <div className="grid grid-cols-2 divide-x divide-white/10 bg-slate-950/60 text-sm text-slate-100">
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-200">
                      Priority
                    </p>
                    <p className="mt-2 font-semibold">Same-day outage slots</p>
                    <p className="text-slate-200/80">
                      Held for storm damage and loss of supply.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-200">
                      Compliance
                    </p>
                    <p className="mt-2 font-semibold">
                      Compliance docs + photos
                    </p>
                    <p className="text-slate-200/80">
                      Ready for network inspectors or insurers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-6 grid gap-4 sm:grid-cols-3 text-sm sm:text-base">
          {[
            {
              title: "Licensed & insured",
              desc: "Fully accredited under the NSW ASP scheme with $20M public liability cover.",
            },
            {
              title: "Upfront quotes",
              desc: "Clear pricing before we book outage windows or order parts.",
            },
            {
              title: "Rapid response",
              desc: "Penrith and Sydney-wide dispatch for emergencies and urgent network issues.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-red-500">
                {item.title}
              </p>
              <p className="mt-1 text-slate-800 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-md">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Quality Level 2 Electrical Work
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900">
              Level 2 Electrician Penrith
            </h2>
            <p className="flex w-fit px-2 my-3 bg-red-500 rounded-full text-white">
              Advanced electrical services across the city
            </p>
            <p className="mt-3 text-lg/8 text-slate-700">
              Need Level 2 electrical work? We provide safe, compliant
              high-voltage services across Penrith and Sydney, including
              metering, service connections, private power, and emergency
              repairs. Fast response, upfront pricing, and guaranteed
              compliance.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Licensed & authorised",
                  copy: "ASP Level 2 accreditation under NSW regulations for network work done safely and legally.",
                },
                {
                  title: "Prepared & equipped",
                  copy: "Vans stocked with tools and materials to complete most tasks efficiently on the first visit.",
                },
                {
                  title: "Compliance-first approach",
                  copy: "Compliance documentation, labelled photos, and test results for network and insurer approvals.",
                },
                {
                  title: "Clear communication",
                  copy: "Transparent quotes, realistic arrival windows, and updates while we coordinate outages or metering.",
                },
              ].map(({ title, copy }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex gap-3"
                >
                  <div className="flex flex-shrink-0 h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-semibold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-md text-slate-700 leading-relaxed">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              How we work
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
              A straightforward process from enquiry to sign off
            </h3>
            <div className="mt-4 space-y-4">
              {[
                {
                  num: 1,
                  step: "Quick scope",
                  desc: "Share photos of your meter box, service line, or plans so we can price accurately and prep parts.",
                },
                {
                  num: 2,
                  step: "Book the window",
                  desc: "We confirm any outage or retailer window and provide a tight arrival time with updates en route.",
                },
                {
                  num: 3,
                  step: "Fix + test",
                  desc: "Make safe, install or upgrade equipment, balance loads, and complete required testing before reconnection.",
                },
                {
                  num: 4,
                  step: "Sign-off",
                  desc: "Compliance documentation, photos, and recommendations for future capacity (EVs, pools, machinery) provided the same day.",
                },
              ].map(({ step, desc, num }) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-shrink-0 h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-semibold">
                    {num}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step}</p>
                    <p className="text-md text-slate-700 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-900">
              <p className="font-semibold">Need it today?</p>
              <p className="mt-1">
                Same-day emergency slots are held for loss-of-supply, damaged
                service lines, and urgent defect clearances across Penrith and
                the wider Sydney area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:pb-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-stretch rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/60">
          <div className="bg-white p-8 space-y-5 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Network coordination
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              We handle Endeavour + retailer logistics
            </h3>
            <p className="text-lg/8 text-slate-700 leading-relaxed">
              One point of contact for outage windows, meter exchanges, and
              inspector photo requests. You get clear timelines and updates, not
              surprise delays.
            </p>
            <div className="grid grid-cols-1 text-center gap-2 text-xs font-semibold text-slate-800">
              {[
                "Compliance docs + photos",
                "Temporary supply options",
                "After-hours windows",
                "Retailer liaison",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-slate-100 px-3 py-2 border border-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="tel:0449003526"
                className="inline-flex justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/25 transition hover:bg-red-400"
              >
                Call Us Now
              </Link>
              <Link
                href="tel:0449003526"
                className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Book A Level 2 Electrician
              </Link>
            </div>
          </div>
          <div className="relative min-h-[560px] bg-slate-900">
            <Image
              src="https://cdn.sanity.io/images/8dp3bjvf/production/1f04241939a7b13f2054896d11ced4cf3920e62b-3648x5472.jpg"
              alt="Level 2 electrician repairing overhead service lines in Penrith"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-red-200">
                Field ready
              </p>
              <h2 className="text-2xl font-semibold leading-tight">
                Daily on the tools across Penrith and Sydney
              </h2>
              <p className="text-sm text-slate-100 max-w-xl">
                Vans carry POA brackets, tiger-tails, meter hardware, and test
                gear so storm damage, brittle mains, and defect fixes are closed
                out in one visit wherever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/assets/electrical-switchbox.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/80 " aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Level 2 Services
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                Expert Level 2 electrical services in Penrith
              </h2>
              <p className="mt-3 max-w-3xl text-lg/8 text-slate-100/90">
                Fully licensed ASP Level 2 team equipped for overhead,
                underground, and metering jobs under Ausgrid and Endeavour
                Energy rules—tailored to Penrith homes, businesses, and strata,
                with Sydney-wide coverage.
              </p>
            </div>
            <Link
              href="/all-services"
              className="inline-flex items-center text-sm font-semibold text-red-500 hover:text-white"
            >
              View all services →
            </Link>
          </div>
          <div
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3
          
          "
          >
            {services.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col rounded-xl bg-white/5 p-6 sm:p-8 backdrop-blur-sm border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-500 ease-in-out hover:shadow-3xl hover:-translate-y-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-snug z-10">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm sm:text-base text-gray-300/80 leading-relaxed flex-grow font-light">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 space-y-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Built for homes, businesses, and builders
            </h2>
            <ul className="mt-4 space-y-3 text-md text-slate-700 leading-relaxed">
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold"> For Homeowners:</span> new
                  property connections and meter installations, granny flat
                  supply, switchboard upgrades for modern power demands, and
                  emergency repairs to service lines.
                </span>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold">
                    For Businesses & strata:
                  </span>{" "}
                  industrial and commercial power connections, overhead and
                  underground service line installations, temporary builder’s
                  power supply, and network disconnections or reconnections.
                </span>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold">Emergency support:</span>{" "}
                  rapid fault response to minimise downtime and keep projects
                  moving safely.
                </span>
              </li>
            </ul>
            {/**Add image */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-md text-slate-800">
              <p className="font-semibold">Service area focus</p>
              <p className="mt-1">
                Penrith, Nepean, Lower Mountains, and Sydney-wide coverage. If
                your area isn’t listed, call us—we likely cover it.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Transparent pricing and scheduling
            </h2>
            <div className="mt-4 space-y-3 text-md text-slate-200 leading-relaxed">
              <p>
                Upfront quotes from photos wherever we can, with clear pricing
                on outage windows or network coordination before you commit.
              </p>
              <p>
                Emergency calls are triaged for same-day dispatch across Penrith
                and Sydney, with ETA updates so you know when we land.
              </p>
              <p>
                Need proof for insurers or strata? We bundle incident photos,
                test results, and compliance documentation with the invoice.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row">
              <Link
                href="tel:0449003526"
                className="inline-flex justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:bg-red-400"
              >
                Request a quote Now
              </Link>
              <Link
                href="mailto:info@everythingelectricalsydney.com.au"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 lg:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Ready to go
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Call your Penrith Level 2 electrician today
              </h2>
              <p className="text-md text-slate-200 max-w-3xl">
                When you need licensed Level 2 electricians in Penrith, don’t
                take risks with unqualified providers. Share a quick photo of
                your meter box or plans and we’ll lock in scope, price, and the
                next attendance window that suits you across Penrith and Sydney.
              </p>
            </div>
            <div className="pt-8 flex lg:flex-col gap-3 sm:flex-row">
              <Link
                href="tel:0449003526"
                className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Call 0449 003 526
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Schedule online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-red-500">
            FAQs
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
            Level 2 electrician Penrith Common Questions
          </h2>
        </div>
        <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((item) => (
            <div key={item.q} className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-md text-slate-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
