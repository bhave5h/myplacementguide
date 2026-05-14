'use client'

import React from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import { LogoMarquee } from '@/components/smoothui/logo-cloud-3/Logos'

export function Hero() {
  return (
    <section className="bg-[var(--color-canvas)] overflow-hidden relative pt-12 pb-28 lg:pt-20 lg:pb-32">
      <div aria-hidden="true" className="hidden lg:block pointer-events-none">
        <div className="absolute left-[-40px] top-0 bottom-0 w-20 bg-[var(--color-primary)] skew-x-[-10deg] opacity-[0.08] z-0" />
        <div className="absolute right-[-40px] top-0 bottom-0 w-20 bg-[var(--color-primary)] skew-x-[-10deg] opacity-[0.08] z-0" />
      </div>

      <div className="max-w-[1366px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Column: Copy ── */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            <SplitText
              text="Stop Applying. Start Getting Hired."
              as="h1"
              className="text-balance font-display text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.05] text-[var(--color-ink)] m-0"
              by="word"
              staggerDelay={0.07}
            />

            <ScrollReveal delay={0.55}>
              <p className="font-body text-[18px] font-normal leading-[1.55] text-[var(--color-charcoal)] max-w-[540px] m-0 text-balance">
               <b>Learn </b> the Hiring Manager's Secret to cracking top IT &amp; Marketing roles from a <b>Founder</b> who's been on both sides of the table.
              </p>
              <p className="font-body text-[18px] mt-3 font-normal leading-[1.55] text-[var(--color-charcoal)] max-w-[540px] m-0 text-balance">
              Register for the FREE Masterclass On <b> May 24 </b>
               </p>
            </ScrollReveal>

            <ScrollReveal delay={0.75}>

              <Button 
              className='relative z-10 box-border mb-5 inline-flex items-center justify-center bg-blue-600 text-white border border-white/40 rounded-xl px-10 py-2.5 text-base leading-none font-normal tracking-[-0.02em] shadow-[0_18px_36px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.20),inset_0_0_6px_2px_rgba(255,255,255,0.24),0_0_0_1px_var(--color-blue-600)]'
              size="lg" href="/register">
                Register for Free →
              </Button>

              <p className="font-body text-[18px] mt-4 font-normal leading-[1.55] text-[var(--color-charcoal)] max-w-[540px] m-0 text-balance">
              Get Placed at Top Companies
              </p>

              <LogoMarquee title="" description="" speed="slow" />

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
                className="aspect-[4/5] rounded-[var(--rounded-xl)] overflow-hidden shadow-[var(--shadow-soft-lift)] bg-[var(--color-cloud)] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fog)] to-[var(--color-cloud)] flex items-center justify-center">
                  <span className="text-[var(--color-graphite)] text-[13px] w-full h-full overflow-hidden">
                    <Image src="/images/hero.png" alt="sir" width={1080} height={1080} className="w-full h-full object-cover"/>
                  </span>
                </div>
              </m.div>

              {/* Stat card – top left */}
              <m.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', delay: 0.7 }}
                className="absolute top-[-12px] left-[-8px] sm:top-[-20px] sm:left-[-20px] z-20"
              >
                <Card variant="product" className="px-5 py-3.5">
                  <span className="font-display text-[22px] font-bold text-[var(--color-ink)] block">
                    5+ Years
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)]">
                    IT Experience
                  </span>
                </Card>
              </m.div>

              {/* Stat card – bottom right */}
              <m.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', delay: 0.95 }}
                className="absolute bottom-[-16px] right-[-8px] sm:bottom-[-24px] sm:right-[-16px] z-20"
              >
                <Card variant="product" className="px-5 py-3.5">
                  <span className="font-display text-[22px] font-bold text-[var(--color-ink)] block">
                    3
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--color-charcoal)]">
                    Companies Founded
                  </span>
                </Card>
              </m.div>
            </LazyMotion>
          </div>

        </div>
      </div>

      {/* ── Sticky Mobile CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-between px-5 py-3 bg-[var(--color-canvas)] border-t border-[var(--color-hairline)] shadow-[0_-4px_20px_rgba(26,26,26,0.08)]">
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[var(--color-ink)]">Free Masterclass</span>
          <span className="text-[12px] text-[var(--color-primary)]">May 24 &amp; 31</span>
        </div>
        <Button variant="primary" size="sm" href="/register">
          Register Now
        </Button>
      </div>
    </section>
  )
}
