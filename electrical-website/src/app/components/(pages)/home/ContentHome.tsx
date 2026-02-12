import ContentSection from "../../content/contentSection";
import Link from "next/link";
const images = [
  {
    alt: "Level 2 Electrical Work",
    src: "https://cdn.sanity.io/images/8dp3bjvf/production/0559c21c958622dd9f348cea224a290ba239b9f6-6480x4320.jpg",
  },
  {
    alt: "Aircon Installation",
    src: "https://cdn.sanity.io/images/8dp3bjvf/production/ff9a32d67ac733806ef9702fd743834b44b2da69-3648x5472.jpg",
  },
  {
    alt: "Level 2 Electrical Tradesman Tools",
    src: "https://cdn.sanity.io/images/8dp3bjvf/production/64f8ef69144d3c3bb017b59b12ab3b3a00f457f0-3648x5472.jpg",
  },
  {
    alt: "Aircon In Roof Installation",
    src: "https://cdn.sanity.io/images/8dp3bjvf/production/f84c07b0657f768953782480b4970b65bd4e2ece-3648x5472.jpg",
  },
];

export default function ContentHome() {
  return (
    <ContentSection
      tag={"Trusted Electrical & Air Conditioning Services in Sydney"}
      header={"Reliable, Licensed, and Available 24/7"}
      description={
        <>
          At Everything Electrical Sydney, our fully licensed electricians and
          air conditioning specialists deliver fast, dependable services for
          residential, commercial, and industrial clients across Sydney, Camden,
          Campbelltown, and Oran Park. We handle everything from{" "}
          <Link
            href="/services/emergency-electrician"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            emergency electrical repairs
          </Link>
          {", "}
          <Link
            href="/services/switchboard-upgrades"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            switchboard upgrades
          </Link>
          {", "}
          <Link
            href="/services/level-2-electrician"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            Level 2 electrical work
          </Link>
          {", "}
          <Link
            href="/services/ev-chargers"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            EV charger installations
          </Link>
          {", "}
          <Link
            href="/services/cctv-installation"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            CCTV security systems
          </Link>
          , and{" "}
          <Link
            href="/services/air-conditioning"
            className="text-red-600 hover:text-red-800 transition-colors duration-200"
          >
            air conditioning solutions
          </Link>
          .
        </>
      }
      subHeader={"Comprehensive Services You Can Count On"}
      content={
        <div className="mt-6 text-lg md:text-xl leading-8 text-gray-600 text-slate-600">
          <div className="text-gray-600">
            Our team provides professional installations, maintenance, and
            repairs, ensuring your home or business stays safe, efficient, and
            powered reliably. Whether it’s{" "}
            <Link
              href="/services/hot-water-systems"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              hot water system
            </Link>{" "}
            servicing{" "}
            <Link
              href="/services/smoke-alarms"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              smoke alarms
            </Link>
            , electrical fault repairs, full rewires, or air conditioning setup,
            we combine expertise, safety, and quality workmanship with
            transparent pricing and friendly service.
          </div>
          <br></br>
          <div className="text-gray-600">
            <strong>
              Why Choose{" "}
              <a href="https://www.everythingelectricalsydney.com.au/">
                Everything Electrical Sydney
              </a>
            </strong>
          </div>
          <div className="text-gray-600">
            We’re trusted by homeowners and businesses alike, with a reputation
            backed by highly rated Google reviews. With 24/7 availability, fast
            response times, and a commitment to getting the job done right the
            first time, Everything Electrical Sydney is your go to team for all
            your electrical and{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/services/air-conditioning"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              air conditioning
            </a>{" "}
            needs.
          </div>
          <br></br>
          <div className="text-gray-600">
            If you’re searching for a trusted electrician in{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/all-services?location=sydney"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              Sydney
            </a>
            ,{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/all-services?location=camden"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              Camden
            </a>
            ,{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/all-services?location=campbelltown"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              Campbelltown
            </a>
            , or{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/all-services?location=oran-park"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              Oran Park
            </a>
            , look no further. Whether it’s installing a new power point,
            completing a full home rewire for Vulcanised Indian Rubber (VIR)
            cabling, or responding to an urgent{" "}
            <a
              href="https://www.everythingelectricalsydney.com.au/services/emergency-electrician"
              className="text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              emergency call outs
            </a>
            , Everything Electrical Sydney ensures the job is done right the
            first time.
          </div>
        </div>
      }
      images={images}
    />
  );
}
