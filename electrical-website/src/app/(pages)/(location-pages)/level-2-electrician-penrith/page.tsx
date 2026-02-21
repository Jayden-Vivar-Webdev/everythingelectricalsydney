import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localBusinessData } from "@/app/data/local-business-data";

export const metadata: Metadata = {
  title:
    "Level 2 Electrician Penrith | ASP Accredited | Everything Electrical Sydney",
  description:
    "Need a Level 2 electrician in Penrith? We handle metering, mains repairs, defect notices, and emergency reconnects across the Nepean and Lower Mountains.",
  alternates: {
    canonical:
      "https://www.everythingelectricalsydney.com.au/level-2-electrician-penrith",
  },
  openGraph: {
    url: "https://www.everythingelectricalsydney.com.au/level-2-electrician-penrith",
    title:
      "Level 2 Electrician Penrith | ASP Accredited | Everything Electrical Sydney",
    description:
      "ASP Level 2 electricians for Penrith handling metering, overhead and underground mains, defect rectification, and urgent reconnections.",
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
    "defect notice electrician Penrith",
    "meter install Penrith",
    "overhead service repairs Penrith",
    "underground consumer mains Penrith",
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
    copy: "Smart meter installs, solar/off-peak metering, and meter box rebuilds that pass Endeavour Energy inspections the first time.",
  },
  {
    title: "Overhead Supply Repairs",
    copy: "Point-of-attachment fixes, service line renewals, and raiser pole work to restore safe overhead supply after storms or tree strikes.",
  },
  {
    title: "Underground Consumer Mains",
    copy: "Trenching, conduits, and mains replacements with insulation testing and compliance certificates for underground feeds and new builds.",
  },
  {
    title: "Disconnections, Reconnections, Temporary Builders Supply",
    copy: "Safe isolations for renovations, reconnections after upgrades, and compliant temporary supply so sites around Penrith keep moving.",
  },
  {
    title: "Switchboard and Capacity Upgrades",
    copy: "Three-phase upgrades, surge protection, RCDs, and load balancing ready for ducted air, EV chargers, or workshops.",
  },
  {
    title: "Defect Notice Rectification",
    copy: "Priority attendance to clear Endeavour Energy or Ausgrid defects covering damaged service lines, exposed cabling, or non-compliant enclosures.",
  },
];

