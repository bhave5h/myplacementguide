'use client'

import React, { useState } from 'react'
import { LockKey, ShieldCheck, WhatsappLogo, CaretDown } from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

const FAQS = [
  { q: 'Who is this for?', a: 'Final-year students and freshers in the Nagpur region looking to enter IT or Marketing roles.' },
  { q: 'Do I need prior experience?', a: 'No. This is designed specifically for students with zero corporate experience.' },
  { q: 'What happens after the free session?', a: 'You can choose to upgrade to the 10-day masterclass at the early bird price of ₹999.' },
  { q: 'Is the internship guaranteed?', a: 'The internship opportunity is offered to top performers at the discretion of the mentors. It is merit-based.' },
  { q: 'How do I contact support?', a: 'Message us on WhatsApp — link available on every page.' },
]

const TRUST = [
  {
    icon: LockKey,
    label: 'Secure Payment',
    sub: 'Powered by Razorpay',
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-soft)',
  },
  {
    icon: ShieldCheck,
    label: '100% Satisfaction',
    sub: 'Get a full refund if not happy after Day 1',
    color: '#16a34a',
    bg: 'rgba(34,197,94,0.10)',
  },
  {
    icon: WhatsappLogo,
    label: 'WhatsApp Support',
    sub: 'Message us directly at any time',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.10)',
  },
]

export function TrustSignals() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    /* ── White canvas band ── */
    <section className="bg-[var(--color-canvas)] py-20 px-6">
      <div className="max-w-[760px] mx-auto">

        {/* ── Trust badges — card-category-icon style ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {TRUST.map(({ icon: Icon, label, sub, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-[var(--rounded-xl)] bg-[var(--color-cloud)] border border-[var(--color-hairline)]"
            >
              <div
                className="w-12 h-12 rounded-[var(--rounded-lg)] flex items-center justify-center mb-3.5"
                style={{ backgroundColor: bg, color }}
              >
                <Icon size={24} weight="duotone" />
              </div>
              <h4 className="text-[14px] font-semibold text-[var(--color-ink)] mb-1">
                {label}
              </h4>
              <p className="text-[12px] text-[var(--color-graphite)] leading-[1.5]">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── FAQ Accordion — faq-row DESIGN.md spec ── */}
        <div className="bg-[var(--color-cloud)] rounded-[var(--rounded-xl)] p-8 shadow-[var(--shadow-soft-lift)]">
          <h3 className="font-display text-[24px] font-medium text-[var(--color-ink)] text-center mb-7">
            Frequently Asked Questions
          </h3>

          <LazyMotion features={domAnimation}>
            <div className="flex flex-col">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    className={i < FAQS.length - 1 ? 'border-bottom border-[var(--color-hairline)]' : ''}
                    style={{ borderBottom: i < FAQS.length - 1 ? '1px solid var(--color-hairline)' : 'none' }}
                  >
                    {/* faq-row: canvas bg, rounded-lg, body-emphasis per DESIGN.md */}
                    <button
                      className="w-full flex items-center justify-between py-4.5 bg-transparent border-none cursor-pointer text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-body text-[15px] font-medium leading-[1.4] transition-colors duration-200 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-ink)]'}`}>
                        {faq.q}
                      </span>
                      <CaretDown
                        size={18}
                        className={`text-[var(--color-graphite)] shrink-0 transition-transform duration-250 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
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
                          <p className="text-[14px] text-[var(--color-charcoal)] leading-[1.6] pb-4.5">
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
