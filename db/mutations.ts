import { Teams } from '@/types/Teams'

import prisma from './prisma'

export const addMatch = async (
  gameId: number,
  score: string,
  teamA: Teams,
  teamB: Teams
) => {
  const [scoreA, scoreB] = score.split(':').map(x => Number(x))

  return prisma.match.create({
    data: {
      scoreA,
      scoreB,
      teamA,
      teamB,
      gameId: gameId,
      datetime: new Date(),
    },
  })
}
