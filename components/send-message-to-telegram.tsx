'use client'

import { Button } from './ui/button'

interface Props {
  sendMessage: () => Promise<void>
}

export const SendMessageToTelegram = ({ sendMessage }: Props) => {
  return (
    <Button
      onClick={async () => {
        await sendMessage()
        alert('Success')
      }}
    >
      Send telegram message
    </Button>
  )
}
