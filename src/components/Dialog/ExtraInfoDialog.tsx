import DescriptionIcon from '@mui/icons-material/Description'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import * as React from 'react'
import { useModalContext } from '../Modal/ModalProvider'
import { AlertModal } from '../Modal/Alert/AlertModal'
import { Text } from '@/foundation/Text/Text'
import { ViewModal } from '../Modal/View/ViewModal'

interface ExtraInfoDialogProp {
  iconType?: 'paper' | 'prize' | 'contribution'
  dialogTitle: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: React.ReactNode
}

export default function ExtraInfoDialog({
  iconType = 'paper',
  dialogTitle,
  size = '3xl',
  children,
}: ExtraInfoDialogProp) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { open, close } = useModalContext()

  let Icon = <DescriptionOutlinedIcon color="primary" />

  switch (iconType) {
    case 'paper': {
      Icon = <DescriptionIcon color="primary" />
      break
    }
    case 'prize': {
      Icon = <EmojiEventsIcon color="primary" />
      break
    }
    case 'contribution': {
      Icon = <DescriptionOutlinedIcon color="primary" />
      break
    }
  }

  return (
    <>
      <Button
        isIconOnly
        onPress={() => {
          // onOpen()

          open(
            'extraInfoDialog',
            <ViewModal
              device="desktop"
              button={{
                label: '동의',
                onClick: () => {
                  close('checked')
                },
              }}
            >
              <div>{children}</div>
            </ViewModal>
          )
        }}
        variant="light"
        size="sm"
      >
        {Icon}
      </Button>
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        onOpenChange={onOpenChange}
        autoFocus={false}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {dialogTitle}
          </ModalHeader>
          <ModalBody className="p-6 pt-0">{children}</ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  )
}
