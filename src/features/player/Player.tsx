import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./Player.module.scss";

export const Player = () => {
  return (
    <div className={styles.player}>
      <Header>Player</Header>
      <div>Image</div>
      <Footer>
        <Button>Rock</Button>
        <Button>Paper</Button>
        <Button>Scissors</Button>
      </Footer>
    </div>
  );
};
