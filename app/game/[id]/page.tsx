import { Button } from "@/components/ui/button";
import { getGameById, getGameMatches } from "@/db/queries";
import Link from "next/link";
import { getNextMatchBySchedule } from "./add-match/getNextMatchBySchedule";
import { buildMatchesTableData } from "./buildMatchesTableData";
import { buildPointsTableData } from "./buildPointsTableData";

interface Props {
  params: {
    id: string;
  };
}

export default async function GamePage({ params }: Props) {
  const game = await getGameById(Number(params.id));
  if (!game) return <div>404</div>;
  const matches = await getGameMatches(game.id);
  const nextMatch = getNextMatchBySchedule(matches);
  const matchesTable = buildMatchesTableData(matches);
  const pointsTable = buildPointsTableData(matches);
  console.log(matches.length, "game");

  return (
    <div>
      <h2>Игра</h2>
      <p>Название: {game.name}</p>
      <br />
      <br />
      <p>Матчи:</p>
      <table>
        <thead>
          {matchesTable.cols.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </thead>
        <tbody>
          {matchesTable.rows.map((row, index) => (
            <tr key={index}>
              <td>{row.match}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <p>Очки:</p>
      <table>
        <thead>
          {pointsTable.cols.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </thead>
        <tbody>
          {pointsTable.rows.map((row, index) => (
            <tr key={index}>
              <td>{row.team}</td>
              <td>{row.points}</td>
              <td>{row.games}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <p>
        Следующий матч: {nextMatch[0]} - {nextMatch[1]}
      </p>
      <a href={`/game/${game.id}/add-match`}>
        <Button>Добавить матч</Button>
      </a>
      {/* {activeGame ? <Link href={`/game/${activeGame.id}`}><Button>Продолжить игру</Button></Link> : <Link href='/game/new'><Button>Новая игра</Button></Link>} */}
    </div>
  );
}
