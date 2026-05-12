'use client'

import React from 'react'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function RegisterHero() {
  return (
    /* ── Ink slab hero ── */
    <section className="bg-[var(--color-ink)] pt-24 pb-18 px-6 text-center overflow-hidden">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <SplitText
          text="Choose Your Path to Corporate"
          as="h1"
          className="text-balance font-display text-[clamp(30px,4.5vw,56px)] font-medium leading-[1.05] text-[var(--color-on-ink)] mb-5"
          by="word"
          staggerDelay={0.06}
        />

        <ScrollReveal delay={0.55}>
          <p className="font-body text-[18px] font-normal text-[var(--color-steel)] mb-8 leading-[1.5]">
            Start free. Upgrade when you're ready.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.75}>
          {/* Urgency badge — bloom-coral sale tag style from DESIGN.md */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-bloom-coral)] text-white px-4 py-1.5 rounded-[var(--rounded-sm)] text-[13px] font-bold tracking-[0.05em] uppercase">
            ⚡ Only 100 free seats available
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
