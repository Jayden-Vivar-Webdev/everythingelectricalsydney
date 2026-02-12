import Features from "../../stats/stats";

const featureItems = [
  {
    id: 1,
    name: "Fully Licensed & Insured",
    value:
      "Licensed and insured Sydney electricians delivering safe, professional service.",
    href: "/about",
  },
  {
    id: 2,
    name: "24/7 Emergency Service",
    value: "24/7 emergency electricians ready across Sydney.",
    href: "/services/emergency-electrician",
  },
  {
    id: 3,
    name: "Local Sydney Electricians",
    value: "Trusted local experts for homes and businesses across Sydney.",
    href: "/about",
  },
  {
    id: 4,
    name: "Same day service",
    value:
      "Fast same-day electrical and air conditioning service across Sydney.",
    href: "/services/air-conditioning",
  },
  {
    id: 5,
    name: "Free Quotes",
    value: "Upfront, obligation-free quotes with no hidden costs.",
    href: "/contact",
  },
  {
    id: 6,
    name: "Best Price Guarantee",
    value:
      "Sydney’s best price guarantee. We’ll beat any competitor’s written quote.",
    href: "/contact",
  },
];

export default function HomeFeature() {
  return (
    <Features
      title={"Local Electricians You Can Trust"}
      description={`Everything Electrical Sydney is your trusted team of licensed electricians, providing expert electrical services across Sydney. From routine installations and maintenance to 24/7 emergency call-outs, we cater to residential, commercial, and industrial clients. \n\nWe pride ourselves on reliable, professional service, transparent pricing, and a best price guarantee, no hidden fees, no surprises. Whether it’s a small repair or a major project, we’re here to keep your home or business powered safely and efficiently.`}
      featureItems={featureItems}
    />
  );
}
