'use client'

import React from 'react'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { LinkedinLogo, Briefcase, Trophy } from '@phosphor-icons/react'

export interface MentorStat {
  platform: 'linkedin' | 'briefcase' | 'trophy';
  primaryMetric: string;
  primaryLabel: string;
  secondaryMetric?: string;
  secondaryLabel?: string;
}

export interface AboutMentorProps {
  name?: string;
  title?: string;
  imageSrc?: string;
  paragraphs?: string[];
  stats?: MentorStat[];
}

export function AboutMentor({
  name = "Sarang Thakre",
  title = "Founder, NagpurHeights & BigTopSocial",
  imageSrc = "/images/hero.png",
  paragraphs = [
    "Hey Folks, I'm <b>Sarang Divakar Thakre</b>, and I'm super excited to be your mentor for this masterclass.",
    "I've helped <b>hundreds</b> of graduates and freshers in the Nagpur region build successful careers in IT & Marketing. As the founder of <b>NagpurHeights</b> & <b>BigTopSocial</b>, I've sat on both sides of the hiring table and know exactly how to make you stand out.",
    "Before starting my own ventures, I scaled my skills in the IT industry for <b>5+ years</b>, cracking multiple high-paying offers from top-tier firms. I know what hiring managers look for because I hire for my own startups every single day.",
    "Today, my mission is to bridge the gap between academic degrees and corporate realities, helping Nagpur's students transition from <b>'Campus to Corporate'</b> without feeling lost.",
    "Now, I'm here to share everything I've learned with you."
  ],
  stats = [
    {
      platform: 'linkedin',
      primaryMetric: '5+ Years',
      primaryLabel: 'IT Exp.',
      secondaryMetric: '4+',
      secondaryLabel: 'Offers'
    },
    {
      platform: 'briefcase',
      primaryMetric: '2',
      primaryLabel: 'Startups',
      secondaryMetric: 'Nagpur',
      secondaryLabel: "HQ'd"
    },
    {
      platform: 'trophy',
      primaryMetric: '1',
      primaryLabel: 'Exit',
      secondaryMetric: 'Agency',
      secondaryLabel: 'Exited'
    }
  ]
}: AboutMentorProps) {
  return (
    <section className="max-w-6xl mx-auto lg:py-0 px-5 overflow-hidden rounded-3xl bg-black/10">
      {/* Person Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": name,
            "jobTitle": "Founder & Career Mentor",
            "image": `https://myplacementguide.com${imageSrc}`,
            "worksFor": [
              {
                "@type": "Organization",
                "name": "NagpurHeights"
              },
              {
                "@type": "Organization",
                "name": "BigTopSocial"
              }
            ],
            "description": "Founder and mentor helping Nagpur students bridge the gap between academic education and corporate hiring expectations."
          })
        }}
      />

      <div className="max-w-5xl mx-auto p-4 md:p-10">
        {/* ── Heading: Always top center ── */}
        <ScrollReveal delay={0.1}>
          <h2 className="title mb-8 md:mb-8">
            Meet your Mentor
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Left Column: Portrait Card + Stats ── */}
          <div className="lg:col-span-5 w-full flex flex-col items-center gap-6 md:max-w-2xl md:mx-auto lg:max-w-none">
            <ScrollReveal direction="left" className="w-full max-w-[360px] md:max-w-2xl lg:max-w-[368px] mx-auto">
              <div className="w-full bg-white rounded-3xl border-2 border-black/50 shadow-[var(--shadow-float)] text-black flex flex-col p-3 items-center">
                <div className="w-60 h-60 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-[#faf8f5] relative border-2 border-black/50 p-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    sizes="100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1 px-1 py-1 items-center">
                  <h3 className="font-display text-[22px] font-bold text-[var(--color-ink)] leading-none mt-3">
                    {name}
                  </h3>
                  <p className="font-body text-[14px] text-[var(--color-graphite)] font-semibold leading-normal m-0 mt-2">
                    {title}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats column – below portrait, visible only on desktop */}
            <ScrollReveal delay={0.55} className="hidden lg:flex w-full max-w-[368px]">
              <div className="flex flex-row gap-2 w-full justify-between">
                {stats.map((stat, i) => {
                  let IconComponent = Briefcase
                  let iconBgClass = "bg-green-100 text-green-700"

                  if (stat.platform === 'linkedin') {
                    IconComponent = LinkedinLogo
                    iconBgClass = "bg-[#0a66c2]/10 text-[#0a66c2]"
                  } else if (stat.platform === 'trophy') {
                    IconComponent = Trophy
                    iconBgClass = "bg-amber-100 text-amber-700"
                  }

                  return (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-white rounded-xl p-2.5 border border-black/5 shadow-[var(--shadow-soft-lift)] text-black min-w-0"
                    >
                      {/* Icon Container */}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${iconBgClass}`}>
                        <IconComponent size={15} weight="fill" />
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col gap-1 w-full min-w-0 text-center">
                        {/* Primary Metric */}
                        <div className="flex flex-col leading-tight min-w-0">
                          <span className="font-display text-[11.5px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                            {stat.primaryMetric}
                          </span>
                          <span className="text-[7.5px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                            {stat.primaryLabel}
                          </span>
                        </div>

                        {/* Optional Divider & Secondary Metric */}
                        {stat.secondaryMetric && (
                          <div className="flex flex-col leading-tight min-w-0 border-t border-black/5 pt-1 mt-0.5">
                            <span className="font-display text-[11.5px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                              {stat.secondaryMetric}
                            </span>
                            <span className="text-[7.5px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                              {stat.secondaryLabel}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Description / Intro ── */}
          <div className="lg:col-span-7 flex flex-col items-start w-full md:max-w-2xl md:mx-auto lg:max-w-none">
            <div className="flex flex-col gap-4 mb-8 w-full text-para ">
              {paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.15 + index * 0.08} className="w-full">
                  <p 
                    className="m-0 text-balance" 
                    dangerouslySetInnerHTML={{ __html: paragraph }} 
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Horizontal Stats – visible on mobile and tablet, hidden on desktop */}
            <ScrollReveal delay={0.55} className="w-full lg:hidden">
              <div className="flex flex-row gap-2 sm:gap-4 w-full justify-between">
                {stats.map((stat, i) => {
                  let IconComponent = Briefcase
                  let iconBgClass = "bg-green-100 text-green-700"

                  if (stat.platform === 'linkedin') {
                    IconComponent = LinkedinLogo
                    iconBgClass = "bg-[#0a66c2]/10 text-[#0a66c2]"
                  } else if (stat.platform === 'trophy') {
                    IconComponent = Trophy
                    iconBgClass = "bg-amber-100 text-amber-700"
                  }

                  return (
                    <div
                      key={i}
                      className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 bg-white rounded-xl p-2 sm:p-4 border border-black/5 shadow-[var(--shadow-soft-lift)] text-black min-w-0"
                    >
                      {/* Icon Container */}
                      <div className={`w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${iconBgClass}`}>
                        <IconComponent size={14} className="w-3.5 h-3.5 sm:w-5 sm:h-5" weight="fill" />
                      </div>

                      {/* Content Container */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full min-w-0 text-center sm:text-left">
                        {/* Primary Metric */}
                        <div className="flex flex-col leading-tight min-w-0">
                          <span className="font-display text-[10px] sm:text-[15px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                            {stat.primaryMetric}
                          </span>
                          <span className="text-[7px] sm:text-[9px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                            {stat.primaryLabel}
                          </span>
                        </div>

                        {/* Optional Divider */}
                        {stat.secondaryMetric && (
                          <div className="hidden sm:block w-[1px] h-6 bg-black/10 shrink-0 mx-0.5" />
                        )}

                        {/* Secondary Metric */}
                        {stat.secondaryMetric && (
                          <div className="flex flex-col leading-tight min-w-0 border-t border-black/5 sm:border-t-0 pt-0.5 sm:pt-0">
                            <span className="font-display text-[10px] sm:text-[15px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                              {stat.secondaryMetric}
                            </span>
                            <span className="text-[7px] sm:text-[9px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                              {stat.secondaryLabel}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
