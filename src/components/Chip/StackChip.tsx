import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import reactIcon from '@/assets/icon/react.svg'
import reactNativeIcon from '@/assets/icon/reactnative.svg'
import tsIcon from '@/assets/icon/typescript.svg'
import jsIcon from '@/assets/icon/javascript.svg'
import styledIcon from '@/assets/icon/styledcomponent.svg'
import reactQueryIcon from '@/assets/icon/reactquery.svg'
import reduxIcon from '@/assets/icon/redux.svg'
import recoilIcon from '@/assets/icon/more.svg'
import gitIcon from '@/assets/icon/github.svg'
import tailwindIcon from '@/assets/icon/tailwind.svg'
import axiosIcon from '@/assets/icon/axios.svg'

interface StackChipProp {
  title?: string
  stackList: string[]
  size?: number
}
const stackIcons: { [key: string]: string } = {
  react: reactIcon,
  reactnative: reactNativeIcon,
  typescript: tsIcon,
  javascript: jsIcon,
  styledcomponent: styledIcon,
  reactquery: reactQueryIcon,
  redux: reduxIcon,
  recoil: recoilIcon,
  github: gitIcon,
  tailwind: tailwindIcon,
  axios: axiosIcon,
}

export const StackChip = ({ title, stackList, size = 20 }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm font-semibold"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => (
          <Tooltip key={index} content={stack}>
            <div className="flex flex-row items-center gap-1">
              <Image
                src={stackIcons[stack.toLowerCase()]}
                height={size}
                width={size}
                alt={stack}
                style={{ width: size, height: size }}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
