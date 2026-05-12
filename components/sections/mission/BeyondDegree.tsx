'use client'

import React from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SplitText } from '@/components/animations/SplitText'

export function BeyondDegree() {
  return (
    /* ── Cloud alternating band ── */
    <section
      style={{ backgroundColor: 'var(--color-cloud)', padding: '80px 24px', overflow: 'hidden' }}
    >
      <div className="max-w-[900px] mx-auto">
        <SectionLabel className="mb-10">Beyond The Degree</SectionLabel>

        <ScrollReveal>
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px,3.5vw,40px)',
              fontWeight: 500,
              lineHeight: 1.2,
              fontStyle: 'italic',
              color: 'var(--color-primary)',
              marginBottom: 48,
            }}
            className="text-balance"
          >
            "I've seen students with 9.0 CGPA struggle to explain their value."
          </blockquote>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <SplitText
            text="My goal is to bridge the gap between 'Campus' and 'Corporate'. I'm not here to give you a certificate; I'm here to give you a career."
            as="p"
            by="word"
            staggerDelay={0.018}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              fontWeight: 400,
              color: 'var(--color-charcoal)',
              lineHeight: 1.7,
            }}
          />
        </div>

        <ScrollReveal delay={0.35}>
          <div
            style={{
              height: 1,
              width: 48,
              backgroundColor: 'var(--color-primary)',
              margin: '0 auto 40px',
            }}
          />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto text-center">
          <SplitText
            text="Nagpur has extraordinary talent. What it lacks is a structured bridge to take that talent into the rooms where decisions are made."
            as="p"
            by="word"
            staggerDelay={0.018}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              fontWeight: 400,
              color: 'var(--color-charcoal)',
              lineHeight: 1.7,
            }}
          />
        </div>
      </div>
    </section>
  )
}
