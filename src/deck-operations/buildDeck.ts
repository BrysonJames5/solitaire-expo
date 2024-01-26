import { Card } from "../types/card.types";
import { DeckNumbers } from "../types/deck.types";
import { SuitType } from "../types/solitaire.types";

export const Suites: { suit: SuitType; color: string }[] = [
  { suit: "CLUB", color: "BLACK" },
  { suit: "DIAMOND", color: "RED" },
  { suit: "HEART", color: "RED" },
  { suit: "SPADE", color: "BLACK" },
];

export const buildDeck = () => {
  const deck: Card[] = [];
  Suites.forEach((suit) => {
    DeckNumbers.forEach((card) => {
      console.log(
        `suite: ${suit.suit} - value: ${card.value} color: ${suit.color}`
      );
      deck.push({
        value: card.value,
        suit: suit.suit,
        color: suit.color,
        symbol: card.displayValue,
      });
    });
  });
  return deck;
};
