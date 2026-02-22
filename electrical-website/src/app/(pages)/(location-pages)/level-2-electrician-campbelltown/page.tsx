import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localBusinessData } from "@/app/data/local-business-data";

export const metadata: Metadata = {
  title:
    "Level 2 Electrician Campbelltown | ASP Accredited | Everything Electrical Sydney",
  description:
    "Book a rapid-response Level 2 electrician in Campbelltown for metering, mains repairs, defect notices, switchboard upgrades, and emergency reconnects. Fully licensed ASP Level 2 service.",
  alternates: {
    canonical:
      "https://www.everythingelectricalsydney.com.au/level-2-electrician-campbelltown",
  },
  openGraph: {
    url: "https://www.everythingelectricalsydney.com.au/level-2-electrician-campbelltown",
    title:
      "Level 2 Electrician Campbelltown | ASP Accredited | Everything Electrical Sydney",
    description:
      "ASP Level 2 electricians handling metering, overhead and underground mains, defect rectifications, and emergency reconnects across Campbelltown and nearby suburbs.",
    images: [
      {
        url: "https://www.everythingelectricalsydney.com.au/images/electrical_og.png",
        width: 1200,
        height: 630,
        alt: "Level 2 electrician working on service mains in Campbelltown",
        type: "image/png",
      },
    ],
    siteName: "Everything Electrical Sydney",
  },
  keywords: [
    "level 2 electrician Campbelltown",
    "ASP level 2 Campbelltown",
    "defect notice electrician Campbelltown",
    "meter install Campbelltown",
    "overhead service repairs Campbelltown",
    "underground consumer mains Campbelltown",
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
    title: "Metering and Meter Box Upgrades",
    copy: "New meter installs, off-peak/solar metering, and meter box rebuilds that satisfy Ausgrid requirements and clear defect notices the first time.",
  },
  {
    title: "Overhead Supply Repairs",
    copy: "Service line renewals, point-of-attachment repairs, and raiser pole work to restore safe, compliant overhead supply to homes and businesses.",
  },
  {
    title: "Underground Consumer Mains",
    copy: "Trenching, conduits, and mains cabling replacements with insulation resistance testing and compliance certificates for underground feeds.",
  },
  {
    title: "Disconnections, Reconnections, Temporary Builders Supply",
    copy: "Safe isolations for renovation, reconnections after upgrade, and site temporary supply set-ups so your project keeps moving.",
  },
  {
    title: "Switchboard and Capacity Upgrades",
    copy: "Three-phase upgrades, surge protection, RCDs, and load balancing to support EV chargers, ducted air, and growing power demands.",
  },
  {
    title: "Defect Notice Rectification",
    copy: "Priority attendance to clear Ausgrid or Endeavour Energy defects covering damaged service lines, exposed cabling, or non-compliant enclosures.",
  },
];

const faqs = [
  {
    q: "What is an ASP Level 2 electrician?",
    a: "In NSW, an Accredited Service Provider (ASP) Level 2 electrician is authorised to work on the network supply between the street and your switchboard, including metering, disconnects/reconnects, overhead and underground service mains, and defect rectifications.",
  },
  {
    q: "Do you service surrounding suburbs of Campbelltown?",
    a: "Yes. We regularly attend Macarthur suburbs such as Airds, Ambarvale, Leumeah, Glenfield, Ingleburn, Oran Park, Narellan, and the wider Camden LGA.",
  },
  {
    q: "Can you help with urgent power loss?",
    a: "We provide priority callouts for partial or total loss of supply linked to consumer mains faults, damaged overhead lines, or meter box failures. We isolate, make safe, and liaise with the network where required before restoring power.",
  },
  {
    q: "Will my upgrade be compliant for inspection?",
    a: "All work is completed to current NSW Service and Installation Rules, with testing, compliance certificates, and photos supplied for your records and for any network inspections.",
  },
];

