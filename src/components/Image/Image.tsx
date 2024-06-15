import type { Movement } from "../../models/Movement";

export interface ImageProps {
  move: Movement;
}

export const Image = ({ move }: ImageProps) => <div>{move}</div>;
