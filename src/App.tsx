import { Computer } from "./features/computer/Computer";
import { GameProvider } from "./context/GameContext";
import { Player } from "./features/player/Player";
import { Scoreboard } from "./features/scoreboard/Scoreboard";
import styles from "./App.module.scss";

export const App = () => (
  <main className={styles.main}>
    <GameProvider>
      <Player />
      <Scoreboard />
      <Computer />
    </GameProvider>
  </main>
);

