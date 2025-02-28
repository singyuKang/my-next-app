'use client'
import WaveCard from '@/components/Card/WaveCard'
import Image from 'next/image'
import JavaScriptIcon from '@assets/icon/javascript.svg'
import TypeScriptIcon from '@assets/icon/typescript.svg'
import ReactIcon from '@assets/icon/react.svg'
import SwiftIcon from '@assets/icon/swift.svg'
import NextJsIcon from '@assets/icon/next-js.svg'
import GitIcon from '@assets/icon/github.svg'
import GitDarkIcon from '@assets/icon/github-mark-white.png'
import ZeplinIcon from '@assets/icon/zeplin.svg'
import { useTheme } from 'next-themes'
import { Text } from '@/foundation/Text/Text'
import { CustomSection } from '@/components/Section/CustomSection'
import { CustomSectionTitle } from '@/components/Section/SectionTitle'

const IntroSection = () => {
  const { theme } = useTheme()

  return (
    <div className="container py-8 mt-4">
      <div className="flex flex-wrap w-full min-h-[30rem] ">
        <div className="flex flex-col items-center justify-center flex-1 gap-4 min-w-[40rem]">
          <Image
            className="rounded-full bg-[#add8e6]"
            alt={'face image'}
            src={'/images/intro/character_white.png'}
            width={200}
            height={200}
            layout={'fixed'}
            priority={true}
          />
          <div className="px-4">
            <Text variant="subtitle2">
              사용자의 편리함을 추구하는 개발자,{' '}
              <Text as="span" variant="subtitle1" color="blue">
                강신규
              </Text>{' '}
              입니다
            </Text>
            <Text variant="subtitle2">
              Web과 App를 다루는 3년차 개발자입니다.
            </Text>
            <div className="text-sm font-light text-gray-600 dark:text-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-1 max-h-[20rem] min-w-[21rem] mt-4 justify-center items-center">
          <div className="grid grid-cols-4 grid-rows-2 items-center justify-center gap-4">
            <WaveCard duration={4}>
              <Image src={JavaScriptIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={TypeScriptIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={SwiftIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={ReactIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={ReactIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={NextJsIcon} alt="" height={30} width={30} />
            </WaveCard>
            <WaveCard duration={4}>
              <Image
                src={theme === 'light' ? GitIcon : GitDarkIcon}
                alt=""
                height={30}
                width={30}
              />
            </WaveCard>
            <WaveCard duration={4}>
              <Image src={ZeplinIcon} alt="" height={30} width={30} />
            </WaveCard>
          </div>
        </div>

        <CustomSection id="sample">
          <CustomSectionTitle
            title={'Intro'}
            subTitle={'안녕하세요, 3년차 프론트엔드 개발자 강신규입니다.'}
          />
          <div className="flex flex-col flex-wrap w-full justify-evenly">
            <div className="text-sm font-normal w-full flex flex-col gap-6">
              <Text variant="subtitle4">
                저는 React-Native , React를 사용해 3개의 앱/웹을 성공적으로
                출시, 개발 및 유지보수하며 50만+ 다운로드를 달성한 경험이
                있습니다.
              </Text>
              <Text variant="subtitle4">
                엔투소프트에서 프론트엔드 개발자로, 4개의 저축은행 앱/웹을
                개발한 경험이 있습니다.
              </Text>
            </div>
          </div>
        </CustomSection>
      </div>
    </div>
  )
}

export default IntroSection
