import { type Movement, PAPER, ROCK, SCISSORS } from "../../models/Movement";
import { useGameContext } from "../../hooks/useGameContext";
import { useState } from "react";

export const usePlayer = () => {
  const { handleMatch } = useGameContext();
  const [playersMove, setPlayersMove] = useState<Movement>(ROCK);

  const handleRockButtonClick = () => {
    setPlayersMove(ROCK);
    handleMatch(ROCK);
  };

  const handlePaperButtonClick = () => {
    setPlayersMove(PAPER);
    handleMatch(PAPER);
  };

  const handleScissorsButtonClick = () => {
    setPlayersMove(SCISSORS);
    handleMatch(SCISSORS);
  };

  return {
    playersMove,
    handleRockButtonClick,
    handlePaperButtonClick,
    handleScissorsButtonClick,
  };
};
