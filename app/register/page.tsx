import { registerMeta } from '@/lib/metadata'
import { CurriculumHero } from '@/components/sections/curriculum/CurriculumHero'
import { DayTimeline } from '@/components/sections/curriculum/DayTimeline'
import { PricingTable } from '@/components/sections/register/PricingTable'
import { Bonuses } from '@/components/sections/landing/Bonuses'
import { TrustSignals } from '@/components/sections/register/TrustSignals'
import { FAQ } from '@/components/sections/landing/FAQ'

export const metadata = registerMeta

export default function RegisterPage() {
  return (
    <>
      <CurriculumHero />
      <DayTimeline />
      <PricingTable />
      <Bonuses />
      <TrustSignals />
      <FAQ />
    </>
  )
}
