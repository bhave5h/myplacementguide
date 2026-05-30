'use client'

import React from 'react'
import { Badge } from '@/components/ui/Badge'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function CurriculumHero() {
  return (
    <section className="band-ink pt-24 pb-20">
      <div className="max-w-[1366px] mx-auto px-6 flex flex-col items-center gap-8 relative z-10">

        <ScrollReveal delay={0.1} direction="up">
          <Badge variant="new">Early Bird · Nagpur Students</Badge>
        </ScrollReveal>

        <SplitText
          text="10 Days to Corporate Ready"
          as="h1"
          className="hero-title"
          by="word"
          staggerDelay={0.07}
        />

        <ScrollReveal delay={0.55}>
          <p className="hero-para">
            A structured, outcome-first journey from raw resume to confident corporate professional.
          </p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={0.75} className="flex items-center gap-10 mt-2">
          <div className="flex flex-col items-center">
            <span className="font-display text-[36px] font-bold text-primary-bright leading-none">
              10
            </span>
            <span className="text-[14px] text-steel mt-1">Modules</span>
          </div>
          <div className="w-[1px] h-10 bg-white/12" />
          <div className="flex flex-col items-center">
            <span className="font-display text-[36px] font-bold text-on-ink leading-none">
              3
            </span>
            <span className="text-[14px] text-steel mt-1">Bonus Resources</span>
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
