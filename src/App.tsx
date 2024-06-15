import { Computer } from "./features/computer/Computer";
import { Player } from "./features/player/Player";
import { Scoreboard } from "./features/scoreboard/Scoreboard";
import styles from "./App.module.scss";

export const App = () => (
  <main className={styles.main}>
    <Player />
    <Scoreboard />
    <Computer />
  </main>
);

