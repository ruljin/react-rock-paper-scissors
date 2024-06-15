import { Description } from "../../components/Description/Description";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./Scoreboard.module.scss";

export const Scoreboard = () => {
  return (
    <div className={styles.scoreboard}>
      <Header>Scoreboard</Header>
      <Footer>
        <Description>Win: 0 | Loss: 0 | Draw: 0</Description>
      </Footer>
    </div>
  );
};
