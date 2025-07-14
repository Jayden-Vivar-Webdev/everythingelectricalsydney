import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: "Do you offer emergency electrical services?",
      answer:
        "Yes, we provide 24/7 emergency electrical services across Sydney. Whether it's a power outage, burning smell, or tripped circuit, our licensed electricians can respond quickly to keep your home or business safe.",
    },
    {
      question: "How much does it cost to get an electrician out?",
      answer:
        "Our call-out fees are competitive and transparent. Pricing depends on the type of service, but we provide upfront quotes before any work begins so there are no surprises.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer:
        "Absolutely. All of our electricians are fully licensed and insured, ensuring every job is done to Australian standards with safety and quality as top priorities.",
    },
    {
      question: "Can you help with switchboard upgrades?",
      answer:
        "Yes, we specialize in switchboard upgrades to modern, safer systems. If your switchboard is old, frequently trips, or lacks safety switches, it's likely time for an upgrade.",
    },
    {
      question: "Do you handle commercial electrical work?",
      answer:
        "We sure do. From offices and retail fit-outs to warehouses and industrial maintenance, we offer tailored commercial electrical services backed by years of experience.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We’re based in Sydney and service all surrounding areas, including Campbelltown, Camden, Oran Park, and beyond. If you're unsure whether we cover your area, feel free to contact us.",
    },
  ];
  

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
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
