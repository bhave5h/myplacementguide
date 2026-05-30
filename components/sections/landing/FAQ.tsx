'use client'

import React, { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

const FAQS = [
  { q: 'Who is this for?', a: 'Final-year students and freshers in the Nagpur region looking to enter IT or Marketing roles.' },
  { q: 'Do I need prior experience?', a: 'No. This is designed specifically for students with zero corporate experience.' },
  { q: 'What happens after the free session?', a: 'You can choose to upgrade to the 10-day masterclass at the early bird price of ₹999.' },
  { q: 'Is the internship guaranteed?', a: 'The internship opportunity is offered to top performers at the discretion of the mentors. It is merit-based.' },
  { q: 'How do I contact support?', a: 'Message us on WhatsApp — link available on every page.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="band-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="bg-cloud rounded-xl p-8 shadow-soft-lift">
          <h3 className="card-title text-[24px] text-center mb-7">
            Frequently Asked Questions
          </h3>

          <LazyMotion features={domAnimation}>
            <div className="flex flex-col">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    className={i < FAQS.length - 1 ? 'border-b border-hairline' : ''}
                  >
                    <button
                      className="w-full flex items-center justify-between py-4.5 bg-transparent border-none cursor-pointer text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-body text-[15px] font-medium leading-[1.4] transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-ink'}`}>
                        {faq.q}
                      </span>
                      <CaretDown
                        size={18}
                        className={`text-graphite shrink-0 transition-transform duration-250 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <m.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="body-text pb-4.5">
                            {faq.a}
                          </p>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </LazyMotion>
        </div>
      </div>
    </section>
  )
}
