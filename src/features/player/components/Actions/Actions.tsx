import { Button } from "../../../../components/Button/Button";
import { Footer } from "../../../../components/Footer/Footer";
import styles from "./Actions.module.scss";

export interface ActionsProps {
  onRockButtonClick: () => void;
  onPaperButtonClick: () => void;
  onScissorsButtonClick: () => void;
}

export const Actions = ({
  onRockButtonClick,
  onPaperButtonClick,
  onScissorsButtonClick,
}: ActionsProps) => (
  <Footer className={styles.actions}>
    <Button onClick={onRockButtonClick}>Rock</Button>
    <Button onClick={onPaperButtonClick}>Paper</Button>
    <Button onClick={onScissorsButtonClick}>Scissors</Button>
  </Footer>
);
