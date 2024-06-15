import { Actions } from "./components/Actions/Actions";
import { Header } from "../../components/Header/Header";
import { Image } from "../../components/Image/Image";
import styles from "./Player.module.scss";
import { usePlayer } from "./usePlayer";

export const Player = () => {
  const {
    playersMove,
    handleRockButtonClick,
    handlePaperButtonClick,
    handleScissorsButtonClick,
  } = usePlayer();

  return (
    <div className={styles.player}>
      <Header>Player</Header>
      <Image move={playersMove} />
      <Actions
        onRockButtonClick={handleRockButtonClick}
        onPaperButtonClick={handlePaperButtonClick}
        onScissorsButtonClick={handleScissorsButtonClick}
      />
    </div>
  );
};
