"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Mission() {
  return (
    <section id="mission" className="bg-gray-100 rounded-2xl pt-10 pb-10 mt-10 p-5 md:p-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-10 py-10 lg:py-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <p className="title mb-3">
              The Mission
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="sub-title text-center text-[var(--color-primary)]">
              Why I Started This
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <blockquote
              className="text-xl font-semibold mt-10 mb-8 border-l-4 pl-6 "
              style={{
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
            <p className="text-para leading-relaxed mb-10 text-[var(--color-graphite)]">
              I&apos;ve sat in the candidate&apos;s chair and cracked multiple
              offers. Now I sit in the Founder&apos;s chair and hire. I know
              exactly what&apos;s missing in today&apos;s graduates. The mission
              isn&apos;t to teach — it&apos;s to build the next generation of
              Corporate Leaders.
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
