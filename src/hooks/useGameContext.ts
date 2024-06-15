import { GameContext } from "../context/GameContext";
import { useContext } from "react";

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === null) {
    throw Error("Game context can be used only inside GameProvider");
  }

  return context;
};
