import { DRAW, LOSE, WIN } from "../models/Result";
import { type Movement, PAPER, ROCK, SCISSORS } from "../models/Movement";

const ROCK_NUMBER = 0;
const PAPER_NUMBER = 1;
const MAX_POSSIBLE_NUMBER = 3;

export const drawMove = () => {
  const randomizedNumber = Math.floor(Math.random() * MAX_POSSIBLE_NUMBER);

  if (randomizedNumber === ROCK_NUMBER) {
    return ROCK;
  }

  if (randomizedNumber === PAPER_NUMBER) {
    return PAPER;
  }

  return SCISSORS;
};

export const checkResult = (playersMove: Movement, computersMove: Movement) => {
  const isDraw = checkDraw(playersMove, computersMove);

  if (isDraw) {
    return DRAW;
  }

  return checkWin(playersMove, computersMove);
};

export const checkDraw = (playersMove: Movement, computersMove: Movement) => {
  const isDrawOnRock = playersMove === ROCK && computersMove === ROCK;
  const isDrawOnPaper = playersMove === PAPER && computersMove === PAPER;
  const isDrawOnScissors =
    playersMove === SCISSORS && computersMove === SCISSORS;

  return isDrawOnRock || isDrawOnPaper || isDrawOnScissors;
};

export const checkWin = (playersMove: Movement, computersMove: Movement) => {
  if (playersMove === ROCK) {
    return computersMove === PAPER ? LOSE : WIN;
  }

  if (playersMove === PAPER) {
    return computersMove === SCISSORS ? LOSE : WIN;
  }

  return computersMove === ROCK ? LOSE : WIN;
};
