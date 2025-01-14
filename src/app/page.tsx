import { headers } from 'next/headers'
import { Container } from 'src/components/Container/Container'
import { Page } from 'src/components/Page/Page'
import { Device } from 'src/modules/common/device/Device'

export default async function Home() {
  const device = await Device.getDevice(headers())
  // console.log('🚀 ~ Home ~ device:', device)
  return (
    <Page device={device.name}>
      <Container device={device.name} variant="widest" className="!px-0">
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
              desktop: () => 'w-4/5',
              mobile: () => 'w-full px-[12px]',
            })}
          >
            {/* <MainBannerCarousel device={device.name} /> */}
          </section>
          <section
            className={device.map({
              desktop: () => 'w-1/5',
              mobile: () => 'w-full',
            })}
          >
            {/* <PrimaryServiceShortcutSection
              device={device.name}
              items={primaryServiceShortcuts}
            /> */}
          </section>
        </div>
      </Container>
    </Page>
  )
}
