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
    <section className="band-cloud">
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
                    className={`card-flat p-8 ${isFeatured ? 'shadow-float border-t-[3px] border-t-primary border-x-0 border-b-0' : ''}`}
                  >
                    <div className="mb-7">
                      <Badge variant={isFeatured ? 'new' : 'free'} className="mb-5">
                        {plan.badge}
                      </Badge>
                      <h3 className="card-title text-[24px] mb-2.5 leading-[1.17]">
                        {plan.tier}
                      </h3>
                      <div className="flex items-baseline gap-2.5 mb-1.5">
                        <span className={`font-display text-[36px] font-bold leading-none ${isFeatured ? 'text-primary' : 'text-ink'}`}>
                          {plan.price}
                        </span>
                        {isFeatured && (
                          <span className="text-[16px] text-graphite line-through">
                            ₹1,999
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-graphite">
                        {plan.date} · {plan.seats}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-3.5 flex-1 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check
                            size={18}
                            weight="bold"
                            className="text-primary shrink-0 mt-0.5"
                          />
                          <span className="body-text leading-[1.55]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-hairline">
                      <Button
                        variant={isFeatured ? 'primary' : 'outline'}
                        size="lg"
                        href="#"
                        className="w-full"
                      >
                        {plan.cta}
                      </Button>
                      {isFeatured && (
                        <p className="text-[12px] text-center text-graphite mt-3 font-medium">
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
