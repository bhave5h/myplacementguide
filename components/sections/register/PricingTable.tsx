'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PRICING } from '@/lib/constants'
import { Check } from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export function PricingTable() {
  return (
    /* ── Cloud band for pricing (DESIGN.md: cloud alternating band) ── */
    <section
      style={{ backgroundColor: 'var(--color-cloud)', padding: '80px 24px', overflow: 'hidden' }}
    >
      <div className="max-w-[900px] mx-auto">
        <LazyMotion features={domAnimation}>
          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
            {PRICING.map((plan, i) => {
              const isFeatured = plan.highlight
              return (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ type: 'spring', damping: 20, delay: i * 0.18 }}
                  className={`w-full max-w-md ${isFeatured ? 'md:scale-[1.02] z-10' : ''}`}
                >
                  {/* card-pricing-tier — DESIGN.md spec */}
                  <div
                    style={{
                      backgroundColor: 'var(--color-canvas)',
                      borderRadius: 'var(--rounded-xl)',
                      boxShadow: 'var(--shadow-soft-lift)',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      /* Featured tier: thin primary top border, per DESIGN.md */
                      borderTop: isFeatured ? '3px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                      border: !isFeatured ? '1px solid var(--color-hairline)' : undefined,
                    }}
                  >
                    <div style={{ marginBottom: 28 }}>
                      <Badge variant={isFeatured ? 'new' : 'free'} className="mb-5">
                        {plan.badge}
                      </Badge>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 24,
                          fontWeight: 500,
                          color: 'var(--color-ink)',
                          marginBottom: 10,
                          lineHeight: 1.17,
                        }}
                      >
                        {plan.tier}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 36,
                            fontWeight: 700,
                            /* Featured tier: primary colour on price stamp, per DESIGN.md */
                            color: isFeatured ? 'var(--color-primary)' : 'var(--color-ink)',
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </span>
                        {isFeatured && (
                          <span
                            style={{
                              fontSize: 16,
                              color: 'var(--color-graphite)',
                              textDecoration: 'line-through',
                            }}
                          >
                            ₹1,999
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--color-graphite)' }}>
                        {plan.date} · {plan.seats}
                      </p>
                    </div>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, marginBottom: 32 }}>
                      {plan.features.map((feature, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <Check
                            size={18}
                            weight="bold"
                            style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 2 }}
                          />
                          <span style={{ fontSize: 14, color: 'var(--color-charcoal)', lineHeight: 1.55 }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        paddingTop: 24,
                        borderTop: '1px solid var(--color-hairline)',
                      }}
                    >
                      <Button
                        variant={isFeatured ? 'primary' : 'outline'}
                        size="lg"
                        href="#"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                      {isFeatured && (
                        <p
                          style={{
                            fontSize: 12,
                            textAlign: 'center',
                            color: 'var(--color-graphite)',
                            marginTop: 12,
                            fontWeight: 500,
                          }}
                        >
                          100% Satisfaction Guarantee · Secure Payment
                        </p>
                      )}
                    </div>
                  </div>
                </m.div>
              )
            })}
          </div>
        </LazyMotion>
      </div>
    </section>
  )
}
