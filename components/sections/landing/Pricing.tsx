'use client'

import React, { useEffect, useRef } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'

const FREE_FEATURES = [
  'Resume mistakes to avoid',
  'LinkedIn quick-win checklist',
  'How hiring managers think',
  'Live Q&A with Sarang',
]

const PAID_FEATURES = [
  'Everything in the Free Session',
  '10-day live curriculum',
  'ATS Resume + LinkedIn overhaul',
  'Mock Interviews with feedback',
  'Salary Negotiation scripts',
  'Premium Resume Templates',
  'Cold Email Scripts for HRs',
  'Internship opportunity (top performers)',
]

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0"
      style={{ color: 'var(--color-primary)' }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!sectionRef.current) return
    const cards = sectionRef.current.querySelectorAll('.pricing-card')
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  return (
    <section id="pricing" className="bg-[var(--color-canvas)]">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 py-20 lg:py-28">
        <div className="text-center mb-14">
          <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-4">
            Registration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-none mb-3 text-[var(--color-ink)]">
            Choose Your Path
          </h2>
          <p className="text-sm text-[var(--color-graphite)]">
            Start free. Go all-in when you&apos;re ready.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Free Card */}
          <div
            className="pricing-card opacity-0 p-8 rounded-xl shadow-[var(--shadow-soft-lift)] flex flex-col"
            style={{ background: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}
          >
            <p className="text-xs font-bold uppercase tracking-[1px] mb-2 text-[var(--color-graphite)]">
              Free Session
            </p>
            <p className="text-5xl font-bold leading-none mb-1 text-[var(--color-ink)]">
              ₹0
            </p>
            <p className="text-xs mb-6 text-[var(--color-graphite)]">
              May 24 / 31 · Limited to 100 Students
            </p>
            <ul className="flex flex-col gap-2 mb-8 text-sm text-[var(--color-charcoal)]">
              {FREE_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block text-center px-6 py-3.5 rounded-md text-sm font-bold uppercase tracking-[0.7px] border-2 transition-all hover:bg-[var(--color-ink)] hover:text-white"
              style={{
                borderColor: 'var(--color-ink)',
                color: 'var(--color-ink)',
              }}
            >
              Register Free
            </a>
          </div>

          {/* Paid Card — Featured */}
          <div
            className="pricing-card opacity-0 p-8 rounded-xl shadow-[var(--shadow-float)] flex flex-col relative overflow-hidden"
            style={{
              background: 'var(--color-canvas)',
              border: '2px solid var(--color-primary)',
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: 'var(--color-primary)' }}
            />

            <div className="flex items-start justify-between mb-2">
              <p className="text-xs font-bold uppercase tracking-[1px] text-[var(--color-graphite)]">
                10-Day Masterclass
              </p>
              <span
                className="text-xs font-bold px-2 py-1 rounded"
                style={{ background: 'var(--color-bloom-coral)', color: 'white' }}
              >
                EARLY BIRD
              </span>
            </div>
            <p className="text-5xl font-bold leading-none mb-1 text-[var(--color-primary)]">
              ₹999
            </p>
            <p className="text-xs mb-6 text-[var(--color-graphite)]">
              June 1 Start · Nagpur Students Only
            </p>
            <ul className="flex flex-col gap-2 mb-8 text-sm text-[var(--color-charcoal)]">
              {PAID_FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block text-center px-6 py-3.5 rounded-md text-sm font-bold uppercase tracking-[0.7px] transition-all hover:brightness-110"
              style={{ background: 'var(--color-primary)', color: 'white' }}
            >
              Enrol for ₹999
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
