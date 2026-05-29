'use client'

import React from 'react'
import { CURRICULUM_DAYS } from '@/lib/constants'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Curriculum() {
  return (
    <section id="curriculum" className="max-w-6xl mx-auto bg-gray-100 py-12 lg:py-10 px-6 overflow-hidden mt-10 rounded-3xl">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        
        {/* Top: Header */}
        <div className="text-center mb-12">
          <ScrollReveal delay={0.1}>
            <h2 className="title mb-3">
              10 Days to Corporate Ready
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-para text-center max-w-2xl mx-auto mb-6 text-balance">
              A structured, modular journey. Not a random collection of tips — a
              deliberate transformation from campus to corporate.
            </p>
          </ScrollReveal>
        </div>

        {/* Bottom: Grid with Pricing and Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Pricing Sticky Card */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-3xl border-2 border-black/40 shadow-[var(--shadow-soft-lift)] p-5">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.8px] mb-1 text-[var(--color-primary)]">
                  Starts June 1
                </p>
                <p className="font-display text-3xl font-bold leading-none text-[var(--color-ink)] mb-1">
                  ₹999
                </p>
                <p className="text-[12.5px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                  Early Bird · Nagpur Students
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-3 flex flex-col gap-0">
            {CURRICULUM_DAYS.map((item, i) => (
              <ScrollReveal key={item.days} delay={0.05 * (i % 4)} direction="up" className="w-full">
                <div
                  className="day-card pb-8 last:pb-0"
                  style={{
                    borderLeft: `2px solid ${i === CURRICULUM_DAYS.length - 1 ? 'transparent' : 'var(--color-primary-soft)'}`,
                    paddingLeft: '24px',
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <div
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: '-7px',
                      top: '4px',
                      background: 'var(--color-primary)',
                      border: '2px solid var(--color-canvas)',
                      boxShadow: '0 0 0 2px var(--color-primary-soft)',
                    }}
                  />
                  <span className="font-display text-[12px] font-bold uppercase tracking-[0.8px] mb-1 text-[var(--color-primary)]">
                    {item.days}
                  </span>
                  <h3 className="font-display text-[16px] font-bold mt-0.5 mb-1 text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-charcoal)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
