'use client'

import React from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SplitText } from '@/components/animations/SplitText'

export function BeyondDegree() {
  return (
    /* ── Cloud alternating band ── */
    <section className="band-cloud">
      <div className="container-narrow">
        <SectionLabel className="mb-10">Beyond The Degree</SectionLabel>

        <ScrollReveal>
          <blockquote className="font-display text-[clamp(22px,3.5vw,40px)] font-medium leading-[1.2] italic text-primary mb-12 text-balance">
            "I've seen students with 9.0 CGPA struggle to explain their value."
          </blockquote>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
          <SplitText
            text="My goal is to bridge the gap between 'Campus' and 'Corporate'. I'm not here to give you a certificate; I'm here to give you a career."
            as="p"
            by="word"
            staggerDelay={0.018}
            className="body-text text-[17px] leading-[1.7]"
          />
        </div>

        <ScrollReveal delay={0.35}>
          <div className="h-[1px] w-12 bg-primary mx-auto mb-10" />
        </ScrollReveal>

        <div className="max-w-2xl mx-auto text-center">
          <SplitText
            text="Nagpur has extraordinary talent. What it lacks is a structured bridge to take that talent into the rooms where decisions are made."
            as="p"
            by="word"
            staggerDelay={0.018}
            className="body-text text-[17px] leading-[1.7]"
          />
        </div>
      </div>
    </section>
  )
}
