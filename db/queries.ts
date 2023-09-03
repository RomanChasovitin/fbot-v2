import { GameStatus } from '@/types/GameStatus'

import prisma from './prisma'

export const getActiveGame = () => {
  return prisma.game.findFirst({
    where: {
      status: GameStatus.Progress,
    },
    include: {
      draft: true,
    },
  })
}

export const getGameById = (id: number) => {
  return prisma.game.findFirst({
    where: {
      id,
    },
    include: {
      draft: true,
    },
  })
}

export const getGameMatches = (gameId: number) => {
  return prisma.match.findMany({
    where: {
      gameId,
    },
  })
}
