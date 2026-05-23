"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Mission() {
  return (
    <section id="mission" className="bg-black/70 rounded-2xl pt-10 pb-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-10 py-10 lg:py-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <p className="text-1xl md:text-2xl font-semibold tracking-[0.12em] uppercase text-[var(--color-primary-bright)] text-center mb-4">
              THE MISSION
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white text-center">
              Why I Started This
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <blockquote
              className="text-lg sm:text-xl font-medium leading-relaxed mb-8 border-l-4 pl-6"
              style={{
                color: "var(--color-steel)",
                borderColor: "var(--color-primary)",
              }}
            >
              &ldquo;I&apos;ve seen students with 9.0 CGPA struggle to explain
              their value. My goal is to bridge the gap between
              &apos;Campus&apos; and &apos;Corporate&apos;. I&apos;m not here to
              give you a certificate; I&apos;m here to give you a career.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base leading-relaxed mb-10 text-[var(--color-graphite)]">
              I&apos;ve sat in the candidate&apos;s chair and cracked multiple
              offers. Now I sit in the Founder&apos;s chair and hire. I know
              exactly what&apos;s missing in today&apos;s graduates. The mission
              isn&apos;t to teach — it&apos;s to build the next generation of
              Corporate Leaders.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-[0.7px] transition-all duration-200 hover:brightness-110"
              style={{ background: "var(--color-primary)", color: "white" }}
            >
              Join the Movement
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
