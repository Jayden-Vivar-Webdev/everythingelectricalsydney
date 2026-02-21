"use client";
import { useEffect, useState } from "react";
type Image = {
  src: string;
  alt: string;
};

type Collection = {
  images: Image[];
};

export default function FlexGallery({ images }: Collection) {
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 images
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more each click
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((prev) =>
          prev === null ? null : Math.min(prev + 1, images.length - 1),
        );
      }
      if (event.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((prev) =>
          prev === null ? null : Math.max(prev - 1, 0),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 space-y-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
              Recent Work Across Sydney
            </p>
            <h1 className="text-balance text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Everything Electrical Sydney{" "}
              <span className="secondary-text">Gallery</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Explore a curated mix of residential, commercial, and Level 2
              electrical projects that our licensed team has delivered across
              Greater Sydney. Every installation shown here was designed to
              solve a real problem - modernise ageing switchboards, remove
              unsafe cabling, optimise lighting efficiency, and keep families
              and businesses powered safely.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We document each job with site notes, compliance testing, and
              before-and-after photos so you can see the standard of workmanship
              we bring to strata, retail, hospitality, and new-build sites. If
              you are planning an upgrade, this gallery doubles as a reference
              library for what the right electrical solution looks like when it
              is engineered for longevity, safety, and clean finishes.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "Projects Completed",
                  value: "500+",
                  copy: "Switchboard upgrades, EV chargers, lighting, data, and emergency repairs delivered since 2015.",
                },
                {
                  label: "Industries",
                  value: "Residential / Commercial / Strata",
                  copy: "Tailored protection devices, metering, and power quality tuning for every building type.",
                },
                {
                  label: "Coverage",
                  value: "Greater Sydney",
                  copy: "From the CBD to the Northern Beaches, Inner West, Hills District, and Sutherland Shire.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200 p-4 space-y-2"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                    {item.label}
                  </p>
                  <p className="text-xl font-semibold text-gray-900 leading-tight">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-200 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What you will see
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Each project tile includes site photos, conduit and cable
              management, fixture positioning, and the tidy finishes that keep
              plant rooms, ceilings, and facades looking intentional. Look for
              the way we stage work to minimise downtime and keep tenants or
              customers moving.
            </p>
            <ul className="space-y-3 text-gray-800 text-sm">
              {[
                "Switchboard rebuilds with surge and arc-fault protection",
                "Metering upgrades and disconnections completed as Level 2 ASP",
                "Commercial lighting designs that balance lux levels with efficiency",
                "Undergrounds, mains upgrades, and EV charger-ready parking bays",
                "Data, Wi-Fi, and security cabling laid with clean containment",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-red-50 text-red-900 border border-red-100 px-4 py-3 text-sm leading-relaxed">
              Ready to discuss a similar upgrade? Call 1300 291 148 or email
              <span className="font-semibold">
                {" "}
                info@everythingelectricalsydney.com.au
              </span>{" "}
              for a no-obligation scope review.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(240px,1fr)]">
            {images.slice(0, visibleCount).map((image, index) => (
              <figure
                key={index}
                className="group relative isolate overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                role="button"
                tabIndex={0}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
                    src={image.src}
                    alt={image.alt || "Electrical project photo"}
                    loading={index > 3 ? "lazy" : undefined}
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-sm text-white">
                  {image.alt || `Project photo ${index + 1}`} - installed by
                  Everything Electrical Sydney.
                </figcaption>
              </figure>
            ))}
          </div>

          {visibleCount < images.length && (
            <div className="flex w-full items-center justify-center">
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Load more projects
              </button>
            </div>
          )}

          {visibleCount >= images.length && images.length > 6 && (
            <div className="flex w-full items-center justify-center">
              <button
                onClick={() => setVisibleCount(6)}
                className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
              >
                Collapse gallery
              </button>
            </div>
          )}
        </div>

        <div className="max-w-5xl space-y-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900">
            How we stage and sign-off each project
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            The work showcased here follows our five-step process: scope and
            design with compliant load calculations, safety planning and
            isolation, neat installation with premium fittings, thorough testing
            to AS/NZS 3000, and a handover pack with certificates of compliance.
            That documentation matters when you sell, lease, or expand a
            property, and it is part of every job we complete.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            If you would like a similar outcome, share your drawings or photos
            with our estimators and we will suggest options that balance budget,
            power quality, and future maintenance. We can also sequence works
            outside trading hours to keep your team and customers moving while
            upgrades are completed.
          </p>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white shadow-lg hover:bg-black"
              aria-label="Close full screen image"
            >
              Close
            </button>

            <div className="overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/20 shadow-2xl">
              <img
                src={images[activeIndex].src}
                alt={
                  images[activeIndex].alt || "Full screen electrical project"
                }
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
              <div className="flex items-center justify-between px-4 py-3 text-white text-sm bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <span>
                  {images[activeIndex].alt ||
                    `Project photo ${activeIndex + 1}`}
                </span>
                <div className="flex gap-2">
                  <button
                    className="rounded-full bg-white/15 px-3 py-1 hover:bg-white/25"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? null : Math.max(prev - 1, 0),
                      )
                    }
                    disabled={activeIndex === 0}
                  >
                    Prev
                  </button>
                  <button
                    className="rounded-full bg-white/15 px-3 py-1 hover:bg-white/25"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null
                          ? null
                          : Math.min(prev + 1, images.length - 1),
                      )
                    }
                    disabled={activeIndex === images.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
