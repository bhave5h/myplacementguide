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
    <section style={{ backgroundColor: 'var(--color-canvas)', padding: '80px 24px' }}>
      <div className="max-w-[760px] mx-auto">

        {/* ── Trust badges — card-category-icon style ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {TRUST.map(({ icon: Icon, label, sub, color, bg }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 24,
                borderRadius: 'var(--rounded-xl)',
                backgroundColor: 'var(--color-cloud)',
                border: '1px solid var(--color-hairline)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--rounded-lg)',
                  backgroundColor: bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color,
                  marginBottom: 14,
                }}
              >
                <Icon size={24} weight="duotone" />
              </div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 5 }}>
                {label}
              </h4>
              <p style={{ fontSize: 12, color: 'var(--color-graphite)', lineHeight: 1.5 }}>{sub}</p>
            </div>
          ))}
        </div>

        {/* ── FAQ Accordion — faq-row DESIGN.md spec ── */}
        <div
          style={{
            backgroundColor: 'var(--color-cloud)',
            borderRadius: 'var(--rounded-xl)',
            padding: '32px',
            boxShadow: 'var(--shadow-soft-lift)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              fontWeight: 500,
              color: 'var(--color-ink)',
              textAlign: 'center',
              marginBottom: 28,
            }}
          >
            Frequently Asked Questions
          </h3>

          <LazyMotion features={domAnimation}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div
                    key={i}
                    style={{
                      borderBottom: i < FAQS.length - 1 ? '1px solid var(--color-hairline)' : 'none',
                    }}
                  >
                    {/* faq-row: canvas bg, rounded-lg, body-emphasis per DESIGN.md */}
                    <button
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '18px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: 16,
                      }}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 15,
                          fontWeight: 500,
                          color: isOpen ? 'var(--color-primary)' : 'var(--color-ink)',
                          lineHeight: 1.4,
                          transition: 'color 0.2s',
                        }}
                      >
                        {faq.q}
                      </span>
                      <CaretDown
                        size={18}
                        style={{
                          color: 'var(--color-graphite)',
                          flexShrink: 0,
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <m.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            style={{
                              fontSize: 14,
                              color: 'var(--color-charcoal)',
                              lineHeight: 1.6,
                              paddingBottom: 18,
                            }}
                          >
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
