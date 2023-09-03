import Link from 'next/link'
import prisma from '@/db/prisma'
import { getActiveGame } from '@/db/queries'

import { Button } from '@/components/ui/button'

export default async function HomePage() {
  const activeGame = await getActiveGame()

  return (
    <div>
      <h2>Главное меню</h2>
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
