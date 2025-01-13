import type { Metadata } from 'next'
import './globals.css'
import { Device } from '@/modules/common/device/Device'
import Link from 'next/link'
import Image from 'next/image'
import TopBtnIcon from '@assets/icon/main/top_btn.png'
import { SpinnerProvider } from '@/components/Spinner/SpinnerProvider'
import { ModalProvider } from '@/components/Modal/ModalProvider'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const device = await Device.getDevice(headers())

  return (
    <html lang="ko">
      <body className="relative h-[100vh] overflow-y-scroll">
        <SpinnerProvider backgroundColor="#000000">
          <ModalProvider>
            <div
              className={[
                'relative flex flex-col w-full',
                device.map({
                  desktop: () => 'min-h-[100vh]',
                  mobile: () => 'h-[100vh]',
                }),
              ]
                .join(' ')
                .trim()}
            >
              <div className="grow">{children}</div>
            </div>
          </ModalProvider>
        </SpinnerProvider>
        <div
          className={[
            'w-[48px] h-[48px] bg-white rounded-full fixed  z-30 flex justify-center items-center top-btn-box-shadow p-[12px]',
            device.map({
              desktop: () => 'bottom-[40px] right-[50px]',
              mobile: () => 'bottom-[40px] right-[25px]',
            }),
          ]
            .join(' ')
            .trim()}
        >
          <Link href={'#'} className={'flex justify-center items-center '}>
            <Image src={TopBtnIcon} alt="위로가기 아이콘" />
          </Link>
        </div>
      </body>
    </html>
  )
}
