import { Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import { stackIcons } from '@/utils/getsvgIcon'

interface StackChipProp {
  title?: string
  stackList: string[]
  size?: number
}

export const StackChip = ({ title, stackList, size = 20 }: StackChipProp) => {
  return (
    <div className="mt-2">
      {title && <span className="text-sm font-semibold"># {title}</span>}
      <div className="flex flex-row flex-wrap gap-1">
        {stackList.map((stack, index) => {
          const iconSrc = stackIcons[stack.toLowerCase()]

          if (!iconSrc) {
            console.warn(`Icon not found for: ${stack}`)
            return null
          }

          return (
            <Tooltip key={index} content={stack}>
              <div className="flex flex-row items-center gap-1">
                <Image
                  src={iconSrc}
                  height={size}
                  width={size}
                  alt={stack}
                  style={{ width: size, height: size }}
                />
              </div>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}
