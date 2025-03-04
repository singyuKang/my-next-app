'use client'

import { Suspense } from 'react'
import ExperienceSection from './ExperienceSection'
import IntroSection from './IntroSection'
import dynamic from 'next/dynamic'

const DynamicLazyProjectSection = dynamic(
  () => import('@/app/section/ProjectSection'),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
)

const SectionContainer = ({ deviceClass }: { deviceClass: string }) => {
  return (
    <section className={deviceClass}>
      <IntroSection />
      <ExperienceSection />
      <Suspense fallback={`loading`}>
        <DynamicLazyProjectSection />
      </Suspense>
    </section>
  )
}

export default SectionContainer
