import { Header } from "../../components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import styles from "./Scoreboard.module.scss";

export const Scoreboard = () => (
  <div className={styles.scoreboard}>
    <Header>Scoreboard</Header>
    <Summary />
  </div>
);
