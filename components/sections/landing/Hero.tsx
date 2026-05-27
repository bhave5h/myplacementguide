"use client";

import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SplitText } from "@/components/animations/SplitText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { LogoMarquee } from "@/components/smoothui/logo-cloud-3/Logos";
import { BookOpen, CalendarBlank, Clock } from "@phosphor-icons/react";

export interface HeroProps {
  duration?: string;
  startDate?: string;
  startDateTime?: string; // ISO date for SEO
  timeRange?: string;
  timeDateTime?: string; // ISO time for SEO
}

export function Hero({
  duration = "3 HOURS",
  startDate = "STARTS 21ST MAY",
  startDateTime = "2026-05-21",
  timeRange = "7PM TO 10PM",
  timeDateTime = "19:00",
}: HeroProps) {
  return (
    <section className="overflow-hidden relative lg:pt-5 mb-10">
      <div
        className="bg-cover bg-no-repeat rounded-3xl pt-10 pb-10 md:p-10 md:pb-15 mt-5 "
        style={{
          backgroundImage:
            "url('/Images/a.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* ── Left Column: Copy ── */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <SplitText
                text="Stop Applying. Start Getting Hired."
                as="h1"
                className="text-balance font-display text-3xl md:text-5xl font-medium leading-[1.05] text-white m-0"
                by="word"
                staggerDelay={0.07}
              />

              <ScrollReveal delay={0.55}>
                <p className="text-[18px] font-bold leading-[1.55] text-white/80 m-0 text-balance">
                  <b>Learn </b> the Hiring Manager's Secret to cracking top IT
                  &amp; Marketing roles from a <b>Founder</b> who's been on both
                  sides of the table.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.65}>
                <div className="flex flex-wrap gap-3 items-center mt-4 mb-6">
                  {/* Duration Pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-[var(--shadow-soft-lift)] border border-[var(--color-hairline)] text-[14px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <BookOpen size={18} className="text-[var(--color-primary)]" weight="bold" />
                    <span>{duration}</span>
                  </div>

                  {/* Date Pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-[var(--shadow-soft-lift)] border border-[var(--color-hairline)] text-[14px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <CalendarBlank size={18} className="text-[var(--color-primary)]" weight="bold" />
                    <time dateTime={startDateTime}>{startDate}</time>
                  </div>

                  {/* Time Pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl shadow-[var(--shadow-soft-lift)] border border-[var(--color-hairline)] text-[14px] font-semibold text-[var(--color-ink)] uppercase tracking-wide">
                    <Clock size={18} className="text-[var(--color-primary)]" weight="bold" />
                    <time dateTime={timeDateTime}>{timeRange}</time>
                  </div>
                </div>
              </ScrollReveal>

              {/* Event Schema Markup for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "Stop Applying. Start Getting Hired. Masterclass",
                    "description": "Learn the Hiring Manager's Secret to cracking top IT & Marketing roles from a Founder who's been on both sides of the table.",
                    "startDate": `${startDateTime}T${timeDateTime}`,
                    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                    "eventStatus": "https://schema.org/EventScheduled",
                    "location": {
                      "@type": "VirtualLocation",
                      "url": "https://myplacementguide.com"
                    },
                    "organizer": {
                      "@type": "Organization",
                      "name": "MyPlacementGuide",
                      "url": "https://myplacementguide.com"
                    },
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "INR",
                      "availability": "https://schema.org/InStock",
                      "validFrom": "2026-05-21"
                    }
                  })
                }}
              />
              <ScrollReveal delay={0.75}>
                <Button
                  className="relative z-10 box-border mb-5 inline-flex items-center justify-center bg-green-600 text-white border border-white/40 rounded-xl px-10 py-2.5 text-base leading-none font-normal tracking-[-0.02em] shadow-[0_18px_36px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.20),inset_0_0_6px_2px_rgba(255,255,255,0.24),0_0_0_1px_var(--color-green-600)]"
                  size="lg"
                  href="/register"
                >
                  Register for Free →
                </Button>

                <p className="font-semibold text-[18px] mt-1 font-normal leading-[1.55] text-white/80 max-w-[540px] m-0 text-balance">
                  To Get Placed at Top Companies
                </p>

                <LogoMarquee title="" description="" speed="fast" />
              </ScrollReveal>
            </div>

            {/* ── Right Column: Photo + Floating Stat Cards ── */}
            <div className="lg:col-span-5 relative lg:mt-0">
              <LazyMotion features={domAnimation}>
                {/* Photo frame */}
                <m.div
                  transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="aspect-[4/5] rounded-[var(--rounded-xl)]  overflow-hidden shadow-[var(--shadow-soft-lift)] relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-fog)] to-[var(--color-cloud)] flex items-center justify-center">
                    <span className="text-[var(--color-graphite)] border-2 rounded-2xl border-green-100 text-[13px] w-full h-full overflow-hidden ">
                      <Image
                        src="/images/hero2.png"
                        alt="sir"
                        width={1080}
                        height={1080}
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                </m.div>

                {/* Stat card – top left */}
                <m.div
                  initial={{ opacity: 0, y: 16, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", delay: 0.7 }}
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
                  transition={{ type: "spring", delay: 0.95 }}
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
            <span className="text-[14px] font-semibold text-[var(--color-ink)]">
              Free Masterclass
            </span>
            <span className="text-[12px] text-[var(--color-primary)]">
              May 24 &amp; 31
            </span>
          </div>
          <Button variant="primary" size="sm" href="/register">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}
