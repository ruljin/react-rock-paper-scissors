import { GameContext } from "../../context/GameContext";
import { Header } from "../../components/Header/Header";
import styles from "./Computer.module.scss";
import { useContext } from "react";

export const Computer = () => {
  const { computersMove } = useContext(GameContext);

  return (
    <div className={styles.computer}>
      <Header>Computer</Header>
      <div>{computersMove}</div>
    </div>
  );
};
