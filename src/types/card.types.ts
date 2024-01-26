import { CardDisplayType, CardValue, SuitType } from "./solitaire.types";

export type Card = {
  value: number;
  suit: SuitType;
  symbol: CardDisplayType;
  color: string;
};
