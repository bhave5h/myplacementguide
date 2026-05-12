'use client'

import React from 'react'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function RegisterHero() {
  return (
    /* ── Ink slab hero ── */
    <section
      style={{
        backgroundColor: 'var(--color-ink)',
        paddingTop: 96,
        paddingBottom: 72,
        paddingLeft: 24,
        paddingRight: 24,
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <SplitText
          text="Choose Your Path to Corporate"
          as="h1"
          className="text-balance"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px,4.5vw,56px)',
            fontWeight: 500,
            lineHeight: 1.05,
            color: 'var(--color-on-ink)',
            marginBottom: 20,
          }}
          by="word"
          staggerDelay={0.06}
        />

        <ScrollReveal delay={0.55}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              fontWeight: 400,
              color: 'var(--color-steel)',
              marginBottom: 32,
              lineHeight: 1.5,
            }}
          >
            Start free. Upgrade when you're ready.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.75}>
          {/* Urgency badge — bloom-coral sale tag style from DESIGN.md */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'var(--color-bloom-coral)',
              color: '#fff',
              padding: '6px 16px',
              borderRadius: 'var(--rounded-sm)',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            ⚡ Only 100 free seats available
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
