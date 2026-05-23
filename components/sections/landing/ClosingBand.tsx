'use client'

import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function ClosingBand() {
  return (
    <section className="">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 py-14 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-black/80">
            Your career doesn&apos;t wait.
            <br />
            <span className="text-[var(--color-primary-bright)]">Neither should you.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-sm mb-6 font-bold text-black/70">
            Free Session · May 24 / 31 · Only 100 Seats
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-[0.7px] transition-all hover:brightness-110"
            style={{ background: 'var(--color-primary)', color: 'white' }}
          >
            Register Now — It&apos;s Free
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
