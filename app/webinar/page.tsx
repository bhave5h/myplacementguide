import { webinarMeta } from '@/lib/metadata'
import { WebinarHero } from '@/components/sections/webinar/WebinarHero'
import { WebinarForm } from '@/components/sections/webinar/WebinarForm'
import { ThreePillars } from '@/components/sections/landing/ThreePillars'
import { WebinarDetails } from '@/components/sections/webinar/WebinarDetails'
import { WebinarStickyCTA } from '@/components/sections/webinar/WebinarStickyCTA'

export const metadata = webinarMeta

export default function WebinarPage() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <WebinarHero />
      <WebinarForm />
      <ThreePillars />
      <WebinarDetails />
      <WebinarStickyCTA />
    </div>
  )
}
