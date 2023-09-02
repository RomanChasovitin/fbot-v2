import { AddMatch } from "@/components/AddMatch";
import { Button } from "@/components/ui/button";
import { addMatch } from "@/db/mutations";
import { getGameById, getGameMatches } from "@/db/queries";
import Link from "next/link";
import { getNextMatchBySchedule } from "./getNextMatchBySchedule";
import { scores } from "./getScores";
interface Props {
  params: {
    id: string;
  };
}

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function GameAddMatchPage({ params }: Props) {
  const game = await getGameById(Number(params.id));
  if (!game) return <div>404</div>;
  const matches = await getGameMatches(game.id);
  console.log(matches.length, "match");

  const [teamA, teamB] = getNextMatchBySchedule(matches);

  const handleAddMatch = async (score: string) => {
    "use server";
    const match = await addMatch(game.id, score, teamA, teamB);
  };

  return (
    <div>
      <h2>Добавление матча</h2>
      <p>
        {teamA} - {teamB}
      </p>
      <AddMatch
        gameId={game.id}
        scores={scores}
        handleAddMatch={handleAddMatch}
      />
      <Link href={`/game/${game.id}`}>
        <Button>Отмена</Button>
      </Link>
    </div>
  );
}
