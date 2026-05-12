'use client'

import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function CurriculumHero() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-ink)',
        overflow: 'hidden',
        paddingTop: 96,
        paddingBottom: 80,
      }}
      className="flex items-center justify-center text-center"
    >
      <div className="max-w-[1366px] mx-auto px-6 flex flex-col items-center gap-8 relative z-10">

        <ScrollReveal delay={0.1} direction="up">
          <Badge variant="new">Early Bird · Nagpur Students</Badge>
        </ScrollReveal>

        <SplitText
          text="10 Days to Corporate Ready"
          as="h1"
          className="text-balance"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px,5vw,60px)',
            fontWeight: 500,
            lineHeight: 1.05,
            color: 'var(--color-on-ink)',
            margin: 0,
          }}
          by="word"
          staggerDelay={0.07}
        />

        <ScrollReveal delay={0.55}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--color-steel)',
              maxWidth: 520,
              margin: 0,
            }}
            className="text-balance"
          >
            A structured, outcome-first journey from raw resume to confident corporate professional.
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.75} className="flex items-center gap-10 mt-2">
          <div className="flex flex-col items-center">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                fontWeight: 700,
                color: 'var(--color-primary-bright)',
                lineHeight: 1,
              }}
            >
              10
            </span>
            <span style={{ fontSize: 14, color: 'var(--color-steel)', marginTop: 4 }}>Modules</span>
          </div>
          <div style={{ width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <div className="flex flex-col items-center">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                fontWeight: 700,
                color: 'var(--color-on-ink)',
                lineHeight: 1,
              }}
            >
              3
            </span>
            <span style={{ fontSize: 14, color: 'var(--color-steel)', marginTop: 4 }}>Bonus Resources</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.95} className="mt-2">
          <Button variant="primary" size="lg" href="/register">
            Enrol Now — ₹999 →
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
