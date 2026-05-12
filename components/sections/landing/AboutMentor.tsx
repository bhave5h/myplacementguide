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
    <section
      style={{ backgroundColor: 'var(--color-ink)', padding: '80px 24px', overflow: 'hidden' }}
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: Photo placeholder ── */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div
                style={{
                  aspectRatio: '3/4',
                  borderRadius: 'var(--rounded-xl)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-ink-soft)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--color-ink) 0%, transparent 60%)',
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 20,
                  }}
                >
                  <span style={{ color: 'var(--color-graphite)', fontSize: 13 }}>
                    [Sarang Portrait Placeholder]
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Copy & Stats ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionLabel className="mb-6" style={{ '--tw-color': 'var(--color-primary-bright)' } as any}>
              Your Mentor
            </SectionLabel>

            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px,3.5vw,44px)',
                  fontWeight: 500,
                  lineHeight: 1.05,
                  color: 'var(--color-on-ink)',
                  marginBottom: 40,
                }}
                className="text-balance"
              >
                Meet Sarang Divakar Thakre
              </h2>
            </ScrollReveal>

            {/* Stats grid — white-canvas cards on ink slab */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-14">
              {MENTOR_STATS.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <Card variant="flat" className="h-full" style={{ borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    <div style={{ padding: '20px 24px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 32,
                          fontWeight: 700,
                          color: 'var(--color-primary-bright)',
                          display: 'block',
                          marginBottom: 6,
                        }}
                      >
                        {stat.value}{stat.suffix}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          fontWeight: 600,
                          color: 'var(--color-on-ink)',
                          display: 'block',
                          marginBottom: 4,
                        }}
                      >
                        {stat.label}
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--color-steel)', lineHeight: 1.5 }}>
                        {stat.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote ref={quoteRef} style={{ position: 'relative', paddingLeft: 28, paddingTop: 4, paddingBottom: 4 }}>
              <div
                ref={lineRef}
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: 99,
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 20,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'var(--color-on-ink)',
                  marginBottom: 14,
                }}
              >
                "I don't want to just teach. I want to build the next generation of Corporate Leaders from Nagpur."
              </p>
              <footer
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary-bright)',
                }}
              >
                — Sarang Divakar Thakre
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
