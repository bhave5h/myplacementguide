import { registerMeta } from '@/lib/metadata'
import { RegisterHero } from '@/components/sections/register/RegisterHero'
import { PricingTable } from '@/components/sections/register/PricingTable'
import { TrustSignals } from '@/components/sections/register/TrustSignals'

export const metadata = registerMeta

export default function RegisterPage() {
  return (
    <>
      <RegisterHero />
      <PricingTable />
      <TrustSignals />
    </>
  )
}
