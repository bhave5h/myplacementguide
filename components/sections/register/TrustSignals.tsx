'use client'

import React from 'react'
import { LockKey, ShieldCheck, WhatsappLogo } from '@phosphor-icons/react'

const TRUST = [
  {
    icon: LockKey,
    label: 'Secure Payment',
    sub: 'Powered by Razorpay',
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-soft)',
  },
  {
    icon: ShieldCheck,
    label: '100% Satisfaction',
    sub: 'Get a full refund if not happy after Day 1',
    color: '#16a34a',
    bg: 'rgba(34,197,94,0.10)',
  },
  {
    icon: WhatsappLogo,
    label: 'WhatsApp Support',
    sub: 'Message us directly at any time',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.10)',
  },
]

export function TrustSignals() {
  return (
    /* ── White canvas band ── */
    <section className="band-canvas">
      <div className="max-w-[760px] mx-auto">

        {/* ── Trust badges ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRUST.map(({ icon: Icon, label, sub, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-cloud border border-hairline"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-3.5"
                style={{ backgroundColor: bg, color }}
              >
                <Icon size={24} weight="duotone" />
              </div>
              <h4 className="text-[14px] font-semibold text-ink mb-1">
                {label}
              </h4>
              <p className="text-[12px] text-graphite leading-[1.5]">{sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
