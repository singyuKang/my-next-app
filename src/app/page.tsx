import { headers } from 'next/headers'
import { Container } from 'src/components/Container/Container'
import { Page } from 'src/components/Page/Page'
import { Device } from 'src/modules/common/device/Device'
import IntroSection from './section/IntroSection'

export default async function Home() {
  const device = await Device.getDevice(headers())
  // console.log('🚀 ~ Home ~ device:', device)
  return (
    <Page device={device.name}>
      <Container device={device.name} variant="default" className="!px-0">
        <div
          className={[
            'flex',
            device.map({
              desktop: () => 'pt-[40px]',
              mobile: () => 'flex-col pt-[24px]',
            }),
          ]
            .join(' ')
            .trim()}
        >
          <section
            className={device.map({
              desktop: () => 'w-full',
              mobile: () => 'w-full px-[12px]',
            })}
          >
            <IntroSection />
          </section>
        </div>
      </Container>
    </Page>
  )
}
