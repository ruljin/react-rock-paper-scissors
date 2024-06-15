import { DRAW, type Result, WIN } from "../models/Result";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { type Movement, ROCK } from "../models/Movement";
import { checkResult, drawMove } from "../utils/game";

const DEFAULT_VALUE = 0;
const INCREMENT_VALUE = 1;

interface GameContextValues {
  isRoundInProgress: boolean;
  computersMove: Movement;
  draws: number;
  wins: number;
  loses: number;
  setIsRoundInProgress: Dispatch<SetStateAction<boolean>>;
  handleMatch: (playersMove: Movement) => void;
}

export const GameContext = createContext<GameContextValues>({
  isRoundInProgress: false,
  computersMove: ROCK,
  draws: DEFAULT_VALUE,
  wins: DEFAULT_VALUE,
  loses: DEFAULT_VALUE,
  setIsRoundInProgress: () => {},
  handleMatch: () => {},
});

export interface GameProviderProps extends PropsWithChildren {}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [isRoundInProgress, setIsRoundInProgress] = useState(false);
  const [computersMove, setComputersMove] = useState<Movement>(ROCK);
  const [draws, setDraws] = useState(DEFAULT_VALUE);
  const [wins, setWins] = useState(DEFAULT_VALUE);
  const [loses, setLoses] = useState(DEFAULT_VALUE);

  const handleSummaryValues = (result: Result) => {
    if (result === DRAW) {
      const newDraws = draws + INCREMENT_VALUE;
      setDraws(newDraws);
      return;
    }

    if (result === WIN) {
      const newWins = wins + INCREMENT_VALUE;
      setWins(newWins);
      return;
    }

    const newLoses = loses + INCREMENT_VALUE;
    setLoses(newLoses);
  };

  const handleMatch = (playersMove: Movement) => {
    setIsRoundInProgress(true);

    const newComputersMove = drawMove();
    const result = checkResult(playersMove, newComputersMove);

    handleSummaryValues(result);
    setComputersMove(newComputersMove);
  };

  return (
    <GameContext.Provider
      value={{
        isRoundInProgress,
        setIsRoundInProgress,
        computersMove,
        draws,
        wins,
        loses,
        handleMatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
