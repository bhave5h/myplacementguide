'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { LogoMarquee } from '@/components/smoothui/logo-cloud-3/Logos'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { THREE_PILLARS, MENTOR_STATS, MENTOR_NAME } from '@/lib/constants'
import { Check, IdentificationBadge, Trophy, Briefcase, Handshake } from '@phosphor-icons/react'

export function WebinarDetails() {
  return (
    <section className="py-16 bg-[var(--color-cloud)] rounded-3xl px-5 flex flex-col gap-16 overflow-hidden">
      {/* ── Logo Marquee Section ── */}
      <div className="w-full max-w-5xl mx-auto">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-6">
            <h3 className="text-[13px] font-bold text-[var(--color-primary-deep)] uppercase tracking-widest mb-2">
              Instant Social Proof
            </h3>
            <h2 className="text-[22px] sm:text-[28px] font-display font-bold text-[var(--color-ink)] leading-tight">
              Companies Where Our Mentor & Students Cracked Offers
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <LogoMarquee title="" description="" speed="fast" />
        </ScrollReveal>
      </div>

      {/* ── The 3 Pillars Section ── */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <ScrollReveal delay={0.1}>
            <h3 className="text-[13px] font-bold text-[var(--color-primary-deep)] uppercase tracking-widest mb-2">
              Webinar Curriculum
            </h3>
            <h2 className="text-[24px] sm:text-[32px] font-display font-bold text-[var(--color-ink)] leading-tight">
              What You Will Learn In These 3 Hours
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {THREE_PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={0.15 * i}>
              <Card variant="flat" className="h-full bg-white border border-black/10 hover:border-[var(--color-primary)] transition-all rounded-2xl p-6">
                <span className="font-display text-[32px] font-bold text-[var(--color-primary-soft)] block mb-3 text-[var(--color-primary)] opacity-40">
                  {pillar.number}
                </span>
                <h3 className="font-display text-[18px] font-bold text-[var(--color-ink)] mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[var(--color-charcoal)] leading-[1.6]">
                  {pillar.body}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Mentor Profile Section ── */}
      <div className="w-full max-w-4xl mx-auto bg-white border border-black/5 rounded-3xl p-6 sm:p-10 shadow-[var(--shadow-soft-lift)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Portrait */}
          <div className="lg:col-span-4 flex justify-center">
            <ScrollReveal direction="left" className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-black/10 bg-[var(--color-cloud)] p-1.5 shadow-md">
              <Image
                src="/Images/hero.png"
                alt={MENTOR_NAME}
                fill
                sizes="100vw, (max-width: 768px) 50vw"
                className="object-cover rounded-xl"
              />
            </ScrollReveal>
          </div>

          {/* Description */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <h3 className="text-[13px] font-bold text-[var(--color-primary-deep)] uppercase tracking-widest mb-1.5">
                Your Coach & Mentor
              </h3>
              <h2 className="text-[24px] font-display font-bold text-[var(--color-ink)] leading-none mb-1">
                {MENTOR_NAME}
              </h2>
              <p className="text-[13px] text-[var(--color-graphite)] font-bold">
                Founder, NagpurHeights & BigTopSocial
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[14px] sm:text-[15px] text-[var(--color-charcoal)] leading-[1.6]">
                I'm on a mission to help Nagpur's fresh graduates bridge the gap between college theory and corporate expectations. Having cracked multiple tech offers and built startups, I know exactly what catches a recruiter's eye.
              </p>
            </ScrollReveal>

            {/* Quick stats list */}
            <ScrollReveal delay={0.3} className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {MENTOR_STATS.map((stat, i) => (
                  <div key={i} className="bg-[var(--color-cloud)] border border-black/5 rounded-xl p-3 text-center">
                    <span className="font-display text-[16px] sm:text-[18px] font-bold text-[var(--color-ink)] block leading-none mb-1 text-[var(--color-primary-deep)]">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-graphite)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
