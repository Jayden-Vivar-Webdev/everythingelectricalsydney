import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: "Do you offer emergency electrical services?",
      answer:
        "Yes, our licensed electricians provide 24/7 emergency electrical services across Sydney. From power outages and tripped circuits to urgent repairs, we respond quickly to keep your home or business safe.",
    },
    {
      question: "Do you provide free quotes?",
      answer:"Absolutely. We offer free, no-obligation quotes for all non-emergency work. Emergency call-outs do have a standard call-out fee, but we always provide upfront pricing before starting any work.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer:
        "Yes. All of our electricians are fully licensed and insured, working to Australian standards to ensure every job is safe, professional, and reliable.",
    },
    {
      question: "Can you help with switchboard upgrades?",
      answer:"Definitely. We specialise in upgrading old or unsafe switchboards to modern, reliable systems, including safety switches and enhanced performance.",
    },
    {
      question: "Do you handle commercial electrical work?",
      answer:
        "Yes, we provide tailored commercial electrical services for offices, retail spaces, warehouses, and industrial facilities, backed by years of experience.",
    },
    {
      question: "Do you install air conditioning systems?",
      answer:
        "Yes, our team can handle air conditioning installation, repairs, and maintenance for homes and businesses across Sydney.",
    },
    {
      question: "Can you perform Level 2 electrical work?",
      answer:
        "Absolutely. Our licensed electricians are qualified to carry out Level 2 electrical services, including meter upgrades, mains connections, and other specialist tasks.",
    },
    {
      question: "Do you install CCTV and security systems?",
      answer:
        "Yes, we offer professional CCTV and security system installations to help protect your home or business, with reliable setup and ongoing support.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We’re provide services right across Sydney. If you’re unsure whether we cover your area, get in touch and we’ll confirm.",
    },
  ];
  

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
