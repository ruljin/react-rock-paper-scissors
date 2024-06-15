import { GameContext } from "../../context/GameContext";
import { Header } from "../../components/Header/Header";
import { Image } from "../../components/Image/Image";
import styles from "./Computer.module.scss";
import { useContext } from "react";

export const Computer = () => {
  const { computersMove } = useContext(GameContext);

  return (
    <div className={styles.computer}>
      <Header>Computer</Header>
      <Image move={computersMove} />
      <div />
    </div>
  );
};
