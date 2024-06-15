import { Description } from "../../../../components/Description/Description";
import { Footer } from "../../../../components/Footer/Footer";
import styles from "./Summary.module.scss";
import { useGameContext } from "../../../../hooks/useGameContext";

export const Summary = () => {
  const { draws, wins, loses } = useGameContext();

  return (
    <Footer className={styles.summary}>
      <Description>
        <div
          className={`${styles.summary__score} ${styles["summary__score--win"]}`}
        >
          Win: {wins}
        </div>
        <div className={styles.summary__score}>Loss: {loses}</div>
        <div
          className={`${styles.summary__score} ${styles["summary__score--draw"]}`}
        >
          Draw: {draws}
        </div>
      </Description>
    </Footer>
  );
};
