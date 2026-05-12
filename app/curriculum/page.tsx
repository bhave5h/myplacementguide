import { curriculumMeta } from '@/lib/metadata'
import { CurriculumHero } from '@/components/sections/curriculum/CurriculumHero'
import { DayTimeline } from '@/components/sections/curriculum/DayTimeline'
import { BonusSection } from '@/components/sections/curriculum/BonusSection'

export const metadata = curriculumMeta

export default function CurriculumPage() {
  return (
    <>
      <CurriculumHero />
      <DayTimeline />
      <BonusSection />
    </>
  )
}
