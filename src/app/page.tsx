import { headers } from 'next/headers'
import { Container } from 'src/components/Container/Container'
import { Page } from 'src/components/Page/Page'
import { Device } from 'src/modules/common/device/Device'
import IntroSection from './section/IntroSection'
import ExperienceSection from './section/ExperienceSection'
import SectionContainer from './section/SectionContainer'

export default async function Home() {
  const device = await Device.getDevice(headers())

  return (
    <Page device={device.name}>
      <Container device={device.name} variant="default" className="!px-0">
        <div
          className={[
            'flex',
            device.map({
              desktop: () => 'pt-[40px] flex flex-col',
              mobile: () => 'flex-col pt-[24px]',
            }),
          ]
            .join(' ')
            .trim()}
        >
          <SectionContainer
            deviceClass={device.map({
              desktop: () => 'w-full',
              mobile: () => 'w-full',
            })}
          />
        </div>
      </Container>
    </Page>
  )
}
