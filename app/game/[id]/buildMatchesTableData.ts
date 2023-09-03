import { Match } from '@prisma/client'

export const buildMatchesTableData = (matches: Match[]) => {
  if (!matches.length) return { cols: [], rows: [] }

  const cols = [
    {
      key: 'match',
      title: 'Матч',
    },
    {
      key: 'score',
      title: 'Счет',
    },
  ]

  const rows = matches.map(match => ({
    match: `${match.teamA}-${match.teamB}`,
    score: `${match.scoreA}:${match.scoreB}`,
  }))

  return { cols, rows }
}
