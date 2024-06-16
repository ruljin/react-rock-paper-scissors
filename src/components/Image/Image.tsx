import { PAPER, ROCK, SCISSORS, type Movement } from "../../models/Movement";
import styles from "./Image.module.scss";

export interface ImageProps {
  move: Movement;
  isPlayer?: boolean;
}

export const Image = ({ move, isPlayer = false }: ImageProps) => {
  return (
    <div
      className={`
        ${styles.image}
        ${move === ROCK ? styles.image__rock : ""}
        ${move === ROCK && isPlayer ? styles["image__rock--player"] : ""}
        ${move === PAPER ? styles.image__paper : ""}
        ${move === PAPER && isPlayer ? styles["image__paper--player"] : ""}
        ${move === SCISSORS ? styles.image__scissors : ""}
        ${move === SCISSORS && !isPlayer ? styles["image__scissors--computer"] : ""}
        `}
    />
  );
};
