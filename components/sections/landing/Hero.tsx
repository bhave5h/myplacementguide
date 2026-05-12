'use client'

import React from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function Hero() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-canvas)', overflow: 'hidden', position: 'relative' }}
      className="pt-16 pb-20 lg:pt-24 lg:pb-32"
    >
      {/* ── Blue Chevron Decorations (DESIGN.md: chevron-decoration) ── */}
      <div aria-hidden="true" className="hidden lg:block pointer-events-none">
        {/* Left slash */}
        <div
          style={{
            position: 'absolute',
            left: -40,
            top: 0,
            bottom: 0,
            width: 80,
            backgroundColor: 'var(--color-primary)',
            transform: 'skewX(-10deg)',
            opacity: 0.08,
            zIndex: 0,
          }}
        />
        {/* Right slash */}
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: 0,
            bottom: 0,
            width: 80,
            backgroundColor: 'var(--color-primary)',
            transform: 'skewX(-10deg)',
            opacity: 0.08,
            zIndex: 0,
          }}
        />
      </div>

      <div className="max-w-[1366px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            <LazyMotion features={domAnimation}>
              <m.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <Badge variant="free">FREE · MAY 24 &amp; 31</Badge>
              </m.div>
            </LazyMotion>

            <SplitText
              text="Stop Applying. Start Getting Hired."
              as="h1"
              className="text-balance"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px,5.5vw,64px)',
                fontWeight: 500,
                lineHeight: 1.05,
                color: 'var(--color-ink)',
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
                  color: 'var(--color-charcoal)',
                  maxWidth: 540,
                  margin: 0,
                }}
                className="text-balance"
              >
                Learn the Hiring Manager's Secret to cracking top IT &amp; Marketing roles — from a Founder who's been on both sides of the table.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.75} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <Button variant="primary" size="lg" href="/register">
                Register for Free Masterclass →
              </Button>
              <span style={{ color: 'var(--color-graphite)', fontSize: 14 }}>
                Limited to 100 students
              </span>
            </ScrollReveal>

            {/* Trusted logos */}
            <ScrollReveal delay={0.95} className="w-full">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-graphite)',
                  marginBottom: 14,
                }}
              >
                Trusted offers from:
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {['AMAZON', 'TCS', 'ZOHO', 'COGNIZANT'].map((brand) => (
                  <span
                    key={brand}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'var(--color-steel)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Photo + Floating Stat Cards ── */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <LazyMotion features={domAnimation}>
              {/* Photo frame */}
              <m.div
                initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                animate={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  aspectRatio: '4/5',
                  borderRadius: 'var(--rounded-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-soft-lift)',
                  backgroundColor: 'var(--color-cloud)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, var(--color-fog) 0%, var(--color-cloud) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'var(--color-graphite)', fontSize: 13 }}>
                    [Sarang Photo Placeholder]
                  </span>
                </div>
              </m.div>

              {/* Stat card – top left */}
              <m.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', delay: 0.7 }}
                style={{ position: 'absolute', top: -20, left: -20, zIndex: 20 }}
              >
                <Card variant="product" style={{ padding: '14px 20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--color-ink)', display: 'block' }}>
                    5+ Years
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                    IT Experience
                  </span>
                </Card>
              </m.div>

              {/* Stat card – bottom right */}
              <m.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', delay: 0.95 }}
                style={{ position: 'absolute', bottom: -24, right: -16, zIndex: 20 }}
              >
                <Card variant="product" style={{ padding: '14px 20px' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--color-ink)', display: 'block' }}>
                    3
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-charcoal)' }}>
                    Companies Founded
                  </span>
                </Card>
              </m.div>
            </LazyMotion>
          </div>

        </div>
      </div>

      {/* ── Sticky Mobile CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-between px-5 py-3"
        style={{
          backgroundColor: 'var(--color-canvas)',
          borderTop: '1px solid var(--color-hairline)',
          boxShadow: '0 -4px 20px rgba(26,26,26,0.08)',
        }}
      >
        <div className="flex flex-col">
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-ink)' }}>Free Masterclass</span>
          <span style={{ fontSize: 12, color: 'var(--color-primary)' }}>May 24 &amp; 31</span>
        </div>
        <Button variant="primary" size="sm" href="/register">
          Register Now
        </Button>
      </div>
    </section>
  )
}
