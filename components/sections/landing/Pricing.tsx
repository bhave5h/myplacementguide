'use client'

import React, { useEffect, useRef } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

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
    <section id="pricing" className="max-w-6xl mx-auto bg-gray-100 py-12 lg:py-10 px-6 overflow-hidden mt-10 rounded-3xl">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        <div className="text-center mb-10">
          <ScrollReveal delay={0.1}>
            <p className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-2">
              Registration
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="title mb-2">
              Choose Your Path
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-para text-center max-w-md mx-auto">
              Start free. Go all-in when you&apos;re ready.
            </p>
          </ScrollReveal>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">

          {/* Free Card */}
          <div
            className="pricing-card opacity-0 p-8 rounded-[var(--rounded-xl)] shadow-[var(--shadow-soft-lift)] flex flex-col bg-[var(--color-canvas)] border border-[var(--color-hairline)] transition-all duration-300 hover:scale-[1.02]"
          >
            <p className="font-display text-xs font-bold uppercase tracking-[1px] mb-2 text-[var(--color-graphite)]">
              Free Session
            </p>
            <p className="font-display text-5xl font-bold leading-none mb-1 text-[var(--color-ink)]">
              ₹0
            </p>
            <p className="text-xs mb-6 text-[var(--color-graphite)] font-medium">
              May 24 / 31 · Limited to 100 Students
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 text-[14px] text-[var(--color-charcoal)]">
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
              className="mt-auto block text-center px-6 py-3.5 rounded-[var(--rounded-lg)] text-[13px] font-semibold uppercase tracking-[0.7px] border border-[var(--color-ink)] bg-white text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white transition-all duration-300"
            >
              Register Free
            </a>
          </div>

          {/* Paid Card — Featured */}
          <div
            className="pricing-card opacity-0 p-8 rounded-[var(--rounded-xl)] shadow-[var(--shadow-float)] flex flex-col relative overflow-hidden bg-[var(--color-canvas)] border-2 border-[var(--color-primary)] transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ background: 'var(--color-primary)' }}
            />

            <div className="flex items-start justify-between mb-2">
              <p className="font-display text-xs font-bold uppercase tracking-[1px] text-[var(--color-graphite)]">
                10-Day Masterclass
              </p>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: '#ff5050', color: 'white' }}
              >
                EARLY BIRD
              </span>
            </div>
            <p className="font-display text-5xl font-bold leading-none mb-1 text-[var(--color-primary)]">
              ₹999
            </p>
            <p className="text-xs mb-6 text-[var(--color-graphite)] font-medium">
              June 1 Start · Nagpur Students Only
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 text-[14px] text-[var(--color-charcoal)]">
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
              className="mt-auto block text-center px-6 py-3.5 rounded-[var(--rounded-lg)] text-[13px] font-semibold uppercase tracking-[0.7px] bg-[var(--color-primary)] text-white border border-transparent hover:bg-[var(--color-primary-deep)] transition-all duration-300 shadow-[var(--shadow-soft-lift)]"
            >
              Enrol for ₹999
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

