'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function ClosingBand() {
  return (
    <section className="max-w-6xl mx-auto bg-gray-100 rounded-3xl overflow-hidden mt-10 mb-10 p-8 md:p-12 text-center">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal delay={0.1}>
          <h2 className="title mb-4">
            Your career doesn&apos;t wait.
            <br />
            <span className="text-[var(--color-primary)]">Neither should you.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-para text-center max-w-md mx-auto mb-6">
            Free Session · May 24 / 31 · Only 100 Seats
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[var(--rounded-lg)] text-sm font-semibold uppercase tracking-[0.7px] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-deep)] transition-all duration-300 shadow-[var(--shadow-soft-lift)]"
          >
            Register Now — It&apos;s Free
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