export default function Level2CampbelltownPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...localBusinessData,
            name: "Everything Electrical Sydney — Level 2 Campbelltown",
            url: "https://www.everythingelectricalsydney.com.au/level-2-electrician-campbelltown",
            description:
              "ASP Level 2 electrician for Campbelltown handling metering, mains upgrades, and defect rectifications.",
            areaServed: "Campbelltown NSW and Macarthur region",
          }),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,63,63,0.25),transparent_32%)]" />
        <div className="absolute inset-0 mix-blend-soft-light opacity-45">
          <Image
            src="/images/assets/electrical-switchbox.jpg"
            alt="Level 2 electrician repairing a switchboard in Campbelltown"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-red-300">
            Level 2 Electrician Campbelltown
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            ASP Level 2 electricians clearing defects and restoring power across
            Campbelltown
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-100">
            Need a fast, compliant fix for metering, service mains, or a defect
            notice? Our local Level 2 team works across the Macarthur region
            with same-day priority slots for urgent outages and safety hazards.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-base font-semibold shadow-lg shadow-red-500/40 transition hover:bg-red-400"
            >
              Book a Level 2 Electrician
            </Link>
            <Link
              href="tel:1800251652"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold backdrop-blur transition hover:border-white hover:bg-white/10"
            >
              Call 0449 003 526
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-100">
            {[
              "ASP Level 2 Accredited",
              "Endeavour Energy area",
              "24/7 emergency availability",
              "Fully insured and licensed",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Why Campbelltown calls us for Level 2 work
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              From older fibro homes to new estates like Macarthur Heights, we
              handle the tricky network-side jobs that standard electricians
              cannot. Expect clear communication, tidy work, and documentation
              ready for Endeavour Energy or your retailer.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Network-ready paperwork",
                  copy: "CES, photos, and test results delivered after every job so inspections go smoothly.",
                },
                {
                  title: "Respect for your schedule",
                  copy: "Narrow arrival windows and proactive updates while we coordinate disconnects or metering.",
                },
                {
                  title: "Safe temporary supply",
                  copy: "We keep sites powered during renovations with compliant temporary builder setups.",
                },
                {
                  title: "Local and responsive",
                  copy: "Based nearby for faster attendance across Campbelltown, Glenfield, and the Camden corridor.",
                },
              ].map(({ title, copy }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <h3 className="text-lg font-semibold text-slate-900">
              Typical response pathway
            </h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-800">
              <li>
                <span className="font-semibold">1. Assess:</span> We review
                photos of the meter box or service line, plus any defect notice
                wording, to price accurately.
              </li>
              <li>
                <span className="font-semibold">2. Coordinate:</span> If a
                planned outage is required, we arrange the retailer or network
                window and keep you updated.
              </li>
              <li>
                <span className="font-semibold">3. Make safe:</span> We isolate
                hazards, replace damaged cabling or hardware, and test before
                reconnection.
              </li>
              <li>
                <span className="font-semibold">4. Certify:</span> Compliance
                paperwork, photos, and recommendations for future capacity are
                provided on completion.
              </li>
            </ol>
            <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-900">
              <p className="font-semibold">Need it today?</p>
              <p className="mt-1">
                Same-day emergency slots are held for loss-of-supply, damaged
                service lines, and urgent defect clearances in Campbelltown.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:pb-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-stretch rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100">
          <div className="relative min-h-[260px] bg-slate-900">
            <Image
              src="/images/electrician.jpg"
              alt="Level 2 electrician repairing overhead service lines in Campbelltown"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-red-200">
                Field ready
              </p>
              <h2 className="text-2xl font-semibold leading-tight">
                On the tools daily across Campbelltown and Macarthur
              </h2>
              <p className="text-sm text-slate-100 max-w-xl">
                Vans stay stocked with metering hardware, consumer mains, safety
                gear, and test equipment so urgent outages and defect
                rectifications are resolved in one visit whenever possible.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 space-y-4 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Clear process
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Smooth coordination with Endeavour Energy and retailers
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We speak the same language as network inspectors. Expect concise
              timeframes, guidance on photos they need to see, and proactive
              updates while we organise any outages or meter exchanges.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800">
              {[
                "Compliance docs + photos supplied",
                "Endeavour Energy area",
                "Temporary supply options",
                "After-hours windows available",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-slate-100 px-3 py-2 border border-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/25 transition hover:bg-red-400"
              >
                Share photos for a quote
              </Link>
              <Link
                href="mailto:info@everythingelectricalsydney.com.au"
                className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Email plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500">
                Level 2 Services
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
                What we handle in Campbelltown
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-700">
                Fully licensed ASP Level 2 electricians equipped for overhead,
                underground, and metering work under Endeavour Energy and
                Ausgrid guidelines.
              </p>
            </div>
            <Link
              href="/all-services"
              className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
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
            <ul className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>
                <span className="font-semibold">Homeowners:</span> resolve
                nuisance tripping, replace brittle VIR mains, and prepare for EV
                chargers or ducted air.
              </li>
              <li>
                <span className="font-semibold">Commercial:</span> meter box
                upgrades, load balancing, and safe isolations for shop fit-outs
                or equipment changes.
              </li>
              <li>
                <span className="font-semibold">Builders & strata:</span>
                temporary builders supply, service relocations, and defect
                clearances to keep projects on schedule.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-800">
              <p className="font-semibold">Service area focus</p>
              <p className="mt-1">
                Regular routes include Campbelltown CBD, Bradbury, Rosemeadow,
                St Helens Park, Leumeah, Glenfield, Ingleburn, Narellan, Oran
                Park, and surrounding suburbs.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-red-50 via-white to-red-50 p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Transparent pricing and scheduling
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                We quote upfront from site photos where possible. If a network
                outage window is required, we outline fees and timeframes before
                booking so there are no surprises.
              </p>
              <p>
                For emergencies, dispatch can usually be arranged same-day in
                Campbelltown with arrival updates en route.
              </p>
              <p>
                Need evidence for insurers or strata? We supply incident photos,
                test results, and compliance documentation with your invoice.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:bg-red-400"
              >
                Request a quote
              </Link>
              <Link
                href="mailto:info@everythingelectricalsydney.com.au"
                className="inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Email plans/photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">
                Ready to go
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Book your Level 2 electrician in Campbelltown
              </h2>
              <p className="text-sm text-slate-200 max-w-3xl">
                Share a photo of your meter box or defect notice and we will
                confirm the scope, price, and next available attendance window.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:1800251652"
                className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Call 1800 251 652
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
            Level 2 electrician Campbelltown — common questions
          </h2>
        </div>
        <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((item) => (
            <div key={item.q} className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
