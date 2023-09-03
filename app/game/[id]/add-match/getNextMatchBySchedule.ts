import { Match } from '@prisma/client'

import { Teams } from '@/types/Teams'

const baseSchedule: Array<[Teams, Teams]> = [
  [Teams.Team1, Teams.Team2],
  [Teams.Team1, Teams.Team3],
  [Teams.Team2, Teams.Team3],
]

export const getNextMatchBySchedule = (matches: Array<Match>) => {
  if (!matches.length || matches.length % 3 === 0) return baseSchedule[0]
  if (matches.length % 3 === 1) return baseSchedule[1]
  return baseSchedule[2]
}
