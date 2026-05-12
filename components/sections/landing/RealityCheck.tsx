'use client'

import React from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CounterStat } from '@/components/ui/CounterStat'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const STATS = [
  {
    value: '90',
    suffix: '%',
    label: 'Resumes rejected before a human sees them',
    color: 'var(--color-primary)',
  },
  {
    value: '6',
    suffix: 's',
    label: 'Average time a hiring manager spends on a resume',
    color: 'var(--color-ink)',
  },
  {
    value: '70',
    suffix: '%',
    label: 'Of jobs are never publicly posted',
    color: 'var(--color-ink)',
  },
]

export function RealityCheck() {
  return (
    <section
      style={{ backgroundColor: 'var(--color-cloud)', padding: '80px 24px' }}
      className="overflow-hidden"
    >
      <div className="max-w-[1366px] mx-auto max-w-4xl flex flex-col items-center text-center">

        <SectionLabel className="mb-10 justify-center">The Hard Truth</SectionLabel>

        <div className="mb-16">
          <ScrollReveal delay={0.1}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4.5vw,52px)',
                fontWeight: 500,
                lineHeight: 1.05,
                color: 'var(--color-ink)',
                marginBottom: 8,
              }}
              className="text-balance"
            >
              Nagpur colleges teach you the syllabus.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4.5vw,52px)',
                fontWeight: 500,
                lineHeight: 1.05,
                color: 'var(--color-primary)',
                marginBottom: 0,
              }}
              className="text-balance"
            >
              They don't teach you the Selection.
            </h2>
          </ScrollReveal>
        </div>

        {/* Stat cards — each on a white canvas card with soft lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={0.35 + i * 0.1} direction="up">
              <div
                style={{
                  backgroundColor: 'var(--color-canvas)',
                  borderRadius: 'var(--rounded-xl)',
                  boxShadow: 'var(--shadow-soft-lift)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 10,
                }}
              >
                <CounterStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  accentColor={stat.color}
                  className="items-center text-center"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.75}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'var(--color-charcoal)',
              maxWidth: 560,
            }}
            className="text-balance"
          >
            Are you part of that 90%? If your resume isn't built for the algorithm,
            you're invisible — no matter how good you actually are.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
