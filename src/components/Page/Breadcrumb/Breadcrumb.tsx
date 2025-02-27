import Link from 'next/link'
import { Device, HasDevice } from 'src/modules/common/device/Device'
import { Container } from 'src/components/Container/Container'
import { Text } from '@/foundation/Text/Text'

interface BreadcrumbProps extends HasDevice {
  items: string[]
}

export const Breadcrumb = ({ device: rawDevice, items }: BreadcrumbProps) => {
  const HomeIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9512 4.89635L6.35822 0.303353C6.16398 0.109119 5.90054 0 5.62585 0C5.35115 0 5.08771 0.109119 4.89347 0.303353L0.306471 4.8926L0.301221 4.89785C0.159648 5.04017 0.0625179 5.22059 0.0216623 5.41714C-0.0191932 5.61368 -0.00201115 5.81786 0.0711157 6.00481C0.144243 6.19176 0.270158 6.35341 0.433524 6.47007C0.596891 6.58673 0.790657 6.65336 0.991221 6.66185H1.02347H1.20647V10.0369C1.20608 10.1963 1.23712 10.3543 1.29784 10.5018C1.35855 10.6493 1.44774 10.7834 1.5603 10.8963C1.67287 11.0093 1.8066 11.099 1.95385 11.1603C2.1011 11.2215 2.25899 11.2532 2.41847 11.2534H4.21397C4.30123 11.2532 4.38486 11.2184 4.44657 11.1567C4.50827 11.095 4.54302 11.0114 4.54322 10.9241V8.27585C4.54342 8.12932 4.60172 7.98884 4.70534 7.88522C4.80895 7.7816 4.94943 7.7233 5.09597 7.7231H6.15572C6.30226 7.7233 6.44274 7.7816 6.54636 7.88522C6.64997 7.98884 6.70827 8.12932 6.70847 8.27585V10.9234C6.70837 10.9667 6.71684 11.0097 6.73339 11.0498C6.74994 11.0898 6.77424 11.1263 6.8049 11.1569C6.83557 11.1876 6.87199 11.2119 6.91207 11.2284C6.95215 11.245 6.99511 11.2535 7.03847 11.2534H8.83397C9.15529 11.253 9.46334 11.1251 9.69055 10.8979C9.91775 10.6707 10.0456 10.3627 10.046 10.0414V6.66335H10.2155C10.4204 6.66379 10.6208 6.60345 10.7914 6.48995C10.962 6.37645 11.0951 6.2149 11.1739 6.02574C11.2526 5.83658 11.2735 5.6283 11.2339 5.42727C11.1943 5.22623 11.0959 5.04147 10.9512 4.89635Z"
        fill="currentColor"
      />
    </svg>
  )

  const ArrowRightIcon = () => (
    <svg
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 1L5 5.5L0.5 10" stroke="currentColor" />
    </svg>
  )

  const device = Device.of(rawDevice)
  if (device.isMobile()) {
    return <></>
  }

  return (
    <div className="bg-gray2">
      <Container device={device.name} variant="widest">
        <ul className="flex flex-row justify-end items-center gap-x-[12px] py-[6px]">
          <li>
            <Link href="/" className="block" prefetch={false}>
              <div className="h-[12px] text-gray6">
                <HomeIcon />
                {/* <Image src={homeIcon} alt="" width={15} /> */}
              </div>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li
              key={idx}
              className="relative flex flex-row gap-x-[12px] items-center"
            >
              <div className="w-[auto] h-[10px] text-gray6">
                <ArrowRightIcon />
              </div>
              <div className="relative top-[1px]">
                <Text
                  variant="caption3"
                  color={idx === items.length - 1 ? 'white' : 'gray6'}
                  className={`${
                    idx === items.length - 1 ? 'font-bold' : ''
                  } select-all`}
                >
                  {item}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
