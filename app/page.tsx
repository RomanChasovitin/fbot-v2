import Link from 'next/link'
import { getActiveGame } from '@/db/queries'
import { sendPoll } from '@/telegram/sendPoll'

import { Button } from '@/components/ui/button'
import { SendMessageToTelegram } from '@/components/send-message-to-telegram'

export default async function HomePage() {
  const activeGame = await getActiveGame()
  // getBot()

  const sendMessage = async () => {
    'use server'
    const data = await sendPoll(-981632447, 'Играешь в пятницу?')
    console.log(data)
  }

  return (
    <div>
      <span>test</span>
      <h2>Главное меню</h2>
      <SendMessageToTelegram sendMessage={sendMessage} />
      {activeGame ? (
        <Link href={`/game/${activeGame.id}`}>
          <Button>Продолжить игру</Button>
        </Link>
      ) : (
        <Link href='/game/new'>
          <Button>Новая игра</Button>
        </Link>
      )}
    </div>
  )
}
