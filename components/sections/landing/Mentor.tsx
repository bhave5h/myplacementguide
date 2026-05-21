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
  name = "Sarang Divakar Thakre",
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
    <section className="max-w-6xl mx-auto bg-green-800/10 lg:py-20 px-6 overflow-hidden rounded-3xl border-10 border-green-100">
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

      <div className="max-w-5xl mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ── Left Column: Portrait Card ── */}
          <div className="lg:col-span-5 w-full flex flex-col items-center gap-6">
            <ScrollReveal direction="left">
              <div className="w-full w- bg-white rounded-3xl p-1 border-2 border-black/50 shadow-[var(--shadow-float)] text-black flex flex-col p-3">
                <div className="w-1xl h-96 rounded-3xl overflow-hidden bg-[#faf8f5] relative border-2 border-black/50 p-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    sizes="100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1 px-1 py-1">
                  <h3 className="font-display text-[22px] font-bold text-[var(--color-ink)] leading-none m-0">
                    {name}
                  </h3>
                  <p className="font-body text-[14px] text-[var(--color-graphite)] font-semibold leading-normal m-0 mt-2">
                    {title}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats row – below portrait */}
            <ScrollReveal delay={0.55} className="w-full max-w-[360px]">
              <div className="flex flex-col gap-3 w-full">
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
                      className="flex items-center gap-3.5 bg-white rounded-2xl p-4 border border-black/5 shadow-[var(--shadow-soft-lift)] text-black"
                    >
                      {/* Icon Container */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBgClass}`}>
                        <IconComponent size={20} weight="fill" />
                      </div>

                      {/* Primary Metric */}
                      <div className="flex flex-col leading-tight min-w-0">
                        <span className="font-display text-[15px] sm:text-[16px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                          {stat.primaryMetric}
                        </span>
                        <span className="text-[10px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                          {stat.primaryLabel}
                        </span>
                      </div>

                      {/* Optional Divider & Secondary Metric */}
                      {stat.secondaryMetric && (
                        <>
                          <div className="w-[1px] h-6 bg-black/10 shrink-0 mx-1.5" />
                          <div className="flex flex-col leading-tight min-w-0">
                            <span className="font-display text-[15px] sm:text-[16px] font-bold text-[var(--color-ink)] whitespace-nowrap">
                              {stat.secondaryMetric}
                            </span>
                            <span className="text-[10px] font-semibold text-[var(--color-graphite)] uppercase tracking-wide">
                              {stat.secondaryLabel}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Copy & Stats ── */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            <SectionLabel className="mb-4 text-[var(--color-primary-bright)]">
              Your Mentor
            </SectionLabel>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium leading-[1.1] text-white mb-6 text-balance">
                Meet your Mentor
              </h2>
            </ScrollReveal>

            {/* Paragraphs description */}
            <div className="flex flex-col gap-4 text-white/80 font-body text-[15px] sm:text-[16px] leading-[1.6] mb-8">
              {paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index} delay={0.15 + index * 0.08}>
                  <p 
                    className="m-0 text-balance" 
                    dangerouslySetInnerHTML={{ __html: paragraph }} 
                  />
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
