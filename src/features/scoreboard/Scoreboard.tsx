import { Description } from "../../components/Description/Description";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./Scoreboard.module.scss";
import { useGameContext } from "../../hooks/useGameContext";

export const Scoreboard = () => {
  const { draws, wins, loses } = useGameContext();

  return (
    <div className={styles.scoreboard}>
      <Header>Scoreboard</Header>
      <Footer>
        <Description>
          Win: {wins} | Loss: {loses} | Draw: {draws}
        </Description>
      </Footer>
    </div>
  );
};
