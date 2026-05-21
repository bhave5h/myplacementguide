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
    <section className="bg-green-800/10 max-w-6xl mx-auto container overflow-hidden border-10 border-green-100 rounded-3xl p-10 mb-10">
      <div className="w-auto relative flex-col items-center text-center pb-10">
        <div className="mb-16">
               <ScrollReveal delay={0.1}>
            <h2 className="font-semibold text-3xl md:text-5xl leading-[1.05] text-[var(--color-ink)] mb-2 text-balance">
              The Truth Is
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-[20px] md:text-3xl font-medium leading-[1.05] text-[var(--color-ink)] mb-2 text-balance">
              Colleges teach you the syllabus.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.22}>
            <h2 className="text-[20px] md:text-3xl font-medium leading-[1.05] text-[var(--color-primary)] m-0 text-balance">
              They don't teach you the Selection.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-2/3 mx-auto">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={0.35 + i * 0.1} direction="up">
              <div className="bg-[var(--color-canvas)] rounded-[var(--rounded-xl)] shadow-[var(--shadow-soft-lift)] p-18 lg:p-[32px_24px] flex flex-col items-center text-center gap-2.5">
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
          <p className="font-body text-[17px] font-normal leading-[1.6] text-[var(--color-charcoal)] mt-10 text-balance mx-auto w-2/3">
            Are you part of that 90%? If your resume isn't built for the algorithm,
            you're invisible — no matter how good you actually are.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
