import { Teams } from "@/types/Teams";
import { Match } from "@prisma/client";

export const buildPointsTableData = (matches: Match[]) => {
  const allTeams = Object.values(Teams);
  const matchesWithPoints = matches?.map((match) => {
    const teamsPoints = allTeams.map((team) => {
      let points = 0;
      if (match.teamA === team || match.teamB === team) {
        if (match.scoreA === match.scoreB) {
          points = 1;
        }
        if (match.scoreA > match.scoreB && match.teamA === team) {
          points = 3;
        }
        if (match.scoreB > match.scoreA && match.teamB === team) {
          points = 3;
        }
      }

      return {
        team,
        points,
      };
    });
    return {
      ...match,
      teamsPoints,
    };
  });

  const matchesByTeam = matchesWithPoints.reduce<Record<Teams, Array<Match>>>((acc, curr) => {
    const teamA = curr.teamsPoints.find(({ team }) => team === curr.teamA);
    const teamB = curr.teamsPoints.find(({ team }) => team === curr.teamB);
    return {
      ...acc,
      [curr.teamA]: [...(acc[curr.teamA as Teams] || []), teamA],
      [curr.teamB]: [...(acc[curr.teamB as Teams] || []), teamB],
    };
  }, {} as Record<Teams, Array<Match>>);

  const result = Object.entries(
    matchesWithPoints
      .map((x) => x.teamsPoints)
      .reduce(
        (acc, curr) => {
          return {
            [Teams.Team1]: acc[Teams.Team1] + curr[0].points,
            [Teams.Team2]: acc[Teams.Team2] + curr[1].points,
            [Teams.Team3]: acc[Teams.Team3] + curr[2].points,
          };
        },
        {
          [Teams.Team1]: 0,
          [Teams.Team2]: 0,
          [Teams.Team3]: 0,
        },
      ),
  )
    .map(([team, points]) => ({
      team,
      points,
      games: matchesByTeam[team as Teams]?.length || 0,
    }))
    .sort((a, b) => b.points - a.points);

  const isEmpty = result.every(({ points }) => points === 0);
  if (isEmpty) return { cols: [], rows: [] };

  const cols = [
    {
      key: 'team',
      title: 'Команда',
    },
    {
      key: 'points',
      title: 'Очки',
    },
    {
      key: 'games',
      title: 'Игры',
    },
  ];

  const rows = result.map((team) => ({
    team: team.team,
    points: String(team.points),
    games: String(team.games),
  }));

  return { cols, rows };
}