const faqs = [
  {
    q: "Which Penrith suburbs do you service?",
    a: "All of Penrith plus Jamisontown, Emu Plains, Glenmore Park, Jordan Springs, Kingswood, Werrington, Cambridge Park, and the Lower Mountains corridor.",
  },
  {
    q: "Are you authorised with Endeavour Energy?",
    a: "Yes—our ASP Level 2 accreditation covers the network supply between the street and your switchboard within the Endeavour Energy area, including Penrith.",
  },
  {
    q: "Can you attend for urgent power loss?",
    a: "We reserve same-day and after-hours slots for loss of supply from consumer mains faults, storm damage, or meter box failures. We isolate, make safe, and restore power where possible.",
  },
  {
    q: "Do I get compliance paperwork?",
    a: "You receive a Compliance Certificate of Electrical Work (CCEW), test results, and labelled photo documentation suitable for inspectors, insurers, or strata managers.",
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
              "ASP Level 2 electrician for Penrith handling metering, mains upgrades, and defect rectifications across the Nepean region.",
            areaServed: "Penrith NSW and Lower Blue Mountains",
          }),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(255,87,87,0.2),transparent_32%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">
                Level 2 Electrician Penrith
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Penrith Level 2 electricians for fast mains repairs, metering,
                and defect clearances
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                Power issues near the Nepean? We’re local ASP Level 2 electricians
                handling storm-damaged overheads, smart metering, and network-side
                defects with the paperwork inspectors want to see.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm text-slate-100">
                {[
                  "ASP Level 2 Accredited",
                  "Endeavour Energy area",
                  "Nepean & Lower Mountains coverage",
                  "Storm-ready rapid response",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-red-500/20 rotate-3" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-red-500/20 backdrop-blur">
                <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                  <Image
                    src="/images/assets/electrical-switchbox.jpg"
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
                    <p className="text-slate-200/80">Held for storm damage and loss of supply.</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-200">
                      Compliance
                    </p>
                    <p className="mt-2 font-semibold">CCEW + photo pack</p>
                    <p className="text-slate-200/80">Ready for Endeavour inspectors or insurers.</p>
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
            { title: "Local crew", desc: "Based minutes from M4/M7 for rapid Penrith response." },
            { title: "Network ready", desc: "Endeavour-authorised with paperwork inspectors expect." },
            { title: "After-hours help", desc: "Storm-season callouts for damaged overheads and POA repairs." },
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
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-red-50 via-white to-slate-50 p-6 shadow-md">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              Why Penrith picks us
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900">
              Built for Penrith’s mix of river homes and new estates
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Clay soil, big gums, and hot summers are rough on overhead supply
              around the Nepean. We stock storm-ready gear and deliver tidy
              installs for Thornton, Caddens, and Jordan Springs builds—paired
              with the photos and CCEW Endeavour Energy expects.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Inspector-friendly documentation",
                  copy: "CCEW, labelled photos, and test results packaged for network and insurer approvals.",
                },
                {
                  title: "Tight arrival windows",
                  copy: "Realistic ETAs with SMS updates while we line up outages or meter exchanges.",
                },
                {
                  title: "Storm-season ready",
                  copy: "POA brackets, tiger-tails, connectors, and overhead gear stocked for rapid fixes.",
                },
                {
                  title: "Local and responsive",
                  copy: "Crew based off the M4/M7 spine for quick attendance across Penrith and the Lower Mountains.",
                },
              ].map(({ title, copy }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex gap-3"
                >
                  <div className="h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-semibold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500">
              How a job runs
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
              A faster, clearer response pathway
            </h3>
            <div className="mt-4 space-y-4">
              {[
                {
                  step: "1. Quick scope",
                  desc: "Send phone pics of the meter box, service line, or defect notice so we can price and prep parts before driving out.",
                },
                {
                  step: "2. Book the window",
                  desc: "We lock in any Endeavour/retailer outage slot and give you a tight arrival window with updates en route.",
                },
                {
                  step: "3. Fix + test",
                  desc: "Make safe, replace damaged gear, balance loads, and complete insulation and polarity testing before reconnecting supply.",
                },
                {
                  step: "4. Sign-off",
                  desc: "CCEW, photos of works, and future-capacity recommendations (EV, ducted air, workshop loads) the same day.",
                },
              ].map(({ step, desc }) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-semibold">
                    {step.split(".")[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{step}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
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
                service lines, and urgent defect clearances in Penrith and
                nearby suburbs.
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
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              One point of contact for outage windows, meter exchanges, and
              inspector photo requests. You get clear timelines and updates,
              not surprise delays.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
              {[
                "CCEW + photo pack",
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
          <div className="relative min-h-[260px] bg-slate-900">
            <Image
              src="/images/electrician.jpg"
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
                Daily on the tools across Penrith and the Lower Mountains
              </h2>
              <p className="text-sm text-slate-100 max-w-xl">
                Vans carry POA brackets, tiger-tails, meter hardware, and test
                gear so storm damage, brittle VIR mains, and defect fixes are
                closed out in one visit wherever possible.
              </p>
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
                Nepean-focused Level 2 electrical work
              </h2>
              <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-700">
                Fully licensed ASP Level 2 team equipped for overhead, underground,
                and metering jobs under Endeavour Energy and Ausgrid rules—tailored
                to Penrith’s mix of riverside homes and growing estates.
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
                <span className="font-semibold">Homeowners:</span> fix nuisance
                tripping, replace brittle VIR/consumer mains, and prep switchboards
                for EV chargers or ducted air.
              </li>
              <li>
                <span className="font-semibold">Commercial:</span> meter box
                rebuilds, load balancing for kitchens and gyms, and safe isolations
                for fit-outs on High Street or industrial sheds.
              </li>
              <li>
                <span className="font-semibold">Builders & strata:</span> temp
                builders supply, service relocations, defect clearances, and photo
                evidence so projects keep moving.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-800">
              <p className="font-semibold">Service area focus</p>
              <p className="mt-1">
                Regular routes include Penrith CBD, Jamisontown, South
                Penrith, Emu Plains, Leonay, Glenmore Park, Jordan Springs,
                Kingswood, Cambridge Park, and Werrington.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-red-50 via-white to-red-50 p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Transparent pricing and scheduling
            </h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700 leading-relaxed">
              <p>
                Upfront quotes from photos wherever we can, with clear pricing
                on outage windows or network coordination before you commit.
              </p>
              <p>
                Emergency calls are triaged for same-day dispatch across Penrith,
                with ETA updates so you know when we land.
              </p>
              <p>
                Need proof for insurers or strata? We bundle incident photos,
                test results, and your Compliance Certificate of Electrical Work
                (CCEW) with the invoice.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:bg-red-400"
              >
                Request a quote
              </Link>
              <Link
                href="mailto:info@everythingelectricalsydney.com.au"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
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
                Book a Penrith Level 2 electrician now
              </h2>
              <p className="text-sm text-slate-200 max-w-3xl">
                Text or upload a quick photo of your meter box or defect notice.
                We’ll lock in scope, price, and the next attendance window that
                suits you.
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
            Level 2 electrician Penrith — common questions
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
