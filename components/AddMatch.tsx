"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface Props {
  handleAddMatch: (score: string) => Promise<void>;
  scores: string[];
  gameId: number;
}

export const AddMatch = ({ handleAddMatch, scores, gameId }: Props) => {
  const router = useRouter();

  return (
    <>
      {scores.map((score) => (
        <Button
          onClick={async () => {
            await handleAddMatch(score);
            alert("Match added");
            // push to game page by browser api not back
            window.history.back();
            // router.push(`/game/${gameId}`, {});
          }}
          key={score}
        >
          {score}
        </Button>
      ))}
    </>
  );
};
