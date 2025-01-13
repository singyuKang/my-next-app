import { HTMLAttributes } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoLight from '@assets/image/logo_light.png'
import { Device, HasDevice } from '@common/device/Device'
import { GlobalHeaderMenu } from '@components/Page/GlobalHeader/GlobalHeaderMenu'
import { Container } from '@/components/Container/Container'

interface GlobalHeaderProps extends HasDevice, HTMLAttributes<HTMLDivElement> {}

export const GlobalHeader = ({
  device: rawDevice,
  className: defaultClassName,
  ...props
}: GlobalHeaderProps) => {
  const device = Device.of(rawDevice)
  const className = [
    'bg-white',
    device.map({
      desktop: () => 'border-b border-b-gray6 fixed top-0 left-0 right-0 z-20',
      mobile: () => 'fixed top-0 left-0 right-0 z-20',
    }),
    defaultClassName ?? '',
  ]
    .join(' ')
    .trim()
  return (
    <>
      {device.isDesktop() && <div className="h-[64px]" />}
      <header {...props} className={className}>
        <Container
          device={device.name}
          variant="widest"
          className={[
            'flex',
            device.map({
              desktop: () => 'flex-row justify-between items-center',
              mobile: () => 'w-full flex-col items-start !px-0 relative',
            }),
          ]
            .join(' ')
            .trim()}
        >
          <Link
            href="/"
            className={[
              'inline-block py-[16px]',
              device.map({ desktop: () => '', mobile: () => 'px-[20px]' }),
            ]
              .join(' ')
              .trim()}
            prefetch={false}
          >
            <div className="flex flex-row">
              <Image src={LogoLight} alt="" height={32} priority={true} />
            </div>
            <h1 className="sr-only">HB저축은행</h1>
          </Link>
          <GlobalHeaderMenu
            device={device.name}
            className={device.map({
              desktop: () => undefined,
              mobile: () => 'grow',
            })}
          />
        </Container>
      </header>
    </>
  )
}
