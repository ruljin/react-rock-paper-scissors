import { type Movement, PAPER, ROCK, SCISSORS } from "../../models/Movement";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./Player.module.scss";
import { useGameContext } from "../../hooks/useGameContext";
import { useState } from "react";

export const Player = () => {
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

  return (
    <div className={styles.player}>
      <Header>Player</Header>
      <div>{playersMove}</div>
      <Footer>
        <Button onClick={handleRockButtonClick}>Rock</Button>
        <Button onClick={handlePaperButtonClick}>Paper</Button>
        <Button onClick={handleScissorsButtonClick}>Scissors</Button>
      </Footer>
    </div>
  );
};
