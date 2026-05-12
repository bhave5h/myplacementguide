'use client'

import React, { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Card } from '@/components/ui/Card'
import { MENTOR_STATS } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'

export function AboutMentor() {
  const quoteRef = useRef<HTMLQuoteElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (lineRef.current && quoteRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 80%', once: true },
        }
      )
      const pEl = quoteRef.current.querySelector('p')
      if (pEl) {
        gsap.fromTo(
          pEl,
          { opacity: 0, x: 16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: { trigger: quoteRef.current, start: 'top 80%', once: true },
          }
        )
      }
    }
  }, [])

  return (
    /* ── Ink slab (DESIGN.md: promo-strip-dark / help-band-dark) ── */
    <section className="bg-[var(--color-ink)] py-20 px-6 overflow-hidden">
      <div className="max-w-[1366px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: Photo placeholder ── */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="aspect-[3/4] rounded-[var(--rounded-xl)] overflow-hidden bg-[var(--color-ink-soft)] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-[var(--color-graphite)] text-[13px]">
                    [Sarang Portrait Placeholder]
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Copy & Stats ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionLabel className="mb-6 text-[var(--color-primary-bright)]">
              Your Mentor
            </SectionLabel>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium leading-[1.05] text-[var(--color-on-ink)] mb-10 text-balance">
                Meet Sarang Divakar Thakre
              </h2>
            </ScrollReveal>

            {/* Stats grid — white-canvas cards on ink slab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-14">
              {MENTOR_STATS.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <Card 
                    variant="flat" 
                    className="h-full border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]"
                  >
                    <div className="p-5 lg:p-6">
                      <span className="font-display text-[32px] font-bold text-[var(--color-primary-bright)] block mb-1.5">
                        {stat.value}{stat.suffix}
                      </span>
                      <span className="font-body text-[14px] font-semibold text-[var(--color-on-ink)] block mb-1">
                        {stat.label}
                      </span>
                      <p className="text-[13px] text-[var(--color-steel)] leading-[1.5]">
                        {stat.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote ref={quoteRef} className="relative pl-7 py-1">
              <div
                ref={lineRef}
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-primary)] rounded-full"
              />
              <p className="font-body text-[20px] font-normal italic leading-[1.6] text-[var(--color-on-ink)] mb-3.5">
                "I don't want to just teach. I want to build the next generation of Corporate Leaders from Nagpur."
              </p>
              <footer className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-bright)]">
                — Sarang Divakar Thakre
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
